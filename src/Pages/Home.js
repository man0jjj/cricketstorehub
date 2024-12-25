import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold text-center text-white bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-xl">
    Step into Cricket Dunia — Your One-Stop Cricket Shop!
    </h1>
    <p className="text-lg text-gray-700 text-center mt-4 mb-8 italic">
    Unleash Your Cricket Passion with Our Premium Gear!
    </p>
    <div className="flex justify-center space-x-6">
      <Link
        to="/products"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Shop Now
      </Link>
    </div>
  </div>
);

export default Home;


