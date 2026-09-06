import React from 'react';
import { Phone, MessageSquare, Package } from 'lucide-react';
import { SHOP_INFO } from '../data/mockData';

interface QuickContactFloaterProps {
  onOpenBooking: () => void;
}

export const QuickContactFloater: React.FC<QuickContactFloaterProps> = ({ onOpenBooking }) => {
  return (
    <aside id="floating-action-dock" aria-label="Quick Actions" className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-40 max-w-md sm:max-w-none">
      <div className="bg-slate-950/95 backdrop-blur-md text-white p-2 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-2">
        {/* Call Naveen Button */}
        <a
          id="floater-call-button"
          href={`tel:${SHOP_INFO.phone.replace(/[^0-9+]/g, '')}`}
          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-sm transition-all"
        >
          <Phone className="w-4 h-4" />
          <span>Call Naveen</span>
        </a>

        {/* WhatsApp Chat Button */}
        <a
          id="floater-whatsapp-button"
          href={SHOP_INFO.whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Courier Mail-In Button */}
        <button
          id="floater-courier-button"
          onClick={onOpenBooking}
          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-sm transition-all cursor-pointer"
        >
          <Package className="w-4 h-4" />
          <span className="hidden xs:inline">Courier</span>
          <span>Slip</span>
        </button>
      </div>
    </aside>
  );
};
