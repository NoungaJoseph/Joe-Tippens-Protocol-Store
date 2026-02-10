import React, { useState } from 'react';
import { Truck, Search, AlertCircle, CheckCircle, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrackOrder: React.FC = () => {
    const [orderId, setOrderId] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'found' | 'error'>('idle');
    const [orderDetails, setOrderDetails] = useState<any>(null);

    const handleTrack = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!orderId || !email) return;

        setStatus('loading');
        setOrderDetails(null);

        // Submit to Formspree for tracking visibility
        const formData = new FormData();
        formData.append('order_id', orderId);
        formData.append('email', email);
        formData.append('_subject', 'Order Tracking Request');

        try {
            fetch('https://formspree.io/f/mpqjqpdn', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
        } catch (e) {
            console.warn('Formspree track logging failed');
        }

        // Simulate API call delay
        setTimeout(() => {
            const storedOrders = JSON.parse(localStorage.getItem('pure_orders') || '[]');
            const found = storedOrders.find((o: any) =>
                o.id === orderId.toUpperCase() &&
                o.email.toLowerCase() === email.toLowerCase()
            );

            if (found) {
                setOrderDetails(found);
                setStatus('found');
            } else {
                setStatus('error');
            }
        }, 1000);
    };

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Track Your Order</h1>
                    <p className="text-gray-600 text-lg">Enter your order ID and email address to check the status of your shipment.</p>
                </div>

                <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8">
                        <form onSubmit={handleTrack} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Order ID</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="e.g. PURE-XXXXXXXX"
                                        value={orderId}
                                        onChange={(e) => setOrderId(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 uppercase"
                                        required
                                    />
                                    <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Billing Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="e.g. name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                                        required
                                    />
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-cyan-600 text-white py-4 rounded-lg font-bold hover:bg-cyan-700 transition-all shadow-lg hover:shadow-cyan-200 flex justify-center items-center gap-2"
                            >
                                {status === 'loading' ? (
                                    <>Processing...</>
                                ) : (
                                    <>Track Order <Truck size={20} /></>
                                )}
                            </button>
                        </form>
                    </div>

                    {status === 'error' && (
                        <div className="bg-red-50 p-6 border-t border-red-100 flex items-start gap-3">
                            <AlertCircle className="text-red-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-red-900">Order Not Found</h4>
                                <p className="text-red-700 text-sm mt-1">
                                    We couldn't find an order with ID <strong>{orderId}</strong> registered to <strong>{email}</strong>. Please check your information and try again.
                                </p>
                            </div>
                        </div>
                    )}

                    {status === 'found' && orderDetails && (
                        <div className="bg-emerald-50 p-6 border-t border-emerald-100">
                            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-emerald-200/50">
                                <CheckCircle className="text-emerald-600" size={24} />
                                <div>
                                    <h4 className="font-bold text-emerald-900">Order Found: #{orderDetails.id}</h4>
                                    <p className="text-emerald-700 text-sm">Status: <span className="font-bold uppercase">{orderDetails.status}</span></p>
                                    <p className="text-emerald-700 text-xs mt-1">Total: ${orderDetails.total.toFixed(2)}</p>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-200">

                                {/* 1. Processed */}
                                <div className="relative">
                                    <span className="absolute -left-[2.2rem] w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></span>
                                    <h5 className="font-bold text-gray-900">Order Processed</h5>
                                    <p className="text-xs text-gray-500">{new Date(orderDetails.date).toLocaleDateString()} {new Date(orderDetails.date).toLocaleTimeString()}</p>
                                    <p className="text-sm text-gray-600 mt-1">Your order has been confirmed and is being packed.</p>
                                </div>

                                {/* 2. Shipped */}
                                <div className={`relative ${orderDetails.status === 'Shipped' || orderDetails.status === 'Delivered' ? '' : 'opacity-50'}`}>
                                    <span className={`absolute -left-[2.2rem] w-4 h-4 rounded-full ring-4 ring-gray-100 ${orderDetails.status === 'Shipped' || orderDetails.status === 'Delivered' ? 'bg-emerald-500 ring-emerald-100' : 'bg-gray-300'}`}></span>
                                    <h5 className="font-bold text-gray-900">Shipped</h5>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {orderDetails.status === 'Shipped' || orderDetails.status === 'Delivered'
                                            ? "Your package is on its way."
                                            : "Pending carrier pickup."}
                                    </p>
                                </div>

                                {/* 3. Delivered */}
                                <div className={`relative ${orderDetails.status === 'Delivered' ? '' : 'opacity-50'}`}>
                                    <span className={`absolute -left-[2.2rem] w-4 h-4 rounded-full ring-4 ring-gray-100 ${orderDetails.status === 'Delivered' ? 'bg-emerald-500 ring-emerald-100' : 'bg-gray-300'}`}></span>
                                    <h5 className="font-bold text-gray-900">Delivered</h5>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {orderDetails.status === 'Delivered'
                                            ? "Package delivered successfully."
                                            : "Scheduled delivery."}
                                    </p>
                                </div>

                            </div>
                        </div>
                    )}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-500">
                        Having trouble? <Link to="/contact" className="text-cyan-600 hover:underline">Contact Support</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TrackOrder;