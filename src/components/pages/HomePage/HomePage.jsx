import ProductCard from "../../ProductCard/ProductCard";
import './HomePage.css';
import Products from '../../../products.json'

export default function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to OnlineStore</h1>
        <p>Your one-stop shop for all your needs</p>
      </header>
      <section className="home-features">
        <div className="feature">
          <h2>Wide Range of Products</h2>
          <p>Explore our extensive catalog of products from various categories.</p>
        </div>
        <div className="feature">
          <h2>Best Prices</h2>
          <p>Get the best deals and discounts on your favorite products.</p>
        </div>
        <div className="feature">
          <h2>Fast Delivery</h2>
          <p>Enjoy fast and reliable delivery to your doorstep.</p>
        </div>
      </section>
      <section className="home-products">
        <h2>Featured Products</h2>
        <div className="products-container">
          {Products.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
