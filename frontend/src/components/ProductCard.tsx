import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <div className="flex flex-col h-full px-2">
      <Link
        to={`/product/${product.id}`}
        className="mb-6 flex-shrink-0 group"
      >
        <div className="h-64 flex items-center justify-center overflow-hidden bg-transparent">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="flex-grow flex flex-col">
        <Link
          to={`/product/${product.id}`}
          className="text-xl font-black text-[#165c56] hover:text-green-700 transition-colors mb-3 leading-snug min-h-[3.2rem] flex items-start"
        >
          {product.name}
        </Link>

        {product.brand && (
          <p className="text-sm text-gray-500 mb-3 font-medium">
            {product.brand}
          </p>
        )}

        {product.description && (
          <p className="text-sm text-gray-600 mb-5 line-clamp-3 leading-7">
            {product.description}
          </p>
        )}

        <div className="mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-[#165c56]">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-400 font-medium">In Stock</span>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full py-3 px-4 border border-[#2b7f79] bg-white text-[#165c56] font-bold text-lg rounded-xl hover:bg-[#165c56] hover:text-white active:bg-[#114945] transition-colors duration-150 flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} strokeWidth={2.5} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
