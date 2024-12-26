import React, { useState } from 'react';

const Checkout = () => {
  // State to handle form data, payment method, and confirmation message
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    couponCode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [orderPlaced, setOrderPlaced] = useState(false); // To handle order confirmation message

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle payment method change
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Payment Method:', paymentMethod);
    setOrderPlaced(true); // Display confirmation message
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Checkout</h1>

      {orderPlaced ? (
        <div className="text-center text-green-600 text-lg font-medium">
          <p>Your order has been placed successfully.</p>
          <p>A confirmation email has been sent to your registered email address.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Address Field */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Coupon Code Section */}
          <div>
            <label htmlFor="couponCode" className="block text-sm font-medium text-gray-700">Coupon Code</label>
            <input
              type="text"
              id="couponCode"
              name="couponCode"
              value={formData.couponCode}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your coupon code (if any)"
            />
          </div>

          {/* Payment Method Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Payment Method</label>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="creditCard"
                  checked={paymentMethod === 'creditCard'}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                <label htmlFor="creditCard" className="text-gray-700">Credit Card</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="debitCard"
                  name="paymentMethod"
                  value="debitCard"
                  checked={paymentMethod === 'debitCard'}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                <label htmlFor="debitCard" className="text-gray-700">Debit Card</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                <label htmlFor="paypal" className="text-gray-700">Cash on Delivery</label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;


