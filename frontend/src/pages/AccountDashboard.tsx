import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Package, Heart, User as UserIcon, LogOut } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

const AccountDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'orders' | 'saved'>('saved');

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Resolve saved product IDs to full products
  const savedItems = (user.savedProducts || [])
    .map(id => MOCK_PRODUCTS.find(p => p.id === id))
    .filter(Boolean);

  const orders = user.orders || [];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 mb-6 border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="w-14 h-14 shrink-0 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl font-bold">
              {user.firstName[0]}{user.lastName[0]}
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
                Welcome, {user.firstName}!
              </h1>
              <p className="text-sm text-gray-500 truncate">{user.email}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg font-semibold transition-colors"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-100 sticky top-24">
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('saved')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-left ${
                    activeTab === 'saved' 
                      ? 'bg-green-50 text-green-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Heart size={18} className={activeTab === 'saved' ? 'fill-current' : ''} />
                  Saved Products
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-left ${
                    activeTab === 'orders' 
                      ? 'bg-green-50 text-green-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Package size={18} />
                  Order History
                </button>
                <button
                  onClick={() => navigate('/all-pills')}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-left text-gray-600 hover:bg-gray-50 mt-2 border-t border-gray-100"
                >
                  <Package size={18} />
                  Continue Shopping
                </button>
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            
            {/* Saved Products Tab */}
            {activeTab === 'saved' && (
              <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border border-gray-100 min-h-[400px]">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                  <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center">
                    <Heart size={16} className="fill-current" />
                  </div>
                  Saved Products
                </h2>
                
                {savedItems.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart size={48} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No saved products yet</h3>
                    <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                      Explore our catalog and click the heart icon on any product to save it here for later.
                    </p>
                    <button 
                      onClick={() => navigate('/all-pills')}
                      className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-800 transition-colors shadow-lg"
                    >
                      Browse Catalog
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {savedItems.map((product: any) => (
                      <div key={product.id} className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                        <div className="relative aspect-square overflow-hidden bg-gray-50">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 sm:p-5 flex flex-col flex-1">
                          <h3 className="font-bold text-gray-900 mb-1 text-base leading-tight line-clamp-2">{product.name}</h3>
                          <div className="mt-auto pt-4 flex items-center justify-between">
                            <span className="font-black text-green-700 text-xl tracking-tight">${product.price.toFixed(2)}</span>
                            <button
                              onClick={() => navigate(`/product/${product.id}`)}
                              className="text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-green-700 transition-colors"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Order History Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border border-gray-100 min-h-[400px]">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <Package size={16} />
                  </div>
                  Order History
                </h2>

                {orders.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Package size={48} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No orders yet</h3>
                    <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                      When you place an order, it will appear here so you can easily track it.
                    </p>
                    <button 
                      onClick={() => navigate('/all-pills')}
                      className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-800 transition-colors shadow-lg"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {orders.slice().reverse().map((order: any, idx: number) => (
                      <div key={idx} className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow bg-gray-50/50">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                          <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">Order Date</span>
                            <span className="font-bold text-gray-900">{new Date(order.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                          <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">Total Amount</span>
                            <span className="font-black text-green-700 text-xl">${order.total?.toFixed(2) || '0.00'}</span>
                          </div>
                          <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">Status</span>
                            <span className="inline-flex px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-full uppercase tracking-wider">Processing</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">Items in Order</h4>
                          <div className="space-y-3">
                            {order.items && order.items.map((item: any, i: number) => (
                              <div key={i} className="flex items-center justify-between text-sm">
                                <span className="font-medium text-gray-700">{item.name || item}</span>
                                <span className="text-gray-500">{typeof item === 'object' && item.quantity ? `Qty: ${item.quantity}` : ''}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;
