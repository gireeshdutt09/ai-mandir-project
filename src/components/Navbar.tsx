import React, { useState } from 'react';
import { 
  Compass, 
  Map, 
  ShieldCheck, 
  Activity, 
  BookOpen, 
  Bookmark, 
  Languages, 
  Menu, 
  X, 
  Bot, 
  PhoneCall, 
  Sparkles,
  Route
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useFavorites } from '../context/FavoritesContext';
import { VirtualDarshanBell } from './VirtualDarshanBell';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAIGuide: () => void;
  onOpenFavorites: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenAIGuide,
  onOpenFavorites
}) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { favorites } = useFavorites();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'directory', label: t('navDirectory'), icon: Compass },
    { id: 'map', label: t('navMap'), icon: Map },
    { id: 'trust', label: t('navOfficialTrust'), icon: ShieldCheck },
    { id: 'crowd', label: t('navLiveCrowd'), icon: Activity },
    { id: 'research', label: t('navResearch'), icon: BookOpen },
    { id: 'itineraries', label: t('navItineraries'), icon: Route },
    { id: 'helplines', label: t('navHelplines'), icon: PhoneCall },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#120f0d]/95 backdrop-blur-md border-b border-amber-600/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Branding */}
          <div 
            onClick={() => { setActiveTab('directory'); }}
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 p-0.5 shadow-lg shadow-orange-950/50 group-hover:shadow-amber-500/30 transition-all duration-300">
              <div className="w-full h-full bg-[#1c140f] rounded-[14px] flex items-center justify-center">
                <span className="text-2xl filter drop-shadow">🛕</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <h1 className="text-lg sm:text-xl font-serif font-black tracking-wide bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  {language === 'hi' ? 'काशी दर्शन एवं धरोहर' : 'KASHI DARSHAN'}
                </h1>
                <span className="text-[10px] font-sans font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  VARANASI
                </span>
              </div>
              <p className="text-[11px] text-stone-400 tracking-tight font-sans">
                {language === 'hi' ? 'प्राचीन व आधुनिक देवालय पोर्टल' : 'Heritage & Temple Pilgrimage Portal'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 font-sans">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                      : 'text-stone-300 hover:text-amber-200 hover:bg-stone-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools: AI Guide, Bell, Favorites, Language */}
          <div className="hidden md:flex items-center space-x-2.5">
            {/* Virtual Bell */}
            <VirtualDarshanBell />

            {/* AI Assistant Button */}
            <button
              onClick={onOpenAIGuide}
              className="relative inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 shadow-md shadow-orange-600/30 hover:scale-105 hover:shadow-amber-500/40 transition duration-300"
            >
              <Bot className="w-4 h-4 text-stone-950 animate-pulse" />
              <span>{language === 'hi' ? 'दिव्य एआई' : 'Divya AI'}</span>
              <Sparkles className="w-3 h-3 text-amber-900" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2 rounded-full text-stone-300 hover:text-amber-300 hover:bg-stone-800 transition"
              title="Saved Temples"
              aria-label="Wishlist"
            >
              <Bookmark className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 text-[10px] font-black flex items-center justify-center shadow">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-stone-900/80 border border-amber-900/40 hover:border-amber-500 text-xs font-semibold text-amber-200 transition"
              title="Toggle Language (हिंदी / English)"
            >
              <Languages className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={onOpenAIGuide}
              className="p-2 rounded-full bg-amber-500 text-stone-950 font-bold"
              aria-label="Open AI Guide"
            >
              <Bot className="w-4 h-4" />
            </button>
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs rounded bg-stone-800 text-amber-300 border border-amber-600/30"
            >
              {language === 'en' ? 'हिन्दी' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white rounded-lg hover:bg-stone-800"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#181310] border-b border-amber-700/30 px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between py-2 border-b border-stone-800">
            <VirtualDarshanBell />
            <button
              onClick={() => {
                onOpenFavorites();
                setMobileMenuOpen(false);
              }}
              className="flex items-center space-x-1 text-xs text-amber-300"
            >
              <Bookmark className="w-4 h-4" />
              <span>{t('savedTemples')} ({favorites.length})</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-1 pt-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
