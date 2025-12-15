import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingCart, Star, Eye } from 'lucide-react';
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

  const badgeClass = product.prescription ? 'badge-prescription' : 'badge-otc';
  const badgeText = product.prescription ? 'Prescription' : 'OTC';

  return (
    <Link 
      to={`/product/${product.id}`}
      className="product-card group block bg-white rounded-xl shadow-lg overflow-hidden card-hover relative"
    >
      <div className="relative">
        <div className="h-48 w-full bg-gray-100 overflow-hidden">
             <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
        </div>
       
        {/* Badges */}
        <div className="absolute top-4 left-4">
            <span className={`${badgeClass} text-white text-xs font-bold px-2 py-1 rounded shadow-sm`}>
                {badgeText}
            </span>
        </div>
        <div className="absolute top-4 right-4 flex gap-1">
             {/* Simple visual rating */}
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
            ))}
        </div>

        {/* Quick View Button Overlay */}
        <button className="absolute bottom-4 right-4 bg-white/90 text-gray-900 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2 shadow-sm">
            <Eye size={14} /> Quick View
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors truncate">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{product.brand}</p>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
            {product.description}
        </p>
        
        <div className="flex justify-between items-center mt-4">
            <div className="flex flex-col">
                <span className="text-2xl font-bold text-cyan-600">${product.price.toFixed(2)}</span>
                <span className="text-xs text-gray-400">In Stock</span>
            </div>
          <button
            onClick={handleAddToCart}
            className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2 z-10"
          >
            <ShoppingCart size={18} /> Add
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;