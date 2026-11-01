import React, { useState } from 'react';
import { Temple, BookingReservation } from '../types/temple';
import { ShieldCheck, Activity, Award, CheckCircle2, Ticket, Printer, Clock, Phone, AlertCircle, Sparkles, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';

interface OfficialTrustServicesProps {
  temples: Temple[];
  onOpenBookingModal: (temple: Temple, type: 'sugam' | 'aarti' | 'prasad') => void;
}

export const OfficialTrustServices: React.FC<OfficialTrustServicesProps> = ({
  temples,
  onOpenBookingModal
}) => {
  const { language } = useLanguage();
  const { bookings, activePass, setActivePass } = useBooking();
  const [selectedBookingType, setSelectedBookingType] = useState<'sugam' | 'aarti' | 'prasad'>('sugam');

  const kashiVishwanath = temples.find(t => t.id === 'kashi-vishwanath') || temples[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-950/60 border border-orange-500/40 text-orange-300 text-xs font-serif font-bold">
          <ShieldCheck className="w-4 h-4 text-orange-400" />
          <span>{language === 'hi' ? 'आधिकारिक सरकारी एवं न्यास पोर्टल' : 'Official Temple Trust & Administrative Services'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-black text-stone-100">
          {language === 'hi' ? 'काशी विश्वनाथ सुगम दर्शन, आरती एवं प्रसाद' : 'Kashi Vishwanath Sugam Darshan & Trust Bookings'}
        </h2>
        <p className="text-xs sm:text-sm text-stone-400">
          {language === 'hi'
            ? 'श्री काशी विश्वनाथ मंदिर न्यास द्वारा अधिकृत सुगम दर्शन वीआईपी पास, मंगला आरती पंजीकरण एवं घर बैठे शुद्ध प्रसाद सेवा।'
            : 'Authorized facilitation for expedited VIP queue passes, inner-sanctum aarti reservations, and Speed Post Prasad delivery directly to your home.'}
        </p>
      </div>

      {/* Main 3 Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Sugam Darshan */}
        <div className="p-6 rounded-3xl bg-[#1c1612] border-2 border-amber-600/40 hover:border-amber-400 transition-all shadow-xl flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40 text-2xl">
              🎫
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                {language === 'hi' ? 'कतार रहित दर्शन' : 'Queue Bypass Pass'}
              </span>
              <h3 className="text-lg font-serif font-bold text-stone-100 mt-0.5">
                {language === 'hi' ? 'सुगम दर्शन (VIP Pass)' : 'Sugam Darshan VIP Pass'}
              </h3>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              {language === 'hi'
                ? 'गेट नंबर 4 से विशेष सुगम प्रवेश। वृद्धजनों एवं परिवारों हेतु बिना प्रतीक्षा गर्भगृह तक ई-कार्ट व समर्पित पुजारी द्वारा दर्शन।'
                : 'Priority expedited entry via Gate 4 (Corridor). Includes dedicated corridor facilitation, e-cart shuttle, and direct sanctum access in 20-25 mins.'}
            </p>
            <ul className="text-xs text-stone-400 space-y-1.5 pt-1">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'hi' ? 'प्रतीक्षा समय: मात्र 15-25 मिनट' : 'Wait Time: Only 15-25 mins'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'hi' ? 'प्रसाद सिक्का एवं अंगवस्त्रम सम्मिलित' : 'Includes sacred coin & Angavastram'}</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-stone-400 block">{language === 'hi' ? 'सरकारी दर' : 'Trust Tariff'}</span>
              <span className="text-lg font-mono font-bold text-amber-300">₹300 / person</span>
            </div>
            <button
              onClick={() => onOpenBookingModal(kashiVishwanath, 'sugam')}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 font-bold text-xs shadow-md hover:scale-105 transition"
            >
              {language === 'hi' ? 'पास बुक करें' : 'Book VIP Pass'}
            </button>
          </div>
        </div>

        {/* Card 2: Mangla & Saptarishi Aarti */}
        <div className="p-6 rounded-3xl bg-[#1c1612] border-2 border-orange-600/40 hover:border-orange-400 transition-all shadow-xl flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/40 text-2xl">
              🪔
            </div>
            <div>
              <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider block">
                {language === 'hi' ? 'गर्भगृह महा आरती' : 'Sanctum Aarti Registration'}
              </span>
              <h3 className="text-lg font-serif font-bold text-stone-100 mt-0.5">
                {language === 'hi' ? 'मंगला एवं सप्तर्षि आरती' : 'Mangla & Saptarishi Aarti'}
              </h3>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              {language === 'hi'
                ? 'ब्रह्ममुहूर्त में 03:00 बजे मंगला आरती अथवा संध्या 07:00 बजे सात वेदमूर्ति ब्राह्मणों द्वारा सप्तर्षि आरती में गर्भगृह में बैठने का दुर्लभ अवसर।'
                : 'Witness the dawn Mangla Aarti at 03:00 AM or the evening 7-seer Saptarishi Aarti inside the inner sanctum with live Vedic reverberations.'}
            </p>
            <ul className="text-xs text-stone-400 space-y-1.5 pt-1">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'hi' ? 'मंगला आरती: प्रातः 03:00 - 04:00' : 'Mangla Aarti: 03:00 AM - 04:00 AM'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'hi' ? 'पारंपरिक वस्त्र अनिवार्य (धोती/साड़ी)' : 'Traditional attire required'}</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-stone-400 block">{language === 'hi' ? 'सरकारी दर' : 'Trust Tariff'}</span>
              <span className="text-lg font-mono font-bold text-orange-300">₹300 - ₹500</span>
            </div>
            <button
              onClick={() => onOpenBookingModal(kashiVishwanath, 'aarti')}
              className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md hover:scale-105 transition"
            >
              {language === 'hi' ? 'आरती पास लें' : 'Register Aarti'}
            </button>
          </div>
        </div>

        {/* Card 3: Home Delivery Prasad */}
        <div className="p-6 rounded-3xl bg-[#1c1612] border-2 border-yellow-600/40 hover:border-yellow-400 transition-all shadow-xl flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center border border-yellow-500/40 text-2xl">
              📦
            </div>
            <div>
              <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-wider block">
                {language === 'hi' ? 'डाक विभाग स्पीड पोस्ट' : 'India Post Speed Post'}
              </span>
              <h3 className="text-lg font-serif font-bold text-stone-100 mt-0.5">
                {language === 'hi' ? 'घर बैठे महाप्रसाद सेवा' : 'Authentic Prasad Home Delivery'}
              </h3>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              {language === 'hi'
                ? 'देश के किसी भी कोने में शुद्ध विश्वनाथ महाप्रसाद, पवित्र भस्म, अभिमंत्रित रुद्राक्ष, बेलपत्र व सूखे मेवे का बॉक्स प्राप्त करें।'
                : 'Directly dispatch consecrated Mahaprasad box including sacred Bhasma, sanctified Rudraksha bead, Belpatra, and dry fruits to any address in India.'}
            </p>
            <ul className="text-xs text-stone-400 space-y-1.5 pt-1">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'hi' ? 'पवित्र रुद्राक्ष व भस्म सहित' : 'Includes Rudraksha & Bhasma'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'hi' ? 'स्पीड पोस्ट ट्रैकिंग नंबर प्रदान' : 'Speed Post Tracking Number provided'}</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-stone-400 block">{language === 'hi' ? 'सहित डाक शुल्क' : 'All-Inclusive'}</span>
              <span className="text-lg font-mono font-bold text-yellow-300">₹251</span>
            </div>
            <button
              onClick={() => onOpenBookingModal(kashiVishwanath, 'prasad')}
              className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-yellow-300 border border-yellow-600/40 font-bold text-xs shadow-md transition"
            >
              {language === 'hi' ? 'प्रसाद मंगाएं' : 'Order Prasad'}
            </button>
          </div>
        </div>

      </div>

      {/* Devotee Active Pass & Confirmation Receipt Viewer */}
      {activePass && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#201813] to-[#17120e] border-2 border-amber-500/50 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-500/30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                  {language === 'hi' ? 'आरक्षण पुष्ट' : 'Booking Confirmed'}
                </span>
                <h4 className="text-base font-serif font-bold text-stone-100">
                  {activePass.templeName} — {activePass.bookingType === 'sugam' ? 'Sugam Darshan VIP Pass' : activePass.bookingType === 'aarti' ? 'Aarti Pass' : 'Prasad Delivery'}
                </h4>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-xl bg-stone-800 text-stone-300 hover:text-white border border-stone-700 text-xs font-semibold flex items-center space-x-1.5 transition"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'प्रिंट रसीद' : 'Print Slip'}</span>
              </button>
              <button
                onClick={() => setActivePass(null)}
                className="text-stone-400 hover:text-white text-xs px-2"
              >
                ✕ Close
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs">
            <div>
              <span className="text-stone-400 block">{language === 'hi' ? 'रसीद संख्या (Ref No.):' : 'Booking Ref:'}</span>
              <span className="font-mono font-bold text-amber-300 text-sm">{activePass.bookingRef}</span>
            </div>
            <div>
              <span className="text-stone-400 block">{language === 'hi' ? 'भक्त का नाम:' : 'Devotee Name:'}</span>
              <span className="font-bold text-stone-200">{activePass.devoteeName}</span>
            </div>
            <div>
              <span className="text-stone-400 block">{language === 'hi' ? 'दर्शन दिनांक / स्लॉट:' : 'Date & Slot:'}</span>
              <span className="font-medium text-stone-200">{activePass.date} ({activePass.slotOrItem})</span>
            </div>
            <div>
              <span className="text-stone-400 block">{language === 'hi' ? 'भुगतान स्थिति:' : 'Payment Status:'}</span>
              <span className="font-mono font-bold text-emerald-400">₹{activePass.amount} (Paid)</span>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-amber-950/30 border border-amber-900/40 text-[11px] text-amber-200/90 flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              {language === 'hi'
                ? 'कृपया प्रवेश द्वार (Gate No. 4) पर यह रसीद एवं आधार कार्ड प्रस्तुत करें।'
                : 'Please present this digital confirmation with a valid Government ID at Gate No. 4 (Corridor).'}
            </span>
          </div>
        </div>
      )}

      {/* Control Room & Tourist Police Integration Contact Bar */}
      <div className="p-4 rounded-2xl bg-[#171310] border border-stone-800 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center space-x-2 text-stone-300">
          <Phone className="w-4 h-4 text-amber-400" />
          <span>
            <strong className="text-stone-100">{language === 'hi' ? 'न्यास कंट्रोल रूम:' : 'Temple Control Room:'}</strong>{' '}
            +91-542-2392629 (04:00 AM - 11:00 PM)
          </span>
        </div>
        <div className="flex items-center space-x-2 text-stone-300">
          <ShieldCheck className="w-4 h-4 text-orange-400" />
          <span>
            <strong className="text-stone-100">{language === 'hi' ? 'पर्यटक पुलिस सहायता:' : 'Tourist Police Helpline:'}</strong>{' '}
            Dial 112 (Assi & Dashashwamedh Desks)
          </span>
        </div>
      </div>

    </section>
  );
};
