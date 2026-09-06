import React, { useState, useMemo } from 'react';
import { Calculator, Clock, ShieldCheck, CheckCircle2, MessageSquare, Phone, ArrowRight, Sparkles, Wrench } from 'lucide-react';
import { BRANDS_LIST, REPAIR_ISSUES, SHOP_INFO } from '../data/mockData';

export const CostEstimator: React.FC = () => {
  const [selectedBrandIndex, setSelectedBrandIndex] = useState<number>(0);
  const [selectedModel, setSelectedModel] = useState<string>(BRANDS_LIST[0].models[0]);
  const [selectedIssueId, setSelectedIssueId] = useState<string>(REPAIR_ISSUES[0].id);
  const [urgency, setUrgency] = useState<'standard' | 'express'>('standard');

  const selectedBrand = BRANDS_LIST[selectedBrandIndex];
  const selectedIssue = REPAIR_ISSUES.find((i) => i.id === selectedIssueId) || REPAIR_ISSUES[0];

  // Calculate pricing logic with brand multipliers
  const estimate = useMemo(() => {
    let brandMultiplier = 1.0;
    if (selectedBrand.brand.includes('Apple')) {
      brandMultiplier = 1.6;
    } else if (selectedBrand.brand.includes('Samsung')) {
      brandMultiplier = 1.4;
    } else if (selectedBrand.brand.includes('Pixel')) {
      brandMultiplier = 1.35;
    } else if (selectedBrand.brand.includes('OnePlus')) {
      brandMultiplier = 1.25;
    }

    // Model generation multiplier
    if (selectedModel.includes('16') || selectedModel.includes('15') || selectedModel.includes('S24') || selectedModel.includes('Fold')) {
      brandMultiplier *= 1.3;
    } else if (selectedModel.includes('14') || selectedModel.includes('S23')) {
      brandMultiplier *= 1.15;
    }

    const minPrice = Math.round((selectedIssue.basePrice * brandMultiplier) / 50) * 50;
    const maxPrice = Math.round((minPrice * 1.35) / 50) * 50;

    return {
      minPrice,
      maxPrice,
      time: selectedIssue.timeEstimate,
      warranty: selectedIssue.category === 'motherboard' ? '30 Days Testing Warranty' : '90 Days Service Warranty'
    };
  }, [selectedBrand, selectedModel, selectedIssue]);

  const handleWhatsAppQuote = () => {
    const text = `Hello Naveen ji, I saw your website for Raisar Plaza shop.%0A%0A` +
      `*Brand:* ${encodeURIComponent(selectedBrand.brand)}%0A` +
      `*Model:* ${encodeURIComponent(selectedModel)}%0A` +
      `*Issue:* ${encodeURIComponent(selectedIssue.name)}%0A` +
      `*Estimated Cost Shown:* ₹${estimate.minPrice} - ₹${estimate.maxPrice}%0A%0A` +
      `Could you please confirm the final price and part availability? I want to get it repaired.`;

    window.open(`https://wa.me/${SHOP_INFO.rawPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="cost-estimator" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Instant Repair Cost & Time Estimator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Get an honest estimate before visiting Shop B-35 in Raisar Plaza or sending your phone by courier. No hidden fees, no diagnostic surprises.
          </p>
        </div>

        {/* Estimator Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Selectors */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-slate-200">
              
              {/* Step 1: Select Brand */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>1. Select Phone Brand</span>
                  <span className="text-blue-600 font-medium lowercase">iPhone, Samsung & all Android</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {BRANDS_LIST.map((b, idx) => (
                    <button
                      key={b.brand}
                      type="button"
                      onClick={() => {
                        setSelectedBrandIndex(idx);
                        setSelectedModel(b.models[0]);
                      }}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                        selectedBrandIndex === idx
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {b.brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Model */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Select Model Family ({selectedBrand.brand})
                </label>
                <select
                  id="estimator-model-select"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-medium text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                >
                  {selectedBrand.models.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Select Issue */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  3. Select Repair Issue or Problem
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {REPAIR_ISSUES.map((issue) => {
                    const isSelected = selectedIssueId === issue.id;
                    return (
                      <button
                        key={issue.id}
                        type="button"
                        onClick={() => setSelectedIssueId(issue.id)}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex items-start gap-2.5 ${
                          isSelected
                            ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500/20 shadow-xs'
                            : 'bg-white hover:bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center shrink-0 border ${
                          isSelected ? 'border-blue-600 bg-blue-600' : 'border-slate-300'
                        }`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <div>
                          <p className={`text-xs font-bold ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>
                            {issue.name}
                          </p>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            Est. {issue.timeEstimate}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Estimate Output & Actions */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-10 text-white flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Estimated Repair Summary
                    </span>
                  </div>
                  <span className="text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                    No Fix No Fee
                  </span>
                </div>

                {/* Device & Issue Chosen */}
                <div>
                  <p className="text-xs text-slate-400">Selected Device & Issue</p>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedBrand.brand}
                  </h3>
                  <p className="text-sm font-semibold text-blue-400">
                    {selectedModel}
                  </p>
                  <p className="text-xs text-slate-300 mt-2 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/60">
                    Fault: <span className="font-semibold text-amber-300">{selectedIssue.name}</span>
                    <span className="block text-[11px] text-slate-400 mt-1">{selectedIssue.description}</span>
                  </p>
                </div>

                {/* Estimated Price Range */}
                <div className="bg-slate-800/90 rounded-2xl p-5 border border-slate-700 shadow-inner">
                  <p className="text-xs text-slate-400 font-medium">Estimated Cost (Parts + Expert Labor)</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                      ₹{estimate.minPrice.toLocaleString('en-IN')} - ₹{estimate.maxPrice.toLocaleString('en-IN')}*
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    *Exact cost depends on glass vs combo replacement or specific IC chip requirement.
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-700 grid grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{estimate.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{estimate.warranty}</span>
                    </div>
                  </div>
                </div>

                {/* Trust Points */}
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Naveen Kumar Vijay (15+ Yrs Master Technician)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free Video Diagnostics for Courier Customers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Original OCA Glass Lamination Equipment</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-8 space-y-3">
                <button
                  id="estimator-whatsapp-quote-btn"
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Exact Quote on WhatsApp</span>
                </button>

                <a
                  id="estimator-call-quote-btn"
                  href={`tel:${SHOP_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Or Call Directly: {SHOP_INFO.phone}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
