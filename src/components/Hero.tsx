import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Package, ShieldCheck, CheckCircle2, Award, Copy, Check, ArrowRight, Truck } from 'lucide-react';
import { SHOP_INFO } from '../data/mockData';
import { naveenImg, raisarPlazaImg } from '../assets/images';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenTracker: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenTracker }) => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      `Naveen Kumar Vijay, Shop No. B-35, Raisar Plaza, Ajmeri Gate, Jaipur, Rajasthan - 302003. Contact: +91 95095 52035`
    );
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 3000);
  };

  return (
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Experience & Location Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                15+ Years Experience (Since 2009)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                Shop B-35, Raisar Plaza, Jaipur
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Truck className="w-3.5 h-3.5 text-emerald-400" />
                All-India Courier Repair
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Expert Mobile Repair in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
                Raisar Plaza, Jaipur
              </span>{' '}
              & All-India Courier Service
            </h1>

            {/* Owner Profile Highlight with Image */}
            <div className="flex items-center gap-3.5 p-3 bg-slate-800/80 rounded-2xl border border-slate-700/80 max-w-xl mx-auto lg:mx-0 backdrop-blur-xs shadow-lg">
              <div className="relative shrink-0">
                <img
                  id="hero-naveen-photo"
                  src={naveenImg || '/naveen.jpg'}
                  alt="Naveen Kumar Vijay - Master Mobile Technician"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover object-[center_18%] border-2 border-amber-400 shadow-md bg-slate-800"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.endsWith('/naveen.jpg')) {
                      target.src = '/naveen.jpg';
                    }
                  }}
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full" title="Active in Shop B-35" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-extrabold text-white text-sm sm:text-base">Naveen Kumar Vijay</span>
                  <span className="text-[10px] uppercase tracking-wider font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full">
                    Shop Owner & Specialist
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-snug">
                  15+ years repairing dead iPhones, Samsung AMOLED screens & motherboards at <strong className="text-white">Shop B-35 Raisar Plaza</strong>.
                </p>
              </div>
            </div>

            {/* Sub-headline with Owner credibility */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Visit our walk-in shop in Jaipur or courier your smartphone from any city across India. Every device is inspected personally by Naveen with video diagnosis before any repair begins.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                id="hero-call-btn"
                href={`tel:${SHOP_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {SHOP_INFO.phone}</span>
              </a>

              <button
                id="hero-book-courier-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base border border-blue-400/30 shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
              >
                <Package className="w-5 h-5 text-blue-200" />
                <span>Book Mail-In / Courier Repair</span>
              </button>

              <a
                id="hero-whatsapp-btn"
                href={SHOP_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 font-semibold text-sm border border-slate-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Micro Trust Points */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                No Fix, No Fee Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% Genuine Spares
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Same-Day Repair Available
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Video Proof Before Repair
              </span>
            </div>
          </div>

          {/* Right Card: Mail-In & Raisar Plaza Shop Hub Card */}
          <div className="lg:col-span-5">
            <div id="hero-courier-address-card" className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700/80 p-5 sm:p-6 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">Post / Courier Your Phone</h2>
                    <p className="text-xs text-slate-400">All-India Mail-In Repair Service</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Active
                </span>
              </div>

              {/* Destination Photo Banner */}
              <div className="relative rounded-xl overflow-hidden mb-4 border border-slate-700 h-28 sm:h-32 group">
                <img
                  src={raisarPlazaImg}
                  alt="Raisar Plaza Jaipur Atrium"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('raisar-plaza.jpg')) {
                      target.src = '/raisar-plaza.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-3">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Raisar Plaza, Ajmeri Gate
                      </p>
                      <p className="text-[10px] text-slate-300">Rajasthan’s Premier IT & Mobile Hub</p>
                    </div>
                    <span className="text-[10px] bg-blue-600/90 text-white font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                      Shop B-35
                    </span>
                  </div>
                </div>
              </div>

              {/* Shop Delivery Address Box */}
              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-700/60 mb-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Shipment Delivery Address
                  </span>
                  <button
                    id="hero-copy-address-btn"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-sm text-slate-200 leading-relaxed font-mono bg-slate-950/60 p-3 rounded-lg border border-slate-800 select-all">
                  <p className="font-bold text-white">To: Naveen Kumar Vijay</p>
                  <p>Shop No. B-35, Raisar Plaza, Ajmeri Gate</p>
                  <p>Jaipur, Rajasthan, India - 302003</p>
                  <p className="text-amber-300 font-sans font-semibold text-xs mt-1">
                    Phone: +91 95095 52035
                  </p>
                </div>

                <p className="text-[11px] text-slate-400 italic">
                  💡 Send via DTDC, Blue Dart, Delhivery, or Speed Post. We confirm receipt via WhatsApp video!
                </p>
              </div>

              {/* 3 Quick Steps */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs mb-4">
                <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/50">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 mx-auto mb-1 flex items-center justify-center font-bold text-[10px]">
                    1
                  </div>
                  <p className="font-semibold text-white">Pack Safely</p>
                  <p className="text-[10px] text-slate-400">Bubble wrap parcel</p>
                </div>

                <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/50">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 mx-auto mb-1 flex items-center justify-center font-bold text-[10px]">
                    2
                  </div>
                  <p className="font-semibold text-white">We Inspect & Fix</p>
                  <p className="text-[10px] text-slate-400">Video call estimate</p>
                </div>

                <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/50">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 mx-auto mb-1 flex items-center justify-center font-bold text-[10px]">
                    3
                  </div>
                  <p className="font-semibold text-white">Doorstep Return</p>
                  <p className="text-[10px] text-slate-400">Insured express post</p>
                </div>
              </div>

              {/* Action Buttons in Card */}
              <div className="flex items-center gap-2">
                <button
                  id="hero-card-generate-slip-btn"
                  onClick={onOpenBooking}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Generate Packing Slip</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  id="hero-card-track-btn"
                  onClick={onOpenTracker}
                  className="py-2.5 px-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Track Parcel
                </button>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Walk-in also welcome at Shop B-35</span>
                <a
                  id="hero-card-directions-link"
                  href={SHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline inline-flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
