import React from 'react';

const Cart = ({ cart, removeFromCart }) => (
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Cart</h1>
    {cart.length === 0 ? (
      <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
    ) : (
      cart.map((item, index) => (
        <div
          key={`${item.id}-${index}`} // Corrected key generation with proper template literal syntax
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
            <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
          </div>
          <button
            onClick={() => removeFromCart(index)} // Pass index to remove only this item
            className="text-red-500 hover:text-red-700 font-medium transition duration-300"
          >
            Remove
          </button>
        </div>
      ))
    )}
    <div className="mt-6 text-right">
      <h2 className="text-xl font-bold text-gray-800">
        Total: ₹
        {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </h2>
    </div>
  </div>
);

export default Cart;
