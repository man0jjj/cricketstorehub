// src/pages/Products.js
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

const Products = ({ cart, addToCart }) => {
  const [search, setSearch] = useState('');
  console.log({products});

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  // Log the filtered products to the console for debugging
  console.log({filteredProducts});
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
            filteredProducts.map(product => {
          const quantityInCart = cart.filter(item => item.id === product.id).length; // Calculate quantity in cart
          return (
            <ProductCard
              key={product.id}
              product={product}
              quantityInCart={quantityInCart}
              addToCart={addToCart}
            />
          );
        }))}
      </div>
    </div>
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;


