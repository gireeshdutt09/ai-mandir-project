import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { BookingProvider } from './context/BookingContext';
import { templesData } from './data/templesData';
import { Temple } from './types/temple';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TempleDirectory } from './components/TempleDirectory';
import { TempleDetailModal } from './components/TempleDetailModal';
import { InteractiveMap } from './components/InteractiveMap';
import { OfficialTrustServices } from './components/OfficialTrustServices';
import { LiveCrowdStatus } from './components/LiveCrowdStatus';
import { HeritageResearchSection } from './components/HeritageResearchSection';
import { ItineraryPlanner } from './components/ItineraryPlanner';
import { TouristHelplines } from './components/TouristHelplines';
import { AIAssistantModal } from './components/AIAssistantModal';
import { BookingModal } from './components/BookingModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { Footer } from './components/Footer';

const MainApp: React.FC = () => {
  const { language } = useLanguage();

  // Active navigation tab
  const [activeTab, setActiveTab] = useState<string>('directory');

  // Search & category states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ancient' | 'modern'>('all');

  // Modals & Drawers state
  const [selectedTemple, setSelectedTemple] = useState<Temple | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'sugam' | 'aarti' | 'prasad'>('sugam');
  const [bookingTemple, setBookingTemple] = useState<Temple | null>(null);
  const [aiGuideOpen, setAiGuideOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  const handleOpenBooking = (temple: Temple, type: 'sugam' | 'aarti' | 'prasad') => {
    setBookingTemple(temple);
    setBookingType(type);
    setBookingModalOpen(true);
  };

  const handleSelectTempleById = (templeId: string) => {
    const found = templesData.find(t => t.id === templeId);
    if (found) {
      setSelectedTemple(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0c0a] text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      
      {/* Sticky Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAIGuide={() => setAiGuideOpen(true)}
        onOpenFavorites={() => setFavoritesOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section shown on directory tab */}
        {activeTab === 'directory' && (
          <HeroSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onOpenAIGuide={() => setAiGuideOpen(true)}
            onExploreClick={() => {
              const el = document.getElementById('directory-grid');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onBookPassClick={() => {
              const kv = templesData.find(t => t.id === 'kashi-vishwanath') || templesData[0];
              handleOpenBooking(kv, 'sugam');
            }}
          />
        )}

        {/* TAB 1: DIRECTORY */}
        {activeTab === 'directory' && (
          <div id="directory-grid">
            <TempleDirectory
              temples={templesData}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSelectTemple={(temple) => setSelectedTemple(temple)}
              onBookPass={(temple) => handleOpenBooking(temple, 'sugam')}
            />
          </div>
        )}

        {/* TAB 2: INTERACTIVE MAP */}
        {activeTab === 'map' && (
          <InteractiveMap
            temples={templesData}
            onSelectTemple={(temple) => setSelectedTemple(temple)}
          />
        )}

        {/* TAB 3: OFFICIAL TRUST SERVICES */}
        {activeTab === 'trust' && (
          <OfficialTrustServices
            temples={templesData}
            onOpenBookingModal={(temple, type) => handleOpenBooking(temple, type)}
          />
        )}

        {/* TAB 4: LIVE CROWD STATUS */}
        {activeTab === 'crowd' && (
          <LiveCrowdStatus
            temples={templesData}
            onSelectTemple={(temple) => setSelectedTemple(temple)}
          />
        )}

        {/* TAB 5: HERITAGE RESEARCH & SCHOLARLY GUIDE */}
        {activeTab === 'research' && (
          <HeritageResearchSection
            onOpenAIGuide={() => setAiGuideOpen(true)}
          />
        )}

        {/* TAB 6: PILGRIMAGE ITINERARIES */}
        {activeTab === 'itineraries' && (
          <ItineraryPlanner />
        )}

        {/* TAB 7: TOURIST HELPLINES & SAFETY */}
        {activeTab === 'helplines' && (
          <TouristHelplines />
        )}
      </main>

      {/* Floating Action Pill for AI Guide on Mobile */}
      <div className="fixed bottom-5 right-5 z-30 sm:hidden">
        <button
          onClick={() => setAiGuideOpen(true)}
          className="p-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 font-bold shadow-2xl flex items-center justify-center animate-bounce"
          aria-label="Open AI Guide"
        >
          <span className="text-xl">🤖</span>
        </button>
      </div>

      {/* Modal: Temple Deep Dive Details */}
      <TempleDetailModal
        temple={selectedTemple}
        onClose={() => setSelectedTemple(null)}
        onOpenBooking={(temple, type) => handleOpenBooking(temple, type)}
      />

      {/* Modal: Official Trust Booking (Sugam / Aarti / Prasad) */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        temple={bookingTemple}
        initialType={bookingType}
      />

      {/* Modal: Divya Kashi AI Heritage Assistant */}
      <AIAssistantModal
        isOpen={aiGuideOpen}
        onClose={() => setAiGuideOpen(false)}
        onSelectTemple={handleSelectTempleById}
      />

      {/* Slide-out Drawer: Favorites Wishlist */}
      <FavoritesDrawer
        isOpen={favoritesOpen}
        onClose={() => setFavoritesOpen(false)}
        temples={templesData}
        onSelectTemple={(temple) => setSelectedTemple(temple)}
        onBookPass={(temple) => handleOpenBooking(temple, 'sugam')}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <FavoritesProvider>
        <BookingProvider>
          <MainApp />
        </BookingProvider>
      </FavoritesProvider>
    </LanguageProvider>
  );
}

export default App;
