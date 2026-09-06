import { BrandModelInfo, CustomerReview, FAQItem, RepairIssue, TrackingRecord } from '../types';

export const SHOP_INFO = {
  ownerName: "Naveen Kumar Vijay",
  businessName: "BALAJI MOBILE",
  shortAddress: "B-35, Raisar Plaza, Ajmeri Gate, Jaipur",
  fullAddress: "Shop No. B-35, Raisar Plaza, Near Ajmeri Gate, Jaipur, Rajasthan - 302003",
  pincode: "302003",
  phone: "+91 95095 52035",
  rawPhone: "919509552035",
  email: "naveenvijay35@gmail.com",
  experienceYears: "15+",
  hours: "10:30 AM - 8:30 PM (All 7 Days Open)",
  landmark: "Beside Ajmeri Gate, MI Road junction, Raisar Plaza Basement Floor B-35",
  googleMapsUrl: "https://maps.google.com/?q=Raisar+Plaza+Ajmeri+Gate+Jaipur",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Raisar+Plaza,+Ajmeri+Gate,+Jaipur",
  whatsAppUrl: "https://wa.me/919509552035?text=Hello%20Naveen%20ji,%20I%20need%20to%20repair%20my%20mobile%20phone.%20Please%20guide%20me.",
};

export const BRANDS_LIST: BrandModelInfo[] = [
  {
    brand: "Apple iPhone",
    models: [
      "iPhone 16 / 16 Pro / 16 Pro Max",
      "iPhone 15 / 15 Plus / 15 Pro / 15 Pro Max",
      "iPhone 14 / 14 Plus / 14 Pro / 14 Pro Max",
      "iPhone 13 / 13 Mini / 13 Pro / 13 Pro Max",
      "iPhone 12 / 12 Mini / 12 Pro / 12 Pro Max",
      "iPhone 11 / 11 Pro / 11 Pro Max",
      "iPhone X / XR / XS / XS Max",
      "iPhone 7 / 8 / SE Series"
    ]
  },
  {
    brand: "Samsung",
    models: [
      "Galaxy S24 / S24+ / S24 Ultra",
      "Galaxy S23 / S23+ / S23 Ultra",
      "Galaxy S22 / S21 / S20 Series",
      "Galaxy Z Fold & Z Flip Series",
      "Galaxy Note 20 / Note 10 Ultra",
      "Galaxy A-Series (A54, A53, A73)",
      "Galaxy M & F Series"
    ]
  },
  {
    brand: "OnePlus",
    models: [
      "OnePlus 12 / 12R / 11 / 11R",
      "OnePlus 10 Pro / 10T / 10R",
      "OnePlus 9 / 9 Pro / 9RT",
      "OnePlus 8 / 8T / 8 Pro",
      "OnePlus Nord 4 / Nord 3 / CE Series"
    ]
  },
  {
    brand: "Google Pixel",
    models: [
      "Pixel 9 / 9 Pro / 9 Pro XL",
      "Pixel 8 / 8 Pro / 8a",
      "Pixel 7 / 7 Pro / 7a",
      "Pixel 6 / 6 Pro / 6a",
      "Pixel 4a / 5 Series"
    ]
  },
  {
    brand: "Xiaomi / Redmi / POCO",
    models: [
      "Xiaomi 14 / 13 / 12 Series",
      "Redmi Note 13 / 12 / 11 Pro+",
      "POCO X6 Pro / F5 / X5 / F4",
      "Redmi K50 / K20 Series"
    ]
  },
  {
    brand: "Vivo & iQOO",
    models: [
      "Vivo X100 / X90 / X80 Pro",
      "Vivo V30 / V29 / V27 Series",
      "iQOO 12 / 11 / Neo 9 Pro / Neo 7",
      "Vivo T2 / Y-Series"
    ]
  },
  {
    brand: "Oppo & Realme",
    models: [
      "Oppo Reno 11 / 10 / 8 Pro",
      "Oppo Find N3 / N2 Flip",
      "Realme GT 6 / GT 5 / 12 Pro+",
      "Realme Narzo Series"
    ]
  },
  {
    brand: "Motorola & Nothing",
    models: [
      "Motorola Edge 50 / 40 Pro",
      "Nothing Phone (2) / Phone (2a) / Phone (1)",
      "Moto G84 / G54 Series"
    ]
  }
];

