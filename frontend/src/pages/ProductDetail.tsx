import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, ArrowLeft, Truck, Shield, CheckCircle, Eye, HelpCircle, Star, User, Mail, X, ChevronDown, ChevronUp } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import SocialShare from '../components/SocialShare';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = MOCK_PRODUCTS.find((p) => p.id === id);
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);

    // Support for product options (e.g. Strength, Weight, etc.)
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: any }>({});
    const [currentPrice, setCurrentPrice] = useState(0);

    // Support for image gallery
    const [selectedImage, setSelectedImage] = useState('');

    const [showNotification, setShowNotification] = useState(false);
    const [activeTab, setActiveTab] = useState<'description' | 'additional' | 'reviews'>('reviews');
    const [userRating, setUserRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    // Reviews Toggle
    const [showReviews, setShowReviews] = useState(true);

    // Question Modal
    const [showQuestionModal, setShowQuestionModal] = useState(false);
    const [questionSubmitted, setQuestionSubmitted] = useState(false);

    // Fullscreen Gallery
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    // Viewers simulation
    const [viewers] = useState(Math.floor(Math.random() * 40) + 45);

    useEffect(() => {
        if (product) {
            // Initialize options
            if (product.options && product.options.length > 0) {
                const initialOptions: any = {};
                product.options.forEach(opt => {
                    initialOptions[opt.label] = opt.choices[0];
                });
                setSelectedOptions(initialOptions);
            }
            // Initialize image
            setSelectedImage(product.image);
            // Initialize price
            setCurrentPrice(product.price);
        }
    }, [product]);

    // Update price when options change
    useEffect(() => {
        if (product && product.options) {
            let newPrice = product.price;
            let override = false;

            // Logic: if any selected option has a specific price, it might override the base price
            // Or modifiers add to it. The user requirements implies specific price points for specific options.
            // Let's assume if an option choice has a 'price', it overrides.

            Object.values(selectedOptions).forEach((choice: any) => {
                if (choice && choice.price !== undefined) {
                    newPrice = choice.price;
                    override = true;
                } else if (choice && choice.modifier !== undefined) {
                    newPrice += choice.modifier;
                }
            });
            setCurrentPrice(newPrice);
        }
    }, [selectedOptions, product]);

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-24 text-center mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
                <Link to="/all-pills" className="text-cyan-600 hover:underline">
                    Return to Catalog
                </Link>
            </div>
        );
    }

    const handleOptionChange = (label: string, choiceJson: string) => {
        const choice = JSON.parse(choiceJson);
        setSelectedOptions(prev => ({ ...prev, [label]: choice }));
    };

    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        // Construct variant name
        let variantName = product.name;
        const opts = Object.entries(selectedOptions).map(([key, val]: any) => `${val.text}`).join(', ');
        if (opts) variantName += ` (${opts})`;

        addToCart({ ...product, name: variantName, price: currentPrice }, quantity);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };

    const handleQuestionSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setQuestionSubmitted(true);
    };

    const closeQuestionModal = () => {
        setShowQuestionModal(false);
        setTimeout(() => setQuestionSubmitted(false), 300);
    };

    const badgeClass = product.prescription ? 'bg-red-500' : 'bg-green-500';
    const badgeText = product.prescription ? 'Prescription Required' : 'Over-the-Counter';

    // Images array
    const allImages = product.images && product.images.length > 0 ? product.images : [product.image];

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/all-pills" className="inline-flex items-center text-gray-500 hover:text-cyan-600 mb-8 transition-colors font-medium">
                    <ArrowLeft size={18} className="mr-2" /> Back to Catalog
                </Link>

                {/* Main Product Section */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Image Column */}
                        <div className="bg-gray-100 p-8 flex flex-col items-center justify-center relative overflow-hidden">
                            {/* Main Image with Hover Zoom and 3D Rotation */}
                            <div
                                className="w-full max-w-md aspect-square mb-8 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden group perspective-1000"
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;

                                    const centerX = rect.width / 2;
                                    const centerY = rect.height / 2;

                                    const rotateX = ((y - centerY) / centerY) * -15; // Max 15 degree tilt
                                    const rotateY = ((x - centerX) / centerX) * 15;

                                    const img = e.currentTarget.querySelector('img');
                                    if (img) {
                                        img.style.transform = `scale(1.15) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    const img = e.currentTarget.querySelector('img');
                                    if (img) {
                                        img.style.transform = `scale(1) rotateX(0deg) rotateY(0deg)`;
                                    }
                                }}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <img
                                    src={selectedImage || product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain transition-transform duration-200 ease-out will-change-transform cursor-zoom-in"
                                    onClick={() => setIsGalleryOpen(true)}
                                />
                                {/* Reflection Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                {/* Zoom Hint */}
                                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                                    <Eye size={16} />
                                </div>
                            </div>

                            {/* Gallery Thumbs */}
                            {allImages.length > 1 && (
                                <div className="flex gap-3 overflow-x-auto w-full max-w-md pb-4 pt-2 no-scrollbar">
                                    {allImages.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedImage(img)}
                                            className={`w-20 h-20 flex-shrink-0 rounded-2xl border-2 transition-all duration-300 overflow-hidden shadow-sm ${selectedImage === img ? 'border-emerald-500 scale-105 shadow-emerald-100' : 'border-white hover:border-gray-200 hover:scale-105'}`}
                                        >
                                            <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}

                            <div className="absolute top-8 left-8 z-10">
                                <span className={`${badgeClass} text-white text-[10px] font-black px-4 py-2 rounded-full shadow-xl uppercase tracking-[0.2em]`}>
                                    {badgeText}
                                </span>
                            </div>
                        </div>

                        {/* Details Column */}
                        <div className="p-8 lg:p-12">
                            {/* Real-time Viewers */}
                            <div className="flex items-center gap-2 text-red-500 font-semibold mb-4 animate-pulse bg-red-50 w-fit px-3 py-1 rounded-full text-sm">
                                <Eye size={16} /> {viewers} People viewing this product right now!
                            </div>

                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-sm font-bold text-cyan-600 uppercase tracking-wider bg-cyan-50 px-2 py-1 rounded">
                                    {product.category}
                                </span>
                                <div className="flex text-yellow-400 text-sm">
                                    {'⭐'.repeat(Math.floor(product.rating))}
                                    <span className="text-gray-400 ml-1">({product.reviews} reviews)</span>
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                            <p className="text-gray-500 font-medium mb-6 text-lg">{product.brand}</p>

                            <div className="flex items-baseline gap-4 mb-6">
                                <div className="text-3xl font-bold text-gray-900">
                                    ${currentPrice.toFixed(2)}
                                </div>
                                {product.oldPrice && (
                                    <div className="text-xl text-gray-400 line-through">
                                        ${product.oldPrice.toFixed(2)}
                                    </div>
                                )}
                            </div>

                            <div className="prose prose-gray mb-8 text-gray-600 leading-relaxed whitespace-pre-wrap">
                                <p>{product.description}</p>
                            </div>

                            {/* Product Options (Dynamic) */}
                            {product.options && product.options.map((option, idx) => (
                                <div key={idx} className="mb-6">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{option.label}</label>
                                    <div className="relative">
                                        <select
                                            value={selectedOptions[option.label] ? JSON.stringify(selectedOptions[option.label]) : ""}
                                            onChange={(e) => handleOptionChange(option.label, e.target.value)}
                                            className="w-full md:w-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-white appearance-none cursor-pointer font-medium text-gray-700 shadow-sm"
                                        >
                                            {option.choices.map((choice, cIdx) => (
                                                <option key={cIdx} value={JSON.stringify(choice)}>
                                                    {choice.text}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 md:right-[calc(100%-16rem)]">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Stock Status */}
                            <div className="flex items-center gap-2 text-green-600 font-medium mb-8 bg-green-50 p-3 rounded-lg w-fit">
                                <CheckCircle size={18} /> In Stock - Ready to Ship
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-sm h-14">
                                    <button
                                        onClick={handleDecrement}
                                        className="px-4 h-full hover:bg-gray-50 text-gray-600 transition-colors rounded-l-lg"
                                    >
                                        <Minus size={18} />
                                    </button>
                                    <div className="w-16 text-center font-bold text-lg">{quantity}</div>
                                    <button
                                        onClick={handleIncrement}
                                        className="px-4 h-full hover:bg-gray-50 text-gray-600 transition-colors rounded-r-lg"
                                    >
                                        <Plus size={18} />
                                    </button>
                                </div>

                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-cyan-600 text-white h-14 rounded-lg hover:bg-cyan-700 transition-all shadow-lg hover:shadow-cyan-200 flex items-center justify-center gap-2 font-bold text-lg"
                                >
                                    <ShoppingCart size={22} /> Add to Cart
                                </button>
                            </div>

                            {showNotification && (
                                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg text-center font-medium border border-green-200 shadow-sm animate-fade-in">
                                    ✓ Added {quantity} x {product.name} to cart!
                                </div>
                            )}

                            {/* Ask Question & Social */}
                            <div className="pt-8 border-t border-gray-100">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <button
                                        onClick={() => setShowQuestionModal(true)}
                                        className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors font-medium group"
                                    >
                                        <HelpCircle size={20} className="group-hover:text-cyan-600" />
                                        Ask a Question
                                    </button>

                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-medium text-gray-500">Share:</span>
                                        <SocialShare
                                            url={window.location.href}
                                            title={`Buy ${product.name} at PureProtocol`}
                                            image={product.image}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Product Tabs Section */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Tabs Header */}
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`px-8 py-4 font-semibold text-sm sm:text-base transition-colors ${activeTab === 'description'
                                ? 'border-b-2 border-cyan-600 text-cyan-600 bg-cyan-50/50'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab('additional')}
                            className={`px-8 py-4 font-semibold text-sm sm:text-base transition-colors ${activeTab === 'additional'
                                ? 'border-b-2 border-cyan-600 text-cyan-600 bg-cyan-50/50'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            Additional information
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`px-8 py-4 font-semibold text-sm sm:text-base transition-colors ${activeTab === 'reviews'
                                ? 'border-b-2 border-cyan-600 text-cyan-600 bg-cyan-50/50'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            Reviews ({product.reviews})
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="p-8 lg:p-12">
                        {activeTab === 'description' && (
                            <div className="prose prose-gray max-w-none text-gray-600 whitespace-pre-wrap">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Product Description</h3>
                                <p>{product.description}</p>
                            </div>
                        )}

                        {activeTab === 'additional' && (
                            <div className="text-gray-600">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                                    <div className="flex border-b border-gray-100 py-2">
                                        <span className="font-semibold w-1/3">Weight</span>
                                        <span>0.15 kg</span>
                                    </div>
                                    <div className="flex border-b border-gray-100 py-2">
                                        <span className="font-semibold w-1/3">Brand</span>
                                        <span>{product.brand || 'Generic'}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="max-w-3xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Customer Reviews</h3>

                                {/* Reviews List */}
                                <div className="mb-12">
                                    <button
                                        onClick={() => setShowReviews(!showReviews)}
                                        className="flex items-center gap-2 text-cyan-700 font-bold hover:text-cyan-800 transition-colors mb-6 text-lg"
                                    >
                                        {showReviews ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                        Showing all {product.reviews} reviews
                                    </button>

                                    {showReviews && (
                                        <div className="space-y-6 animate-fade-in">
                                            {product.reviewsData && product.reviewsData.length > 0 ? (
                                                product.reviewsData.map((review) => (
                                                    <div key={review.id} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                                        <div className="flex items-center justify-between mb-3">
                                                            <div className="font-bold text-gray-900 text-lg">{review.author}</div>
                                                            <div className="text-sm text-gray-500">{review.date}</div>
                                                        </div>
                                                        <div className="flex text-yellow-400 mb-3">
                                                            {'⭐'.repeat(review.rating)}
                                                        </div>
                                                        <p className="text-gray-600 italic">"{review.content}"</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-gray-500 italic">No reviews yet.</p>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-200">
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Be the first to review "{product.name}"</h4>
                                    <p className="text-gray-500 text-sm mb-6">Your email address will not be published. Required fields are marked *</p>

                                    <form
                                        action="https://getform.io/f/bmdjklga"
                                        method="POST"
                                        className="space-y-6"
                                    >
                                        <input type="hidden" name="product_name" value={product.name} />
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Your rating *</label>
                                            <div className="flex gap-1">
                                                <input type="hidden" name="rating" value={userRating} />
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <button
                                                        key={star}
                                                        type="button"
                                                        onClick={() => setUserRating(star)}
                                                        onMouseEnter={() => setHoverRating(star)}
                                                        onMouseLeave={() => setHoverRating(0)}
                                                        className="focus:outline-none transition-transform hover:scale-110"
                                                    >
                                                        <Star
                                                            size={24}
                                                            className={`${(hoverRating || userRating) >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Your review *</label>
                                            <textarea
                                                name="review"
                                                rows={5}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                                placeholder="Write your review here..."
                                            ></textarea>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                                                <input
                                                    type="text"
                                                    name="author_name"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-cyan-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Question Modal */}
            {showQuestionModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
                    <div
                        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all scale-100 animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                <HelpCircle size={20} className="text-cyan-600" />
                                Ask about {product.name}
                            </h3>
                            <button
                                onClick={closeQuestionModal}
                                className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6 sm:p-8">
                            {questionSubmitted ? (
                                <div className="text-center py-6">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Question Submitted!</h4>
                                    <p className="text-gray-600 mb-8 max-w-xs mx-auto">
                                        Thank you for your inquiry. Our support team will respond to your email shortly.
                                    </p>
                                    <button
                                        onClick={closeQuestionModal}
                                        className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-cyan-700 transition-colors shadow-lg hover:shadow-cyan-200"
                                    >
                                        Close Window
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleQuestionSubmit} className="space-y-5">
                                    <p className="text-gray-600 text-sm mb-4">
                                        Please fill out the form below to ask a question about <span className="font-semibold">{product.name}</span>.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                    <User size={16} />
                                                </div>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                    <Mail size={16} />
                                                </div>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Question <span className="text-red-500">*</span></label>
                                        <textarea
                                            rows={4}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                                            placeholder="Type your question here..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-cyan-600 text-white py-3 rounded-lg font-bold hover:bg-cyan-700 transition-all shadow-md hover:shadow-cyan-200"
                                    >
                                        Send Question
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {/* Fullscreen Gallery Modal */}
            {isGalleryOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
                    onClick={() => setIsGalleryOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20 z-[110]"
                        onClick={() => setIsGalleryOpen(false)}
                    >
                        <X size={32} />
                    </button>

                    <div
                        className="relative max-w-5xl w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage || product.image}
                            alt={product.name}
                            className="max-w-full max-h-full object-contain shadow-2xl animate-zoom-in"
                        />

                        {/* Navigation dots if multiple images */}
                        {allImages.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {allImages.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(img)}
                                        className={`w-3 h-3 rounded-full transition-all ${selectedImage === img ? 'bg-cyan-500 w-8' : 'bg-white/30 hover:bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;