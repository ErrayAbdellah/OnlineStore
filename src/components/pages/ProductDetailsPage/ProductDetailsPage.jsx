import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetailsPage.css';
import Products from '../../../products.json'


export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = Products.find(product => product.id === parseInt(id));
  const navigate = useNavigate()
  if (!product) {
    return <p>Product not found</p>;
  }
  if (!product) {
    return <p>Product not found</p>;
  }

  const handleProceedToCheckout = () => {
    navigate('/checkout', { state: { products: [product] } });
  };

  return (
    <div className="product-details-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
      </div>
      <br/>
      <div>
        <button onClick={handleProceedToCheckout} className="product-button">
          Buy now
        </button>
      </div>
    </div>
  );
}
