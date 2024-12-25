// src/pages/Products.js
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

const Products = ({ cart, addToCart }) => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('priceLowToHigh'); // Default sort by price low to high

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  // Sort products based on the selected option
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'priceLowToHigh') return a.price - b.price;
    if (sortBy === 'priceHighToLow') return b.price - a.price;
    return 0;
  });

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      
      {/* Sort Filter */}
      <select
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
        className="border p-2 mb-4"
      >
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
      </select>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          sortedProducts.map(product => {
            const quantityInCart = cart.filter(item => item.id === product.id).length; // Calculate quantity in cart
            return (
              <ProductCard
                key={product.id}
                product={product}
                quantityInCart={quantityInCart}
                addToCart={addToCart}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;






