import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Headphones, Leaf, Lock, Gift, ArrowRight } from 'lucide-react';
import SocialShare from '../components/SocialShare';

const Home: React.FC = () => {
    const splideRef = useRef<HTMLDivElement>(null);

    // New Arrivals State
    const [currentNewArrival, setCurrentNewArrival] = useState(0);

    // Filter products
    const mostLoved = MOCK_PRODUCTS.filter(p =>
        ['usa-trio', 'safeguard-paste', 'iverheal-6', 'fenben-powder'].includes(p.id)
    );

    const featured = MOCK_PRODUCTS.filter(p =>
        ['fenben-tabs', 'ivermectin-12', 'cbd-oil', 'vit-b17'].includes(p.id)
    );

    const newArrivals = MOCK_PRODUCTS.filter(p =>
        ['semaglutide', 'cialis', 'cbd-oil'].includes(p.id)
    );

    // Initialize Splide Carousel
    useEffect(() => {
        if (splideRef.current && (window as any).Splide) {
            const splide = new (window as any).Splide(splideRef.current, {
                type: 'loop',
                autoplay: true,
                interval: 5000,
                arrows: true,
                pagination: true,
                pauseOnHover: false, // Prevent stopping on touch/scroll on mobile
                pauseOnFocus: false, // Prevent stopping when clicking
                resetProgress: false,
                speed: 800,
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
            });
            splide.mount();
        }
    }, []);

    // New Arrivals Rotation Timer
    useEffect(() => {
        if (newArrivals.length === 0) return;
        const interval = setInterval(() => {
            setCurrentNewArrival((prev) => (prev + 1) % newArrivals.length);
        }, 4500);
        return () => clearInterval(interval);
    }, [newArrivals.length]);

    return (
        <div className="flex flex-col bg-white">

            {/* Custom Styles for Slider Animations */}
            <style>{`
        /* Hero Slider Styles */
        .splide__slide.is-active .hero-content {
          animation: heroSlideUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .splide__slide.is-active .hero-image {
          animation: heroScale 6s ease-in-out infinite alternate;
        }
        @keyframes heroSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroScale {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .splide__arrow {
            background: rgba(255, 255, 255, 0.8) !important;
            opacity: 0;
            transition: opacity 0.3s ease !important;
        }
        .splide:hover .splide__arrow {
            opacity: 1;
        }
        .splide__pagination__page.is-active {
            background: #0891b2 !important;
            transform: scale(1.3);
        }

        /* New Arrivals "Wipe" Animation */
        @keyframes wipeIn {
            0% { clip-path: inset(100% 0 0 0); }
            100% { clip-path: inset(0 0 0 0); }
        }
        
        .new-arrival-active {
            animation: wipeIn 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
            z-index: 20;
        }
        
        /* Keep previous slide visible behind the wiping slide until animation finishes */
        .new-arrival-exit {
            z-index: 10;
            opacity: 1;
        }
        
        /* Staggered text animations for New Arrivals */
        .new-arrival-active .na-content-badge {
             animation: slideInRight 0.8s ease-out 0.4s forwards;
        }
        .new-arrival-active .na-content-title {
             animation: slideInRight 0.8s ease-out 0.5s forwards;
        }
        .new-arrival-active .na-content-price {
             animation: slideInRight 0.8s ease-out 0.6s forwards;
        }

        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

            {/* Hero Grid Section */}
            <section className="pt-24 pb-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-auto lg:h-[500px]">

                        {/* Main Slider (Takes up 3 columns) */}
                        <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-md relative group h-[400px] lg:h-full">
                            <div className="splide h-full" ref={splideRef}>
                                <div className="splide__track h-full">
                                    <ul className="splide__list h-full">

                                        {/* Slide 1: Ivermectin */}
                                        <li className="splide__slide w-full h-full relative">
                                            <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200" alt="Ivermectin" className="absolute inset-0 w-full h-full object-cover hero-image" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                                            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 text-white hero-content opacity-0">
                                                <span className="text-cyan-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Buy From Us</span>
                                                <h2 className="text-4xl md:text-6xl font-bold mb-2 font-serif leading-tight">Buy Ivermectin <br /> <span className="text-cyan-200">Tablets</span></h2>
                                                <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-lg">Premium quality anti-parasitic medication available now with express shipping.</p>
                                                <Link to="/all-pills?category=Ivermectin" className="bg-cyan-600 text-white px-8 py-3 rounded-full font-bold text-sm md:text-base hover:bg-cyan-700 transition-all shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2">
                                                    Shop Now <ArrowRight size={18} />
                                                </Link>
                                            </div>
                                        </li>

                                        {/* Slide 2: Fenbendazole */}
                                        <li className="splide__slide w-full h-full relative">
                                            <img src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1200" alt="Fenbendazole" className="absolute inset-0 w-full h-full object-cover hero-image" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                                            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 text-white hero-content opacity-0">
                                                <span className="text-yellow-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Hot Discounts</span>
                                                <h2 className="text-4xl md:text-6xl font-bold mb-4 font-serif leading-tight">Buy Fenbendazole</h2>
                                                <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-lg">Get the best deals on high-efficacy Fenbendazole products today.</p>
                                                <Link to="/all-pills?category=Anti-Parasites" className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-bold text-sm md:text-base hover:bg-yellow-400 transition-all shadow-lg hover:shadow-yellow-500/50">
                                                    Get Discounts
                                                </Link>
                                            </div>
                                        </li>

                                        {/* Slide 3: Anti-Parasites */}
                                        <li className="splide__slide w-full h-full relative">
                                            <img src="https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?auto=format&fit=crop&q=80&w=1200" alt="Anti-Parasites" className="absolute inset-0 w-full h-full object-cover hero-image" />
                                            <div className="absolute inset-0 bg-blue-900/70"></div>
                                            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 text-white hero-content opacity-0">
                                                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">Big Discount</span>
                                                <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif leading-tight">Anti-Parasites <br /> Collection</h2>
                                                <Link to="/all-pills?category=Anti-Parasites" className="inline-flex items-center text-base md:text-lg font-bold uppercase tracking-wide border-b-2 border-white pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                                                    Shop Now <ArrowRight size={20} className="ml-2" />
                                                </Link>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Side Banners (Stacked) */}
                        <div className="lg:col-span-1 flex flex-col gap-4 h-[400px] lg:h-full">
                            {/* Animated New Arrivals Box with "Wipe" Effect */}
                            <div className="relative flex-[2] rounded-2xl overflow-hidden shadow-md cursor-pointer h-full bg-gray-900 group">
                                {newArrivals.map((product, index) => {
                                    const isActive = index === currentNewArrival;
                                    return (
                                        <div
                                            key={product.id}
                                            className={`absolute inset-0 w-full h-full ${isActive ? 'new-arrival-active' : 'new-arrival-exit'}`}
                                        >
                                            {/* Background Image */}
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[6000ms] ease-linear ${isActive ? 'scale-110' : 'scale-100'
                                                    }`}
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent"></div>

                                            {/* Content */}
                                            <div className="absolute inset-0 flex flex-col justify-end p-6 pb-8">
                                                <div className="opacity-0 na-content-badge transform translate-x-[-20px]">
                                                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-3 shadow-sm">
                                                        Just Landed
                                                    </span>
                                                </div>

                                                <h2 className="opacity-0 na-content-title transform translate-x-[-20px] text-3xl font-black text-white mb-2 font-serif leading-none tracking-tight">
                                                    {product.name}
                                                </h2>

                                                <div className="opacity-0 na-content-price transform translate-x-[-20px] flex items-center justify-between mt-2 pt-4 border-t border-white/20">
                                                    <div>
                                                        <p className="text-xs text-gray-300 uppercase tracking-wide font-medium">Starting at</p>
                                                        <p className="text-xl font-bold text-emerald-400">${product.price}</p>
                                                    </div>
                                                    <Link
                                                        to={`/product/${product.id}`}
                                                        className="bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-400 transition-colors shadow-lg hover:scale-110"
                                                    >
                                                        <ArrowRight size={20} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* Status Indicators */}
                                <div className="absolute top-4 right-4 z-30 flex gap-1.5">
                                    {newArrivals.map((_, idx) => (
                                        <div
                                            key={idx}
                                            onClick={(e) => { e.preventDefault(); setCurrentNewArrival(idx); }}
                                            className={`h-1.5 rounded-full cursor-pointer transition-all duration-500 shadow-sm ${idx === currentNewArrival ? 'w-8 bg-emerald-400' : 'w-2 bg-white/30 hover:bg-white/60'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* See All Box */}
                            <Link to="/all-pills" className="relative flex-1 rounded-2xl overflow-hidden group shadow-md bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-between px-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
                                <div className="text-white z-10">
                                    <h3 className="font-bold text-xl font-serif mb-1">See All Products</h3>
                                    <span className="text-sm opacity-90 font-medium tracking-wide">Browse Catalog</span>
                                </div>
                                <div className="bg-white/20 p-3 rounded-full z-10 group-hover:bg-white/30 transition-colors">
                                    <ArrowRight className="text-white w-6 h-6" />
                                </div>

                                {/* Decorative circles */}
                                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all"></div>
                                <div className="absolute -left-4 -top-4 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* Features Icons */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Headphones size={32} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 font-serif">24/7 Customer Support</h4>
                                <p className="text-sm text-gray-500">We're here to help anytime.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-3 bg-green-50 text-green-600 rounded-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <Leaf size={32} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 font-serif">Eco-Friendly Packaging</h4>
                                <p className="text-sm text-gray-500">Secured Packaging</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-3 bg-purple-50 text-purple-600 rounded-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <Lock size={32} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 font-serif">Secure Payments</h4>
                                <p className="text-sm text-gray-500">Multi-payment Support</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-3 bg-pink-50 text-pink-600 rounded-full group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                <Gift size={32} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 font-serif">Exclusive Gifts</h4>
                                <p className="text-sm text-gray-500">Secured Delivering</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Most Loved Products */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 font-serif">Most Loved Products</h2>
                        <div className="w-16 h-1 bg-cyan-600 mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {mostLoved.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 font-serif">Our Featured Products</h2>
                        <div className="w-16 h-1 bg-cyan-600 mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {featured.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* About / Commitment Section */}
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-serif">Committed To Build A Positive, Safe, Patient Focused Culture.</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                In addition to offering exceptional care and treatment, the hospital is today regarded as a globally recognized institution.
                                Our mission is to provide high-quality care in a courteous and kind manner. Being the top option for medical care is what we aim to be.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                    <span>Fractions and Dislocations</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                    <span>Desensitisation Injections</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                    <span>Home Medicine Review</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                    <span>Health Assessments</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                                    <span>High Quality Care</span>
                                </div>
                            </div>
                            <Link to="/contact" className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-cyan-700 transition-colors inline-block">
                                Contact Us
                            </Link>
                        </div>
                        <div className="hidden lg:block relative">
                            <div className="border-8 border-white/10 rounded-2xl p-2">
                                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" alt="Doctor" className="rounded-xl shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories / Reviews Teaser */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Success Stories</h2>
                        <p className="text-xl text-gray-600">See what our customers have to say</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {[
                            { name: "Robert Fox", text: "Excellent service and genuine products. The shipping was incredibly fast." },
                            { name: "Bessie Cooper", text: "I was skeptical at first, but the quality of the supplements is top notch." },
                            { name: "Arlene McCoy", text: "Customer support helped me choose the right dosage. Very thankful." }
                        ].map((review, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex text-yellow-400 mb-4">
                                    {'⭐'.repeat(5)}
                                </div>
                                <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                                <p className="text-xs text-gray-400">Verified Buyer</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/reviews" className="bg-white text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-900 hover:text-white transition-colors">
                            View More Reviews
                        </Link>
                    </div>
                </div>
            </section>

            {/* Social Share Section */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 font-serif mb-4">Share PureProtocol</h2>
                    <p className="text-gray-500 mb-6">Help your friends and family discover professional health solutions.</p>
                    <div className="flex justify-center">
                        <SocialShare url={window.location.origin} title="PureProtocol - Professional Health Solutions" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;