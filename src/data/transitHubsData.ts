export interface TransitHub {
  id: string;
  name: string;
  hindiName: string;
  type: 'airport' | 'railway' | 'ghat' | 'bus';
  code?: string;
  description: string;
  descriptionHindi: string;
  coordinates: { lat: number; lng: number };
  popularTransfers: {
    destination: string;
    distance: string;
    avgTime: string;
    modes: string;
    fareEstimate: string;
  }[];
}

export const transitHubsData: TransitHub[] = [
  {
    id: 'bsb-cantt',
    name: 'Varanasi Junction (Cantt Railway Station)',
    hindiName: 'वाराणसी जंक्शन (कैंट रेलवे स्टेशन)',
    type: 'railway',
    code: 'BSB',
    description: 'The principal railway terminus connecting Kashi to all parts of India with 9 platforms, executive lounges, and heritage architecture.',
    descriptionHindi: 'वाराणसी का मुख्य रेलवे स्टेशन जो भारत के सभी महानगरों से सीधे जुड़ा है।',
    coordinates: { lat: 25.3283, lng: 82.9866 },
    popularTransfers: [
      { destination: 'Shri Kashi Vishwanath Dham', distance: '4.8 km', avgTime: '20-25 mins', modes: 'E-Rickshaw, Auto, Cab', fareEstimate: '₹40 - ₹150' },
      { destination: 'Sankat Mochan Temple', distance: '6.5 km', avgTime: '25-30 mins', modes: 'Auto, E-Rickshaw, Cab', fareEstimate: '₹50 - ₹180' },
      { destination: 'Dashashwamedh Ghat', distance: '4.2 km', avgTime: '18-22 mins', modes: 'Auto, E-Rickshaw', fareEstimate: '₹40 - ₹120' },
      { destination: 'BHU New Vishwanath Temple', distance: '9.0 km', avgTime: '35 mins', modes: 'Bus, Auto, Cab', fareEstimate: '₹60 - ₹250' }
    ]
  },
  {
    id: 'bsbs-manduadih',
    name: 'Banaras Railway Station (formerly Manduadih)',
    hindiName: 'बनारस रेलवे स्टेशन (पूर्व मंडुआडीह)',
    type: 'railway',
    code: 'BSBS',
    description: 'Modern world-class terminal with airport-like architecture, pristine waiting halls, illuminated fountains, and direct trains to Delhi, Mumbai, and Kolkata.',
    descriptionHindi: 'विश्वस्तरीय आधुनिक रेलवे स्टेशन, स्वच्छ परिसर और भव्य फव्वारे।',
    coordinates: { lat: 25.2984, lng: 82.9644 },
    popularTransfers: [
      { destination: 'Shri Kashi Vishwanath Dham', distance: '5.2 km', avgTime: '22-26 mins', modes: 'Auto, E-Rickshaw, Cab', fareEstimate: '₹50 - ₹160' },
      { destination: 'Sankat Mochan & Durga Kund', distance: '4.5 km', avgTime: '18-22 mins', modes: 'Auto, E-Rickshaw', fareEstimate: '₹40 - ₹140' },
      { destination: 'BHU Campus', distance: '6.5 km', avgTime: '22 mins', modes: 'Auto, Cab', fareEstimate: '₹50 - ₹180' }
    ]
  },
  {
    id: 'vns-airport',
    name: 'Lal Bahadur Shastri International Airport (Babatpur)',
    hindiName: 'लाल बहादुर शास्त्री अंतर्राष्ट्रीय हवाई अड्डा (बाबतपुर)',
    type: 'airport',
    code: 'VNS',
    description: 'International airport situated north-west of the city connected via a 4-lane high-speed expressway and ring road.',
    descriptionHindi: 'बाबतपुर स्थित अंतर्राष्ट्रीय हवाई अड्डा, 4-लेन राजमार्ग द्वारा नगर से जुड़ा हुआ।',
    coordinates: { lat: 25.4524, lng: 82.8593 },
    popularTransfers: [
      { destination: 'Shri Kashi Vishwanath Temple', distance: '24.5 km', avgTime: '45-55 mins', modes: 'Prepaid Taxi, App Cabs (Uber/Ola), Electric AC Bus', fareEstimate: '₹600 - ₹950' },
      { destination: 'BHU Lanka Campus', distance: '32.0 km', avgTime: '60 mins', modes: 'Cab, Taxi', fareEstimate: '₹750 - ₹1100' },
      { destination: 'Dashashwamedh / Godowlia', distance: '25.0 km', avgTime: '50 mins', modes: 'Prepaid Taxi, Electric Bus', fareEstimate: '₹600 - ₹950' }
    ]
  },
  {
    id: 'dashashwamedh-hub',
    name: 'Dashashwamedh Ghat & Godowlia Chowk Transit Point',
    hindiName: 'दशाश्वमेध घाट एवं गोदौलिया चौराहा केंद्र',
    type: 'ghat',
    description: 'The cultural heartbeat of Varanasi. Pedestrian-priority zone with multi-level parking, battery-operated e-cart shuttle services, and boat boarding jetties.',
    descriptionHindi: 'वाराणसी का सांस्कृतिक केंद्र, पैदल तीर्थयात्री क्षेत्र एवं गंगा नौका विहार का प्रमुख केंद्र।',
    coordinates: { lat: 25.3081, lng: 83.0097 },
    popularTransfers: [
      { destination: 'Kashi Vishwanath Corridor', distance: '500 meters', avgTime: '5-7 mins', modes: 'Walking / E-Cart Shuttle', fareEstimate: 'Free / ₹20' },
      { destination: 'Assi Ghat', distance: '2.8 km', avgTime: '15 mins boat ride / 12 mins auto', modes: 'Row Boat, Motor Boat, Auto', fareEstimate: '₹50 - ₹200' },
      { destination: 'Manikarnika Ghat', distance: '600 meters', avgTime: '7 mins walking / boat', modes: 'Walking / Boat', fareEstimate: 'Free / ₹50' }
    ]
  }
];