export const REPAIR_ISSUES: RepairIssue[] = [
  {
    id: "screen",
    name: "Broken Screen / Touch / OLED Display",
    category: "screen",
    basePrice: 1200,
    timeEstimate: "30 - 60 minutes",
    description: "Original glass OCA lamination, Super AMOLED / OLED replacement, touch lag fix, lines/flicker removal with true tone restored."
  },
  {
    id: "motherboard",
    name: "Dead Phone / Motherboard Chip-Level Repair",
    category: "motherboard",
    basePrice: 1800,
    timeEstimate: "2 - 4 hours (or 24h for complex reballing)",
    description: "CPU & RAM reballing, power IC replacement, short circuit tracing using thermal cameras, no power / restart loop fix."
  },
  {
    id: "battery",
    name: "Battery Replacement / Fast Drain",
    category: "battery",
    basePrice: 850,
    timeEstimate: "20 - 30 minutes",
    description: "100% genuine high-density battery cell with full backup guarantee, battery health restore without warning messages."
  },
  {
    id: "charging",
    name: "Charging Port / USB-C / Mic / Speaker",
    category: "charging",
    basePrice: 650,
    timeEstimate: "30 minutes",
    description: "Loose charging jack, slow charging, audio IC crackling, earpiece low volume, microphone mute repair."
  },
  {
    id: "water",
    name: "Water / Liquid Damage Treatment",
    category: "water",
    basePrice: 1400,
    timeEstimate: "2 - 6 hours",
    description: "Ultrasonic chemical cleaning, corrosion clearing, component level revival with high data recovery success rate."
  },
  {
    id: "camera",
    name: "Camera Lens / Sensor / Blurry Focus",
    category: "camera",
    basePrice: 950,
    timeEstimate: "45 minutes",
    description: "Cracked outer sapphire camera glass replacement, OIS sensor stabilization fix, front selfie camera lens repair."
  },
  {
    id: "network",
    name: "No Signal / WiFi / Bluetooth / Baseband IC",
    category: "motherboard",
    basePrice: 1600,
    timeEstimate: "2 - 3 hours",
    description: "Searching network loop, Greyed-out WiFi, Bluetooth disconnection, baseband IC jumper repair."
  },
  {
    id: "software",
    name: "Stuck on Logo / Bootloop / Dead Boot Recovery",
    category: "software",
    basePrice: 700,
    timeEstimate: "30 - 60 minutes",
    description: "Flashing, stuck on Apple logo / Android recovery, EDL test point flashing, safe OS recovery."
  }
];

