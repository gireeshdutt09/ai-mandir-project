import React from 'react';
import { helplinesData } from '../data/helplinesData';
import { PhoneCall, ShieldAlert, AlertTriangle, LifeBuoy, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TouristHelplines: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-serif font-bold">
          <PhoneCall className="w-4 h-4 text-red-400" />
          <span>{language === 'hi' ? 'प्रशासनिक व सुरक्षा हेल्पलाइन' : 'Official Administration & Emergency Helpdesk'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-black text-stone-100">
          {language === 'hi' ? 'पर्यटक पुलिस एवं आपातकालीन सहायता' : 'Tourist Police, Medical & Assistance Helplines'}
        </h2>
        <p className="text-xs sm:text-sm text-stone-400">
          {language === 'hi'
            ? 'उत्तर प्रदेश पुलिस, काशी विश्वनाथ धाम कंट्रोल रूम, जल एम्बुलेंस एवं नाव किराया नियंत्रण प्रकोष्ठ।'
            : 'Immediate emergency contacts, riverfront medical aid, boat tariff regulation desks, and pilgrim safety helplines.'}
        </p>
      </div>

      {/* Helplines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {helplinesData.map((item) => (
          <div
            key={item.id}
            className={`p-5 rounded-2xl bg-[#191411] border transition flex flex-col justify-between space-y-4 shadow-lg ${
              item.emergency
                ? 'border-red-600/40 hover:border-red-400'
                : 'border-stone-800 hover:border-amber-500/50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  item.emergency
                    ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                }`}>
                  {item.category}
                </span>

                <span className="text-[10px] text-stone-400 font-mono">
                  {item.availableHours}
                </span>
              </div>

              <h3 className="text-base font-serif font-bold text-stone-100">
                {language === 'hi' ? item.hindiName : item.name}
              </h3>

              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                {language === 'hi' ? item.descriptionHindi : item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-stone-500 block">Toll-Free / Phone</span>
                <a
                  href={`tel:${item.phone}`}
                  className="text-base font-mono font-bold text-amber-300 hover:text-amber-200 hover:underline"
                >
                  📞 {item.phone}
                </a>
              </div>

              <a
                href={`tel:${item.phone}`}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 font-bold text-xs hover:scale-105 transition"
              >
                {language === 'hi' ? 'कॉल करें' : 'Call Now'}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pilgrim Safety Guidelines Advisory */}
      <div className="p-6 rounded-3xl bg-[#1d1612] border border-amber-600/30 space-y-4">
        <h4 className="text-base font-serif font-bold text-amber-200 flex items-center space-x-2">
          <ShieldAlert className="w-5 h-5 text-amber-400" />
          <span>{language === 'hi' ? 'तीर्थयात्री सुरक्षा एवं सतर्कता निर्देशिका' : 'Important Pilgrim Safety & Fair Practice Guidelines'}</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-300 font-sans">
          <div className="p-3.5 rounded-xl bg-[#140f0c] border border-stone-800 space-y-1">
            <strong className="text-amber-300">1. {language === 'hi' ? 'नौका विहार (Boat Tariff):' : 'Boat Fare Regulation:'}</strong>
            <p className="text-stone-400">
              {language === 'hi'
                ? 'घाटों पर प्रशासन द्वारा निर्धारित सरकारी नाव दर तालिका अवश्य देखें। अस्सी या दशाश्वमेध घाट पुलिस सहायता बूथ से दर सत्यापित करें।'
                : 'Always check the administration-approved rate board on Dashashwamedh or Assi Ghat before boarding row or motor boats.'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#140f0c] border border-stone-800 space-y-1">
            <strong className="text-amber-300">2. {language === 'hi' ? 'इलेक्ट्रॉनिक वस्तुएं व लॉकर:' : 'Digital Gadgets & Lockers:'}</strong>
            <p className="text-stone-400">
              {language === 'hi'
                ? 'काशी विश्वनाथ कॉरिडोर एवं काल भैरव मंदिर के मुख्य द्वारों पर निःशुल्क शासकीय लॉकर उपलब्ध हैं। मोबाइल व कैमरे गर्भगृह में पूर्णतः प्रतिबंधित हैं।'
                : 'Free government-managed digital lockers are provided at Gate 4 and Gate 1. Mobile phones and cameras are prohibited inside sanctums.'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#140f0c] border border-stone-800 space-y-1">
            <strong className="text-amber-300">3. {language === 'hi' ? 'अधिकृत गाइड (Certified Guides):' : 'Authorized Guides:'}</strong>
            <p className="text-stone-400">
              {language === 'hi'
                ? 'केवल पर्यटन विभाग (UP Tourism) द्वारा जारी पहचान पत्र धारी गाइडों की ही सेवा लें।'
                : 'Engage only UP Tourism Department certified guides carrying official badge credentials.'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#140f0c] border border-stone-800 space-y-1">
            <strong className="text-amber-300">4. {language === 'hi' ? 'जल एम्बुलेंस सेवा (Ganga Medical Aid):' : 'Riverfront Jal Ambulance:'}</strong>
            <p className="text-stone-400">
              {language === 'hi'
                ? '84 घाटों पर किसी भी आकस्मिक स्वास्थ्य समस्या के समय 108 अथवा 112 डायल करें। त्वरित जल एम्बुलेंस उपलब्ध होती है।'
                : 'Dial 108 or 112 for the dedicated boat Jal-Ambulance fleet equipped with oxygen and paramedics across the 84 ghats.'}
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
