import React from 'react';
import { Award, ShieldCheck, ThumbsUp, Truck, Users, Star, CheckCircle2, Lock, HeartHandshake } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/mockData';
import { naveenImg } from '../assets/images';

export const TrustProof: React.FC = () => {
  return (
    <section id="trust-guarantee" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Badges Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>15 Years of Proven Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Thousands Trust Naveen Kumar Vijay
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Repairing sensitive electronic devices requires deep hardware know-how and integrity. For 15+ years at Raisar Plaza, we have built a reputation of honesty, original parts, and transparent customer service.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 mx-auto flex items-center justify-center font-bold mb-3">
              <Award className="w-6 h-6" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">15+</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Years Experience</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Serving at Raisar Plaza</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-bold mb-3">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">45,000+</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Phones Repaired</p>
            <p className="text-[11px] text-slate-500 mt-0.5">iPhone & Android chip-level</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 mx-auto flex items-center justify-center font-bold mb-3">
              <Truck className="w-6 h-6" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">28+</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">States Covered</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Pan-India mail-in service</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 mx-auto flex items-center justify-center font-bold mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">100%</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Genuine Quality</p>
            <p className="text-[11px] text-slate-500 mt-0.5">No fix, no fee policy</p>
          </div>
        </div>

        {/* Meet Naveen Kumar Vijay - Owner Spotlight Card */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl mb-16 text-white relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="relative shrink-0">
              <img
                src={naveenImg}
                alt="Naveen Kumar Vijay - Proprietor of Vijay Mobile Care"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover object-top border-4 border-amber-400 shadow-2xl"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('naveen.jpg')) target.src = '/naveen.jpg';
                }}
              />
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-slate-900 shadow-xs flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified</span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Proprietor & Master Hardware Technician</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                "Your Phone Stays Directly In My Hands."
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                “When you walk into Shop B-35 or courier your smartphone from any corner of India, your phone does not get handed off to untrained third parties. I personally diagnose the micro-circuitry under the microscope, keep your private data safe, and record video explanations before any repair. That is the 15-year reputation of Vijay Mobile Care at Raisar Plaza.”
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-slate-400">
                <span className="text-amber-400">— Naveen Kumar Vijay</span>
                <span>•</span>
                <span>Shop No. B-35, Raisar Plaza, Jaipur</span>
                <span>•</span>
                <span className="text-emerald-400">WhatsApp: +91 95095 52035</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Trust */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-16">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Our 4-Point Customer Guarantee
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Every device entrusted to us is handled with clinical precision and complete transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold mb-3">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-white">No Fix, No Fee</h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                If your phone’s motherboard is beyond repair, you pay ₹0 service charge. We only charge when you are 100% satisfied.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-emerald-400 text-slate-950 flex items-center justify-center font-bold mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-white">100% Data Confidentiality</h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Photos, WhatsApp chats, and personal files remain untouched. Hardware repairs do not require accessing your private data.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-bold mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-white">Transparent Video Proof</h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                For courier repairs, Naveen shares a video diagnosis on WhatsApp detailing what is damaged and explaining the exact repair cost.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-indigo-400 text-slate-950 flex items-center justify-center font-bold mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-white">Part Replacement Warranty</h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Enjoy 30 to 90 days replacement warranty on all replaced screens, batteries, and charging ports with zero hassle.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Verified Feedback
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                What Our Customers Say
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-2 sm:mt-0">
              Real reviews from walk-in visitors at Raisar Plaza and mail-in courier clients across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      rev.type === 'courier'
                        ? 'bg-indigo-100 text-indigo-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {rev.type === 'courier' ? '📦 Courier Client' : '📍 Walk-in Shop B-35'}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-blue-700 mb-2">
                    {rev.device} • {rev.serviceType}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-slate-900">{rev.name}</p>
                    <p className="text-[11px] text-slate-500">{rev.location}</p>
                  </div>
                  <span className="text-[10px] text-slate-400">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
