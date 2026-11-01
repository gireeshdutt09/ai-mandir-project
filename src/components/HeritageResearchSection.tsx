import React, { useState } from 'react';
import { heritageResearchData, HistoricalEpoch, ResearchInsight } from '../data/heritageResearchData';
import { BookOpen, Sparkles, Compass, History, Award, ExternalLink, Bot, Layers, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeritageResearchSectionProps {
  onOpenAIGuide: () => void;
}

export const HeritageResearchSection: React.FC<HeritageResearchSectionProps> = ({ onOpenAIGuide }) => {
  const { language } = useLanguage();
  const [selectedInsight, setSelectedInsight] = useState<ResearchInsight>(heritageResearchData.scholarlyInsights[0]);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-serif font-bold">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'पुरातत्व, इतिहास एवं ग्रंथ शोध' : 'Archaeology, Epigraphy & Vedic Lore'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-black text-stone-100">
          {language === 'hi' ? 'काशी धरोहर शोध एवं तीर्थ मार्गदर्शिका' : 'Kashi Heritage Research & Scholarly Guide'}
        </h2>
        <p className="text-xs sm:text-sm text-stone-400">
          {language === 'hi'
            ? 'स्कंद पुराण के काशी खंड, चीनी यात्री ह्वेनसांग के 636 ईस्वी के वृत्तांत, एवं जेम्स प्रिंसेप के वास्तु सर्वेक्षणों पर आधारित प्रामाणिक इतिहास।'
            : 'Academic research notes, scriptural translations from the Skanda Purana, Chinese travel chronicles from 636 CE, and ASI archaeological findings.'}
        </p>
      </div>

      {/* Sacred Geography: 3 Sacred Khandas of Kashi */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Compass className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg font-serif font-bold text-stone-100">
            {language === 'hi' ? 'काशी के तीन पावन खंड (पवित्र भूगोल)' : 'The Three Sacred Khandas of Varanasi'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {heritageResearchData.sacredGeographyNotes.kashiKhandas.map((khanda, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#191411] border border-amber-900/30 hover:border-amber-500/40 transition space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 font-serif font-bold flex items-center justify-center text-xs">
                  0{i + 1}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400/80">
                  Sector {i + 1}
                </span>
              </div>

              <h4 className="text-base font-serif font-bold text-stone-100">
                {language === 'hi' ? khanda.nameHindi : khanda.name}
              </h4>

              <p className="text-xs text-stone-300 leading-relaxed">
                {khanda.symbolism}
              </p>

              <div className="pt-2 border-t border-stone-800 text-[11px] text-amber-300/90">
                <strong>{language === 'hi' ? 'प्रमुख देवालय:' : 'Presiding Shrines:'}</strong> {khanda.deities}
              </div>
            </div>
          ))}
        </div>

        {/* River Dynamics Note */}
        <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-900/30 text-xs text-stone-300 flex items-start space-x-3">
          <span className="text-2xl shrink-0">🌊</span>
          <div>
            <strong className="text-amber-300 block mb-0.5">
              {language === 'hi' ? 'उत्तरावाहिनी गंगा का खगोलीय रहस्य:' : 'The Northward Crescent Bend (Uttaravahini Ganga):'}
            </strong>
            <p className="leading-relaxed">
              {heritageResearchData.sacredGeographyNotes.riverDynamics}
            </p>
          </div>
        </div>
      </div>

      {/* Historical Chronological Timeline */}
      <div className="space-y-6 pt-4 border-t border-stone-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <History className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-serif font-bold text-stone-100">
              {language === 'hi' ? 'ऐतिहासिक कालक्रम (Vedic to 2026)' : 'Historical Chronology (3000 BCE - Present)'}
            </h3>
          </div>

          <button
            onClick={onOpenAIGuide}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold hover:bg-amber-500/30 transition"
          >
            <Bot className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'hi' ? 'एआई से इतिहास पूछें' : 'Ask AI Historian'}</span>
          </button>
        </div>

        <div className="relative border-l-2 border-amber-800/40 ml-3 sm:ml-4 pl-4 sm:pl-6 space-y-8">
          {heritageResearchData.chronologicalTimeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#120f0d] shadow-md group-hover:scale-125 transition-transform" />

              <div className="p-5 rounded-2xl bg-[#191411] border border-stone-800 group-hover:border-amber-500/40 transition space-y-3 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-300 font-mono">
                      {item.century}
                    </span>
                    <span className="text-xs text-stone-400 font-medium">({item.era})</span>
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">Epoch #{idx + 1}</span>
                </div>

                <h4 className="text-base sm:text-lg font-serif font-bold text-amber-200">
                  {language === 'hi' ? item.titleHindi : item.title}
                </h4>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                  {language === 'hi' ? item.descriptionHindi : item.description}
                </p>

                <div className="pt-2">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    {language === 'hi' ? 'प्रमुख ऐतिहासिक घटनाएं:' : 'Key Historic Milestones:'}
                  </span>
                  <ul className="text-xs text-stone-400 space-y-1 list-disc list-inside">
                    {item.keyEvents.map((ev, i) => (
                      <li key={i}>{ev}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 text-[11px] text-stone-400 italic">
                  <strong>Archaeological / Archival Source:</strong> {item.archaeologicalSources}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scholarly Deep-Dives Interactive Cards */}
      <div className="space-y-4 pt-4 border-t border-stone-800">
        <div className="flex items-center space-x-2">
          <Layers className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg font-serif font-bold text-stone-100">
            {language === 'hi' ? 'विशेष शोध निबंध एवं वास्तु रहस्य' : 'Scholarly Research Papers & Architectural Insights'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {heritageResearchData.scholarlyInsights.map((insight) => (
            <button
              key={insight.id}
              onClick={() => setSelectedInsight(insight)}
              className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between space-y-3 ${
                selectedInsight.id === insight.id
                  ? 'bg-amber-950/40 border-amber-500 shadow-xl'
                  : 'bg-[#191411] border-stone-800 hover:border-stone-700'
              }`}
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  {insight.category}
                </span>
                <h4 className="text-sm font-serif font-bold text-stone-100 mt-1">
                  {language === 'hi' ? insight.titleHindi : insight.title}
                </h4>
                <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                  {language === 'hi' ? insight.summaryHindi : insight.summary}
                </p>
              </div>

              <div className="text-[11px] text-amber-400 font-semibold flex items-center space-x-1">
                <span>{language === 'hi' ? 'शोध पढ़ें' : 'Read Paper'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>

        {/* Selected Insight Display Box */}
        {selectedInsight && (
          <div className="p-6 rounded-3xl bg-[#1f1814] border border-amber-600/40 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  {selectedInsight.category} • Monograph
                </span>
                <h4 className="text-lg font-serif font-bold text-amber-200 mt-0.5">
                  {language === 'hi' ? selectedInsight.titleHindi : selectedInsight.title}
                </h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              {language === 'hi' ? selectedInsight.summaryHindi : selectedInsight.summary}
            </p>

            <div className="space-y-2 pt-2 border-t border-stone-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                {language === 'hi' ? 'प्रमुख अनुसंधान बिंदु:' : 'Key Scientific & Structural Findings:'}
              </span>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {selectedInsight.detailedNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-amber-500 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-stone-800 text-[11px] text-stone-400">
              <strong className="text-stone-300">Scholarly References: </strong>
              {selectedInsight.scholarlyCitations.join(' | ')}
            </div>
          </div>
        )}
      </div>

    </section>
  );
};
