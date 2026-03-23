import React from 'react';
import { Phone, Mail, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar: React.FC = () => {
  return (
    <div className="bg-rose-950 text-white text-[11px] md:text-xs py-2.5 px-4 font-medium tracking-wide border-b border-rose-900/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 md:gap-6">
          <a href="tel:+12109018480" className="flex items-center gap-1.5 hover:text-rose-400 transition-colors">
            <Phone size={12} className="text-rose-400" />
            <span>+1(581)5085308</span>
          </a>
          <a href="mailto:joe.tippens@email.com" className="hidden sm:flex items-center gap-1.5 hover:text-rose-400 transition-colors">
            <Mail size={12} className="text-rose-400" />
            <span>joe.tippens@email.com</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-rose-100">
            <Truck size={12} className="text-rose-400" />
            Free Shipping on Orders Over $300
          </span>
          <span className="hidden md:inline text-gray-600">|</span>
          <Link to="/track-order" className="hidden md:block hover:text-rose-400 transition-colors">
            Track Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;