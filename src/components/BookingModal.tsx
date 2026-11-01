import React, { useState } from 'react';
import { Temple } from '../types/temple';
import { X, Check, ShieldCheck, Calendar, Clock, User, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  temple: Temple | null;
  initialType?: 'sugam' | 'aarti' | 'prasad';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  temple,
  initialType = 'sugam'
}) => {
  const { language } = useLanguage();
  const { createBooking } = useBooking();

  const [bookingType, setBookingType] = useState<'sugam' | 'aarti' | 'prasad'>(initialType);
  const [devoteeName, setDevoteeName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [slot, setSlot] = useState('Morning Slot (06:00 AM - 08:00 AM)');
  const [persons, setPersons] = useState(1);
  const [specialGotra, setSpecialGotra] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    setBookingType(initialType);
  }, [initialType]);

  if (!isOpen || !temple) return null;

  const getPrice = () => {
    if (bookingType === 'sugam') return (temple.officialTrustBooking.sugamDarshanPrice || 300) * persons;
    if (bookingType === 'aarti') return 300 * persons;
    return 251 * persons; // Prasad box
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!devoteeName || !phone) return;

    setIsSubmitting(true);

    setTimeout(() => {
      createBooking({
        bookingType,
        templeId: temple.id,
        templeName: language === 'hi' ? temple.hindiName : temple.name,
        devoteeName,
        phone,
        email,
        date,
        slotOrItem: bookingType === 'prasad' ? 'Holy Bhasma, Belpatra & Rudraksha Box' : slot,
        numberOfPersons: persons,
        amount: getPrice(),
        deliveryAddress: address,
        specialGotra
      });

      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#181310] border border-amber-600/40 rounded-3xl shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#291e17] to-[#1f1610] p-5 border-b border-amber-600/30 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-amber-200">
                {language === 'hi' ? 'शासकीय सेवा पंजीकरण' : 'Official Trust Registration'}
              </h3>
              <p className="text-xs text-stone-400">{language === 'hi' ? temple.hindiName : temple.name}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Booking Type Switcher */}
        <div className="p-4 bg-[#140f0c] border-b border-stone-800 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setBookingType('sugam')}
            className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-semibold transition ${
              bookingType === 'sugam'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200'
            }`}
          >
            {language === 'hi' ? 'सुगम दर्शन (VIP)' : 'Sugam Darshan'}
          </button>
          <button
            type="button"
            onClick={() => setBookingType('aarti')}
            className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-semibold transition ${
              bookingType === 'aarti'
                ? 'bg-orange-600 text-white font-bold shadow'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200'
            }`}
          >
            {language === 'hi' ? 'आरती पास' : 'Aarti Pass'}
          </button>
          <button
            type="button"
            onClick={() => setBookingType('prasad')}
            className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-semibold transition ${
              bookingType === 'prasad'
                ? 'bg-yellow-600 text-stone-950 font-bold shadow'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200'
            }`}
          >
            {language === 'hi' ? 'प्रसाद डाक सेवा' : 'Prasad Speed Post'}
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs font-sans">
          
          {/* Devotee Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-stone-400 font-medium mb-1 block">
                {language === 'hi' ? 'भक्त का पूरा नाम *' : 'Devotee Full Name *'}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-stone-500 absolute left-3 top-2.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={devoteeName}
                  onChange={(e) => setDevoteeName(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl pl-9 pr-3 py-2 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="text-stone-400 font-medium mb-1 block">
                {language === 'hi' ? 'मोबाइल नंबर (SMS पुष्टि) *' : 'Mobile Number (for SMS) *'}
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-stone-500 absolute left-3 top-2.5" />
                <input
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl pl-9 pr-3 py-2 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Email & Gotra */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-stone-400 font-medium mb-1 block">
                {language === 'hi' ? 'ईमेल (डिजिटल पास प्रति)' : 'Email (for PDF Pass)'}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-2.5" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl pl-9 pr-3 py-2 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="text-stone-400 font-medium mb-1 block">
                {language === 'hi' ? 'गोत्र (संकल्प हेतु, ऐच्छिक)' : 'Gotra (Optional for Sankalp)'}
              </label>
              <input
                type="text"
                placeholder="e.g. Kashyap, Bhardwaj"
                value={specialGotra}
                onChange={(e) => setSpecialGotra(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3 py-2 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* If Darshan or Aarti: Date & Slot & Persons */}
          {bookingType !== 'prasad' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-stone-400 font-medium mb-1 block">
                    {language === 'hi' ? 'दर्शन दिनांक *' : 'Visit Date *'}
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3 py-2 text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-stone-400 font-medium mb-1 block">
                    {language === 'hi' ? 'भक्तों की संख्या' : 'Number of Persons'}
                  </label>
                  <select
                    value={persons}
                    onChange={(e) => setPersons(Number(e.target.value))}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3 py-2 text-stone-100 focus:outline-none focus:border-amber-500"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'Persons'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-stone-400 font-medium mb-1 block">
                  {bookingType === 'sugam' 
                    ? (language === 'hi' ? 'सुगम दर्शन समय स्लॉट' : 'Fast-Track Time Slot')
                    : (language === 'hi' ? 'आरती चयन' : 'Aarti Selection')}
                </label>
                <select
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3 py-2 text-stone-100 focus:outline-none focus:border-amber-500"
                >
                  {bookingType === 'sugam' ? (
                    <>
                      <option value="Early Morning (06:00 AM - 08:00 AM)">Early Morning (06:00 AM - 08:00 AM)</option>
                      <option value="Morning (08:00 AM - 11:00 AM)">Morning (08:00 AM - 11:00 AM)</option>
                      <option value="Afternoon (12:30 PM - 03:30 PM)">Afternoon (12:30 PM - 03:30 PM)</option>
                      <option value="Evening (04:30 PM - 07:00 PM)">Evening (04:30 PM - 07:00 PM)</option>
                      <option value="Night (08:00 PM - 10:00 PM)">Night (08:00 PM - 10:00 PM)</option>
                    </>
                  ) : (
                    <>
                      <option value="Mangla Aarti (03:00 AM - 04:00 AM)">Mangla Aarti (03:00 AM - 04:00 AM) - ₹500</option>
                      <option value="Midday Bhog Aarti (11:15 AM - 12:20 PM)">Midday Bhog Aarti (11:15 AM - 12:20 PM) - ₹300</option>
                      <option value="Saptarishi Aarti (07:00 PM - 08:15 PM)">Saptarishi Aarti (07:00 PM - 08:15 PM) - ₹300</option>
                      <option value="Night Shringar Aarti (09:00 PM - 10:30 PM)">Night Shringar Aarti (09:00 PM - 10:30 PM) - ₹300</option>
                    </>
                  )}
                </select>
              </div>
            </>
          )}

          {/* If Prasad: Delivery Address */}
          {bookingType === 'prasad' && (
            <div>
              <label className="text-stone-400 font-medium mb-1 block">
                {language === 'hi' ? 'डाक का पूरा पता व पिनकोड *' : 'Complete Shipping Address & Pincode *'}
              </label>
              <textarea
                rows={3}
                required
                placeholder="House No, Street, Landmark, City, State, Pincode"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 rounded-xl p-2.5 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
              />
            </div>
          )}

          {/* Total & Submit */}
          <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-stone-400 block">{language === 'hi' ? 'कुल राशि (Total)' : 'Total Amount'}</span>
              <span className="text-base font-mono font-black text-amber-300">₹{getPrice()}</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold text-xs shadow-lg shadow-orange-900/30 flex items-center space-x-1.5 transition disabled:opacity-50"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {isSubmitting
                  ? (language === 'hi' ? 'प्रक्रियाधीन...' : 'Processing...')
                  : (language === 'hi' ? 'पुष्टि करें एवं रसीद पाएं' : 'Confirm & Generate Slip')}
              </span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
