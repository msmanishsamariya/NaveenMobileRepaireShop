import React, { useState } from 'react';
import { Search, Package, CheckCircle2, Clock, Truck, ShieldCheck, MapPin, AlertCircle, Phone, ArrowRight, X } from 'lucide-react';
import { SAMPLE_TRACKING_ORDERS, SHOP_INFO } from '../data/mockData';
import { TrackingRecord } from '../types';

interface StatusTrackerProps {
  isOpenModal?: boolean;
  onClose?: () => void;
}

export const StatusTracker: React.FC<StatusTrackerProps> = ({ isOpenModal = false, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRecord, setActiveRecord] = useState<TrackingRecord | null>(SAMPLE_TRACKING_ORDERS[0]);
  const [searched, setSearched] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.trim().toLowerCase();
    const found = SAMPLE_TRACKING_ORDERS.find(
      (r) =>
        r.trackingId.toLowerCase().includes(query) ||
        r.phone.toLowerCase().includes(query) ||
        r.customerName.toLowerCase().includes(query) ||
        r.dispatchTrackingNo?.toLowerCase().includes(query)
    );

    setSearched(true);
    if (found) {
      setActiveRecord(found);
      setNotFound(false);
    } else {
      setNotFound(true);
      setActiveRecord(null);
    }
  };

  const selectSample = (sample: TrackingRecord) => {
    setSearchQuery(sample.trackingId);
    setActiveRecord(sample);
    setSearched(true);
    setNotFound(false);
  };

  const steps = [
    { title: "Parcel Received", desc: "Received at Shop B-35 Raisar Plaza" },
    { title: "Diagnosis & Quote", desc: "Video inspection & client consent" },
    { title: "Active Repair", desc: "Chip-level soldering & parts change" },
    { title: "Quality Testing", desc: "30-point performance verification" },
    { title: "Dispatched Back", desc: "Handed to courier with tracking #" }
  ];

  return (
    <section id="status-tracker" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Package className="w-3.5 h-3.5 text-indigo-600" />
            <span>Real-Time Job Tracking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Track Your Phone Repair & Courier Status
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Check the live progress of your mobile phone at Shop B-35, Raisar Plaza, Jaipur. Enter your Job Slip ID, phone number, or Courier Consignment number.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                id="tracker-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Job Slip ID (e.g. VK-JAIPUR-8902 or your phone no.)"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden shadow-xs"
              />
            </div>
            <button
              id="tracker-search-submit"
              type="submit"
              className="px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Track Device</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Sample Badges */}
          <div className="mt-3 flex items-center gap-2 flex-wrap text-xs text-slate-500 justify-center">
            <span>Try sample lookups:</span>
            {SAMPLE_TRACKING_ORDERS.map((sample) => (
              <button
                key={sample.trackingId}
                onClick={() => selectSample(sample)}
                className="font-mono text-blue-600 hover:underline bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded border border-blue-200 cursor-pointer"
              >
                {sample.trackingId}
              </button>
            ))}
          </div>
        </div>

        {/* Not Found Alert */}
        {notFound && (
          <div className="max-w-2xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 text-center text-sm text-amber-900">
            <AlertCircle className="w-6 h-6 text-amber-600 mx-auto mb-2" />
            <p className="font-bold">No active record found for "{searchQuery}"</p>
            <p className="text-xs text-amber-800 mt-1">
              If you just dispatched your parcel or dropped it off today, please call Naveen Kumar Vijay directly at <span className="font-bold">+91 95095 52035</span> or message on WhatsApp to get the current update.
            </p>
            <a
              href={SHOP_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Ask Naveen on WhatsApp</span>
            </a>
          </div>
        )}

        {/* Active Record Display Card */}
        {activeRecord && (
          <div id="tracker-result-card" className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-xl">
            
            {/* Top Bar of Record */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/20 border border-amber-500/30 px-2.5 py-1 rounded-md">
                    JOB ID: {activeRecord.trackingId}
                  </span>
                  <span className="text-xs text-slate-400">
                    Received: {activeRecord.receivedDate}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-2">
                  {activeRecord.device}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Customer: <span className="font-semibold text-white">{activeRecord.customerName}</span> ({activeRecord.city}) • Fault: <span className="text-amber-300 font-semibold">{activeRecord.issue}</span>
                </p>
              </div>

              <div className="text-left sm:text-right bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                <span className="text-xs text-slate-400 uppercase tracking-wider block">Estimated Finish / Delivery</span>
                <span className="text-sm font-bold text-emerald-400 mt-0.5 block">
                  {activeRecord.estimatedCompletion}
                </span>
                {activeRecord.dispatchTrackingNo && (
                  <span className="text-[11px] font-mono text-slate-300 block mt-1">
                    Courier: {activeRecord.courierPartner} #{activeRecord.dispatchTrackingNo}
                  </span>
                )}
              </div>
            </div>

            {/* Step Progression Timeline */}
            <div className="py-4">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
                {steps.map((step, index) => {
                  const isDone = index < activeRecord.currentStep;
                  const isCurrent = index === activeRecord.currentStep;
                  return (
                    <div key={step.title} className="relative flex sm:flex-col items-start sm:items-center gap-3 sm:gap-2 text-left sm:text-center">
                      {/* Step Bubble */}
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
                        isDone
                          ? 'bg-emerald-500 text-slate-950 ring-4 ring-emerald-500/20'
                          : isCurrent
                          ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/25 animate-pulse'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}>
                        {isDone ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                      </div>

                      {/* Step Text */}
                      <div>
                        <p className={`text-xs font-bold ${
                          isCurrent ? 'text-amber-300' : isDone ? 'text-white' : 'text-slate-500'
                        }`}>
                          {step.title}
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technician Notes from Naveen Kumar Vijay */}
            <div className="mt-8 pt-6 border-t border-slate-800 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <WrenchIcon className="w-3.5 h-3.5" />
                  Technician Live Notes (Naveen Kumar Vijay - Shop B-35)
                </span>
                <span className="text-[10px] text-slate-400">Raisar Plaza Workstation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-mono">
                {activeRecord.notes}
              </p>
            </div>

            {/* Action buttons inside card */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Device Location: Shop B-35, Raisar Plaza, Ajmeri Gate, Jaipur</span>
              </div>
              <a
                href={SHOP_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold"
              >
                <span>Need to speak with Naveen regarding this job? WhatsApp Here</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

function WrenchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
