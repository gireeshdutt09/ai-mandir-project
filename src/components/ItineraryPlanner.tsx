import React, { useState } from 'react';
import { itinerariesData } from '../data/itinerariesData';
import { Route, Clock, Calendar, CheckCircle2, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ItineraryPlanner: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCircuit, setSelectedCircuit] = useState(itinerariesData[0]);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-serif font-bold">
          <Route className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'सुगम तीर्थ योजना' : 'Curated Pilgrimage Circuits'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-black text-stone-100">
          {language === 'hi' ? 'काशी तीर्थ यात्रा परिपथ योजना' : 'Kashi Darshan Itinerary Planner'}
        </h2>
        <p className="text-xs sm:text-sm text-stone-400">
          {language === 'hi'
            ? 'अपनी समयावधि एवं रुचि के अनुसार 1-दिवसीय, 2-दिवसीय अथवा ज्ञान-धरोहर यात्रा का चयन करें।'
            : 'Pre-planned, optimized routes designed by local Banaras scholars for weekend visitors, spiritual meditators, and families.'}
        </p>
      </div>

      {/* Circuit Selector Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {itinerariesData.map((circuit) => (
          <button
            key={circuit.id}
            onClick={() => setSelectedCircuit(circuit)}
            className={`p-5 rounded-2xl border text-left transition flex flex-col justify-between space-y-3 ${
              selectedCircuit.id === circuit.id
                ? 'bg-amber-950/50 border-amber-500 shadow-xl'
                : 'bg-[#181310] border-stone-800 hover:border-stone-700'
            }`}
          >
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {circuit.badge}
              </span>
              <h3 className="text-base font-serif font-bold text-stone-100 mt-2">
                {language === 'hi' ? circuit.titleHindi : circuit.title}
              </h3>
              <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                {language === 'hi' ? circuit.descriptionHindi : circuit.description}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-stone-800/80">
              <span className="text-amber-400 font-mono font-medium flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{circuit.duration}</span>
              </span>
              <span className="text-stone-400 font-bold">{circuit.stops.length} Stops →</span>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Circuit Details & Step Timeline */}
      <div className="p-6 rounded-3xl bg-[#1c1612] border border-amber-600/30 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {selectedCircuit.badge} • {selectedCircuit.duration}
            </span>
            <h3 className="text-xl font-serif font-bold text-stone-100 mt-0.5">
              {language === 'hi' ? selectedCircuit.titleHindi : selectedCircuit.title}
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              <strong>Ideal For:</strong> {selectedCircuit.idealFor}
            </p>
          </div>
        </div>

        {/* Steps Timeline */}
        <div className="relative border-l-2 border-amber-500/40 ml-4 pl-6 space-y-6">
          {selectedCircuit.stops.map((stop) => (
            <div key={stop.step} className="relative group">
              {/* Step Badge */}
              <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-amber-500 text-stone-950 font-bold text-xs flex items-center justify-center border-2 border-[#1c1612] shadow">
                {stop.step}
              </div>

              <div className="p-4 rounded-2xl bg-[#140f0c] border border-stone-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    ⏱️ {stop.time}
                  </span>
                  <span className="text-[10px] text-stone-500 font-medium">Stage {stop.step}</span>
                </div>

                <h4 className="text-base font-serif font-bold text-stone-100">
                  {stop.name}
                </h4>

                <p className="text-xs text-stone-300 leading-relaxed font-sans">
                  {stop.activity}
                </p>

                <div className="pt-2 text-[11px] text-amber-300/90 flex items-start space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Travel Tip:</strong> {stop.travelTip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
