import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductSlide {
  id: number;
  image: string;
  badge?: string;
}

const JustLanded: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Product carousel images
  const productSlides: ProductSlide[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?auto=format&fit=crop&q=80&w=800&h=800',
      badge: 'NEW'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800&h=800',
      badge: 'BESTSELLER'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800&h=800',
      badge: 'LIMITED'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [productSlides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + productSlides.length) % productSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % productSlides.length);
  };

  return (
    <section className="w-full bg-white">
      <div className="h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
            
            {/* LEFT SIDE - Product Information */}
            <div className="flex flex-col justify-center py-12 lg:py-0">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 w-fit">
                <span className="inline-block px-4 py-2 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full border border-green-200">
                  ✓ JUST LANDED
                </span>
              </div>

              {/* Product Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
                Premium Omega-3 Fish Oil
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md leading-relaxed">
                Pure, concentrated omega-3 fish oil supplement. Supports heart, brain, and joint health with premium quality sourcing.
              </p>

              {/* Price Display */}
              <div className="mb-10 flex items-baseline gap-4">
                <span className="text-5xl font-bold text-green-700">$45.99</span>
                <span className="text-2xl text-gray-400 line-through">$65.99</span>
                <span className="text-lg font-bold text-red-600 ml-2">Save 30%</span>
              </div>

              {/* Key Benefits */}
              <div className="mb-12 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-700 font-bold text-xl mt-1">✓</span>
                  <span className="text-gray-700 font-medium">Supports cardiovascular health</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 font-bold text-xl mt-1">✓</span>
                  <span className="text-gray-700 font-medium">Enhanced cognitive function</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 font-bold text-xl mt-1">✓</span>
                  <span className="text-gray-700 font-medium">Premium quality, tested for purity</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/all-pills"
                  className="px-8 py-4 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition-colors text-center flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </Link>
                <Link
                  to="/all-pills"
                  className="px-8 py-4 border-2 border-green-700 text-green-700 font-bold rounded-lg hover:bg-green-50 transition-colors text-center"
                >
                  View Details
                </Link>
              </div>

              {/* Additional Info */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  ✓ Free shipping on orders over $100 | ✓ 30-day money-back guarantee | ✓ FDA certified
                </p>
              </div>
            </div>

            {/* RIGHT SIDE - Image Carousel */}
            <div className="relative h-full w-full hidden lg:flex items-center justify-end">
              
              {/* Main Carousel Container */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                
                {/* Carousel Images */}
                {productSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt="Just Landed Product"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Floating Badge */}
                    {slide.badge && (
                      <div className="absolute top-8 right-8 z-20">
                        <div className="bg-white rounded-full p-4 shadow-lg border-2 border-green-700">
                          <span className="font-bold text-green-700 text-sm uppercase">
                            {slide.badge}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-gray-900 transition-all shadow-lg hover:shadow-xl"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-gray-900 transition-all shadow-lg hover:shadow-xl"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Navigation Dots */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                  {productSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide
                          ? 'bg-green-700 w-8 h-3'
                          : 'bg-white/60 hover:bg-white/80 w-3 h-3'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Image Carousel */}
      <div className="lg:hidden w-full h-80 bg-gray-100 relative overflow-hidden mb-8">
        {productSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt="Just Landed Product"
              className="w-full h-full object-cover"
            />
            {slide.badge && (
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-white rounded-full p-3 shadow-lg border-2 border-green-700">
                  <span className="font-bold text-green-700 text-xs uppercase">
                    {slide.badge}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Mobile Navigation */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-gray-900"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-gray-900"
        >
          <ChevronRight size={20} />
        </button>

        {/* Mobile Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {productSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'bg-green-700 w-8 h-2'
                  : 'bg-white/60 hover:bg-white/80 w-2 h-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JustLanded;
