import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Mail, Share2, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { SHOP_INFO } from '../data/mockData';
import { naveenImg, raisarPlazaImg, shopCorridorImg } from '../assets/images';

export const ShopLocation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SHOP_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShareLocation = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Vijay Mobile Care - Shop B-35 Raisar Plaza Jaipur',
        text: `Visit Naveen Kumar Vijay for expert mobile repair at: ${SHOP_INFO.fullAddress}. Phone: ${SHOP_INFO.phone}`,
        url: SHOP_INFO.googleMapsUrl,
      }).catch(() => {});
    } else {
      handleCopy();
    }
  };

  return (
    <section id="shop-location" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>Jaipur Electronics Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Our Shop in Raisar Plaza, Jaipur
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Raisar Plaza at Ajmeri Gate is Rajasthan’s most renowned IT and electronics marketplace. Walk into <span className="font-bold text-slate-900">Shop B-35</span> for on-the-spot mobile repair or fast courier drop-off.
          </p>
        </div>

        {/* 2 Column Layout: Details & Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Detailed Location Information */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
              
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                    Physical Storefront
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">
                    Vijay Mobile Care
                  </h3>
                  <p className="text-sm font-semibold text-slate-600">
                    Naveen Kumar Vijay (Owner & Chief Technician)
                  </p>
                </div>
                <div className="relative shrink-0">
                  <img
                    src={naveenImg}
                    alt="Naveen Kumar Vijay"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-amber-400 shadow-md"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('naveen.jpg')) target.src = '/naveen.jpg';
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" title="In Shop" />
                </div>
              </div>

              {/* Exact Address */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Shop Address:</p>
                <p className="text-base font-bold text-slate-900 leading-snug">
                  Shop No. B-35, Raisar Plaza,
                </p>
                <p className="text-sm text-slate-700">
                  Near Ajmeri Gate, MI Road Area,
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  Jaipur, Rajasthan, India - 302003
                </p>
                <p className="text-xs text-slate-500 pt-1">
                  Landmark: {SHOP_INFO.landmark}
                </p>
              </div>

              {/* Business Hours & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Working Hours</span>
                  </div>
                  <p className="text-slate-600">10:30 AM - 8:30 PM</p>
                  <p className="text-emerald-700 font-semibold mt-0.5">Open All 7 Days a Week</p>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>Direct Call / WhatsApp</span>
                  </div>
                  <a
                    href={`tel:${SHOP_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-slate-900 font-bold hover:text-blue-600 block"
                  >
                    {SHOP_INFO.phone}
                  </a>
                  <p className="text-slate-500 text-[11px] truncate mt-0.5">
                    naveenvijay35@gmail.com
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  id="shop-get-directions-btn"
                  href={SHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-sm transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get GPS Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  id="shop-copy-address-btn"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-sm font-semibold transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <button
                  id="shop-share-location-btn"
                  onClick={handleShareLocation}
                  className="inline-flex items-center gap-1.5 py-3 px-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 text-sm font-semibold transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-emerald-600" />
                  <span>Share</span>
                </button>
              </div>

            </div>

            {/* How to Reach Guide */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 space-y-2">
              <p className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>How to Reach Shop B-35 Raisar Plaza:</span>
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                <li><strong>From Railway Station:</strong> 10 mins drive via Station Road to Ajmeri Gate / MI Road.</li>
                <li><strong>From Sindhi Camp Bus Stand:</strong> 7 mins by auto-rickshaw or e-rickshaw.</li>
                <li><strong>By Metro:</strong> De-board at Chandpole or Chhoti Chaupar Metro Station (5 mins walk).</li>
                <li><strong>Inside Raisar Plaza:</strong> Take stairs to Basement Floor, locate Shop B-35 (Vijay Mobile Care). Call Naveen ji if you need guidance.</li>
              </ul>
            </div>

          </div>

          {/* Right: Interactive / Visual Map Embed Area */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white rounded-3xl border border-slate-200 p-4 shadow-md flex-1 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-100 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800">
                    Live Map Location: Raisar Plaza, Ajmeri Gate
                  </span>
                </div>
                <a
                  id="shop-map-get-directions-header-btn"
                  href={SHOP_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 text-blue-100" />
                </a>
              </div>

              {/* Map Iframe for Raisar Plaza Jaipur with Exact Landmark Pin */}
              <div className="flex-1 min-h-[360px] w-full rounded-2xl overflow-hidden relative bg-slate-100 border border-slate-200">
                {/* Floating Get Directions Overlay Button */}
                <div className="absolute top-3 right-3 z-10">
                  <a
                    id="map-floating-get-directions-btn"
                    href={SHOP_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-lg shadow-blue-900/30 transition-transform hover:scale-105 active:scale-95"
                  >
                    <Navigation className="w-3.5 h-3.5 text-white" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3 text-blue-100" />
                  </a>
                </div>

                <iframe
                  id="raisar-plaza-map-iframe"
                  title="Raisar Plaza Ajmeri Gate Jaipur Map Location Pin"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.623190875429!2d75.81432177613608!3d26.918630976644026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6aa2dc91a7b%3A0xbce5c79e6727282a!2sRaisar%20Plaza!5e0!3m2!1sen!2sin!4v1725600000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  allow="geolocation"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Verified Pin Tag & Direction Button */}
              <div className="mt-3 p-3 bg-slate-50 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Verified Shop B-35, Basement Floor • Jaipur 302003</span>
                </span>
                <a
                  id="map-footer-get-directions-btn"
                  href={SHOP_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 text-blue-100" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Real Photos of Raisar Plaza & Shop Area */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Visual Guide & Photos
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                Inside Raisar Plaza & Shop B-35
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Familiarize yourself with our building, the marketplace corridor, and Naveen Kumar Vijay before your visit or mail-in dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Photo 1: Naveen Kumar Vijay */}
            <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs flex flex-col">
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={naveenImg}
                  alt="Naveen Kumar Vijay - Proprietor"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('naveen.jpg')) target.src = '/naveen.jpg';
                  }}
                />
                <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Proprietor & Expert
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Naveen Kumar Vijay</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Senior Hardware Engineer with 15+ years of micro-soldering experience, ready to assist you directly at Shop B-35.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Bench Specialist</span>
                  <span className="text-emerald-600 font-bold">● Available Daily</span>
                </div>
              </div>
            </div>

            {/* Photo 2: Raisar Plaza Atrium */}
            <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs flex flex-col">
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={raisarPlazaImg}
                  alt="Raisar Plaza Central Atrium"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('raisar-plaza.jpg')) target.src = '/raisar-plaza.jpg';
                  }}
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Plaza Atrium View
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Raisar Plaza, Ajmeri Gate</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Rajasthan’s famous multi-level IT & electronics commercial center at Ajmeri Gate, Jaipur.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Main Entrance</span>
                  <span className="text-blue-600 font-bold">Ajmeri Gate Side</span>
                </div>
              </div>
            </div>

            {/* Photo 3: Market Alley & Electronics Corridor */}
            <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs flex flex-col">
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={shopCorridorImg}
                  alt="Raisar Plaza Electronics Corridor and Shop B-35"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('shop-corridor.jpg')) target.src = '/shop-corridor.jpg';
                  }}
                />
                <div className="absolute top-3 left-3 bg-slate-900 text-amber-400 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Shop Corridor
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Basement Level • Shop B-35</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Walk down into the electronics repair lane to locate Vijay Mobile Care at Shop B-35.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Basement Floor</span>
                  <span className="text-amber-700 font-bold">Shop No. B-35</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
