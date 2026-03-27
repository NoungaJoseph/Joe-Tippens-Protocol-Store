import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import SocialShare from '../components/SocialShare';
import TopTrendingSearch from '../components/TopTrendingSearch';
import ProductShowcase from '../components/ProductShowcase';
import FAQ from '../components/FAQ';
import HeroBanner from '../components/HeroBanner';
import premiumQualityImage from '../assets/DESIGN PHASE/premium quality.png';
import securePaymentsImage from '../assets/DESIGN PHASE/secure payments.png';
import supportImage from '../assets/DESIGN PHASE/247service.png';
import fastDeliveryImage from '../assets/DESIGN PHASE/fast delivery.png';

const Home: React.FC = () => {
    const [currentNewArrival, setCurrentNewArrival] = useState(0);

    const featureHighlights = [
        {
            title: 'Premium Quality',
            description: 'Verified and high-efficacy pharmaceutical supplements.',
            image: premiumQualityImage,
            alt: 'Premium quality',
        },
        {
            title: 'Secure Payments',
            description: 'Encrypted transactions via secure payment gateways.',
            image: securePaymentsImage,
            alt: 'Secure payments',
        },
        {
            title: '24/7 Support',
            description: 'Dedicated expert support whenever you need assistance.',
            image: supportImage,
            alt: '24/7 support',
        },
        {
            title: 'Fast Delivery',
            description: 'Express shipping on all protocol orders.',
            image: fastDeliveryImage,
            alt: 'Fast delivery',
        },
    ];

    const mostLoved = MOCK_PRODUCTS.filter((product) =>
        ['120-day-protocol', 'usa-trio', 'iverjohn-3mg', 'iverjohn-6mg', 'covilife-40mg', 'fenben-powder'].includes(product.id)
    );

    const featured = MOCK_PRODUCTS.filter((product) =>
        ['fenben-tabs', 'ivermectin-tabs', 'cbd-oil-kids', 'vit-b17-cup', 'ivermectin-injection-1', 'ivermectin-paste-dewormer'].includes(product.id)
    );

    const newArrivals = MOCK_PRODUCTS.filter((product) =>
        ['iverjohn-3mg', 'iverjohn-6mg', 'covilife-40mg', 'ivermectin-injection-1', 'ozempic-025'].includes(product.id)
    );

    useEffect(() => {
        if (newArrivals.length === 0) return;

        const interval = setInterval(() => {
            setCurrentNewArrival((prev) => (prev + 1) % newArrivals.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [newArrivals.length]);

    const currentArrival = newArrivals[currentNewArrival];

    const handlePrevArrival = () => {
        setCurrentNewArrival((prev) => (prev - 1 + newArrivals.length) % newArrivals.length);
    };

    const handleNextArrival = () => {
        setCurrentNewArrival((prev) => (prev + 1) % newArrivals.length);
    };

    const getShortDescription = (description: string) => {
        const normalized = description.replace(/\s+/g, ' ').trim();
        return normalized.length > 185 ? `${normalized.slice(0, 182)}...` : normalized;
    };

    return (
        <div className="flex flex-col bg-white">
            <HeroBanner />

            {currentArrival && (
                <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(191,234,211,0.55),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(214,236,247,0.55),_transparent_32%),linear-gradient(135deg,_#f8fffb_0%,_#ffffff_50%,_#f2fbf5_100%)] pt-20 pb-14">
                    <div className="absolute inset-0 opacity-60">
                        <div className="absolute left-[-7rem] top-20 h-64 w-64 rounded-full bg-[#cfeedd] blur-3xl" />
                        <div className="absolute right-[-3rem] top-8 h-72 w-72 rounded-full bg-[#ddf3e7] blur-3xl" />
                        <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-[#dceef7] blur-3xl" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-8 flex items-center justify-between gap-4">
                            <div>
                                <span className="inline-flex items-center rounded-full bg-[#dff6e8] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#1f8a57]">
                                    New Arrivals
                                </span>
                                <p className="mt-3 max-w-2xl text-sm text-gray-500">
                                    Fresh products in rotation with bold details, pricing, and direct access to each item.
                                </p>
                            </div>

                            <div className="hidden items-center gap-3 md:flex">
                                <button
                                    type="button"
                                    onClick={handlePrevArrival}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bfdccf] bg-white/90 text-[#1f6f52] transition hover:bg-[#1f8a57] hover:text-white"
                                    aria-label="Previous arrival"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    type="button"
                                    onClick={handleNextArrival}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bfdccf] bg-white/90 text-[#1f6f52] transition hover:bg-[#1f8a57] hover:text-white"
                                    aria-label="Next arrival"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
                            <div
                                key={currentArrival.id}
                                className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(35,73,52,0.08)] backdrop-blur md:p-12"
                            >
                                <div className="mb-6 flex flex-wrap items-center gap-3">
                                    <span className="rounded-full bg-[#eef8f1] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1f8a57]">
                                        {currentArrival.category}
                                    </span>
                                    <span className="rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                                        {currentArrival.prescription ? 'Prescription product' : 'Ready to order'}
                                    </span>
                                </div>

                                <h1 className="mb-5 max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.04em] text-gray-950 md:text-6xl lg:text-7xl">
                                    {currentArrival.name}
                                </h1>

                                <p className="mb-8 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
                                    {getShortDescription(currentArrival.description)}
                                </p>

                                <div className="mb-8 flex flex-wrap items-end gap-6">
                                    <div>
                                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-400">Price</p>
                                        <div className="flex items-end gap-3">
                                            <span className="text-3xl font-black text-[#16663f] md:text-5xl">
                                                ${currentArrival.price.toFixed(2)}
                                            </span>
                                            {currentArrival.oldPrice && (
                                                <span className="pb-1 text-lg font-medium text-gray-400 line-through">
                                                    ${currentArrival.oldPrice.toFixed(2)}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 rounded-2xl bg-[#f7fbf8] px-5 py-4">
                                        <Star size={18} className="fill-[#f5b301] text-[#f5b301]" />
                                        <span className="text-sm font-bold text-gray-900">{currentArrival.rating.toFixed(1)}</span>
                                        <span className="text-sm text-gray-500">from {currentArrival.reviews} reviews</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <Link
                                        to={`/product/${currentArrival.id}`}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1f8a57] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#16663f]"
                                    >
                                        View Product
                                        <ArrowRight size={16} />
                                    </Link>
                                    <Link
                                        to="/all-pills"
                                        className="inline-flex items-center justify-center rounded-xl border border-[#1f8a57] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#1f8a57] transition hover:bg-[#eef8f1]"
                                    >
                                        Explore More
                                    </Link>
                                </div>

                                <div className="mt-8 flex flex-wrap items-center gap-3 md:hidden">
                                    <button
                                        type="button"
                                        onClick={handlePrevArrival}
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bfdccf] bg-white text-[#1f6f52] transition hover:bg-[#1f8a57] hover:text-white"
                                        aria-label="Previous arrival"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNextArrival}
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bfdccf] bg-white text-[#1f6f52] transition hover:bg-[#1f8a57] hover:text-white"
                                        aria-label="Next arrival"
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-4 top-8 hidden rounded-full border-2 border-[#7bc49b] bg-white px-5 py-4 text-center shadow-sm md:block">
                                    <p className="text-xs font-bold uppercase text-[#7bc49b]">Fast</p>
                                    <p className="text-sm font-semibold text-gray-800">Arrival</p>
                                </div>
                                <div className="absolute -bottom-5 left-8 hidden rounded-full border-2 border-[#1f8a57] bg-white px-6 py-4 text-center shadow-sm lg:block">
                                    <p className="text-xs font-bold uppercase text-[#1f8a57]">Top Rated</p>
                                    <p className="text-sm font-semibold text-gray-800">New Stock</p>
                                </div>
                                <div className="absolute -right-3 bottom-10 hidden rounded-full border-2 border-[#7bc49b] bg-white px-5 py-4 text-center shadow-sm xl:block">
                                    <p className="text-xs font-bold uppercase text-[#7bc49b]">
                                        {currentNewArrival + 1}/{newArrivals.length}
                                    </p>
                                    <p className="text-sm font-semibold text-gray-800">Showing</p>
                                </div>

                                <div className="relative mx-auto max-w-xl">
                                    <div className="absolute inset-6 rounded-[2rem] bg-[#d5efe0]" />
                                    <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-5 shadow-[0_28px_80px_rgba(23,64,47,0.14)]">
                                        <div className="aspect-[4/4.2] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,_#f5faf7,_#ffffff)]">
                                            <img
                                                key={currentArrival.id}
                                                src={currentArrival.image}
                                                alt={currentArrival.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            {newArrivals.map((product, index) => (
                                <button
                                    key={product.id}
                                    type="button"
                                    onClick={() => setCurrentNewArrival(index)}
                                    className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition ${
                                        index === currentNewArrival
                                            ? 'bg-[#1f8a57] text-white'
                                            : 'bg-white/90 text-gray-500 hover:bg-white hover:text-[#1f8a57]'
                                    }`}
                                >
                                    {product.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featureHighlights.map((feature) => (
                            <div key={feature.title} className="bg-white p-2 flex flex-col items-center text-center">
                                <img
                                    src={feature.image}
                                    alt={feature.alt}
                                    className="h-20 w-20 object-contain mb-4"
                                />
                                <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                                <p className="text-gray-500 text-xs lowercase leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <TopTrendingSearch />

            <ProductShowcase />

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 font-serif">Most Loved Products</h2>
                        <div className="w-16 h-1 bg-green-700 mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-14">
                        {mostLoved.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 font-serif">Our Featured Products</h2>
                        <div className="w-16 h-1 bg-green-700 mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-14">
                        {featured.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

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
                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                    <span>Fractions and Dislocations</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                    <span>Desensitisation Injections</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                    <span>Home Medicine Review</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                    <span>Health Assessments</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                    <span>High Quality Care</span>
                                </div>
                            </div>
                            <Link to="/contact" className="bg-green-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-800 transition-colors inline-block">
                                Contact Us
                            </Link>
                        </div>
                        <div className="hidden lg:block relative">
                            <div className="border-4 border-gray-200 rounded-2xl p-2">
                                <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                                    alt="Doctor"
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ />

            <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-emerald-100 bg-[linear-gradient(135deg,_#f7fff9_0%,_#ffffff_44%,_#eef7ff_100%)] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-12">
                    <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                        <div className="text-center lg:text-left">
                            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-emerald-700">
                                Share PureProtocol
                            </span>
                            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl">
                                Help more people discover trusted wellness products.
                            </h2>
                            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                                Share the store directly to social platforms or copy the link and send it anywhere. Every action below uses a real share destination.
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <SocialShare
                                url={window.location.origin}
                                title="PureProtocol - Professional Health Solutions"
                                className="max-w-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
