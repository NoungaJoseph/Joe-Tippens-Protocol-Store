import React, { useState } from 'react';
import { Truck, Search, AlertCircle, CheckCircle, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrackOrder: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'found' | 'error'>('idle');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId || !email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (orderId.toUpperCase().startsWith('PURE')) {
        setStatus('found');
      } else {
        setStatus('error');
      }
    }, 1500);
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
                                placeholder="e.g. PURE-12345678"
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
                            We couldn't find an order with that ID and email combination. Please check your information and try again.
                        </p>
                    </div>
                </div>
            )}

            {status === 'found' && (
                <div className="bg-emerald-50 p-6 border-t border-emerald-100">
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle className="text-emerald-600" size={24} />
                        <div>
                            <h4 className="font-bold text-emerald-900">Order Found: #{orderId}</h4>
                            <p className="text-emerald-700 text-sm">Estimated Delivery: 3-5 Business Days</p>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-200">
                        <div className="relative">
                            <span className="absolute -left-[2.2rem] w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></span>
                            <h5 className="font-bold text-gray-900">Order Processed</h5>
                            <p className="text-xs text-gray-500">Today, 9:41 AM</p>
                            <p className="text-sm text-gray-600 mt-1">Your order has been confirmed and is being packed.</p>
                        </div>
                         <div className="relative opacity-50">
                            <span className="absolute -left-[2.2rem] w-4 h-4 rounded-full bg-gray-300 ring-4 ring-gray-100"></span>
                            <h5 className="font-bold text-gray-900">Shipped</h5>
                            <p className="text-sm text-gray-600 mt-1">Pending carrier pickup.</p>
                        </div>
                         <div className="relative opacity-50">
                            <span className="absolute -left-[2.2rem] w-4 h-4 rounded-full bg-gray-300 ring-4 ring-gray-100"></span>
                            <h5 className="font-bold text-gray-900">Delivered</h5>
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