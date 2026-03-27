import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000',
      badge: '✓ 100% Trusted Medication',
      heading: 'Fast & Reliable Medical Solutions',
      subtext: 'Premium quality pharmaceutical supplements with express shipping. Trusted by thousands of customers worldwide.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000',
      badge: '✓ Express Delivery Available',
      heading: 'Your Health, Our Priority',
      subtext: 'Access premium medications and supplements with free delivery. Shop with confidence from trusted healthcare experts.'
    }
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  {/* LEFT SIDE: Text Content */}
                  <div className="flex flex-col justify-center text-white animate-fade-in-up">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 w-fit">
                      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wide rounded-full border border-white/30">
                        {slide.badge}
                      </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                      {slide.heading}
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                      {slide.subtext}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        to="/all-pills" 
                        className="px-8 py-4 bg-[#2d8680] text-white font-bold rounded-lg hover:bg-[#1f5d58] transition-colors text-center"
                      >
                        Shop Now
                      </Link>
                      <Link 
                        to="/all-pills" 
                        className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-center"
                      >
                        Explore Categories
                      </Link>
                    </div>
                  </div>

                  {/* RIGHT SIDE: Empty space for responsive design */}
                  <div className="hidden lg:block"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      {/* Left Arrow */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors backdrop-blur-sm border border-white/30"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors backdrop-blur-sm border border-white/30"
      >
        ❯
      </button>

      {/* Carousel Indicators - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          ></button>
        ))}
      </div>

      {/* Chat Icon - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20">
        <button className="w-16 h-16 rounded-lg border-2 border-white/40 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group backdrop-blur-sm">
          <MessageCircle size={28} className="text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} />
        </button>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;
