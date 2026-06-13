import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import fenbendazolePowder from '../assets/images/fenbendazole-powder.jpg';
import usaMedicalTrio from '../assets/images/usa-medical-trio.webp';
import methylprednisoloneImage from '../assets/images/iverheal-6.jpg';
import ivermectinPaste from '../assets/images/ivermectin-paste.jpg';

interface Product {
  id: string;
  name: string;
  originalPrice?: number;
  price: number;
  image: string;
}

const ProductShowcase: React.FC = () => {
  const products: Product[] = [
    {
      id: 'usa-trio',
      name: 'Medical Emergency Kit',
      originalPrice: 260,
      price: 210,
      image: usaMedicalTrio
    },
    {
      id: 'fenben-powder',
      name: 'Fenbendazole 1000 mg',
      originalPrice: 280,
      price: 250,
      image: fenbendazolePowder
    },
    {
      id: 'iverheal',
      name: 'MEDROL (METHYLPREDNISOLONE)',
      price: 160,
      image: methylprednisoloneImage
    },
    {
      id: 'ivermectin-paste',
      name: 'Advanced Parasite Cleanser Kit',
      price: 110,
      image: ivermectinPaste
    }
  ];

  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    // Map minimal product to a full CartItem compatible object, or look it up in MOCK_PRODUCTS.
    // For simplicity, we just pass what we have; CartContext might need more fields so let's mock the missing ones.
    const fullProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: 'Top Products',
      description: '',
      prescription: false,
      rating: 5,
      reviews: 10,
      stock: 100,
      oldPrice: product.originalPrice
    };
    addToCart(fullProduct, 1);
  };

  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Trending Now</h2>
            <div className="w-16 h-1 bg-green-700 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="flex h-full flex-col px-2">
              <div className="mb-6 h-72 overflow-hidden bg-transparent">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                </Link>
              </div>

              <div className="flex flex-grow flex-col">
                <h3 className="mb-4 flex min-h-[3rem] items-start text-xl font-black leading-snug text-[#165c56]">
                  {product.name}
                </h3>

                <div className="mb-6 flex items-center gap-2">
                  <span className="text-3xl font-black text-[#165c56]">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg font-medium text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex w-full items-center justify-center gap-2 border border-[#2b7f79] bg-white px-4 py-3 text-lg font-bold text-[#165c56] transition-colors duration-150 hover:bg-[#165c56] hover:text-white active:bg-[#114945]"
                >
                  <ShoppingCart size={16} strokeWidth={2.5} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
