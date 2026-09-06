import React from 'react';
import { Phone, Mail, MapPin, Wrench, ShieldCheck, Heart, Clock, ArrowUp, Send } from 'lucide-react';
import { SHOP_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Top Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/50 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">
                Shop B-35, Raisar Plaza, Ajmeri Gate, Jaipur - 302003
              </p>
              <p className="text-slate-400 text-xs">
                Run by Naveen Kumar Vijay • 15+ Years Trust • Pan-India Mail-In Service
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              id="footer-call-btn"
              href={`tel:${SHOP_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {SHOP_INFO.phone}</span>
            </a>
            <a
              id="footer-whatsapp-btn"
              href={SHOP_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp Message</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                <Wrench className="w-4 h-4 text-amber-300" />
              </div>
              <span className="text-base font-extrabold text-white tracking-tight uppercase">
                BALAJI MOBILE
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Proprietor: <strong className="text-slate-200">Naveen Kumar Vijay</strong>. Delivering chip-level smartphone repairs and original parts replacement with 15+ years of practical excellence at Raisar Plaza, Jaipur.
            </p>
            <p className="text-[11px] text-amber-400 font-semibold">
              Serving customers in Jaipur & across all 28 states via express courier delivery.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Repair Capabilities
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Apple iPhone OLED & Face ID Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Samsung AMOLED Curved Glass Lamination</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dead Phone Motherboard CPU Reballing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Water & Liquid Damage Restoration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Original Battery & Charging Port Replacement</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Camera Sapphire Glass & Sensor Fixes</a></li>
            </ul>
          </div>

          {/* Col 3: Courier & Location Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Raisar Plaza Shop & Courier
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#mail-in-courier" className="hover:text-white transition-colors">All-India Mail-In Guide</a></li>
              <li><a href="#mail-in-courier" className="hover:text-white transition-colors">Generate Parcel Packing Slip</a></li>
              <li><a href="#cost-estimator" className="hover:text-white transition-colors">Repair Cost Calculator</a></li>
              <li><a href="#status-tracker" className="hover:text-white transition-colors">Live Job Status Tracking</a></li>
              <li><a href="#shop-location" className="hover:text-white transition-colors">Shop B-35 Google Map & Directions</a></li>
              <li><a href="#faq-section" className="hover:text-white transition-colors">Customer FAQs & Warranty</a></li>
            </ul>
          </div>

          {/* Col 4: Official Contact Card */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact & Address
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Shop B-35, Raisar Plaza, Ajmeri Gate, Jaipur, Rajasthan - 302003</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${SHOP_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white font-semibold">
                  {SHOP_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${SHOP_INFO.email}`} className="hover:text-white truncate">
                  {SHOP_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>10:30 AM - 8:30 PM (All 7 Days)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>
            © {new Date().getFullYear()} BALAJI MOBILE (Naveen Kumar Vijay). All rights reserved. Raisar Plaza, Jaipur.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px]">iPhone, Samsung, OnePlus & Android are trademarks of their respective owners.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
