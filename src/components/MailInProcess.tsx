import React, { useState } from 'react';
import { Package, Truck, ShieldCheck, Copy, Check, Printer, Send, AlertCircle, Phone, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { SHOP_INFO, BRANDS_LIST } from '../data/mockData';
import { MailInParcelSlip } from '../types';
import { raisarPlazaImg } from '../assets/images';

interface MailInProcessProps {
  initialOpenModal?: boolean;
}

export const MailInProcess: React.FC<MailInProcessProps> = () => {
  const [copied, setCopied] = useState(false);
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [submittedSlip, setSubmittedSlip] = useState<MailInParcelSlip | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [altPhone, setAltPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Rajasthan');
  const [pincode, setPincode] = useState('');
  const [brand, setBrand] = useState('Apple iPhone');
  const [model, setModel] = useState('');
  const [issue, setIssue] = useState('');
  const [passcode, setPasscode] = useState('');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      `TO: Naveen Kumar Vijay\nShop No. B-35, Raisar Plaza, Ajmeri Gate\nJaipur, Rajasthan, India - 302003\nMobile: +91 95095 52035\nEmail: naveenvijay35@gmail.com`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleGenerateSlip = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address || !city || !pincode || !model || !issue) {
      alert('Please fill in your name, phone, return address, phone model and issue.');
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const slip: MailInParcelSlip = {
      senderName: name,
      senderPhone: phone,
      senderAltPhone: altPhone,
      senderEmail: email,
      senderAddress: address,
      senderCity: city,
      senderState: state,
      senderPincode: pincode,
      deviceBrand: brand,
      deviceModel: model,
      passcodeNote: passcode || 'None provided / will test via video call',
      issueDescription: issue,
      slipId: `VK-IN-${randomNum}`,
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    };

    setSubmittedSlip(slip);
  };

  const handleSendToWhatsApp = () => {
    if (!submittedSlip) return;
    const msg = `*NEW MAIL-IN REPAIR BOOKING (ID: ${submittedSlip.slipId})*%0A%0A` +
      `*Customer:* ${encodeURIComponent(submittedSlip.senderName)}%0A` +
      `*Phone:* ${encodeURIComponent(submittedSlip.senderPhone)}%0A` +
      `*City/State:* ${encodeURIComponent(submittedSlip.senderCity)}, ${encodeURIComponent(submittedSlip.senderState)} (${encodeURIComponent(submittedSlip.senderPincode)})%0A` +
      `*Return Address:* ${encodeURIComponent(submittedSlip.senderAddress)}%0A` +
      `*Device:* ${encodeURIComponent(submittedSlip.deviceBrand)} ${encodeURIComponent(submittedSlip.deviceModel)}%0A` +
      `*Fault Description:* ${encodeURIComponent(submittedSlip.issueDescription)}%0A%0A` +
      `I am dispatching this device to your Raisar Plaza Shop B-35 address via courier. Please confirm receipt when it arrives!`;

    window.open(`https://wa.me/${SHOP_INFO.rawPhone}?text=${msg}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="mail-in-courier" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Truck className="w-3.5 h-3.5 text-blue-600" />
            <span>Pan-India Courier Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How All-India Mail-In Mobile Repair Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            No matter where you live in India, you can safely courier your broken mobile phone to Naveen Kumar Vijay’s shop in Raisar Plaza, Jaipur. We repair it with video diagnosis and courier it right back to your home!
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Step 1 */}
          <div id="courier-step-1" className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all relative">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg mb-5 shadow-sm shadow-blue-500/30">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Book or Call First</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Call Naveen ji at <span className="font-semibold text-slate-900">+91 95095 52035</span> or message on WhatsApp. Describe your phone model and issue to get a quick estimate.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-blue-700 font-semibold flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              <span>Direct expert consultation</span>
            </div>
          </div>

          {/* Step 2 */}
          <div id="courier-step-2" className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all relative">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-lg mb-5 shadow-sm shadow-indigo-500/30">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Pack & Post Phone</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Wrap phone with 3-4 layers of bubble wrap in a small cardboard box. Dispatch via DTDC, Blue Dart, Delhivery, or Speed Post to our Raisar Plaza address.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-indigo-700 font-semibold flex items-center gap-1">
              <Package className="w-3.5 h-3.5" />
              <span>Use our printable packing slip</span>
            </div>
          </div>

          {/* Step 3 */}
          <div id="courier-step-3" className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all relative">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold text-lg mb-5 shadow-sm shadow-amber-500/30">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Video Inspection</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              When parcel reaches Shop B-35, Naveen personally inspects it. You receive a video showing the internal condition and exact repair quote before any work starts.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-amber-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% transparency & trust</span>
            </div>
          </div>

          {/* Step 4 */}
          <div id="courier-step-4" className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all relative">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-lg mb-5 shadow-sm shadow-emerald-500/30">
              04
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Returned to Doorstep</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              After 30-point quality check, phone is packed in heavy shockproof boxing and couriered back to your address with tracking number via express delivery.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-emerald-700 font-semibold flex items-center gap-1">
              <Truck className="w-3.5 h-3.5" />
              <span>Insured return courier</span>
            </div>
          </div>

        </div>

        {/* Address & Packing Slip Action Card */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Verified Delivery Address */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Official Delivery Destination for All Couriers</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Parcel Courier Address:
              </h3>
              
              <div className="bg-slate-800/80 border border-slate-700 p-4 sm:p-5 rounded-2xl">
                <div className="flex flex-col sm:flex-row gap-4 items-start mb-3">
                  <div className="relative w-full sm:w-36 h-28 rounded-xl overflow-hidden shrink-0 border border-slate-700">
                    <img
                      src={raisarPlazaImg}
                      alt="Raisar Plaza Jaipur"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('raisar-plaza.jpg')) target.src = '/raisar-plaza.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-2">
                      <span className="text-[10px] font-bold text-amber-300">Shop B-35</span>
                    </div>
                  </div>
                  <div className="font-mono text-sm leading-relaxed select-all flex-1">
                    <p className="font-bold text-amber-300 text-base">To: Naveen Kumar Vijay (BALAJI MOBILE)</p>
                    <p className="text-slate-100">Shop No. B-35, Raisar Plaza, Ajmeri Gate</p>
                    <p className="text-slate-100">Jaipur, Rajasthan, India - 302003</p>
                    <p className="text-slate-300 mt-2 font-sans font-semibold text-xs">
                      Recipient Contact: <span className="text-amber-400 font-bold">+91 95095 52035</span>
                    </p>
                    <p className="text-slate-400 text-xs font-sans">
                      Email: naveenvijay35@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="copy-courier-address-btn"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-600 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Address Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-300" />
                      <span>Copy Full Postal Address</span>
                    </>
                  )}
                </button>

                <a
                  id="courier-whatsapp-inquiry"
                  href={SHOP_INFO.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Inform Naveen on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Packing Slip Generator Trigger */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto shadow-md">
                <Printer className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Generate Parcel Packing Slip
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Create a ready-to-print or copy parcel label with your return address, device fault notes, and our Raisar Plaza destination address.
              </p>
              <button
                id="open-packing-slip-generator-btn"
                onClick={() => setIsGeneratorOpen(!isGeneratorOpen)}
                className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isGeneratorOpen ? 'Close Generator' : 'Open Parcel Label Generator'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Generator Form & Result Modal / Inline Section */}
        {isGeneratorOpen && (
          <div id="packing-slip-generator-section" className="mt-8 bg-slate-50 border border-slate-300 rounded-3xl p-6 sm:p-8 shadow-inner animate-in fade-in duration-300">
            {!submittedSlip ? (
              <form onSubmit={handleGenerateSlip} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Step 1: Fill Sender & Mobile Details for Parcel Label
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    This information will be printed on your parcel slip so we can identify your phone and dispatch it back to the exact return address.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Sender Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      id="slip-sender-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>

                  {/* Primary Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Contact / WhatsApp No. *
                    </label>
                    <input
                      id="slip-sender-phone"
                      type="tel"
                      required
                      placeholder="e.g. 98290 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>

                  {/* Alternate Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Alternate Contact No. (Optional)
                    </label>
                    <input
                      id="slip-sender-alt-phone"
                      type="tel"
                      placeholder="Family or alternate number"
                      value={altPhone}
                      onChange={(e) => setAltPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>

                  {/* Return Address */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Return Street Address *
                    </label>
                    <input
                      id="slip-sender-address"
                      type="text"
                      required
                      placeholder="House/Flat No, Landmark, Colony, Area"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      City / District *
                    </label>
                    <input
                      id="slip-sender-city"
                      type="text"
                      required
                      placeholder="e.g. Jodhpur, Udaipur, Kota, Delhi"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      State *
                    </label>
                    <input
                      id="slip-sender-state"
                      type="text"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>

                  {/* Pincode */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Postal Pincode *
                    </label>
                    <input
                      id="slip-sender-pincode"
                      type="text"
                      required
                      maxLength={6}
                      placeholder="e.g. 342001"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>

                  {/* Phone Brand */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Brand *
                    </label>
                    <select
                      id="slip-device-brand"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden font-medium"
                    >
                      {BRANDS_LIST.map((b) => (
                        <option key={b.brand} value={b.brand}>
                          {b.brand}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Phone Model */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Exact Phone Model *
                    </label>
                    <input
                      id="slip-device-model"
                      type="text"
                      required
                      placeholder="e.g. iPhone 14 Pro / Galaxy S22 Ultra"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>

                  {/* Screen lock pattern note */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Screen Passcode / Note (Optional)
                    </label>
                    <input
                      id="slip-device-passcode"
                      type="text"
                      placeholder="For testing post-repair (or leave blank)"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>

                  {/* Problem Description */}
                  <div className="sm:col-span-2 lg:col-span-3">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Exact Problem Description *
                    </label>
                    <textarea
                      id="slip-issue-description"
                      rows={2}
                      required
                      placeholder="Describe what happened: e.g. Phone suddenly shut down and not turning on, or touch glass broken, lines on screen, water dropped..."
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsGeneratorOpen(false)}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    id="submit-generate-slip-btn"
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Generate Ready Parcel Slip</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Generated Printable Parcel Slip View */
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-emerald-50 border border-emerald-200 p-4 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-emerald-900">
                        Parcel Slip Created Successfully! (Slip ID: {submittedSlip.slipId})
                      </h4>
                      <p className="text-xs text-emerald-700">
                        Print this slip or copy the details to paste on your box. Click below to notify Naveen ji on WhatsApp.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Notify Naveen on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmittedSlip(null)}
                      className="px-3 py-2 rounded-xl border border-slate-300 hover:bg-white text-slate-700 text-xs font-semibold cursor-pointer"
                    >
                      Edit Info
                    </button>
                  </div>
                </div>

                {/* The Physical Slip Box */}
                <div id="printable-courier-slip" className="border-2 border-dashed border-slate-400 bg-white p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
                  {/* Header of Slip */}
                  <div className="flex items-start justify-between border-b-2 border-slate-900 pb-4">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase bg-slate-900 text-white px-2.5 py-1 rounded">
                        PRIORITY REPAIR PARCEL
                      </span>
                      <h2 className="text-2xl font-black text-slate-900 mt-2 uppercase">
                        BALAJI MOBILE - RAISAR PLAZA
                      </h2>
                      <p className="text-xs text-slate-600 font-medium">
                        Prop: Naveen Kumar Vijay • 15+ Yrs Mobile Repair Specialist
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 font-mono">BOOKING REF ID:</span>
                      <p className="text-lg font-black font-mono text-blue-700">{submittedSlip.slipId}</p>
                      <p className="text-[11px] text-slate-500">{submittedSlip.createdAt}</p>
                    </div>
                  </div>

                  {/* To & From Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    
                    {/* Destination Address */}
                    <div className="border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0 md:pr-4">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                        DELIVER TO (REPAIR SHOP):
                      </span>
                      <div className="mt-2 text-sm text-slate-900 space-y-0.5 font-medium">
                        <p className="font-bold text-base text-slate-950">NAVEEN KUMAR VIJAY</p>
                        <p className="font-semibold text-slate-900">Shop No. B-35, Raisar Plaza</p>
                        <p>Ajmeri Gate, MI Road Area</p>
                        <p className="font-bold text-slate-950">Jaipur, Rajasthan - 302003</p>
                        <p className="text-blue-700 font-bold text-xs pt-1">
                          Phone: +91 95095 52035 / +91 9509552035
                        </p>
                        <p className="text-slate-600 text-xs">Email: naveenvijay35@gmail.com</p>
                      </div>
                    </div>

                    {/* Sender Address */}
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 bg-slate-200 px-2 py-0.5 rounded">
                        SENDER / RETURN TO (CUSTOMER):
                      </span>
                      <div className="mt-2 text-sm text-slate-900 space-y-0.5 font-medium">
                        <p className="font-bold text-base text-slate-950">{submittedSlip.senderName}</p>
                        <p className="text-slate-800">{submittedSlip.senderAddress}</p>
                        <p className="font-bold text-slate-950">
                          {submittedSlip.senderCity}, {submittedSlip.senderState} - {submittedSlip.senderPincode}
                        </p>
                        <p className="text-slate-900 font-bold text-xs pt-1">
                          Contact: {submittedSlip.senderPhone} {submittedSlip.senderAltPhone && `| Alt: ${submittedSlip.senderAltPhone}`}
                        </p>
                        {submittedSlip.senderEmail && (
                          <p className="text-slate-600 text-xs">Email: {submittedSlip.senderEmail}</p>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Device Fault Details */}
                  <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200 text-sm space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/80 pb-2">
                      <span className="font-bold text-slate-900">
                        Device: <span className="text-blue-700 font-black">{submittedSlip.deviceBrand} {submittedSlip.deviceModel}</span>
                      </span>
                      <span className="text-xs text-slate-600">
                        Passcode / Note: <span className="font-mono font-semibold">{submittedSlip.passcodeNote}</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-amber-950 uppercase tracking-wider">Reported Issue:</span>
                      <p className="text-slate-800 text-sm font-medium mt-0.5">
                        {submittedSlip.issueDescription}
                      </p>
                    </div>
                  </div>

                  {/* Important Notes for Courier */}
                  <div className="text-xs text-slate-500 space-y-1">
                    <p className="flex items-center gap-1 font-semibold text-slate-700">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Packaging Tip: Wrap phone with sufficient bubble-wrap. Place this slip inside or paste on the box.</span>
                    </p>
                    <p>
                      * Couriers accepted: DTDC, Blue Dart, Delhivery, Trackon, Tirupati, India Post Speed Post.
                    </p>
                  </div>
                </div>

                {/* Print & Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrint}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold flex items-center gap-2 shadow-sm cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Parcel Label</span>
                    </button>
                    <button
                      onClick={handleCopyAddress}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-sm font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                    </button>
                  </div>

                  <button
                    onClick={handleSendToWhatsApp}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Slip to Naveen's WhatsApp (+91 95095 52035)</span>
                  </button>
                </div>

              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
