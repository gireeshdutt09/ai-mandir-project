import React from 'react';
import { Temple } from '../types/temple';
import { X, Bookmark, Trash2, ArrowRight, Activity, Share2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useFavorites } from '../context/FavoritesContext';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  temples: Temple[];
  onSelectTemple: (temple: Temple) => void;
  onBookPass: (temple: Temple) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  temples,
  onSelectTemple,
  onBookPass
}) => {
  const { language, t } = useLanguage();
  const { favorites, toggleFavorite, clearFavorites } = useFavorites();

  if (!isOpen) return null;

  const favoriteTemples = temples.filter(t => favorites.includes(t.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#16120e] border-l border-amber-600/30 h-full shadow-2xl flex flex-col justify-between">
        
        {/* Drawer Header */}
        <div className="p-5 bg-gradient-to-r from-[#221812] to-[#18110c] border-b border-amber-600/20 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40">
              <Bookmark className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-stone-100">
                {t('savedTemples')} ({favoriteTemples.length})
              </h3>
              <p className="text-xs text-stone-400">
                {language === 'hi' ? 'आपकी व्यक्तिगत दर्शन सूची' : 'Your Personal Darshan Wishlist'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {favoriteTemples.length > 0 ? (
            favoriteTemples.map((temple) => (
              <div
                key={temple.id}
                className="p-3.5 rounded-2xl bg-[#1e1713] border border-stone-800 hover:border-amber-500/40 transition flex items-center space-x-3.5 group"
              >
                <img
                  src={temple.heroImage}
                  alt={temple.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 
                    onClick={() => {
                      onSelectTemple(temple);
                      onClose();
                    }}
                    className="text-sm font-serif font-bold text-stone-100 hover:text-amber-300 transition-colors truncate cursor-pointer"
                  >
                    {language === 'hi' ? temple.hindiName : temple.name}
                  </h4>
                  <span className="text-[11px] text-amber-400/80 block truncate">{temple.deity}</span>
                  
                  <div className="mt-1 flex items-center space-x-2 text-[10px] text-stone-400">
                    <span className="flex items-center space-x-1">
                      <Activity className="w-3 h-3 text-emerald-400" />
                      <span>~{temple.crowdStatus.waitTimeMinutes}m wait</span>
                    </span>
                    <span>•</span>
                    <span>{temple.darshanTimings.opening} - {temple.darshanTimings.closing}</span>
                  </div>
                </div>

                <button
                  onClick={() => toggleFavorite(temple.id)}
                  className="p-2 text-stone-500 hover:text-red-400 transition shrink-0"
                  title="Remove from saved"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="py-20 text-center space-y-3">
              <Bookmark className="w-12 h-12 text-stone-600 mx-auto" />
              <p className="text-sm text-stone-400 font-serif">
                {language === 'hi' ? 'आपकी सूची में कोई मंदिर नहीं है' : 'Your saved list is currently empty'}
              </p>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                {language === 'hi'
                  ? 'मंदिर कार्ड पर बुकमार्क आइकन दबाकर अपनी पसंदीदा सूची तैयार करें।'
                  : 'Click the bookmark icon on any temple card to add it to your pilgrimage route.'}
              </p>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {favoriteTemples.length > 0 && (
          <div className="p-4 bg-[#120e0b] border-t border-stone-800 space-y-2">
            <button
              onClick={() => {
                alert(
                  language === 'hi' 
                    ? `आपकी यात्रा योजना में ${favoriteTemples.length} मंदिर सम्मिलित हैं। कृपया स्क्रीनशॉट लें या प्रिंट करें।` 
                    : `Your itinerary includes ${favoriteTemples.length} temples. You may print or export this route!`
                );
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 font-bold text-xs flex items-center justify-center space-x-2 shadow-lg transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'यात्रा मार्ग निर्यात करें' : 'Export Pilgrimage Route'}</span>
            </button>

            <button
              onClick={clearFavorites}
              className="w-full py-2 rounded-xl text-stone-400 hover:text-stone-200 text-xs transition"
            >
              {language === 'hi' ? 'सूची रिक्त करें (Clear All)' : 'Clear All Wishlist'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
