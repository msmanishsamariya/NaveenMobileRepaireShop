export interface RepairIssue {
  id: string;
  name: string;
  category: 'screen' | 'motherboard' | 'battery' | 'charging' | 'water' | 'camera' | 'software' | 'other';
  basePrice: number;
  timeEstimate: string;
  description: string;
}

export interface BrandModelInfo {
  brand: string;
  models: string[];
}

export interface MailInParcelSlip {
  senderName: string;
  senderPhone: string;
  senderAltPhone?: string;
  senderEmail: string;
  senderAddress: string;
  senderCity: string;
  senderState: string;
  senderPincode: string;
  deviceBrand: string;
  deviceModel: string;
  deviceColor?: string;
  passcodeNote: string;
  issueDescription: string;
  slipId: string;
  createdAt: string;
}

export interface TrackingRecord {
  trackingId: string;
  customerName: string;
  phone: string;
  city: string;
  device: string;
  issue: string;
  receivedDate: string;
  estimatedCompletion: string;
  status: 'received' | 'inspecting' | 'repairing' | 'quality_testing' | 'dispatched' | 'delivered';
  currentStep: number; // 0 to 4
  courierPartner?: string;
  dispatchTrackingNo?: string;
  notes: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  device: string;
  serviceType: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  type: 'courier' | 'walk-in';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'courier' | 'repair' | 'pricing' | 'trust';
}
