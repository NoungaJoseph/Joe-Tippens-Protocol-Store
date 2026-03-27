import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react';
import logo from '../assets/images/logo-v2.png';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white pt-20 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 overflow-hidden rounded-[2rem] border border-emerald-100 bg-[linear-gradient(135deg,_#f6fffb_0%,_#ffffff_42%,_#eef8ff_100%)] p-10 shadow-[0_24px_80px_rgba(15,23,42,0.06)] lg:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-base font-black uppercase tracking-[0.28em] text-emerald-600">Newsletter</p>
              <h3 className="mb-4 text-4xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl">
                Join the wellness updates list.
              </h3>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Subscribe for product drops, fresh arrivals, and occasional offers from the store.
              </p>
            </div>

            <form
              action="https://formspree.io/f/xaqwpzbo"
              method="POST"
              className="grid gap-4"
            >
              <input type="hidden" name="_subject" value="New Newsletter Subscription" />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-lg text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-emerald-700"
              >
                Subscribe Now <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <img src={logo} alt="Pure Protocol logo" className="h-16 w-16 object-contain" />
              <div>
                <p className="text-3xl font-black tracking-[-0.04em] text-slate-900">
                  Pure<span className="text-emerald-600">Protocol</span>
                </p>
                <p className="mt-1 text-base font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Wellness Store
                </p>
              </div>
            </div>

            <p className="mb-8 max-w-sm text-lg leading-8 text-slate-600">
              Verified pharmaceutical supplements, premium protocol products, and responsive customer support for your wellness journey.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1877F2] text-white shadow-[0_12px_24px_rgba(24,119,242,0.25)] transition hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,_#f58529,_#dd2a7b,_#8134af,_#515bd4)] text-white shadow-[0_12px_24px_rgba(221,42,123,0.22)] transition hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1DA1F2] text-white shadow-[0_12px_24px_rgba(29,161,242,0.22)] transition hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-2xl font-black text-slate-900">Quick Links</h4>
            <ul className="space-y-4 text-lg text-slate-600">
              <li><Link to="/" className="transition hover:text-emerald-600">Home</Link></li>
              <li><Link to="/all-pills" className="transition hover:text-emerald-600">Shop</Link></li>
              <li><Link to="/about" className="transition hover:text-emerald-600">About Us</Link></li>
              <li><Link to="/contact" className="transition hover:text-emerald-600">Contact</Link></li>
              <li><Link to="/faq" className="transition hover:text-emerald-600">FAQ</Link></li>
              <li><Link to="/shipping-policy" className="transition hover:text-emerald-600">Shipping Info</Link></li>
              <li><Link to="/refund-policy" className="transition hover:text-emerald-600">Return Policy</Link></li>
              <li><Link to="/track-order" className="transition hover:text-emerald-600">Track Order</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-2xl font-black text-slate-900">Popular Categories</h4>
            <ul className="space-y-4 text-lg text-slate-600">
              <li><Link to="/all-pills?category=Anabolics" className="transition hover:text-emerald-600">Anabolics</Link></li>
              <li><Link to="/all-pills?category=Erectile Dysfunction" className="transition hover:text-emerald-600">Erectile Dysfunction</Link></li>
              <li><Link to="/all-pills?category=Anti-Parasites" className="transition hover:text-emerald-600">Anti-Parasites</Link></li>
              <li><Link to="/all-pills?category=Ivermectin" className="transition hover:text-emerald-600">Ivermectin</Link></li>
              <li><Link to="/all-pills?category=Semaglutide" className="transition hover:text-emerald-600">Semaglutide</Link></li>
              <li><Link to="/all-pills?category=Protocols" className="transition hover:text-emerald-600">Protocols</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-2xl font-black text-slate-900">Need Help</h4>
            <div className="space-y-5 text-lg text-slate-600">
              <p className="flex items-start gap-3">
                <Phone size={22} className="mt-1 text-emerald-600" />
                <span className="font-semibold text-slate-900">+1(581)5085308</span>
              </p>
              <div className="flex items-start gap-3">
                <Clock size={22} className="mt-1 text-emerald-600" />
                <div>
                  <p>Monday - Friday: 9:00 - 20:00</p>
                  <p>Saturday: 11:00 - 15:00</p>
                </div>
              </div>
              <p className="flex items-start gap-3">
                <Mail size={22} className="mt-1 text-emerald-600" />
                <span>Joe.tippens.protocol@outlook.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-slate-200 py-8 xl:flex-row xl:items-center xl:justify-between">
          <p className="text-lg text-slate-600">
            {new Date().getFullYear()} Ivermectinkart | All Rights Reserved
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex h-14 items-center rounded-xl border border-slate-200 bg-white px-4 shadow-sm">
              <span className="text-[0.7rem] font-black uppercase tracking-[0.14em] text-[#016FD0]">American</span>
              <span className="ml-1 text-[0.7rem] font-black uppercase tracking-[0.14em] text-[#016FD0]">Express</span>
            </div>
            <div className="flex h-14 items-center rounded-xl border border-slate-200 bg-white px-5 shadow-sm">
              <span className="text-2xl font-black italic text-[#1A1F71]">VISA</span>
            </div>
            <div className="flex h-14 items-center rounded-xl border border-slate-200 bg-white px-5 shadow-sm">
              <span className="text-xl font-black text-[#003087]">Pay</span>
              <span className="ml-1 text-xl font-black text-[#009CDE]">Pal</span>
            </div>
            <div className="flex h-14 items-center rounded-xl border border-slate-200 bg-white px-5 shadow-sm">
              <div className="h-8 w-8 rounded-full bg-[#EB001B] opacity-90" />
              <div className="-ml-3 h-8 w-8 rounded-full bg-[#F79E1B] opacity-90" />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-lg text-slate-600">
            <Link to="/privacy-policy" className="transition hover:text-emerald-600">Privacy Policy</Link>
            <Link to="/refund-policy" className="transition hover:text-emerald-600">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
