import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/pages/HomePage/HomePage';
import ProductsPage from './components/pages/ProductsPage/ProductsPage';
import CartPage from './components/pages/CartPage/CartPage';
import CheckoutPage from './components/pages/CheckoutPage/CheckoutPage ';
import ProductDetailsPage from './components/pages/ProductDetailsPage/ProductDetailsPage';
import { CartProvider } from './components/contexts/CartContext';

const products = [
  {
    "id": 1,
    "name": "Product 1",
    "price": 19.99,
    "quantity": 10,
    "image": "https://www.coca-cola.com/content/dam/onexp/us/en/brands/smartwater/flavor/en_glaceau-smartwater_prod_cucumber%20lime_750x750_v1.jpg/width1338.jpg",
    "description": "This is a great product.",
    
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 29.99,
    "quantity": 20,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_eNFhprEaxtXZy8YS6FntaPyWzAzdXqkXmY_40_Q6rw&s",
    "description": "This is another great product.",
    
  },
  {
    "id": 3,
    "name": "Product 3",
    "price": 39.99,
    "quantity": 15,
    "image": "https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_4_0_7_1_700x700_AAAAA47407_1.jpg",
    "description": "This product is also great.",
    
  },
  {
    "id": 4,
    "name": "Product 4",
    "price": 49.99,
    "quantity": 5,
    "image": "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1_copy_9.png",
    "description": "This product is fantastic.",
    
  },
  {
    "id": 5,
    "name": "Product 5",
    "price": 59.99,
    "quantity": 8,
    "image": "https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1_copy_6.png",
    "description": "This is a must-have product.",
    
  }
]

function App() {
  return (
    <CartProvider products={products}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  </CartProvider>
  );  
}

export default App;
