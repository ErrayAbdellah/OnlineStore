import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutPage from './CheckoutPage ';

describe('CheckoutPage', () => {
  test('renders without crashing', () => {
    render(<CheckoutPage />);
    expect(screen.getByText(/Checkout/i)).toBeInTheDocument();
  });

  test('allows users to input shipping information', () => {
    render(<CheckoutPage />);

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText('Address'), {
      target: { value: '123 Main St' },
    });
    fireEvent.change(screen.getByLabelText('City'), {
      target: { value: 'Anytown' },
    });
    fireEvent.change(screen.getByLabelText('Postal Code'), {
      target: { value: '12345' },
    });
    fireEvent.change(screen.getByLabelText('Country'), {
      target: { value: 'USA' },
    });

    expect(screen.getByLabelText('Name')).toHaveValue('John Doe');
    expect(screen.getByLabelText('Address')).toHaveValue('123 Main St');
    expect(screen.getByLabelText('City')).toHaveValue('Anytown');
    expect(screen.getByLabelText('Postal Code')).toHaveValue('12345');
    expect(screen.getByLabelText('Country')).toHaveValue('USA');
  });

  test('calculates total price correctly', () => {
    const products = [
      { id: 1, name: 'Product 1', price: 10, quantity: 2 },
      { id: 2, name: 'Product 2', price: 20, quantity: 1 },
    ];
    render(<CheckoutPage />, { wrapper: MemoryRouter, initialEntries: ['/checkout'], initialIndex: 0 });
    
    // Pass products through location state
    history.push('/checkout', { products });

    expect(screen.getByText(/Total: \$50.00/i)).toBeInTheDocument();
  });
});
