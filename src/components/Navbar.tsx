import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Wrench, Package, Menu, X, ShieldCheck, Clock } from 'lucide-react';
import { SHOP_INFO } from '../data/mockData';
import { naveenImg } from '../assets/images';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenTracker: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenTracker }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header id="site-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Utility Bar with Contact & Raisar Plaza Badging */}
      <div id="top-announcement-bar" className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>B-35, Raisar Plaza, Ajmeri Gate, Jaipur - 302003</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Open 10:30 AM - 8:30 PM (7 Days)</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>15+ Years Trust • All India Mail-In Service</span>
            </span>
            <a
              id="top-bar-phone-link"
              href={`tel:${SHOP_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="font-semibold text-white hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{SHOP_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <a id="brand-logo" href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-amber-400 shadow-md shadow-amber-500/15 group-hover:scale-105 transition-transform shrink-0 bg-slate-800">
              <img
                src={naveenImg || '/naveen.jpg'}
                alt="Naveen Kumar Vijay"
                className="w-full h-full object-cover object-[center_18%]"
                referrerPolicy="no-referrer"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.endsWith('/naveen.jpg')) target.src = '/naveen.jpg';
                }}
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border border-white rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors uppercase">
                  BALAJI MOBILE
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full border border-blue-200">
                  Shop B-35 Raisar
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Naveen Kumar Vijay • <span className="text-amber-600 font-semibold">15+ Yrs Exp</span>
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-6">
            <a
              id="nav-link-services"
              href="#services"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Repair Services
            </a>
            <a
              id="nav-link-courier"
              href="#mail-in-courier"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1.5"
            >
              <Package className="w-4 h-4 text-indigo-600" />
              <span>All-India Courier</span>
              <span className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.5 rounded-md font-bold">Fast</span>
            </a>
            <a
              id="nav-link-estimator"
              href="#cost-estimator"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Cost Calculator
            </a>
            <button
              id="nav-btn-track"
              onClick={onOpenTracker}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer"
            >
              Track Phone
            </button>
            <a
              id="nav-link-shop"
              href="#shop-location"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Shop B-35 Location
            </a>
            <a
              id="nav-link-faq"
              href="#faq-section"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-whatsapp-btn"
              href={SHOP_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors text-sm font-semibold shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              id="nav-call-btn"
              href={`tel:${SHOP_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 transition-all text-sm font-bold shadow-sm shadow-blue-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call Naveen Ji</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              id="mobile-quick-call-btn"
              href={`tel:${SHOP_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="p-2.5 rounded-xl bg-blue-600 text-white shadow-xs"
              aria-label="Call Naveen Kumar Vijay"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 mb-3">
            <p className="text-xs font-semibold text-amber-900">
              📍 Shop: B-35, Raisar Plaza, Ajmeri Gate, Jaipur
            </p>
            <p className="text-[11px] text-amber-700 mt-0.5">
              Available 7 Days • Express All-India Courier Return
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <a
              id="mob-link-services"
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              <span>Repair Services (iPhone, Samsung, Android)</span>
              <Wrench className="w-4 h-4 text-slate-400" />
            </a>
            <a
              id="mob-link-courier"
              href="#mail-in-courier"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-lg text-sm font-medium text-indigo-900 bg-indigo-50/50 hover:bg-indigo-50"
            >
              <span className="font-semibold">All-India Mail-In Courier Guide</span>
              <Package className="w-4 h-4 text-indigo-600" />
            </a>
            <a
              id="mob-link-estimator"
              href="#cost-estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              <span>Instant Repair Cost Calculator</span>
              <span className="text-xs font-bold text-emerald-600">Free Quote</span>
            </a>
            <button
              id="mob-link-tracker"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracker();
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50 text-left cursor-pointer"
            >
              <span>Track Phone Repair Status</span>
              <span className="text-xs font-semibold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">Live</span>
            </button>
            <a
              id="mob-link-location"
              href="#shop-location"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              <span>Raisar Plaza Shop & Google Map</span>
              <MapPin className="w-4 h-4 text-slate-400" />
            </a>
            <a
              id="mob-link-faq"
              href="#faq-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              <span>Frequently Asked Questions</span>
              <span className="text-xs text-slate-500">FAQ</span>
            </a>
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              id="mob-drawer-whatsapp"
              href={SHOP_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              id="mob-drawer-call"
              href={`tel:${SHOP_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
