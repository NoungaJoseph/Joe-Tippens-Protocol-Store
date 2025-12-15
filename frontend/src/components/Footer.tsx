import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, ArrowRight, CreditCard } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="bg-emerald-900/30 rounded-2xl p-8 mb-16 border border-emerald-900/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Mail size={120} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                    <h3 className="text-2xl font-bold font-serif mb-2">Join our Newsletter</h3>
                    <p className="text-gray-400">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                </div>
                <div>
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <button className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                            Subscribe <ArrowRight size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
               <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center shadow-lg border border-white/10">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white drop-shadow-md">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" fill="currentColor" fillOpacity="0.15" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                 </svg>
               </div>
               <div className="flex flex-col">
                 <span className="text-2xl font-black text-white tracking-tight font-bodoni italic leading-none">
                  Pure<span className="text-emerald-500">Protocol</span>
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-gray-500 font-bold ml-0.5">Wellness Store</span>
               </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              We strive to be the first and best choice for health care solutions, providing verified supplements for your wellness journey.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                    <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                    <Twitter size={18} />
                </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-emerald-600 inline-block pb-1">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-200">Home</Link></li>
              <li><Link to="/all-pills" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-200">Shop</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-200">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-200">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-200">FAQ</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-200">Shipping Info</Link></li>
              <li><Link to="/refund-policy" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-200">Return Policy</Link></li>
              <li><Link to="/track-order" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-200">Track Order</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-emerald-600 inline-block pb-1">Categories</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/all-pills?category=Anabolics" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-200">Anabolics</Link></li>
              <li><Link to="/all-pills?category=Erectile Dysfunction" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-200">Erectile Dysfunction</Link></li>
              <li><Link to="/all-pills?category=Anti-Parasites" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-200">Anti-Parasites</Link></li>
              <li><Link to="/all-pills?category=Ivermectin" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-200">Ivermectin</Link></li>
              <li><Link to="/all-pills?category=Semaglutide" className="hover:text-emerald-400 transition-colors hover:pl-2 duration-200">Semaglutide</Link></li>
            </ul>
          </div>

          {/* Column 4: Need Help */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-emerald-600 inline-block pb-1">Need Help</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <p className="flex items-start gap-3">
                <Phone size={18} className="text-emerald-500 mt-1" /> 
                <span className="text-xl text-white font-bold">+1-(210) 901-8480</span>
              </p>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-emerald-500 mt-1" />
                <div>
                    <p className="mb-1">Monday – Friday: 9:00-20:00</p>
                    <p>Saturday: 11:00 – 15:00</p>
                </div>
              </div>
               <p className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500" /> 
                support@pureprotocol.store
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Payment Icons */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p className="mb-2 md:mb-0 text-center md:text-left">&copy; {new Date().getFullYear()} PureProtocol. All rights reserved.</p>
          
          {/* Mock Payment Icons */}
          <div className="flex gap-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
             <div className="h-8 bg-white rounded px-2 flex items-center"><span className="text-blue-600 font-bold italic">VISA</span></div>
             <div className="h-8 bg-white rounded px-2 flex items-center"><span className="text-red-500 font-bold">Mastercard</span></div>
             <div className="h-8 bg-white rounded px-2 flex items-center"><span className="text-blue-500 font-bold">Amex</span></div>
             <div className="h-8 bg-white rounded px-2 flex items-center"><span className="text-indigo-600 font-bold">Stripe</span></div>
             <div className="h-8 bg-white rounded px-2 flex items-center"><span className="text-blue-400 font-bold italic">PayPal</span></div>
          </div>

          <div className="flex space-x-4">
             <span className="hover:text-white cursor-pointer">Privacy Policy</span>
             <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;