import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('azarFundacion_cart');
            if (savedCart) {
                setCartItems(JSON.parse(savedCart));
            }
        } catch (error) {
            console.error('Error loading cart from localStorage:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!isLoading) {
            try {
                localStorage.setItem('azarFundacion_cart', JSON.stringify(cartItems));
            } catch (error) {
                console.error('Error saving cart to localStorage:', error);
            }
        }
    }, [cartItems, isLoading]);

    const addToCart = (product, quantity) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
        
        if (existingItemIndex >= 0) {
            const updatedItems = [...cartItems];
            updatedItems[existingItemIndex].quantity += quantity;
            setCartItems(updatedItems);
        } else {
            const newItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                cover: product.cover,
                quantity: quantity
            };
            setCartItems([...cartItems, newItem]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const updateCartItem = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }

        const existingItemIndex = cartItems.findIndex(item => item.id === productId);
        
        if (existingItemIndex >= 0) {
            const updatedItems = [...cartItems];
            updatedItems[existingItemIndex].quantity = newQuantity;
            setCartItems(updatedItems);
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
            return total + (price * item.quantity);
        }, 0).toFixed(2);
    };

    const value = {
        cartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
        isLoading
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};