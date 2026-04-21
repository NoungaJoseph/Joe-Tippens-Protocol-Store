import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import logo from '../assets/images/logo-v2.png';
import { FORMSPREE_ENDPOINT } from '../config/formspree';
import { MOCK_PRODUCTS } from '../constants';
import { hasProductsForCatalogPath } from '../utils/catalogVisibility';

const Footer: React.FC = () => {
  const categoryLinks = useMemo(
    () =>
      [
        { label: 'Anti cancer', path: '/all-pills?search=anti%20cancer' },
        { label: 'Anti viral', path: '/all-pills?search=anti%20viral' },
        { label: 'Ivermectin', path: '/all-pills?category=Ivermectin' },
        { label: "Men's health", path: '/all-pills?category=Erectile%20Dysfunction' },
        { label: 'Life saving drug', path: '/all-pills?search=life%20saving' },
        { label: 'Women care', path: '/all-pills?search=women%20care' },
        { label: 'Asthma', path: '/all-pills?search=asthma' },
        { label: 'Respiratory care', path: '/all-pills?search=respiratory' }
      ].filter((link) => hasProductsForCatalogPath(MOCK_PRODUCTS, link.path)),
    []
  );

  return (
    <footer className="border-t border-slate-200 bg-[#f7f7f7] pt-14 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-300 pb-10 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <img src={logo} alt="Pure Protocol" className="h-16 w-16 object-contain" />
              <div>
                <p className="text-3xl font-black tracking-[-0.04em] text-[#2d7f78] sm:text-4xl">Pure Protocol</p>
                <p className="text-base font-medium text-slate-500">Quality Meds</p>
              </div>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-slate-800 sm:text-2xl">
              Your Trusted Online Pharmacy for Quality Medicines and Healthcare Products
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition hover:opacity-80"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition hover:opacity-80"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition hover:opacity-80"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-black tracking-[-0.03em] text-[#2d7f78] sm:text-3xl">
              Subscribe to our newsletter • Don&apos;t miss out!
            </h3>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-4">
              <label className="block text-lg font-medium text-slate-700" htmlFor="footer-email">
                Email *
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g., email@example.com"
                  className="h-12 border-2 border-[#2d7f78] bg-white px-4 text-lg outline-none focus:ring-2 focus:ring-[#2d7f78]/20"
                />
                <button
                  type="submit"
                  className="h-12 min-w-[120px] bg-[#2d7f78] px-8 text-xl font-black text-white transition hover:bg-[#246962] sm:text-2xl"
                >
                  Join
                </button>
              </div>
              <label className="mt-2 flex items-center gap-3 text-lg text-slate-700">
                <input type="checkbox" className="h-5 w-5 rounded-none border-2 border-[#2d7f78]" />
                I want to subscribe to your mailing list.
              </label>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h4 className="mb-4 border-b-2 border-black pb-2 text-3xl font-black tracking-[-0.04em] text-[#2d7f78] sm:text-4xl">Information</h4>
            <ul className="space-y-2 text-lg leading-tight text-slate-900 sm:text-2xl">
              <li><Link to="/refund-policy" className="hover:text-[#2d7f78]">Terms & Condition</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-[#2d7f78]">Shipping information</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#2d7f78]">Privacy policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-[#2d7f78]">Refund policy</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#2d7f78]">Anti-Spam policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-[#2d7f78]">Cancellation policy</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#2d7f78]">Drug policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 border-b-2 border-black pb-2 text-3xl font-black tracking-[-0.04em] text-[#2d7f78] sm:text-4xl">Categories</h4>
            <ul className="space-y-2 text-lg leading-tight text-slate-900 sm:text-2xl">
              {categoryLinks.map((category) => (
                <li key={category.path}>
                  <Link to={category.path} className="hover:text-[#2d7f78]">{category.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 border-b-2 border-black pb-2 text-3xl font-black tracking-[-0.04em] text-[#2d7f78] sm:text-4xl">Quick links</h4>
            <ul className="space-y-2 text-lg leading-tight text-slate-900 sm:text-2xl">
              <li><Link to="/about" className="hover:text-[#2d7f78]">Why Pure Protocol</Link></li>
              <li><Link to="/about" className="hover:text-[#2d7f78]">About us</Link></li>
              <li><Link to="/contact" className="hover:text-[#2d7f78]">Contact us</Link></li>
              <li><Link to="/all-pills" className="hover:text-[#2d7f78]">Sitemap</Link></li>
              <li><Link to="/faq" className="hover:text-[#2d7f78]">FAQ&apos;s</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-[#2d7f78]">Package & packets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 border-b-2 border-black pb-2 text-3xl font-black tracking-[-0.04em] text-[#2d7f78] sm:text-4xl">Support</h4>
            <ul className="space-y-3 text-lg leading-tight text-slate-900 sm:text-2xl">
              <li className="flex items-center gap-3"><Mail size={22} className="text-[#e6246f]" /> Joe.tippens@email.com</li>
              <li className="flex items-center gap-3"><Phone size={22} className="text-[#e6246f]" /> +1(579) 5015923</li>
              <li className="flex items-center gap-3"><MapPin size={22} className="text-[#e6246f]" /> USA</li>
            </ul>
          </div>
        </div>

        <div className="border border-[#2d7f78] bg-white p-4 text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-[-0.03em] text-[#2d7f78] sm:text-3xl">Disclaimer</h5>
          <p className="text-sm text-slate-600">
            All products sold through this website have not been evaluated by the U.S. Food and Drug Administration (FDA).
            These products are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>

        <div className="py-6 text-center text-sm text-slate-600">
          {new Date().getFullYear()} Pure Protocol | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
