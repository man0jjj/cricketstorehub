import React from 'react';

const Cart = ({ cart, removeFromCart }) => (
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Cart</h1>
    
    {cart.length === 0 ? (
      <div className="text-center text-lg text-gray-600">
        <p>Your cart is empty.</p>
      </div>
    ) : (
      cart.map((item, index) => (
        <div
          key={`${item.id}-${index}`} // Corrected key generation with proper template literal syntax
          className="flex justify-between items-center border-b py-4 hover:bg-gray-50 transition duration-300"
        >
          {/* Product Image */}
          <div className="flex items-center space-x-4">
            <img
              src={item.image} // Assuming the item has an 'image' field
              alt={item.title}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
              <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
            </div>
          </div>

          {/* Remove Item Button */}
          <button
            onClick={() => removeFromCart(index)} // Pass index to remove only this item
            className="text-red-500 hover:text-red-700 font-medium transition duration-300"
          >
            Remove
          </button>
        </div>
      ))
    )}

    {/* Total Price Section */}
    <div className="mt-6 flex justify-between items-center border-t pt-4">
      <h2 className="text-xl font-bold text-gray-800">Total:</h2>
      <p className="text-2xl font-bold text-gray-800">
        ₹{cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </p>
    </div>

    {/* Checkout Button */}
    {cart.length > 0 && (
      <div className="mt-6 text-center">
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Proceed to Checkout
        </button>
      </div>
    )}
  </div>
);

export default Cart;

