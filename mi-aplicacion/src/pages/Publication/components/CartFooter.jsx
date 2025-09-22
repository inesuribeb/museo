import './CartFooter.css';

function CartFooter({ subtotalPrice, shippingCost, totalPrice, onViewCart, onCheckout, t, hasShippingSelected }) {
    return (
        <div className="cart-footer">
            <div className="cart-footer-breakdown">
                <div className="cart-footer-row">
                    <span className="cart-footer-label">
                        {t('subtotal') || 'Subtotal:'}
                    </span>
                    <span className="cart-footer-price">€{subtotalPrice}</span>
                </div>
                
                {shippingCost > 0 && (
                    <div className="cart-footer-row">
                        <span className="cart-footer-label">
                            {t('shipping') || 'Envío:'}
                        </span>
                        <span className="cart-footer-price">€{shippingCost.toFixed(2)}</span>
                    </div>
                )}
                
                <div className="cart-footer-row cart-footer-total">
                    <span className="cart-footer-total-label">
                        {t('total') || 'Total:'}
                    </span>
                    <span className="cart-footer-total-price">€{totalPrice}</span>
                </div>
            </div>

            <div className="cart-footer-actions">
                <button
                    className="cart-footer-btn cart-footer-btn-view"
                    onClick={onViewCart}
                >
                    {t('viewCart')}
                </button>
                <button
                    className="cart-footer-btn cart-footer-btn-checkout"
                    onClick={onCheckout}
                    disabled={!hasShippingSelected}
                >
                    {t('checkout')}
                </button>
                {/* <button
                    className="cart-footer-btn cart-footer-btn-checkout"
                    disabled={true}
                >
                    {t('soon')}
                </button> */}
            </div>
        </div>
    );
}

export default CartFooter;