import React from 'react';
import { Phone, Mail, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar: React.FC = () => {
  return (
    <div className="bg-emerald-950 text-white text-[11px] md:text-xs py-2.5 px-4 font-medium tracking-wide border-b border-emerald-900/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 md:gap-6">
          <a href="tel:+12109018480" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
            <Phone size={12} className="text-emerald-400" /> 
            <span>+1 (210) 901-8480</span>
          </a>
          <a href="mailto:support@pureprotocol.store" className="hidden sm:flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
            <Mail size={12} className="text-emerald-400" /> 
            <span>support@pureprotocol.store</span>
          </a>
        </div>
        
        <div className="flex items-center gap-4">
           <span className="flex items-center gap-1.5 text-emerald-100">
             <Truck size={12} className="text-emerald-400" />
             Free Shipping on Orders Over $100
           </span>
           <span className="hidden md:inline text-gray-600">|</span>
           <Link to="/track-order" className="hidden md:block hover:text-emerald-400 transition-colors">
             Track Order
           </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;