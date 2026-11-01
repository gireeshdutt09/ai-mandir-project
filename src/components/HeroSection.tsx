import React from 'react';
import { Search, Sparkles, ShieldCheck, MapPin, Activity, Bot, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: any) => void;
  onOpenAIGuide: () => void;
  onExploreClick: () => void;
  onBookPassClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onOpenAIGuide,
  onExploreClick,
  onBookPassClick
}) => {
  const { language, t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#1c140e] via-[#16100c] to-[#0f0c0a] border-b border-amber-900/30">
      
      {/* Background Sacred Geometric Glow & Mandala Motif */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-amber-500 blur-3xl"></div>
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-orange-600 blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 rounded-full bg-yellow-600 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-16 sm:pb-20 text-center">
        
        {/* Sacred Sanskrit Verse Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-serif shadow-inner mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
          <span>वाराणसी पुरपतिं भज विश्वनाथम् • ॐ नमः शिवाय</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-stone-100 max-w-4xl mx-auto leading-tight sm:leading-none">
          {language === 'hi' ? (
            <>
              काशी के पावन देवालयों का <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                आध्यात्मिक एवं ऐतिहासिक संगम
              </span>
            </>
          ) : (
            <>
              Discover the Divine Shrines of Varanasi: <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Ancient Heritage & Modern Marvels
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-stone-300 max-w-2xl mx-auto font-sans leading-relaxed">
          {language === 'hi' 
            ? 'स्कंद पुराण कालीन प्राचीन द्वादश ज्योतिर्लिंग से लेकर मकराना संगमरमर के आधुनिक मंदिरों तक — आरती समय, लाइव भीड़ स्थिति, आधिकारिक सुगम दर्शन बुकिंग एवं एआई मार्गदर्शक।'
            : 'From Vedic Jyotirlingas along the crescent Ganges to colossal modern marble sanctuaries — explore aarti schedules, live queues, official trust passes, and intelligent AI pilgrimage guidance.'}
        </p>

        {/* Live Crowd & Gate Ticker Pill */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-2 rounded-xl bg-stone-900/80 border border-amber-800/40 text-xs text-stone-300">
          <div className="flex items-center space-x-1.5 text-amber-400 font-bold">
            <Activity className="w-4 h-4 animate-pulse text-amber-400" />
            <span>{language === 'hi' ? 'सजीव कतार स्थिति:' : 'Live Queue Status:'}</span>
          </div>
          <span className="text-stone-300">
            {language === 'hi' ? 'विश्वनाथ धाम गेट 4: ~45 मिनट' : 'Vishwanath Gate 4: ~45 mins'}
          </span>
          <span className="text-stone-600 hidden sm:inline">•</span>
          <span className="text-stone-300">
            {language === 'hi' ? 'संकट मोचन: ~20 मिनट' : 'Sankat Mochan: ~20 mins'}
          </span>
          <span className="text-stone-600 hidden sm:inline">•</span>
          <span className="text-emerald-400 font-medium">
            {language === 'hi' ? 'बीएचयू बिरला मंदिर: सुगम (5-10 मिनट)' : 'BHU VT: Fast (5-10 mins)'}
          </span>
        </div>

        {/* Interactive Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative flex items-center shadow-2xl rounded-2xl bg-[#1f1915] border-2 border-amber-600/40 focus-within:border-amber-400 transition-all p-1.5">
            <Search className="w-5 h-5 text-amber-400 ml-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full px-3 py-3 bg-transparent text-sm sm:text-base text-stone-100 placeholder-stone-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-2 text-xs text-stone-400 hover:text-white"
              >
                Clear
              </button>
            )}
            <button
              onClick={onExploreClick}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 font-bold text-xs sm:text-sm hover:from-amber-400 hover:to-orange-500 shadow-md transition shrink-0"
            >
              {language === 'hi' ? 'खोजें' : 'Search'}
            </button>
          </div>
        </div>

        {/* Category Tabs / Quick Filter Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 font-bold'
                : 'bg-stone-900/90 text-stone-300 border border-stone-800 hover:border-amber-600'
            }`}
          >
            {t('allTemples')} (11+)
          </button>
          <button
            onClick={() => setSelectedCategory('ancient')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center space-x-1.5 ${
              selectedCategory === 'ancient'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 font-bold'
                : 'bg-stone-900/90 text-stone-300 border border-stone-800 hover:border-amber-600'
            }`}
          >
            <span>📜</span>
            <span>{t('ancientCategory')}</span>
          </button>
          <button
            onClick={() => setSelectedCategory('modern')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center space-x-1.5 ${
              selectedCategory === 'modern'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 font-bold'
                : 'bg-stone-900/90 text-stone-300 border border-stone-800 hover:border-amber-600'
            }`}
          >
            <span>🏛️</span>
            <span>{t('modernCategory')}</span>
          </button>
        </div>

        {/* Quick CTA Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onBookPassClick}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-orange-900/40 hover:scale-105 transition duration-200"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{t('bookSugamPass')}</span>
          </button>

          <button
            onClick={onOpenAIGuide}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#271d17] border border-amber-500/40 text-amber-300 hover:bg-[#34261e] font-semibold text-xs sm:text-sm shadow-md transition duration-200"
          >
            <Bot className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'एआई मार्गदर्शक से पूछें' : 'Consult Divya AI Guide'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
