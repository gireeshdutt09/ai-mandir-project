import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Heart, Sparkles, MapPin, Phone, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#0c0908] border-t border-amber-900/40 text-stone-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & Spiritual Lore */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-2.5">
              <span className="text-2xl">🛕</span>
              <span className="text-base font-serif font-black tracking-wide text-amber-300">
                {language === 'hi' ? 'काशी दर्शन एवं धरोहर' : 'Kashi Darshan & Heritage'}
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed font-sans">
              {language === 'hi'
                ? 'वाराणसी के प्राचीन और आधुनिक देवालयों का एकीकृत सांस्कृतिक एवं तीर्थ पोर्टल। गंगा तट से गर्भगृह तक का दिव्य अनुभव।'
                : 'A consecrated cultural and pilgrimage portal dedicated to the ancient Jyotirlingas and modern marble sanctuaries of sacred Varanasi (Kashi).'}
            </p>
            <div className="text-[11px] text-amber-400/90 font-serif italic pt-1">
              "काशी मुक्तिदायिनी, सर्वतीर्थमयी, पावनी।"
            </div>
          </div>

          {/* Quick Pilgrimage Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold text-amber-200 uppercase tracking-widest">
              {language === 'hi' ? 'प्रमुख देवालय' : 'Iconic Shrines'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><span className="text-stone-300">Shri Kashi Vishwanath Dham</span></li>
              <li><span className="text-stone-300">Sankat Mochan Hanuman Temple</span></li>
              <li><span className="text-stone-300">Maa Annapurna Mandir</span></li>
              <li><span className="text-stone-300">Kaal Bhairav (Kotwal of Kashi)</span></li>
              <li><span className="text-stone-300">New Vishwanath Temple (BHU VT)</span></li>
              <li><span className="text-stone-300">Bharat Mata Mandir</span></li>
            </ul>
          </div>

          {/* Official Trust & Govt Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold text-amber-200 uppercase tracking-widest">
              {language === 'hi' ? 'शासकीय व न्यास पोर्टल' : 'Official Portals'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a 
                  href="https://shrikashivishwanath.org" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-amber-300 flex items-center space-x-1 transition"
                >
                  <span>Shri Kashi Vishwanath Trust</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://uptourism.gov.in" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-amber-300 flex items-center space-x-1 transition"
                >
                  <span>Uttar Pradesh Tourism Dept</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://varanasi.nic.in" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-amber-300 flex items-center space-x-1 transition"
                >
                  <span>Varanasi District Administration</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://asi.nic.in" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-amber-300 flex items-center space-x-1 transition"
                >
                  <span>Archaeological Survey of India</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency & Helpline desk */}
          <div className="space-y-3">
            <h4 className="text-xs font-serif font-bold text-amber-200 uppercase tracking-widest">
              {language === 'hi' ? 'आपातकालीन सहायता' : 'Emergency & Helplines'}
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                <span>UP Police & Tourist Help: <strong>112</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Vishwanath Trust: <strong>0542-2392629</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Jal Ambulance (Ghats): <strong>108</strong></span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-400">
          <p>
            © 2026 Kashi Darshan & Heritage Portal. Built with reverence for the pilgrims and devotees of Mahadev.
          </p>
          <div className="flex items-center space-x-3 text-stone-400">
            <span>Har Har Mahadev</span>
            <span>•</span>
            <span>ॐ नमः शिवाय</span>
            <span>•</span>
            <span>Kashi Moksha-Dayini</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
