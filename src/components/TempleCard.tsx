import React from 'react';
import { Temple } from '../types/temple';
import { Bookmark, Star, MapPin, Clock, ArrowRight, Activity, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useFavorites } from '../context/FavoritesContext';

interface TempleCardProps {
  temple: Temple;
  onSelect: (temple: Temple) => void;
  onBookNow: (temple: Temple) => void;
}

export const TempleCard: React.FC<TempleCardProps> = ({ temple, onSelect, onBookNow }) => {
  const { language, t } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(temple.id);

  const getCrowdBadge = (level: string) => {
    switch (level) {
      case 'Low':
        return { color: 'bg-emerald-950/80 text-emerald-300 border-emerald-600/40', text: language === 'hi' ? 'कम भीड़' : 'Low Queue' };
      case 'Moderate':
        return { color: 'bg-amber-950/80 text-amber-300 border-amber-600/40', text: language === 'hi' ? 'मध्यम' : 'Moderate' };
      case 'High':
        return { color: 'bg-orange-950/80 text-orange-300 border-orange-600/40', text: language === 'hi' ? 'अधिक भीड़' : 'High Rush' };
      case 'Peak':
        return { color: 'bg-red-950/80 text-red-300 border-red-600/40', text: language === 'hi' ? 'चरम भीड़' : 'Peak Queue' };
      default:
        return { color: 'bg-stone-800 text-stone-300 border-stone-700', text: level };
    }
  };

  const crowd = getCrowdBadge(temple.crowdStatus.level);

  return (
    <div className="group relative bg-[#181411] border border-stone-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-950/30 transition-all duration-300 flex flex-col">
      
      {/* Image Banner */}
      <div className="relative h-52 sm:h-56 overflow-hidden">
        <img
          src={temple.heroImage}
          alt={temple.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181411] via-black/40 to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wider uppercase backdrop-blur-md shadow-md ${
            temple.category === 'ancient'
              ? 'bg-amber-600/90 text-stone-950'
              : 'bg-amber-300/90 text-stone-950'
          }`}>
            {temple.category === 'ancient' 
              ? (language === 'hi' ? 'प्राचीन मंदिर' : 'Ancient Shrine')
              : (language === 'hi' ? 'आधुनिक मंदिर' : 'Modern Marble')}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(temple.id);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-transform active:scale-90 ${
              favorited
                ? 'bg-amber-500 text-stone-950 shadow-lg'
                : 'bg-black/50 text-stone-300 hover:text-amber-400 hover:bg-black/70'
            }`}
            title={favorited ? 'Remove from saved' : 'Save temple'}
            aria-label="Bookmark temple"
          >
            <Bookmark className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Live Wait Time & Crowd Badge */}
        <div className="absolute bottom-3 left-3 flex items-center space-x-2">
          <div className={`px-2.5 py-1 rounded-lg text-xs font-semibold border backdrop-blur-md flex items-center space-x-1.5 shadow-sm ${crowd.color}`}>
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>{crowd.text} (~{temple.crowdStatus.waitTimeMinutes}m)</span>
          </div>
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 flex items-center space-x-1 text-xs font-bold text-amber-300">
          <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
          <span>{temple.averageRating}</span>
          <span className="text-[10px] text-stone-400 font-normal">({temple.totalReviews})</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Deity and Era */}
          <div className="flex items-center justify-between text-xs text-amber-400/90 font-medium mb-1">
            <span className="truncate max-w-[65%]">{temple.deity}</span>
            <span className="text-stone-400 text-[11px] truncate">{language === 'hi' ? temple.eraHindi : temple.era}</span>
          </div>

          {/* Temple Title */}
          <h3 
            onClick={() => onSelect(temple)}
            className="text-base sm:text-lg font-serif font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-1 cursor-pointer"
          >
            {language === 'hi' ? temple.hindiName : temple.name}
          </h3>

          {/* Tagline */}
          <p className="mt-1 text-xs text-stone-400 line-clamp-2 leading-relaxed">
            {language === 'hi' ? temple.taglineHindi : temple.tagline}
          </p>

          {/* Key Facts: Timings & Cantt Distance */}
          <div className="mt-3 pt-3 border-t border-stone-800/80 grid grid-cols-2 gap-2 text-[11px] text-stone-400">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">{temple.darshanTimings.opening} - {temple.darshanTimings.closing}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">{temple.transit.fromVaranasiCantt.split('(')[0]}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center space-x-2">
          <button
            onClick={() => onSelect(temple)}
            className="flex-1 py-2 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-amber-500 text-xs font-semibold flex items-center justify-center space-x-1.5 transition"
          >
            <span>{t('viewDetails')}</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>

          {temple.officialTrustBooking.sugamDarshanAvailable && (
            <button
              onClick={() => onBookNow(temple)}
              className="py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 text-xs font-bold shadow-md shadow-orange-900/30 flex items-center space-x-1 shrink-0 transition"
              title="Book Sugam Darshan VIP Pass"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'पास' : 'VIP Pass'}</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
