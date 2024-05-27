import { useState } from 'react';
import './ProductsPage.css';
import SearchBar from '../../SearchBar/SearchBar';
import ProductCard from '../../ProductCard/ProductCard';
import Products from '../../../products.json'

export default function ProductsPage({changeInCart}) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = Products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="products-page">
      <header className="products-header">
        <h1>Our Products</h1>
        <p>Explore our wide range of products</p>
      </header>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <section className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              inCart={product.inCart}
              price={product.price}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </section>
    </div>
  );
}
