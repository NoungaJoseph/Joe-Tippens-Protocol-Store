import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import contactBg from '../assets/images/contact-bg.jpg';
import aboutBg from '../assets/images/about-bg.jpg';

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: contactBg,
      heading: 'Joe Tippens Protocol & PureProtocol Solutions',
      subheading: 'High-purity Fenbendazole, Ivermectin, Vitamin B17, and certified oncology adjunctive therapies.',
      isH1: true,
    },
    {
      id: 2,
      image: aboutBg,
      heading: 'Your Health, Our Priority - Pure Quality Care',
      subheading: 'Direct access to authentic, lab-tested pharmaceutical formulations with express worldwide delivery.',
      isH1: false,
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
                    {slide.isH1 ? (
                      <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        {slide.heading}
                      </h1>
                    ) : (
                      <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        {slide.heading}
                      </h2>
                    )}
                    <p className="mt-4 max-w-xl text-lg text-slate-200 sm:text-xl">
                      {slide.subheading}
                    </p>
                  </div>

                  <div className="hidden lg:block" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default HeroBanner;
