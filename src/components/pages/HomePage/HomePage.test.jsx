
import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import Products from '../../../products.json';

// Mock CartContext provider
const mockCartContextValue = {
  addToCart: jest.fn(), // Mock addToCart function
};

jest.mock('../../contexts/CartContext', () => ({
  ...jest.requireActual('../../contexts/CartContext'),
  CartContext: {
    Consumer: ({ children }) => children(mockCartContextValue),
  },
}));

describe('HomePage', () => {
  test('renders featured products correctly', () => {
    render(<HomePage />);

    // Check if the header is rendered
    expect(screen.getByText(/Welcome to OnlineStore/i)).toBeInTheDocument();
    expect(screen.getByText(/Your one-stop shop for all your needs/i)).toBeInTheDocument();

    // Check if the features section is rendered
    expect(screen.getByText(/Wide Range of Products/i)).toBeInTheDocument();
    expect(screen.getByText(/Best Prices/i)).toBeInTheDocument();
    expect(screen.getByText(/Fast Delivery/i)).toBeInTheDocument();

    // Check if the featured products section is rendered
    expect(screen.getByText(/Featured Products/i)).toBeInTheDocument();

    // Check if each product card is rendered with correct details
    Products.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
      expect(screen.getByText(product.price)).toBeInTheDocument();
    });
  });
});
