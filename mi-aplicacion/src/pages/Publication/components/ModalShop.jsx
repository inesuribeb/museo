
// import { useEffect, useState } from 'react';
// import { useLanguage } from '../../../contexts/LanguageContext';
// import CartHeader from './CartHeader';
// import CartItemsList from './CartItemsList';
// import ShippingZone from './ShippingZone';
// import CartFooter from './CartFooter';
// import './ModalShop.css';

// function ModalShop({ isOpen, onClose, cartItems = [], onUpdateCart, onRemoveItem }) {
//     const { t } = useLanguage();
//     const [shippingCost, setShippingCost] = useState(0);

//     useEffect(() => {
//         const handleEscape = (e) => {
//             if (e.key === 'Escape') {
//                 onClose();
//             }
//         };

//         if (isOpen) {
//             document.addEventListener('keydown', handleEscape);
//             document.body.style.overflow = 'hidden';
//         }

//         return () => {
//             document.removeEventListener('keydown', handleEscape);
//             document.body.style.overflow = 'auto';
//         };
//     }, [isOpen, onClose]);

//     useEffect(() => {
//         if (!isOpen) {
//             setShippingCost(0);
//         }
//     }, [isOpen]);

//     if (!isOpen) return null;

//     const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
//     const subtotalPrice = cartItems.reduce((total, item) => {
//         const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
//         return total + (price * item.quantity);
//     }, 0);

//     const totalPrice = (subtotalPrice + shippingCost).toFixed(2);

//     const handleBackdropClick = (e) => {
//         if (e.target === e.currentTarget) {
//             onClose();
//         }
//     };

//     const handleViewCart = () => {
//         console.log('Ver cesta completa');
//         onClose();
//     };

//     const handleCheckout = () => {
//         console.log('Iniciar proceso de checkout');
//         console.log('Subtotal:', subtotalPrice.toFixed(2));
//         console.log('Shipping:', shippingCost);
//         console.log('Total:', totalPrice);
//         onClose();
//     };

//     const handleShippingChange = (cost) => {
//         setShippingCost(cost);
//     };

//     return (
//         <div className="modal-shop-overlay" onClick={handleBackdropClick}>
//             <div className="modal-shop-sidebar">
//                 <CartHeader
//                     totalItems={totalItems}
//                     onClose={onClose}
//                     t={t}
//                 />


//                 <div className="cart-scrollable-content">
//                     <CartItemsList
//                         cartItems={cartItems}
//                         onUpdateCart={onUpdateCart}
//                         onRemoveItem={onRemoveItem}
//                         t={t}
//                     />

//                     {cartItems.length > 0 && (
//                         <ShippingZone onShippingChange={handleShippingChange} />
//                     )}
//                 </div>

//                 {cartItems.length > 0 && (
//                     <CartFooter
//                         subtotalPrice={subtotalPrice.toFixed(2)}
//                         shippingCost={shippingCost}
//                         totalPrice={totalPrice}
//                         onViewCart={handleViewCart}
//                         onCheckout={handleCheckout}
//                         t={t}
//                     />
//                 )}
//             </div>
//         </div>
//     );
// }

// export default ModalShop;

import { useEffect, useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import CartHeader from './CartHeader';
import CartItemsList from './CartItemsList';
import ShippingZone from './ShippingZone';
import CartFooter from './CartFooter';
import './ModalShop.css';

function ModalShop({ isOpen, onClose, cartItems = [], onUpdateCart, onRemoveItem }) {
    const { t } = useLanguage();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
    const [shippingCost, setShippingCost] = useState(0);
    const [shippingRegion, setShippingRegion] = useState('');
    const [hasShippingSelected, setHasShippingSelected] = useState(false);
    const [isProcessingCheckout, setIsProcessingCheckout] = useState(false);

    // Mapeo de costos a regiones
    const SHIPPING_REGIONS = {
        8: 'spain',
        15: 'europe', 
        25: 'international'
    };

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    // Reset shipping cost when modal closes
    useEffect(() => {
        if (!isOpen) {
            setShippingCost(0);
            setShippingRegion('');
            setHasShippingSelected(false);
            setIsProcessingCheckout(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    // Calcular totales
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const subtotalPrice = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
        return total + (price * item.quantity);
    }, 0);

    const totalPrice = (subtotalPrice + shippingCost).toFixed(2);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleViewCart = () => {
        console.log('Ver cesta completa');
        onClose();
    };

    const handleCheckout = async () => {
        if (!hasShippingSelected || !shippingRegion) {
            console.error('No shipping option selected');
            return;
        }

        if (isProcessingCheckout) {
            return; // Evitar múltiples clicks
        }

        setIsProcessingCheckout(true);
      
        try {
            const items = cartItems.map(item => ({
                id: item.id,
                currency: 'eur',
                quantity: item.quantity,
            }));

            const requestBody = {
                items: items,
                shipping: {
                    region: shippingRegion
                }
            };

            console.log('Sending checkout request:', requestBody);

            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/create-checkout-session`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || `HTTP error! status: ${response.status}`);
            }

            if (data.success && data.checkout_url) {
                console.log('Checkout session created successfully:', {
                    sessionId: data.session_id,
                    shipping: data.shipping
                });
                // Redirigir a Stripe Checkout
                window.location.href = data.checkout_url;
            } else {
                throw new Error(data.error || 'Unknown error occurred');
            }
        } catch (error) {
            console.error('Error al procesar checkout:', error);
            alert(`Error al procesar el pago: ${error.message}`);
        } finally {
            setIsProcessingCheckout(false);
        }
    };

    const handleShippingChange = (cost) => {
        setShippingCost(cost);
        const region = SHIPPING_REGIONS[cost];
        setShippingRegion(region || '');
        setHasShippingSelected(cost > 0 && region);
        
        console.log('Shipping changed:', {
            cost,
            region,
            hasValidRegion: !!region
        });
    };

    return (
        <div className="modal-shop-overlay" onClick={handleBackdropClick}>
            <div className="modal-shop-sidebar">
                <CartHeader
                    totalItems={totalItems}
                    onClose={onClose}
                    t={t}
                />

                <div className="cart-scrollable-content">
                    <CartItemsList
                        cartItems={cartItems}
                        onUpdateCart={onUpdateCart}
                        onRemoveItem={onRemoveItem}
                        t={t}
                    />

                    {cartItems.length > 0 && (
                        <ShippingZone onShippingChange={handleShippingChange} />
                    )}
                </div>

                {cartItems.length > 0 && (
                    <CartFooter
                        subtotalPrice={subtotalPrice.toFixed(2)}
                        shippingCost={shippingCost}
                        totalPrice={totalPrice}
                        hasShippingSelected={hasShippingSelected}
                        isProcessingCheckout={isProcessingCheckout}
                        onViewCart={handleViewCart}
                        onCheckout={handleCheckout}
                        t={t}
                    />
                )}
            </div>
        </div>
    );
}

export default ModalShop;