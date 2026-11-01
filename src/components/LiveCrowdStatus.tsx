import React, { useState } from 'react';
import { Temple } from '../types/temple';
import { Activity, Clock, AlertTriangle, CheckCircle, Flame, ShieldAlert, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LiveCrowdStatusProps {
  temples: Temple[];
  onSelectTemple: (temple: Temple) => void;
}

export const LiveCrowdStatus: React.FC<LiveCrowdStatusProps> = ({ temples, onSelectTemple }) => {
  const { language } = useLanguage();
  const [filterLevel, setFilterLevel] = useState<'all' | 'Low' | 'Moderate' | 'High'>('all');

  const filtered = temples.filter(t => filterLevel === 'all' || t.crowdStatus.level === filterLevel);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Low':
        return {
          bg: 'bg-emerald-950/60 border-emerald-600/40 text-emerald-300',
          badge: 'bg-emerald-500/20 text-emerald-400',
          dot: 'bg-emerald-400'
        };
      case 'Moderate':
        return {
          bg: 'bg-amber-950/60 border-amber-600/40 text-amber-300',
          badge: 'bg-amber-500/20 text-amber-400',
          dot: 'bg-amber-400'
        };
      case 'High':
      case 'Peak':
        return {
          bg: 'bg-orange-950/60 border-orange-600/40 text-orange-300',
          badge: 'bg-orange-500/20 text-orange-400',
          dot: 'bg-orange-400'
        };
      default:
        return {
          bg: 'bg-stone-900 border-stone-800 text-stone-300',
          badge: 'bg-stone-800 text-stone-400',
          dot: 'bg-stone-400'
        };
    }
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-serif font-bold mb-2">
            <Activity className="w-4 h-4 animate-pulse text-amber-400" />
            <span>{language === 'hi' ? 'सजीव कतार निगरानी' : 'Real-Time Crowd & Queue Analytics'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-100">
            {language === 'hi' ? 'लाइव भीड़ स्थिति एवं दर्शन प्रतीक्षा समय' : 'Live Crowd Status & Peak Hours Guide'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            {language === 'hi'
              ? 'प्रवेश द्वारों, कतार लंबाई, एवं दर्शन प्रतीक्षा समय का निरंतर अद्यतन'
              : 'Live updates on queue length in meters, gate status, and peak hour recommendations'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 bg-stone-900/90 p-1.5 rounded-xl border border-stone-800">
          <button
            onClick={() => setFilterLevel('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              filterLevel === 'all' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300 hover:text-white'
            }`}
          >
            {language === 'hi' ? 'सभी' : 'All'}
          </button>
          <button
            onClick={() => setFilterLevel('Low')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              filterLevel === 'Low' ? 'bg-emerald-600 text-white font-bold' : 'text-stone-300 hover:text-white'
            }`}
          >
            {language === 'hi' ? 'न्यूनतम भीड़ (< 15m)' : 'Low (< 15m)'}
          </button>
          <button
            onClick={() => setFilterLevel('Moderate')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              filterLevel === 'Moderate' ? 'bg-amber-600 text-stone-950 font-bold' : 'text-stone-300 hover:text-white'
            }`}
          >
            {language === 'hi' ? 'मध्यम (15-30m)' : 'Moderate'}
          </button>
          <button
            onClick={() => setFilterLevel('High')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              filterLevel === 'High' ? 'bg-orange-600 text-white font-bold' : 'text-stone-300 hover:text-white'
            }`}
          >
            {language === 'hi' ? 'अधिक भीड़ (> 30m)' : 'High Rush'}
          </button>
        </div>
      </div>

      {/* Advisory Banner: Peak Hours Matrix */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-[#221813] to-stone-900/50 border border-amber-600/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/40 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-serif font-bold text-amber-200">
              {language === 'hi' ? 'दैनिक पीक ऑवर्स परामर्श (Peak Rush Advice)' : 'Daily Peak Hours Advisory'}
            </h4>
            <p className="text-xs text-stone-300 mt-0.5">
              {language === 'hi'
                ? 'प्रातः 07:00 - 10:00 बजे एवं संध्या 05:30 - 08:30 बजे सर्वाधिक भीड़ रहती है। दोपहर 12:30 से 03:30 के बीच कतार सबसे कम होती है।'
                : 'Highest rush occurs 07:00 - 10:00 AM and 05:30 - 08:30 PM. For relaxed darshan, visit between 12:30 PM and 03:30 PM or reserve a Sugam VIP Pass.'}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 shrink-0 text-xs">
          <div className="flex items-center space-x-1.5 text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span>{language === 'hi' ? 'श्रेष्ठ समय: 12-3 PM' : 'Optimal: 12-3 PM'}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-orange-400">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
            <span>{language === 'hi' ? 'पीक: 6-9 PM' : 'Peak: 6-9 PM'}</span>
          </div>
        </div>
      </div>

      {/* Live Crowd Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((temple) => {
          const styling = getLevelColor(temple.crowdStatus.level);
          return (
            <div
              key={temple.id}
              onClick={() => onSelectTemple(temple)}
              className="p-5 rounded-2xl bg-[#1a1411] border border-stone-800 hover:border-amber-500/50 transition cursor-pointer shadow-lg hover:shadow-amber-950/30 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border flex items-center space-x-1.5 ${styling.bg}`}>
                    <span className={`w-2 h-2 rounded-full ${styling.dot} animate-ping`}></span>
                    <span>{temple.crowdStatus.level} Crowd</span>
                  </span>

                  <span className="text-[10px] text-stone-400">
                    Updated {temple.crowdStatus.lastUpdated}
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-stone-100 line-clamp-1">
                  {language === 'hi' ? temple.hindiName : temple.name}
                </h3>
                <span className="text-xs text-amber-400/80 block mt-0.5">{temple.deity}</span>

                {/* Queue length & wait time indicators */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#140f0c] border border-stone-800/80">
                    <span className="text-[10px] text-stone-400 block">{language === 'hi' ? 'अनुमानित प्रतीक्षा' : 'Est. Wait Time'}</span>
                    <span className="text-sm font-mono font-bold text-amber-300">
                      ~{temple.crowdStatus.waitTimeMinutes} mins
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#140f0c] border border-stone-800/80">
                    <span className="text-[10px] text-stone-400 block">{language === 'hi' ? 'कतार लंबाई' : 'Queue Length'}</span>
                    <span className="text-sm font-mono font-bold text-stone-200">
                      {temple.crowdStatus.queueLengthMeters} meters
                    </span>
                  </div>
                </div>

                {/* Gate Recommendation */}
                <div className="mt-3 text-[11px] text-stone-400">
                  <strong className="text-stone-300">{language === 'hi' ? 'प्रवेश द्वार:' : 'Active Gate:'} </strong>
                  <span>{temple.crowdStatus.gateNumber}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold">
                <span>{language === 'hi' ? 'पूर्ण विवरण देखें' : 'View Timings & Gate'}</span>
                <span>→</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
