import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  const fallbackImage = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect width=%22200%22 height=%22200%22 fill=%22%23f5f5f5%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2214%22 fill=%22%23999%22%3EImage Not Available%3C/text%3E%3C/svg%3E';

  return (
    <div className="flex h-full flex-col px-1 sm:px-2">
      <Link
        to={`/product/${product.id}`}
        className="group mb-3 flex-shrink-0 sm:mb-6"
      >
        <div className="flex h-36 items-center justify-center overflow-hidden rounded-lg bg-gray-50 sm:h-64">
          <img
            src={imageError ? fallbackImage : product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="flex-grow flex flex-col">
        <Link
          to={`/product/${product.id}`}
          className="mb-2 flex min-h-[2.8rem] items-start text-center text-xl font-black leading-snug text-[#165c56] transition-colors hover:text-green-700 sm:mb-3 sm:min-h-[3.2rem] sm:text-left"
        >
          {product.name}
        </Link>

        {product.brand && (
          <p className="mb-2 text-center text-xs font-medium text-gray-500 sm:mb-3 sm:text-left sm:text-sm">
            {product.brand}
          </p>
        )}

        <div className="mb-3 sm:mb-6">
          <div className="flex items-center justify-center gap-2 sm:justify-start sm:gap-3">
            <span className="text-2xl font-black text-[#165c56] sm:text-3xl">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-[11px] font-medium text-gray-400 sm:text-sm">In Stock</span>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#2b7f79] bg-white px-2 py-2 text-base font-bold text-[#165c56] transition-colors duration-150 hover:bg-[#165c56] hover:text-white active:bg-[#114945] sm:px-4 sm:py-3 sm:text-lg"
        >
          <ShoppingCart size={14} strokeWidth={2.5} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
