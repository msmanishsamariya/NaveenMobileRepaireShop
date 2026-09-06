/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MailInProcess } from './components/MailInProcess';
import { CostEstimator } from './components/CostEstimator';
import { StatusTracker } from './components/StatusTracker';
import { ServicesGrid } from './components/ServicesGrid';
import { ShopLocation } from './components/ShopLocation';
import { TrustProof } from './components/TrustProof';
import { SeoFaq } from './components/SeoFaq';
import { Footer } from './components/Footer';
import { QuickContactFloater } from './components/QuickContactFloater';

export default function App() {
  const handleOpenBooking = () => {
    const el = document.getElementById('mail-in-courier');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // auto open generator if closed
      const genBtn = document.getElementById('open-packing-slip-generator-btn');
      if (genBtn && !document.getElementById('packing-slip-generator-section')) {
        genBtn.click();
      }
    }
  };

  const handleOpenTracker = () => {
    const el = document.getElementById('status-tracker');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const input = document.getElementById('tracker-search-input');
      if (input) {
        input.focus();
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} onOpenTracker={handleOpenTracker} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} onOpenTracker={handleOpenTracker} />
        <MailInProcess />
        <CostEstimator />
        <ServicesGrid />
        <StatusTracker />
        <ShopLocation />
        <TrustProof />
        <SeoFaq />
      </main>

      {/* Sticky Bottom Floater for Immediate Calls & WhatsApp */}
      <QuickContactFloater onOpenBooking={handleOpenBooking} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
