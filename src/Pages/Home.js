import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div
    className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
    style={{ backgroundImage: "url('https://i.postimg.cc/nzybz5rr/bad8311d-3e59-4403-9dea-9c49508d56a7.webp')" }}
  >
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-center p-8 rounded-lg shadow-xl max-w-3xl">
      <h1 className="text-4xl font-bold text-white mb-4">
        Step into Cricket Dunia — Your One-Stop Cricket Shop!
      </h1>
      <p className="text-lg text-gray-100 italic">
        Unleash Your Cricket Passion with Our Premium Gear!
      </p>
      <div className="mt-6">
        <Link
          to="/products"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition duration-300"
        >
          Shop Now
        </Link>
      </div>
    </div>

    {/* Features Section */}
    <div className="mt-16 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      <div className="flex items-center space-x-4 bg-white p-6 shadow-lg rounded-lg">
        <img
          src="https://t4.ftcdn.net/jpg/00/98/48/35/360_F_98483558_NdOgudtcKCXsNk7QeVsJtklqwxuoFGbS.jpg"
          alt="Free Shipping"
          className="w-12 h-12"
        />
        <p className="text-lg font-medium">Free Shipping on Orders Over ₹1500</p>
      </div>
      <div className="flex items-center space-x-4 bg-white p-6 shadow-lg rounded-lg">
        <img
          src="https://t3.ftcdn.net/jpg/03/54/26/10/360_F_354261018_RD5YEbufu7Yjck3SNiRC6yfJLZoxIegZ.jpg"
          alt="Exclusive Discounts"
          className="w-12 h-12"
        />
        <p className="text-lg font-medium">Exclusive Discounts for New Year upto 40%</p>
      </div>
      <div className="flex items-center space-x-4 bg-white p-6 shadow-lg rounded-lg">
        <img
          src="https://img.tatacliq.com/images/i16/1348Wx2000H/MP000000021534818_1348Wx2000H_202403131849131.jpeg"
          alt="Premium Quality"
          className="w-12 h-12"
        />
        <p className="text-lg font-medium">Premium Quality Cricket Gear</p>
      </div>
    </div>
  </div>
);

export default Home;



