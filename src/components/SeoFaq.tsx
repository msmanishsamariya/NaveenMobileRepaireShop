import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, Tag, Phone, MessageSquare } from 'lucide-react';
import { FAQS, SEO_KEYWORD_TAGS, SHOP_INFO } from '../data/mockData';

export const SeoFaq: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]); // first two open by default

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  return (
    <section id="faq-section" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Clear, honest answers about our All-India courier process, pricing, turnaround times, and shop location at B-35 Raisar Plaza, Jaipur.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'courier', label: '📦 Courier & Postal Service' },
            { id: 'trust', label: '🛡️ Trust & Data Privacy' },
            { id: 'repair', label: '🔧 Repairs & Brands' },
            { id: 'pricing', label: '💰 Pricing & Warranty' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-slate-600 text-sm leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SEO Keyword & Search Discovery Cloud */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-4 h-4 text-blue-600" />
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Popular Search Topics & Service Areas
            </h3>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            Customers find Naveen Kumar Vijay across Jaipur & India with these search keywords:
          </p>
          <div className="flex flex-wrap gap-2">
            {SEO_KEYWORD_TAGS.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-10 text-center p-6 bg-slate-900 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-white">Have a specific question about your phone model?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Naveen is just a phone call or WhatsApp away.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SHOP_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{SHOP_INFO.phone}</span>
            </a>
            <a
              href={SHOP_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
