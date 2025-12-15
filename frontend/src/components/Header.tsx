import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, ShieldCheck, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateCount, setAnimateCount] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Animate cart count on change
  useEffect(() => {
    if (itemCount > 0) {
      setAnimateCount(true);
      const timer = setTimeout(() => setAnimateCount(false), 300);
      return () => clearTimeout(timer);
    }
  }, [itemCount]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/all-pills?search=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 gap-4">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group shrink-0" onClick={() => setIsMenuOpen(false)}>
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white shadow-lg shadow-emerald-500/30 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 overflow-hidden border border-white/20">
               <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               {/* New Logo: Shield with Medical Cross */}
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 relative z-10 drop-shadow-md">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" fill="currentColor" fillOpacity="0.15" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
               </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-gray-900 group-hover:text-emerald-700 transition-colors leading-none font-bodoni italic flex items-center">
                Pure<span className="text-emerald-600">Protocol</span>
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-400 font-bold ml-0.5 font-sans">Wellness Store</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center shrink-0">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold text-sm uppercase tracking-wide transition-colors hover:text-emerald-600 ${
                  location.pathname === link.path ? 'text-emerald-600' : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
                to="/blog"
                className={`font-semibold text-sm uppercase tracking-wide transition-colors hover:text-emerald-600 ${
                  location.pathname === '/blog' || location.pathname.startsWith('/blog/') ? 'text-emerald-600' : 'text-gray-600'
                }`}
              >
                Blog
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-xs mx-4">
            <form onSubmit={handleSearch} className="relative w-full">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..." 
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </form>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4 shrink-0">
            
            {/* Cart Icon */}
            <Link to="/cart" className="hidden md:block text-gray-600 hover:text-emerald-600 transition-colors relative group">
              <div className="cart-icon group-hover:scale-110">
                <ShoppingCart size={24} />
                <span 
                  className={`cart-count ${itemCount === 0 ? 'hidden' : 'flex'} ${animateCount ? 'cart-count-update' : ''}`}
                >
                    {itemCount}
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-3 text-xs text-gray-500 font-medium border-r border-gray-200 pr-4 mr-2">
              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-emerald-500" /> Verified
              </span>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-md transition-colors" 
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-y-0 left-0 w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="font-bold text-xl text-gray-900 font-bodoni italic flex items-center">
              Pure<span className="text-emerald-600">Protocol</span>
            </span>
            <button onClick={toggleMenu} className="text-gray-500 hover:text-red-500 transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="mb-6 relative">
             <input 
               type="text" 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               placeholder="Search products..." 
               className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
             />
             <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </form>

          <nav className="space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-bold transition-colors ${
                  location.pathname === link.path
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-bold text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
            >
                Health Hub (Blog)
            </Link>
             <Link
                to="/track-order"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-bold text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
            >
                Track Order
            </Link>
            <Link 
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-bold text-gray-600 hover:bg-gray-50 hover:text-emerald-600 flex justify-between items-center"
            >
                Cart
                {itemCount > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {itemCount}
                    </span>
                )}
            </Link>
          </nav>
          
          <div className="border-t border-gray-100 mt-8 pt-6">
            <div className="text-sm text-gray-500 space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div 
            className="md:hidden fixed inset-0 bg-black/20 z-30 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Header;