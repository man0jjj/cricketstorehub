// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = product => setCart([...cart, product]);
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index)); // Remove only the item at the given index
  };

  return (
    <Router>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} cart={cart}/>} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


