import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-lg text-gray-600">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        cart.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex justify-between items-center border-b py-4 hover:bg-gray-50 transition duration-300"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="text-red-500 hover:text-red-700 font-medium transition duration-300"
            >
              Remove
            </button>
          </div>
        ))
      )}

      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <h2 className="text-xl font-bold text-gray-800">Total:</h2>
        <p className="text-2xl font-bold text-gray-800">
          ₹{cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </p>
      </div>

      {cart.length > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/checkout')}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;


