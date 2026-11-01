import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

export const translations: Translations = {
  portalTitle: {
    en: 'Kashi Darshan & Heritage Portal',
    hi: 'काशी दर्शन एवं धरोहर पोर्टल'
  },
  portalSubtitle: {
    en: 'Sacred Gateway to the Ancient & Modern Temples of Varanasi',
    hi: 'वाराणसी के प्राचीन एवं आधुनिक मंदिरों का पावन प्रवेशद्वार'
  },
  searchPlaceholder: {
    en: 'Search by temple name, deity, ghat, or era...',
    hi: 'मंदिर का नाम, देवता, घाट या काल द्वारा खोजें...'
  },
  navDirectory: {
    en: 'Temple Directory',
    hi: 'मंदिर निर्देशिका'
  },
  navMap: {
    en: 'Interactive Map',
    hi: 'मानचित्र व नेविगेशन'
  },
  navOfficialTrust: {
    en: 'Official Trust Services',
    hi: 'शासकीय व न्यास सेवाएं'
  },
  navLiveCrowd: {
    en: 'Live Crowd Status',
    hi: 'सजीव भीड़ स्थिति'
  },
  navResearch: {
    en: 'Heritage Research & Guide',
    hi: 'धरोहर शोध व मार्गदर्शिका'
  },
  navItineraries: {
    en: 'Pilgrimage Circuits',
    hi: 'तीर्थ यात्रा परिपथ'
  },
  navHelplines: {
    en: 'Helpline & Safety',
    hi: 'हेल्पलाइन व सुरक्षा'
  },
  navAIGuide: {
    en: 'Divya AI Guide',
    hi: 'दिव्य एआई मार्गदर्शक'
  },
  savedTemples: {
    en: 'Saved Temples',
    hi: 'सहेजे गए मंदिर'
  },
  ancientCategory: {
    en: 'Ancient & Historic Temples',
    hi: 'प्राचीन व ऐतिहासिक मंदिर'
  },
  modernCategory: {
    en: 'Modern Temples',
    hi: 'आधुनिक मंदिर'
  },
  allTemples: {
    en: 'All Temples',
    hi: 'सभी मंदिर'
  },
  filterByDeity: {
    en: 'Filter by Deity',
    hi: 'देवता द्वारा छांटें'
  },
  filterByEra: {
    en: 'Historical Era',
    hi: 'ऐतिहासिक काल'
  },
  sortBy: {
    en: 'Sort By',
    hi: 'क्रमबद्ध करें'
  },
  popularityHigh: {
    en: 'Most Popular',
    hi: 'सर्वाधिक लोकप्रिय'
  },
  ratingHigh: {
    en: 'Highest Rated',
    hi: 'उच्चतम रेटिंग'
  },
  reviewsCount: {
    en: 'reviews',
    hi: 'समीक्षाएं'
  },
  viewDetails: {
    en: 'View Darshan Details',
    hi: 'दर्शन विवरण देखें'
  },
  bookSugamPass: {
    en: 'Book Sugam Darshan',
    hi: 'सुगम दर्शन बुक करें'
  },
  bookPrasad: {
    en: 'Order Home Prasad',
    hi: 'प्रसाद घर मंगवाएं'
  },
  liveWaitTime: {
    en: 'Est. Wait Time',
    hi: 'अनुमानित प्रतीक्षा'
  },
  dressCodeTitle: {
    en: 'Dress Code & Etiquette',
    hi: 'वेशभूषा व मर्यादा'
  },
  timingsTitle: {
    en: 'Darshan & Aarti Timings',
    hi: 'दर्शन एवं आरती समय'
  },
  transitFromCantt: {
    en: 'From Cantt Station',
    hi: 'कैंट स्टेशन से दूरी'
  },
  transitFromAirport: {
    en: 'From Airport (VNS)',
    hi: 'हवाई अड्डे से दूरी'
  },
  nearbyAttractionsTitle: {
    en: 'Nearby Ghats & Attractions',
    hi: 'निकटवर्ती घाट एवं दर्शनीय स्थल'
  },
  historyTab: {
    en: 'History & Chronicles',
    hi: 'इतिहास एवं अभिलेख'
  },
  mythologyTab: {
    en: 'Mythological Lore',
    hi: 'पौराणिक आख्यान'
  },
  architectureTab: {
    en: 'Architecture & Art',
    hi: 'वास्तुशिल्प एवं कला'
  },
  reviewsTab: {
    en: 'Pilgrim Reviews',
    hi: 'तीर्थयात्री समीक्षाएं'
  },
  writeReview: {
    en: 'Write a Review',
    hi: 'समीक्षा लिखें'
  },
  crowdLow: {
    en: 'Low Queue (Fast Darshan)',
    hi: 'न्यूनतम भीड़ (तीव्र दर्शन)'
  },
  crowdModerate: {
    en: 'Moderate (15-30 mins)',
    hi: 'मध्यम भीड़ (15-30 मिनट)'
  },
  crowdHigh: {
    en: 'High Crowd (30-60 mins)',
    hi: 'अधिक भीड़ (30-60 मिनट)'
  },
  crowdPeak: {
    en: 'Peak Rush (> 60 mins)',
    hi: 'चरम भीड़ (> 60 मिनट)'
  },
  aiGuideGreeting: {
    en: 'Har Har Mahadev! I am your Divya Kashi AI Heritage Guide. How may I assist your spiritual pilgrimage today?',
    hi: 'हर हर महादेव! मैं आपका दिव्य काशी एआई धरोहर मार्गदर्शक हूँ। आज आपकी तीर्थ यात्रा में मैं किस प्रकार सहायता कर सकता हूँ?'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('kashi_lang');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('kashi_lang', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
