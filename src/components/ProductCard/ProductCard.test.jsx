import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

// Mock CartContext
const mockAddToCart = jest.fn();
const mockCartContextValue = {
  addToCart: mockAddToCart,
};
jest.mock('../contexts/CartContext', () => ({
  ...jest.requireActual('../contexts/CartContext'),
  CartContext: {
    Consumer: ({ children }) =>
      children(mockCartContextValue),
  },
}));

const mockProduct = {
  id: 1,
  name: 'Test Product',
  description: 'Test Description',
  image: 'test-image.jpg',
  inCart: false,
  price: '$10',
};

describe('ProductCard', () => {
  test('renders product details correctly', () => {
    render(
      <ProductCard
        id={mockProduct.id}
        name={mockProduct.name}
        description={mockProduct.description}
        image={mockProduct.image}
        inCart={mockProduct.inCart}
        price={mockProduct.price}
      />
    );

    // Check if product details are rendered correctly
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.price)).toBeInTheDocument();
  });

  test('calls addToCart function when "Add to Cart" button is clicked', () => {
    render(
      <ProductCard
        id={mockProduct.id}
        name={mockProduct.name}
        description={mockProduct.description}
        image={mockProduct.image}
        inCart={mockProduct.inCart}
        price={mockProduct.price}
      />
    );

    fireEvent.click(screen.getByText('Add to Cart'));

    // Assert that addToCart function is called
    expect(mockAddToCart).toHaveBeenCalledWith({
      id: mockProduct.id,
      name: mockProduct.name,
      description: mockProduct.description,
      image: mockProduct.image,
      inCart: mockProduct.inCart,
      price: mockProduct.price,
    });
  });
});
