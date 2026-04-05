import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { NAV_LINKS } from '../constants';
import logo from '../assets/images/logo-v2.png';

const Header: React.FC = () => {
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/all-pills?search=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  const primaryNavLinks = [
    { label: 'All Category', path: '/all-pills' },
    { label: 'Ivermectin', path: '/all-pills?category=Ivermectin' },
    { label: 'Fenbendazole', path: '/all-pills?search=fenbendazole' },
    { label: 'Erectile Dysfunction', path: '/all-pills?category=Erectile%20Dysfunction' },
    { label: 'Blog', path: '/blog' }
  ];

  return (
    <>
      {/* Main Header - 3 Column Layout */}
      <header className={`bg-white border-b border-gray-100 z-40 transition-all duration-300 ease-in-out transform ${
        isVisible ? 'translate-y-0 shadow-sm' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 gap-6">
            
            {/* LEFT: Logo + Tagline */}
            <Link 
              to="/" 
              className="flex items-center gap-2.5 shrink-0 group min-w-0" 
              onClick={() => setIsMenuOpen(false)}
            >
              <img 
                src={logo} 
                alt="Pure Protocol" 
                className="w-[60px] h-[60px] object-contain"
              />
              <div className="hidden min-w-0 sm:flex sm:flex-col">
                <span className="text-base font-bold text-[#2d8680]">
                  Pure Protocol
                </span>
                <span className="text-xs text-gray-500 font-medium">Medical Wellness</span>
              </div>
            </Link>

            {/* CENTER: Search Bar - Desktop Only */}
            <form onSubmit={handleSearch} className="hidden lg:block flex-1 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search here"
                  className="w-full px-6 py-3.5 pr-12 bg-white border border-[#2d8680] rounded-full text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2d8680]/20 focus:border-[#2d8680] transition-all"
                />
                <button 
                  type="submit"
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#2d8680]"
                >
                  <Search size={20} strokeWidth={2} />
                </button>
              </div>
            </form>

            {/* RIGHT: Cart + User Icons */}
            <div className="flex items-center gap-5 shrink-0">
              {/* Cart Icon */}
              <Link 
                to="/cart" 
                className="relative text-gray-600 hover:text-[#2d8680] transition-colors group"
              >
                <ShoppingCart size={22} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#2d8680] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* User Icon */}
              <Link 
                to="/track-order" 
                className="text-gray-600 hover:text-[#2d8680] transition-colors"
              >
                <User size={22} strokeWidth={1.5} />
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* CENTER Search for md/sm screens */}
          <form onSubmit={handleSearch} className="lg:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search here"
                className="w-full px-6 py-3 pr-10 bg-white border border-[#2d8680] rounded-full text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2d8680]/20 focus:border-[#2d8680] transition-all"
              />
              <button 
                type="submit"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#2d8680]"
              >
                <Search size={18} strokeWidth={2} />
              </button>
            </div>
          </form>
        </div>

        {/* Navigation Bar - Desktop */}
        <nav className="hidden lg:block bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-8 xl:gap-x-12 min-h-[5.5rem]">
              <div></div>
              <div className="flex justify-center items-center gap-7 xl:gap-9 text-center pr-1 xl:pr-3">
                {primaryNavLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="border-b-4 border-transparent py-5 text-lg font-bold leading-none text-[#2d8680] transition-colors hover:border-[#2d8680] hover:text-[#2d8680] xl:text-[1.3rem]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex justify-end pl-1 xl:pl-3">
              <button className="px-8 py-3 border-2 border-[#2d8680] rounded-lg text-base font-extrabold tracking-[0.01em] text-[#2d8680] bg-white hover:bg-blue-50 transition-colors whitespace-nowrap">
                Free Shipping for all orders
              </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed left-0 top-[11.5rem] bottom-0 w-72 max-w-[85vw] bg-white shadow-xl z-30 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Mobile Navigation Menu */}
          <nav className="space-y-2">
            {primaryNavLinks.map((item, index) => (
              <Link
                key={`${item.label}-${index}`}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-gray-100 my-6 pt-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[11.5rem] bg-black/20 z-20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;

