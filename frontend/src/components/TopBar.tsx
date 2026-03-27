import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#2d8680] px-4 py-3 text-sm text-white md:text-base">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        {/* Left: Email */}
        <div className="min-w-0">
          <a href="mailto:Joe.tippens.protocol@outlook.com" className="flex items-center justify-center gap-2 font-medium transition-opacity hover:opacity-85 md:justify-start">
            <Mail size={18} />
            <span className="break-all sm:break-normal">Joe.tippens.protocol@outlook.com</span>
          </a>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-end md:gap-6 lg:gap-8">
          <Link to="/about" className="hover:opacity-85 transition-opacity font-medium">
            About us
          </Link>
          <span className="hidden text-white/40 md:inline">|</span>
          <Link to="/contact" className="hover:opacity-85 transition-opacity font-medium">
            Contact us
          </Link>
          <span className="hidden text-white/40 md:inline">|</span>
          <Link to="/shipping-policy" className="hover:opacity-85 transition-opacity font-medium">
            Shipping & Return
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
