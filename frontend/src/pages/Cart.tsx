import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowRight, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

import { MOCK_PRODUCTS } from '../constants';

const Cart: React.FC = () => {
    const { items, removeFromCart, updateQuantity, cartTotal, itemCount, addToCart } = useCart();
    const navigate = useNavigate();

    // Basic calculation for demo
    const shipping = 0;
    const tax = cartTotal * 0.08;
    const total = cartTotal + shipping + tax;

    if (items.length === 0) {
        return (
            <div className="bg-gray-50 min-h-screen pt-20 pb-12">
                <div className="max-w-7xl mx-auto px-4 text-center py-24">
                    <div className="text-6xl mb-4 animate-bounce">🛒</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
                    <p className="text-gray-600 mb-6">Add some medications to get started</p>
                    <Link to="/all-pills" className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors inline-block">
                        Browse Medications
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Header with Background Image */}
            <section className="relative h-64 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000"
                    alt="Shopping Cart"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 text-center text-white px-4">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-3 tracking-tight">Shopping Cart</h1>
                    <p className="text-lg lg:text-xl text-blue-100">Review your medications and proceed to checkout</p>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">Cart Items</h2>
                                    <span className="bg-rose-100 text-rose-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{itemCount} Items</span>
                                </div>

                                <div className="space-y-6">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100 transition-colors hover:border-rose-200">
                                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg shadow-sm" />

                                            <div className="flex-1 text-center sm:text-left">
                                                <h4 className="font-semibold text-gray-900 text-lg">{item.name}</h4>
                                                <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-600"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="font-semibold text-gray-900 w-8 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-600"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>

                                            <div className="text-right min-w-[80px]">
                                                <p className="text-lg font-bold text-rose-600">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>

                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-400 hover:text-red-600 p-2 transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Smart Suggestions */}
                            <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">You Might Also Need</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {(() => {
                                        // 1. Identify categories in cart
                                        const cartCategories = new Set(items.map(item => item.category));

                                        // 2. Find relevant items (same category, not in cart)
                                        let suggestions = MOCK_PRODUCTS.filter(p =>
                                            cartCategories.has(p.category) && !items.find(i => i.id === p.id)
                                        );

                                        // 3. Fallback: If no related items or cart empty, show "Best Sellers" (excluding current cart items)
                                        if (suggestions.length === 0) {
                                            const bestSellersIds = ['usa-trio', 'safeguard-paste', 'iverheal-6', 'fenben-tabs'];
                                            suggestions = MOCK_PRODUCTS.filter(p =>
                                                bestSellersIds.includes(p.id) && !items.find(i => i.id === p.id)
                                            );
                                        }

                                        // 4. Limit to 4 items
                                        return suggestions.slice(0, 4).map(product => (
                                            <div key={product.id} className="border border-gray-200 rounded-lg p-4 flex items-center space-x-4 hover:shadow-md transition-shadow cursor-pointer">
                                                <Link to={`/product/${product.id}`} className="shrink-0">
                                                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg bg-gray-100" />
                                                </Link>
                                                <div className="flex-1 min-w-0">
                                                    <Link to={`/product/${product.id}`}>
                                                        <h4 className="font-semibold text-gray-900 truncate">{product.name}</h4>
                                                    </Link>
                                                    <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                                                    <p className="font-bold text-rose-600">${product.price.toFixed(2)}</p>
                                                </div>
                                                <button
                                                    onClick={() => addToCart(product, 1)}
                                                    className="bg-rose-600 text-white px-3 py-1.5 rounded text-xs font-bold hover:bg-rose-700 transition-colors shrink-0"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        ));
                                    })()}
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span className="font-semibold text-green-600">Free</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax (8%)</span>
                                        <span className="font-semibold">${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-lg font-bold text-gray-900">Total</span>
                                            <span className="text-2xl font-bold text-rose-600">${total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Promo Code */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Promo Code</h4>
                                    <div className="flex gap-2">
                                        <input type="text" placeholder="Enter code" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 text-sm" />
                                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">Apply</button>
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate('/checkout')}
                                    className="w-full bg-rose-600 text-white py-4 px-6 rounded-lg hover:bg-rose-700 transition-all font-bold shadow-lg hover:shadow-rose-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    Proceed to Checkout <ArrowRight size={18} />
                                </button>

                                <div className="mt-6 text-center space-y-3">
                                    <div className="flex justify-center space-x-4 text-xs text-gray-500">
                                        <span>🔒 Secure Checkout</span>
                                        <span>💳 SSL Protected</span>
                                    </div>
                                    <p className="text-[10px] text-gray-400">Your payment information is encrypted and secure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;