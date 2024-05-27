import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './CartPage.css';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate()
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };


  const handleProceedToCheckout = () => {
    navigate('/checkout', { state: { products: cart } });
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <div className="cart-item-quantity">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                  />
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
       <div className="cart-summary">
        <h2>Total: ${getTotal()}</h2>
        <button className="checkout-button" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
}
