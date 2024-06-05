import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductsPage from './ProductsPage';

// Mock the SearchBar component
jest.mock('../../SearchBar/SearchBar', () => ({ searchQuery, setSearchQuery }) => (
  <input
    data-testid="search-bar"
    value={searchQuery}
    onChange={e => setSearchQuery(e.target.value)}
  />
));

// Mock the ProductCard component
jest.mock('../../ProductCard/ProductCard', () => ({ name, description, image, price }) => (
  <div data-testid="product-card">
    <h2>{name}</h2>
    <p>{description}</p>
    <img src={image} alt={name} />
    <p>{price}</p>
  </div>
));

describe('ProductsPage', () => {
  test('renders without crashing', () => {
    render(<ProductsPage />);
  });

  test('renders the header', () => {
    render(<ProductsPage />);
    expect(screen.getByText('Our Products')).toBeInTheDocument();
    expect(screen.getByText('Explore our wide range of products')).toBeInTheDocument();
  });

  test('renders search bar', () => {
    render(<ProductsPage />);
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
  });

  test('renders product cards based on search query', () => {
    render(<ProductsPage />);

    const searchBar = screen.getByTestId('search-bar');
    fireEvent.change(searchBar, { target: { value: 'Product' } });
    expect(screen.getAllByTestId('product-card').length).toBeGreaterThan(0);

    fireEvent.change(searchBar, { target: { value: 'Non-existent product' } });
    expect(screen.queryByTestId('product-card')).not.toBeInTheDocument();
    expect(screen.getByText('No products found')).toBeInTheDocument();
  });
});
