import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="p-4 bg-black text-white shadow-md">
    <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
      <Link
        to="/"
        className="font-bold text-lg text-white hover:text-gray-200 underline transition duration-300"
      >
        Cricket Dunia Store
      </Link>
      <div className="flex space-x-6">
        <Link
          to="/products"
          className="text-white font-medium hover:text-gray-200 transition duration-300"
        >
          Products
        </Link>
        <Link
          to="/cart"
          className="text-white font-medium hover:text-gray-200 transition duration-300"
        >
          Cart
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
