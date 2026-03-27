import React from 'react';
import { ShoppingCart } from 'lucide-react';

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
      id: 'medical-emergency-kit',
      name: 'Medical Emergency Kit',
      originalPrice: 260,
      price: 210,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?auto=format&fit=crop&q=80&w=600&h=600',
    },
    {
      id: 'fenbendazole-1000',
      name: 'Fenbendazole 1000 mg',
      originalPrice: 280,
      price: 250,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?auto=format&fit=crop&q=80&w=600&h=600',
    },
    {
      id: 'medrol',
      name: 'MEDROL (METHYLPREDNISOLONE)',
      price: 160,
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=600&h=600',
    },
    {
      id: 'parasite-cleaner',
      name: 'Advanced Parasite Cleanser Kit',
      price: 110,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600&h=600',
    },
  ];

  const handleAddToCart = (product: Product) => {
    console.log(`Added ${product.name} to cart`);
    // Implement cart functionality here
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14 gap-x-12">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col h-full px-2">
              <div className="mb-6 flex-shrink-0">
                <div className="h-64 flex items-center justify-center overflow-hidden bg-transparent">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-grow flex flex-col">
                <h3 className="text-xl font-black text-[#165c56] mb-4 leading-snug min-h-[3rem] flex items-start">
                  {product.name}
                </h3>

                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-black text-[#165c56]">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through font-medium">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full py-3 px-4 border border-[#2b7f79] bg-white text-[#165c56] font-bold text-lg rounded-xl hover:bg-[#165c56] hover:text-white active:bg-[#114945] transition-colors duration-150 flex items-center justify-center gap-2"
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
