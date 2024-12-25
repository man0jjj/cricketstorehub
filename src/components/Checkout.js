import React from 'react';

const Checkout = () => (
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Checkout</h1>
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          id="address"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
      >
        Place Order
      </button>
    </form>
  </div>
);

export default Checkout;

