import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartContext } from '../../contexts/CartContext';
import CartPage from './CartPage';

// Mock cart data
const mockCart = [
  { id: 1, name: 'Product 1', price: 10, quantity: 2, image: 'product1.jpg' },
  { id: 2, name: 'Product 2', price: 20, quantity: 1, image: 'product2.jpg' }
];

describe('CartPage', () => {
  test('navigates to checkout page with correct products on "Proceed to Checkout" click', () => {
    // Mock navigate function
    const navigateMock = jest.fn();
    // Mock CartContext value
    const mockContextValue = {
      cart: mockCart,
      removeFromCart: jest.fn(),
      updateQuantity: jest.fn()
    };

    // Mock useNavigate hook
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(navigateMock);

    render(
      <CartContext.Provider value={mockContextValue}>
        <CartPage />
      </CartContext.Provider>
    );

    // Click on "Proceed to Checkout" button
    fireEvent.click(screen.getByText(/Proceed to Checkout/i));

    // Expect navigation to checkout page with correct products
    expect(navigateMock).toHaveBeenCalledWith('/checkout', { state: { products: mockCart } });
  });
});
