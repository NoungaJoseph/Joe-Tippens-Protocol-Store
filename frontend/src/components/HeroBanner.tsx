import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import contactBg from '../assets/images/contact-bg.jpg';
import aboutBg from '../assets/images/about-bg.jpg';

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: contactBg,
      badge: '100% Trusted Medication',
      heading: 'Fast & Reliable Medical Solutions',
      subtext:
        'Premium quality pharmaceutical supplements with express shipping. Trusted by thousands of customers worldwide.'
    },
    {
      id: 2,
      image: aboutBg,
      badge: 'Express Delivery Available',
      heading: 'Your Health, Our Priority',
      subtext:
        'Access premium medications and supplements with free delivery. Shop with confidence from trusted healthcare experts.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[82vh] min-h-[560px] w-full overflow-hidden sm:h-screen">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-black/45" />
            </div>

            <div className="absolute inset-0 z-10 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                  <div className="text-white">
                    <div className="mb-6 inline-flex w-fit items-center gap-2">
                      <span className="inline-block rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                        {slide.badge}
                      </span>
                    </div>

                    <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                      {slide.heading}
                    </h1>

                    <p className="mb-8 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
                      {slide.subtext}
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Link
                        to="/all-pills"
                        className="rounded-lg bg-[#2d8680] px-8 py-4 text-center font-bold text-white transition-colors hover:bg-[#1f5d58]"
                      >
                        Shop Now
                      </Link>
                      <Link
                        to="/all-pills"
                        className="rounded-lg border-2 border-white px-8 py-4 text-center font-bold text-white transition-colors hover:bg-white/10"
                      >
                        Explore Categories
                      </Link>
                    </div>
                  </div>

                  <div className="hidden lg:block" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40 sm:left-8 sm:h-12 sm:w-12"
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40 sm:right-8 sm:h-12 sm:w-12"
        aria-label="Next slide"
      >
        &#10095;
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'w-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-4 z-20 sm:right-8">
        <button className="group flex h-14 w-14 items-center justify-center rounded-lg border-2 border-white/40 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:h-16 sm:w-16">
          <MessageCircle size={26} className="text-white transition-transform group-hover:scale-110" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
