import React from 'react';

const ProductCard = ({ product, quantityInCart, addToCart }) => (
  <div className="border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white p-4 text-center flex flex-col items-center">
    <img
      src={product.image}
      alt={product.name}
      className="w-full max-h-48 object-scale-down rounded-lg mb-4"
    />
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h2>
    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
    <p className="font-semibold text-xl text-blue-600 mb-4">₹{product.price.toFixed(2)}</p>
    {quantityInCart > 0 && (
      <p className="mt-2 text-green-600">Added to Cart: {quantityInCart}</p>
    )}
    <button
      onClick={() => addToCart(product)}
      className={`mt-4 px-4 py-2 rounded w-full ${
        quantityInCart > 0 ? 'bg-gray-400 text-white' : 'bg-yellow-500 text-black'
      }`}
    >
      {quantityInCart > 0 ? 'Add More' : 'Add to Cart'}
    </button>
  </div>
);

export default ProductCard;







