import React, { useState, useMemo } from 'react';
import { Temple, TempleCategory } from '../types/temple';
import { TempleCard } from './TempleCard';
import { useLanguage } from '../context/LanguageContext';
import { Filter, SlidersHorizontal, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

interface TempleDirectoryProps {
  temples: Temple[];
  selectedCategory: string;
  setSelectedCategory: (cat: any) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSelectTemple: (temple: Temple) => void;
  onBookPass: (temple: Temple) => void;
}

export const TempleDirectory: React.FC<TempleDirectoryProps> = ({
  temples,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  onSelectTemple,
  onBookPass
}) => {
  const { language, t } = useLanguage();
  const [selectedDeity, setSelectedDeity] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popularity' | 'rating' | 'waitTime'>('popularity');

  // Unique list of primary deities
  const deities = useMemo(() => {
    const list = new Set<string>();
    temples.forEach(t => {
      const main = t.deity.split('(')[0].trim();
      list.add(main);
    });
    return Array.from(list);
  }, [temples]);

  // Filtered & Sorted Temples
  const filteredTemples = useMemo(() => {
    return temples.filter(temple => {
      // Category filter
      if (selectedCategory !== 'all' && temple.category !== selectedCategory) {
        return false;
      }
      // Deity filter
      if (selectedDeity !== 'all' && !temple.deity.toLowerCase().includes(selectedDeity.toLowerCase())) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = temple.name.toLowerCase().includes(query);
        const matchHindi = temple.hindiName.includes(query);
        const matchDeity = temple.deity.toLowerCase().includes(query);
        const matchLocation = temple.location.toLowerCase().includes(query);
        const matchEra = temple.era.toLowerCase().includes(query);
        const matchTagline = temple.tagline.toLowerCase().includes(query);
        return matchName || matchHindi || matchDeity || matchLocation || matchEra || matchTagline;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'popularity') return b.popularityScore - a.popularityScore;
      if (sortBy === 'rating') return b.averageRating - a.averageRating;
      if (sortBy === 'waitTime') return a.crowdStatus.waitTimeMinutes - b.crowdStatus.waitTimeMinutes;
      return 0;
    });
  }, [temples, selectedCategory, selectedDeity, searchQuery, sortBy]);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Directory Title & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-serif font-bold text-amber-400 uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'देवालय संकलन' : 'Spiritual Shrines Catalog'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-100">
            {language === 'hi' ? 'काशी मंदिर निर्देशिका' : 'Varanasi Temple Directory'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            {language === 'hi' 
              ? `${filteredTemples.length} पावन देवालय उपलब्ध हैं`
              : `Showing ${filteredTemples.length} consecrated temples across Kashi`}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Deity Selector */}
          <div className="relative">
            <select
              value={selectedDeity}
              onChange={(e) => setSelectedDeity(e.target.value)}
              className="bg-[#1c1612] text-xs text-stone-200 border border-stone-700 rounded-xl px-3 py-2 pr-8 focus:border-amber-500 focus:outline-none appearance-none cursor-pointer"
            >
              <option value="all">{language === 'hi' ? 'सभी देवता (All Deities)' : 'All Primary Deities'}</option>
              {deities.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-400">
              ▼
            </div>
          </div>

          {/* Sort Selector */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#1c1612] text-xs text-stone-200 border border-stone-700 rounded-xl px-3 py-2 pr-8 focus:border-amber-500 focus:outline-none appearance-none cursor-pointer"
            >
              <option value="popularity">{language === 'hi' ? 'लोकप्रियता अनुसार' : 'Most Popular'}</option>
              <option value="rating">{language === 'hi' ? 'उच्चतम रेटिंग' : 'Highest Rated'}</option>
              <option value="waitTime">{language === 'hi' ? 'कम कतार प्रतीक्षा' : 'Shortest Queue'}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-400">
              ▼
            </div>
          </div>

          {/* Reset button if active filters */}
          {(selectedDeity !== 'all' || selectedCategory !== 'all' || searchQuery.trim() !== '') && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDeity('all');
                setSearchQuery('');
              }}
              className="p-2 rounded-xl bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition"
              title="Reset Filters"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Temples */}
      {filteredTemples.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemples.map((temple) => (
            <TempleCard
              key={temple.id}
              temple={temple}
              onSelect={onSelectTemple}
              onBookNow={onBookPass}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-16 text-center bg-[#181310] border border-dashed border-stone-800 rounded-2xl p-8 max-w-lg mx-auto">
          <AlertCircle className="w-12 h-12 text-amber-500/70 mx-auto mb-3" />
          <h3 className="text-lg font-serif font-bold text-stone-200">
            {language === 'hi' ? 'कोई मंदिर नहीं मिला' : 'No Temples Found'}
          </h3>
          <p className="text-xs text-stone-400 mt-2">
            {language === 'hi' 
              ? 'कृपया खोज शब्द या फिल्टर बदलकर पुनः प्रयास करें।'
              : 'Try adjusting your search query, deity filter, or category selection.'}
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedDeity('all');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 transition"
          >
            {language === 'hi' ? 'सभी फिल्टर हटाएं' : 'Clear All Filters'}
          </button>
        </div>
      )}

    </section>
  );
};
