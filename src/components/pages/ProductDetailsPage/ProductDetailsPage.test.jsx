import React from 'react';
import { act, render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetailsPage from './ProductDetailsPage';
import Products from '../../../products.json';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useParams: jest.fn()
}));

describe('ProductDetailsPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders product details when a valid product ID is provided', () => {
    const productId = Products[0].id;
    require('react-router-dom').useParams.mockReturnValue({ id: String(productId) });

    render(
      <MemoryRouter initialEntries={[`/product/${productId}`]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(Products[0].name)).toBeInTheDocument();
    expect(screen.getByText(Products[0].description)).toBeInTheDocument();
    expect(screen.getByText(Products[0].price)).toBeInTheDocument();
  });

  test('displays "Product not found" message when an invalid product ID is provided', () => {
    require('react-router-dom').useParams.mockReturnValue({ id: '9999' });

    render(
      <MemoryRouter initialEntries={['/product/9999']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Product not found')).toBeInTheDocument();
  });

  test('navigates to checkout page with correct product data when "Buy now" button is clicked', () => {
    const productId = Products[0].id;
    require('react-router-dom').useParams.mockReturnValue({ id: String(productId) });

    render(
      <MemoryRouter initialEntries={[`/product/${productId}`]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    act(() => {
      fireEvent.click(screen.getByText('Buy now'));
    });

    expect(mockNavigate).toHaveBeenCalledWith('/checkout', { state: { products: [Products[0]] } });
  });
});
