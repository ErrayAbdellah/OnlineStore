import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CheckoutPage.css';

export default function CheckoutPage() {
  const location = useLocation();
  const { products } = location.state || { products: [] };

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', products, shippingInfo);
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price * (product.quantity || 1), 0).toFixed(2);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-container">
        <div className="cart-summary">
          <h2>Your Order</h2>
          {products.map(product => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{product.name}</h3>
                <p className="cart-item-price">${product.price.toFixed(2)}</p>
                <p className="cart-item-quantity">Quantity: {product.quantity || 1}</p>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
          </div>
        </div>
        <div className="shipping-info">
          <h2>Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={shippingInfo.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={shippingInfo.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={shippingInfo.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={shippingInfo.postalCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={shippingInfo.country}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  );
}
