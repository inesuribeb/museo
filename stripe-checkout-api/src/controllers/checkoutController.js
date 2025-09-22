import stripe from "../utils/stripe.js";
import { promises as fs } from "fs";
import { checkProductExists, updateProduct, getProduct } from "../utils/helpers.js";

// Configuración de costos de envío (en centavos)
const SHIPPING_COSTS = {
  spain: 800,        // 8€
  europe: 1500,      // 15€  
  international: 2500 // 25€
};

const VALID_SHIPPING_REGIONS = Object.keys(SHIPPING_COSTS);

/**
 * Retrieves product information based on the product ID provided in the request parameters.
 * @async
 * @function getProductInfo
 * @param {import('express').Request} req - Express request object containing the product ID in params.
 * @param {import('express').Response} res - Express response object used to send the result.
 * @returns {Promise<void>} Sends a JSON response with product data or error information.
 */
export const getProductInfo = async (req, res) => {
  try {
    const productId = req.params.id;

    const productCheck = await checkProductExists(productId);

    if (!productCheck.exists) {
      return res.status(404).json({
        error: "Product not found",
        details: `Product file ${productId}.json does not exist`,
        debugInfo: productCheck.error,
      });
    }

    const productData = await fs.readFile(productCheck.path, "utf-8");
    const product = JSON.parse(productData);

    const productWithAvailability = {
      ...product,
      available: product.stock > 0,
      outOfStock: product.stock <= 0,
      inStock: product.stock > 0,
    };

    res.json({
      success: true,
      data: productWithAvailability,
    });
  } catch (error) {
    console.error("Error loading product info:", error);
    return res.status(500).json({
      error: "Error loading product info",
    });
  }
};

/**
 * Creates a Stripe Checkout Session for a product purchase.
 * @async
 * @function createCheckoutSession
 * @param {import('express').Request} req - Express request object. Expects `items` and `shipping` in body.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>} Responds with JSON containing checkout session URL on success; error message on failure.
 */
export const createCheckoutSession = async (req, res) => {
  try {
    const { items, shipping } = req.body;

    // Validar que items exista y no esté vacío
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        error: "Items are required and must be a non-empty array",
      });
    }

    // Validar shipping
    if (!shipping || !shipping.region) {
      return res.status(400).json({
        error: "Shipping region is required",
        validRegions: VALID_SHIPPING_REGIONS,
      });
    }

    if (!VALID_SHIPPING_REGIONS.includes(shipping.region)) {
      return res.status(400).json({
        error: "Invalid shipping region",
        providedRegion: shipping.region,
        validRegions: VALID_SHIPPING_REGIONS,
      });
    }

    // Obtener el costo de envío desde la configuración del backend
    const shippingCost = SHIPPING_COSTS[shipping.region];

    console.log('Processing checkout for items:', items);
    console.log('Shipping region:', shipping.region, 'Cost:', shippingCost);

    // Crear line items para los productos
    const line_items = await Promise.all(items.map(async (item) => {
      const productResult = await getProduct(item.id);
      if (!productResult.success) {
        throw new Error(`Product with ID ${item.id} not found`);
      }
      const product = productResult.product;
      console.log(`Product price for ${product.name}: ${product.amount}`);
      return {
        price_data: {
          currency: item.currency || 'eur',
          product_data: {
            name: product.name
          },
          unit_amount: product.amount, 
        },
        quantity: item.quantity,
      };
    }));
    
    // Añadir el costo de envío como line item
    line_items.push({
      price_data: {
        currency: 'eur',
        product_data: {
          name: `Shipping - ${shipping.region.charAt(0).toUpperCase() + shipping.region.slice(1)}`,
        },
        unit_amount: shippingCost,
      },
      quantity: 1,
    });

    // Crear sesión de Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: line_items,
      success_url: `${process.env.SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: process.env.CANCEL_URL,
      metadata: {
        items: JSON.stringify(items),
        shippingCost: shippingCost.toString(),
        shippingRegion: shipping.region,
      },
      customer_creation: "always",
      invoice_creation: {
        enabled: true,
      },
    });

    res.json({
      success: true,
      checkout_url: session.url,
      session_id: session.id,
      items: items,
      shipping: {
        region: shipping.region,
        cost: shippingCost,
        costInEuros: shippingCost / 100
      },
    });
    
    console.log('Checkout session created:', session.id);
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return res.status(500).json({
      error: "Error creating checkout session",
      details: error.message,
    });
  }
};

async function getProductById(productId) {
  try {
    const productData = await fs.readFile(`/Users/inesuribebarron/Desktop/Activos/AzarFundacion/stripe-checkout-api/src/products/${productId}.json`, 'utf-8');
    return JSON.parse(productData);
  } catch (error) {
    console.error(`Error loading product with ID ${productId}:`, error);
    return null;
  }
}

/**
 * Retrieves the status of a Stripe Checkout Session.
 * @async
 * @function getCheckoutStatus
 * @param {import('express').Request} req - Express request object, expects `session_id` in params.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>} Returns a JSON response with checkout session details or an error message.
 */
export const getCheckoutStatus = async (req, res) => {
  try {
    const { session_id } = req.params;

    if (!session_id) {
      return res.status(400).json({
        error: "session_id parameter is required",
      });
    }

    // Recuperar la sesión desde Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["payment_intent"],
    });

    res.json({
      success: true,
      session: {
        id: session.id,
        payment_status: session.payment_status,
        status: session.status,
        amount_total: session.amount_total,
        currency: session.currency,
        customer_email: session.customer_details?.email,
        customer_name: session.customer_details?.name,
        payment_intent: session.payment_intent,
        metadata: session.metadata,
      },
    });
  } catch (error) {
    console.error("Error retrieving checkout status:", error);
    return res.status(500).json({
      error: "Error retrieving checkout status",
    });
  }
};

/**
 * Webhook handler for Stripe events
 * @async
 * @function handleWebhook
 * @param {import('express').Request} req - Express request object with raw body
 * @param {import('express').Response} res - Express response object
 * @returns {Promise<void>} Responds with acknowledgment or error
 */
export const handleWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Manejar el evento
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      console.log("✅ Checkout completed:", session.id);

      // Actualizar stock de productos
      try {
        const items = JSON.parse(session.metadata.items);
        
        // Procesar cada item del carrito
        for (const item of items) {
          const productUpdateResult = await updateProduct(
            item.id,
            async (currentProduct) => {
              currentProduct.stock -= item.quantity;
              return currentProduct;
            }
          );
          
          if (!productUpdateResult.success) {
            console.error(
              `Error updating product stock for ${item.id}:`,
              productUpdateResult.error
            );
          } else {
            console.log(`Product ${item.id} stock updated successfully. Quantity reduced: ${item.quantity}`);
          }
        }
        
        console.log(`Shipping applied: ${session.metadata.shippingRegion} - Cost: ${session.metadata.shippingCost} cents`);
        
      } catch (parseError) {
        console.error("Error parsing items from session metadata:", parseError);
      }

      // Aquí puedes agregar lógica adicional para:
      // - Generar factura
      // - Enviar email de confirmación
      // - Crear cuenta de usuario
      // - Etc.

      break;
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      console.log("💳 Payment successful:", paymentIntent.id);
      break;
    case "payment_intent.payment_failed":
      const failedPayment = event.data.object;
      console.log("❌ Payment failed:", failedPayment.id);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
};

export default {
  getProductInfo,
  createCheckoutSession,
  getCheckoutStatus,
  handleWebhook,
};