export const SAMPLE_TRACKING_ORDERS: TrackingRecord[] = [
  {
    trackingId: "VK-JAIPUR-8902",
    customerName: "Rohit Sharma",
    phone: "+91 98290 *****",
    city: "Jodhpur, Rajasthan",
    device: "iPhone 14 Pro",
    issue: "Dead Motherboard / CPU Short Circuit",
    receivedDate: "Yesterday, 11:30 AM via DTDC",
    estimatedCompletion: "Today by 5:00 PM",
    status: "repairing",
    currentStep: 2,
    courierPartner: "DTDC Courier (Consignment: D29871034)",
    notes: "Short-circuit detected on VDD_MAIN line. Micro-soldering capacitors and power IC replacement under progress."
  },
  {
    trackingId: "VK-INDIA-7412",
    customerName: "Sunil Verma",
    phone: "+91 94140 *****",
    city: "Surat, Gujarat",
    device: "Samsung Galaxy S23 Ultra",
    issue: "Broken Curved AMOLED Display Glass",
    receivedDate: "2 days ago",
    estimatedCompletion: "Completed & Dispatched",
    status: "dispatched",
    currentStep: 4,
    courierPartner: "BlueDart Express",
    dispatchTrackingNo: "BD-884920194IN",
    notes: "Glass lamination completed with original OCA sheet. 100% touch & S-Pen pressure verified. Packed with protective air-cushion box and dispatched."
  },
  {
    trackingId: "VK-LOCAL-3290",
    customerName: "Pooja Pareek",
    phone: "+91 97852 *****",
    city: "Jaipur (Mansarovar)",
    device: "OnePlus 11 5G",
    issue: "Green Line on Screen & Battery Replacement",
    receivedDate: "Today, 12:15 PM (Walk-in Raisar Plaza)",
    estimatedCompletion: "Today, 3:30 PM",
    status: "quality_testing",
    currentStep: 3,
    notes: "Display replacement completed. Device in 30-point quality check (charging rate, multi-touch, front/rear camera)."
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    name: "Manish Agarwal",
    location: "Jaipur (Vaishali Nagar)",
    device: "iPhone 13 Pro",
    serviceType: "Display & Face ID Repair",
    rating: 5,
    date: "3 days ago",
    comment: "Other shops in Raisar Plaza told me my display cannot be fixed and demanded ₹24,000 for full change. Naveen ji repaired my original screen glass with OCA and preserved True Tone & Face ID at 1/3rd the cost! True 15 years experience shows in his work.",
    verified: true,
    type: "walk-in"
  },
  {
    id: "rev-2",
    name: "Dr. Arvind Joshi",
    location: "Udaipur, Rajasthan",
    device: "Samsung Note 20 Ultra",
    serviceType: "Dead Motherboard Post-Courier",
    rating: 5,
    date: "1 week ago",
    comment: "I sent my phone by Speed Post from Udaipur. Naveen bhaiya sent a video explaining the dead IC problem and asked for approval before opening. Repaired within 24 hours and couriered back safely. Best mobile technician in Rajasthan!",
    verified: true,
    type: "courier"
  },
  {
    id: "rev-3",
    name: "Vikram Rathore",
    location: "Kota, Rajasthan",
    device: "OnePlus 9 Pro",
    serviceType: "CPU Reballing (Qualcomm)",
    rating: 5,
    date: "2 weeks ago",
    comment: "My phone was completely dead after an update. Authorized center told me to replace motherboard for ₹28,000. Naveen Kumar Vijay did chip-level CPU reballing. All my personal photos and data remained safe. 100% trustworthy person.",
    verified: true,
    type: "courier"
  },
  {
    id: "rev-4",
    name: "Deepak Saini",
    location: "Delhi NCR",
    device: "Pixel 7 Pro",
    serviceType: "Camera Glass & Battery Replacement",
    rating: 5,
    date: "Last month",
    comment: "Couriered from Delhi via BlueDart. Naveen ji received it next morning, repaired with original parts and couriered back on same evening. Transparent pricing and no hidden charges. Highly recommended for all-India courier repairs.",
    verified: true,
    type: "courier"
  },
  {
    id: "rev-5",
    name: "Kailash Chand Sharma",
    location: "Jaipur (C-Scheme)",
    device: "Samsung S21 FE",
    serviceType: "Water Damage Repair",
    rating: 5,
    date: "3 weeks ago",
    comment: "Phone fell in water during monsoon. Naveen ji cleaned the board and replaced damaged IC components right in front of me at shop B-35 Raisar Plaza. Great behavior and fair charges.",
    verified: true,
    type: "walk-in"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How does the All-India Mail-In / Courier Repair service work?",
    answer: "It is very simple and safe! (1) Contact Naveen Kumar Vijay via Call/WhatsApp (+91 95095 52035) or use the packing slip generator on this website. (2) Pack your mobile securely with bubble wrap in a sturdy box. (3) Post/courier it via DTDC, Blue Dart, Delhivery, or India Post Speed Post to: Naveen Kumar Vijay, Shop B-35, Raisar Plaza, Ajmeri Gate, Jaipur, Rajasthan - 302003. (4) Once we receive it, Naveen will inspect it and send you video proof and the final quote. After your approval, repair is completed and couriered back safely to your home address with tracking number.",
    category: "courier"
  },
  {
    question: "Is my personal data (photos, contacts, chats) safe during repair?",
    answer: "Absolutely 100% safe. Naveen Kumar Vijay has been serving customers with high integrity for 15+ years. For hardware issues (screen, battery, charging port, motherboard chip level), your data is untouched. We always advise you not to share banking passwords, and we can test the phone with you directly on video call without needing your personal app access.",
    category: "trust"
  },
  {
    question: "What if my phone cannot be repaired?",
    answer: "We follow a strict 'No Fix, No Fee' policy! If your device cannot be revived due to irreparable motherboard burn or rare processor damage, you will not be charged any repair fees. We will simply return the device to you via courier or you can pick it up from our Raisar Plaza shop.",
    category: "pricing"
  },
  {
    question: "What types of phones and brands do you repair?",
    answer: "We repair ALL brands: Apple iPhones (all models from iPhone 6 to 16 Pro Max), Samsung (S-series, Fold, Flip, Note, A-series), OnePlus, Google Pixel, Xiaomi, Redmi, POCO, Vivo, iQOO, Oppo, Realme, Motorola, Nothing, and other Android smartphones. We handle everything from basic glass replacement to advanced micro-soldering.",
    category: "repair"
  },
  {
    question: "Where exactly is your shop in Raisar Plaza, Jaipur?",
    answer: "Our shop is at Shop B-35, Raisar Plaza, Ajmeri Gate, Jaipur, Rajasthan - 302003. Raisar Plaza is Jaipur's most famous IT and electronics market, located right next to Ajmeri Gate on MI Road / Indira Bazar circle. Shop B-35 is conveniently located on the basement floor with easy access. You can call +91 95095 52035 anytime for live guidance.",
    category: "trust"
  },
  {
    question: "Do you provide warranty on mobile repairs?",
    answer: "Yes! We provide 30 days to 90 days service warranty on replaced parts (Screens, Batteries, IC chip repairs). If there is any defect in the replaced part during the warranty period, we fix or replace it free of cost.",
    category: "pricing"
  },
  {
    question: "How long does the repair take?",
    answer: "For walk-in customers at our Raisar Plaza shop, common repairs like screen replacement, battery swap, and charging port repair take only 30 to 60 minutes. Complex motherboard and CPU reballing takes 2 to 4 hours. For courier parcels, repairs are completed within 24 hours of receipt and dispatched the same or next working day.",
    category: "repair"
  }
];

export const SEO_KEYWORD_TAGS = [
  "BALAJI MOBILE Jaipur",
  "BALAJI MOBILE Raisar Plaza",
  "Mobile repair in Jaipur",
  "Mobile repair near me",
  "Best mobile repair Raisar Plaza",
  "Naveen Kumar Vijay mobile technician",
  "Best iPhone repair in Jaipur",
  "Samsung curved display repair Jaipur",
  "All India courier mobile repair",
  "Doorstep mail-in phone repair India",
  "Motherboard chip-level repair Raisar Plaza",
  "Ajmeri gate mobile shop Jaipur",
  "OnePlus dead motherboard CPU reballing",
  "Google Pixel screen repair Jaipur",
  "Water damage mobile repair",
  "Phone repair Shop B35 Raisar Plaza",
  "Trusted 15 years mobile repair Jaipur",
  "Original mobile screen replacement Jaipur"
];
