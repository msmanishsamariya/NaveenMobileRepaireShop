import React from 'react';
import { Smartphone, Cpu, ShieldAlert, BatteryCharging, Camera, Volume2, ShieldCheck, Zap, ArrowRight, MessageSquare } from 'lucide-react';
import { SHOP_INFO } from '../data/mockData';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      id: "srv-motherboard",
      title: "Chip-Level Motherboard Repair",
      subtitle: "Dead phone revival & micro-soldering",
      description: "Specialized double-decker CPU & RAM reballing, power IC replacement, short-circuit diagnostics using thermal imaging. Solves dead phones that other shops reject.",
      tags: ["CPU Reballing", "Power IC", "Dead Phone Fix", "Short Circuit Tracing"],
      highlight: "Naveen's 15-Year Core Specialty",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      icon: Cpu,
    },
    {
      id: "srv-iphone",
      title: "Apple iPhone Master Service",
      subtitle: "iPhone 7 to iPhone 16 Pro Max",
      description: "Original OLED displays with True Tone calibration, Face ID infrared repair, laser back glass replacement without dismantling the chassis, battery health restoration.",
      tags: ["True Tone Transfer", "Face ID Fix", "Back Glass Laser", "Audio IC"],
      highlight: "All iPhone Models",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      icon: Smartphone,
    },
    {
      id: "srv-samsung",
      title: "Samsung AMOLED & Curved Glass",
      subtitle: "S-Series, Z-Fold & Z-Flip Specialist",
      description: "Curved edge glass replacement with original OCA vacuum lamination. Green line / flex bonding laser repairs, Fold/Flip hinge flex cable replacement at fraction of service center price.",
      tags: ["Curved Glass OCA", "Green Line Fix", "Fold & Flip Hinge", "S-Pen Layer"],
      highlight: "High Success Rate",
      badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
      icon: Smartphone,
    },
    {
      id: "srv-battery",
      title: "Original Battery Replacement",
      subtitle: "Full-day backup restored in 20 mins",
      description: "Grade-A high-density battery cells with built-in thermal protection. Eliminates rapid battery drain, unexpected shutdowns, and swollen batteries safely.",
      tags: ["100% Battery Health", "Quick 20-Min Swap", "90-Day Warranty", "Zero Warning Popup"],
      highlight: "Instant Walk-In Service",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      icon: BatteryCharging,
    },
    {
      id: "srv-water",
      title: "Liquid & Water Damage Treatment",
      subtitle: "Ultrasonic chemical decontamination",
      description: "Immediate board immersion in professional ultrasonic bath, corrosion clearing, micro-component replacement, and prioritized customer data recovery.",
      tags: ["Data Safety", "Ultrasonic Cleaning", "Corrosion Removal", "Same-Day Rescue"],
      highlight: "Urgent Treatment",
      badgeColor: "bg-cyan-100 text-cyan-900 border-cyan-300",
      icon: ShieldAlert,
    },
    {
      id: "srv-camera-audio",
      title: "Camera, Charging Port & Audio",
      subtitle: "Original sapphire lens & jacks",
      description: "Cracked camera glass replacement, OIS blur correction, USB-C loose charging port fix, earpiece low volume, and loud speaker buzzing repairs.",
      tags: ["Sapphire Lens", "Type-C Port", "Earpiece Audio", "OIS Stabilization"],
      highlight: "30-Min Fast Fix",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      icon: Camera,
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Complete Hardware & Chip-Level Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Mobile Repair Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            With 15+ years of practical experience at Shop B-35 Raisar Plaza, Naveen Kumar Vijay handles every repair in-house with modern microscope soldering stations and zero third-party outsourcing.
          </p>
        </div>

        {/* Services 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                id={srv.id}
                className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${srv.badgeColor}`}>
                      {srv.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mb-3">
                    {srv.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <div>
                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-200">
                    {srv.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Consultation CTA */}
                  <a
                    href={`https://wa.me/${SHOP_INFO.rawPhone}?text=Hello%20Naveen%20ji,%20I%20need%20assistance%20with%20${encodeURIComponent(srv.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-blue-600 text-slate-800 hover:text-white font-semibold text-xs border border-slate-300 hover:border-blue-600 transition-all shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold">
              Have an unusual or complex phone issue not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-blue-100">
              Speak directly with Naveen Kumar Vijay. 15 years of troubleshooting means no fault is new to us.
            </p>
          </div>
          <a
            id="services-direct-call-cta"
            href={`tel:${SHOP_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md whitespace-nowrap transition-colors"
          >
            Call: {SHOP_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
};
