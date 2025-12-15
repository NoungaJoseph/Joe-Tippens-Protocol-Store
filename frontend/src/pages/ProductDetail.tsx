import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, ArrowLeft, Truck, Shield, CheckCircle, Eye, HelpCircle, Star, User, Mail, X } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import SocialShare from '../components/SocialShare';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [tabletCount, setTabletCount] = useState(90);
  const [showNotification, setShowNotification] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'additional' | 'reviews'>('reviews');
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  
  // New State for Question Modal
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [questionSubmitted, setQuestionSubmitted] = useState(false);
  
  // Simulate random viewers between 45 and 85
  const [viewers] = useState(Math.floor(Math.random() * 40) + 45);

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

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    // In a real app, we would pass the tabletCount to the cart item as a variation
    addToCart({ ...product, name: `${product.name} (${tabletCount} count)` }, quantity);
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

  const badgeClass = product.prescription ? 'badge-prescription' : 'badge-otc';
  const badgeText = product.prescription ? 'Prescription Required' : 'Over-the-Counter';

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
            <div className="bg-gray-100 p-8 flex items-center justify-center relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-w-md object-cover rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6">
                    <span className={`${badgeClass} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wide`}>
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
                
                <div className="text-3xl font-bold text-gray-900 mb-6 flex items-baseline gap-2">
                    ${product.price.toFixed(2)}
                    <span className="text-sm font-normal text-gray-500">per unit</span>
                </div>

                <div className="prose prose-gray mb-8 text-gray-600 leading-relaxed">
                    <p>{product.description}</p>
                </div>

                {/* Tablet Count Selection */}
                <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Number of Tablets</label>
                    <div className="relative">
                        <select 
                            value={tabletCount}
                            onChange={(e) => setTabletCount(Number(e.target.value))}
                            className="w-full md:w-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 bg-white appearance-none cursor-pointer font-medium text-gray-700 shadow-sm"
                        >
                            {[90, 120, 150, 180, 270, 360].map(count => (
                                <option key={count} value={count}>{count} Tablets</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 md:right-[calc(100%-16rem)]">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>

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
                    ✓ Added {quantity} x {product.name} ({tabletCount} count) to cart!
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

                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100 mt-8">
                <div className="flex items-start gap-3 text-gray-600">
                    <Truck size={24} className="text-cyan-600 shrink-0" />
                    <div>
                        <span className="font-bold text-gray-900 block mb-1">Fast Delivery</span>
                        <span className="text-sm">2-3 day shipping</span>
                    </div>
                </div>
                <div className="flex items-start gap-3 text-gray-600">
                    <Shield size={24} className="text-cyan-600 shrink-0" />
                    <div>
                        <span className="font-bold text-gray-900 block mb-1">Secure Payment</span>
                        <span className="text-sm">256-bit SSL Encrypted</span>
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
                    className={`px-8 py-4 font-semibold text-sm sm:text-base transition-colors ${
                        activeTab === 'description' 
                        ? 'border-b-2 border-cyan-600 text-cyan-600 bg-cyan-50/50' 
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                >
                    Description
                </button>
                <button
                    onClick={() => setActiveTab('additional')}
                    className={`px-8 py-4 font-semibold text-sm sm:text-base transition-colors ${
                        activeTab === 'additional' 
                        ? 'border-b-2 border-cyan-600 text-cyan-600 bg-cyan-50/50' 
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                >
                    Additional information
                </button>
                <button
                    onClick={() => setActiveTab('reviews')}
                    className={`px-8 py-4 font-semibold text-sm sm:text-base transition-colors ${
                        activeTab === 'reviews' 
                        ? 'border-b-2 border-cyan-600 text-cyan-600 bg-cyan-50/50' 
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                >
                    Reviews (0)
                </button>
            </div>

            {/* Tab Content */}
            <div className="p-8 lg:p-12">
                {activeTab === 'description' && (
                    <div className="prose prose-gray max-w-none text-gray-600">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Product Description</h3>
                        <p>{product.description}</p>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
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
                                <span className="font-semibold w-1/3">Dimensions</span>
                                <span>10 x 5 x 5 cm</span>
                            </div>
                            <div className="flex border-b border-gray-100 py-2">
                                <span className="font-semibold w-1/3">Dosage Form</span>
                                <span>Tablet</span>
                            </div>
                            <div className="flex border-b border-gray-100 py-2">
                                <span className="font-semibold w-1/3">Brand</span>
                                <span>{product.brand || 'MedCare Pro'}</span>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div className="max-w-3xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Reviews</h3>
                        <p className="text-gray-500 mb-8">There are no reviews yet.</p>

                        <div className="bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-200">
                            <h4 className="text-lg font-bold text-gray-900 mb-1">Be the first to review "{product.name}"</h4>
                            <p className="text-gray-500 text-sm mb-6">Your email address will not be published. Required fields are marked *</p>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Your rating *</label>
                                    <div className="flex gap-1">
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
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                                        <input 
                                            type="email" 
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        id="save-info" 
                                        className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                                    />
                                    <label htmlFor="save-info" className="ml-2 text-sm text-gray-600">
                                        Save my name, email, and website in this browser for the next time I comment.
                                    </label>
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
    </div>
  );
};

export default ProductDetail;