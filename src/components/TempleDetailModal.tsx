import React, { useState } from 'react';
import { Temple, TempleReview } from '../types/temple';
import { 
  X, 
  Bookmark, 
  Star, 
  MapPin, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Activity, 
  Compass, 
  BookOpen, 
  Sparkles, 
  Share2, 
  Check, 
  Info, 
  AlertTriangle, 
  Car, 
  Send,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useFavorites } from '../context/FavoritesContext';
import { useBooking } from '../context/BookingContext';

interface TempleDetailModalProps {
  temple: Temple | null;
  onClose: () => void;
  onOpenBooking: (temple: Temple, bookingType: 'sugam' | 'aarti' | 'prasad') => void;
}

export const TempleDetailModal: React.FC<TempleDetailModalProps> = ({
  temple,
  onClose,
  onOpenBooking
}) => {
  const { language, t } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'timings' | 'transit' | 'reviews' | 'booking'>('overview');
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Review Form State
  const [reviewName, setReviewName] = useState('');
  const [reviewCity, setReviewCity] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [reviewsList, setReviewsList] = useState<TempleReview[]>([]);

  // Update image and reviews when temple changes
  React.useEffect(() => {
    if (temple) {
      setSelectedImage(temple.heroImage);
      setReviewsList(temple.reviews || []);
      setActiveTab('overview');
      setReviewSubmitted(false);
    }
  }, [temple]);

  if (!temple) return null;

  const favorited = isFavorite(temple.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewComment.trim()) return;

    const newReview: TempleReview = {
      id: `rev-${Date.now()}`,
      author: reviewName.trim(),
      city: reviewCity.trim() || 'Pilgrim Devotee',
      rating: reviewRating,
      date: 'Just now',
      comment: reviewComment.trim(),
      darshanExperience: 'Verified Pilgrim Visit',
      helpfulCount: 1
    };

    setReviewsList([newReview, ...reviewsList]);
    setReviewName('');
    setReviewCity('');
    setReviewComment('');
    setReviewSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#15110e] border border-amber-600/30 rounded-3xl shadow-2xl overflow-hidden my-6">
        
        {/* Modal Top Bar */}
        <div className="absolute top-3 right-3 z-20 flex items-center space-x-2">
          <button
            onClick={handleShare}
            className="p-2.5 rounded-full bg-black/60 backdrop-blur-md text-stone-300 hover:text-amber-400 border border-white/10 transition shadow-lg"
            title="Share Temple Link"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => toggleFavorite(temple.id)}
            className={`p-2.5 rounded-full backdrop-blur-md border border-white/10 transition shadow-lg ${
              favorited ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-black/60 text-stone-300 hover:text-amber-400'
            }`}
            title="Save to Favorites"
          >
            <Bookmark className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-black/60 backdrop-blur-md text-stone-300 hover:text-white border border-white/10 transition shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Image & Gallery Section */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-black">
          <img
            src={selectedImage || temple.heroImage}
            alt={temple.name}
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#15110e] via-[#15110e]/40 to-transparent" />

          {/* Temple Badges & Title in Hero */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                temple.category === 'ancient' ? 'bg-amber-600 text-stone-950' : 'bg-amber-300 text-stone-950'
              }`}>
                {temple.category === 'ancient' 
                  ? (language === 'hi' ? 'प्राचीन व ऐतिहासिक' : 'Ancient & Historic')
                  : (language === 'hi' ? 'आधुनिक देवालय' : 'Modern Temple')}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-black/60 backdrop-blur-md text-amber-200 border border-amber-500/30">
                {language === 'hi' ? temple.eraHindi : temple.era}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-500/40 flex items-center space-x-1">
                <Star className="w-3 h-3 fill-current text-amber-400" />
                <span>{temple.averageRating} ({temple.totalReviews} {t('reviewsCount')})</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white drop-shadow-md">
              {language === 'hi' ? temple.hindiName : temple.name}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl mt-1 drop-shadow font-sans">
              {language === 'hi' ? temple.taglineHindi : temple.tagline}
            </p>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        {temple.gallery && temple.gallery.length > 1 && (
          <div className="px-4 sm:px-6 py-2.5 bg-[#1a1410] border-b border-amber-950/40 flex items-center space-x-2 overflow-x-auto">
            {temple.gallery.map((imgUrl, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(imgUrl)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition ${
                  selectedImage === imgUrl ? 'border-amber-400 scale-105' : 'border-stone-700 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`gallery-${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-1 px-4 sm:px-6 bg-[#1a1410] border-b border-stone-800 overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: language === 'hi' ? 'अवलोकन' : 'Overview', icon: Info },
            { id: 'history', label: language === 'hi' ? 'इतिहास व वास्तुकला' : 'History & Architecture', icon: BookOpen },
            { id: 'timings', label: language === 'hi' ? 'आरती व नियम' : 'Aarti & Timings', icon: Clock },
            { id: 'transit', label: language === 'hi' ? 'मार्ग व निकटवर्ती' : 'Transit & Nearby', icon: MapPin },
            { id: 'reviews', label: language === 'hi' ? 'समीक्षाएं' : 'Reviews', icon: Star },
            { id: 'booking', label: language === 'hi' ? 'शासकीय पास' : 'Trust Services', icon: ShieldCheck },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-3.5 px-3 border-b-2 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
                  isActive
                    ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                    : 'border-transparent text-stone-400 hover:text-stone-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body Tab Contents */}
        <div className="p-4 sm:p-6 max-h-[55vh] overflow-y-auto space-y-6 text-stone-300 font-sans">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-[#201915] border border-amber-900/30">
                  <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider block">
                    {language === 'hi' ? 'मुख्य देवता' : 'Primary Deity'}
                  </span>
                  <p className="text-sm font-bold text-stone-100 mt-0.5">{temple.deity}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#201915] border border-amber-900/30">
                  <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider block">
                    {language === 'hi' ? 'स्थापना / निर्माता' : 'Established By'}
                  </span>
                  <p className="text-sm font-bold text-stone-100 mt-0.5">
                    {language === 'hi' ? temple.builtByHindi : temple.builtBy}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#201915] border border-amber-900/30">
                  <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider block">
                    {language === 'hi' ? 'लाइव कतार स्थिति' : 'Live Crowd Status'}
                  </span>
                  <p className="text-sm font-bold text-emerald-400 mt-0.5 flex items-center space-x-1">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>{temple.crowdStatus.level} (~{temple.crowdStatus.waitTimeMinutes} mins)</span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#201915] border border-amber-900/30">
                  <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider block">
                    {language === 'hi' ? 'दर्शन समय' : 'Darshan Hours'}
                  </span>
                  <p className="text-sm font-bold text-stone-100 mt-0.5">
                    {temple.darshanTimings.opening} - {temple.darshanTimings.closing}
                  </p>
                </div>
              </div>

              {/* Tagline & Core Summary */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-stone-900/40 to-stone-900/20 border border-amber-500/20">
                <h4 className="text-base font-serif font-bold text-amber-200 mb-2 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{language === 'hi' ? 'पौराणिक महत्व एवं महात्म्य' : 'Spiritual Significance'}</span>
                </h4>
                <p className="text-sm leading-relaxed text-stone-200">
                  {language === 'hi' ? temple.mythologyHindi : temple.mythology}
                </p>
              </div>

              {/* Sacred Rituals Bullet List */}
              <div>
                <h4 className="text-sm font-serif font-bold text-amber-300 uppercase tracking-wider mb-3">
                  {language === 'hi' ? 'प्रमुख अनुष्ठान एवं परंपराएं' : 'Sacred Rituals & Offerings'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(language === 'hi' ? temple.ritualsHindi : temple.rituals).map((ritual, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-[#1c1612] border border-stone-800">
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs text-stone-200 font-medium">{ritual}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Booking CTA banner inside Overview */}
              {temple.officialTrustBooking.sugamDarshanAvailable && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-950/60 to-amber-950/60 border border-orange-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      {language === 'hi' ? 'आधिकारिक सुगम दर्शन सेवा' : 'Official VIP Darshan Pass'}
                    </span>
                    <h5 className="text-sm font-bold text-stone-100">
                      {language === 'hi' ? 'कतार रहित त्वरित प्रवेश पास उपलब्ध (₹300/भक्त)' : 'Priority Fast-Track Entry Pass (₹300/person)'}
                    </h5>
                  </div>
                  <button
                    onClick={() => onOpenBooking(temple, 'sugam')}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 font-bold text-xs shadow-lg hover:scale-105 transition"
                  >
                    {language === 'hi' ? 'अभी पास बुक करें' : 'Book Sugam Pass'}
                  </button>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: HISTORY & ARCHITECTURE */}
          {activeTab === 'history' && (
            <div className="space-y-6">
              
              {/* Detailed History */}
              <div className="space-y-2">
                <h4 className="text-lg font-serif font-bold text-amber-300">
                  {language === 'hi' ? 'ऐतिहासिक वृत्तांत' : 'Historical Chronicle'}
                </h4>
                <p className="text-sm leading-relaxed text-stone-200 bg-[#1c1612] p-4 rounded-2xl border border-stone-800">
                  {language === 'hi' ? temple.historyHindi : temple.history}
                </p>
              </div>

              {/* Architectural Style */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h4 className="text-lg font-serif font-bold text-amber-300">
                    {language === 'hi' ? 'स्थापत्य कला एवं वास्तु' : 'Architectural Style & Design'}
                  </h4>
                  <span className="px-2 py-0.5 text-xs rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-serif">
                    {temple.architectureStyle}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-stone-200 bg-[#1c1612] p-4 rounded-2xl border border-stone-800">
                  {language === 'hi' ? temple.architectureHindi : temple.architecture}
                </p>
              </div>

              {/* Archaeological & Epigraphical Details */}
              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-900/40">
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                  {language === 'hi' ? 'अभिलेखीय संदर्भ' : 'Historical & Epigraphical Record'}
                </h5>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {language === 'hi'
                    ? 'काशी खंड (स्कंद पुराण), जेम्स प्रिंसेप के 1831 के वास्तु सर्वेक्षण, एवं भारतीय पुरातत्व सर्वेक्षण (ASI) के ऐतिहासिक अभिलेखों में इस देवालय का प्रामाणिक संदर्भ मिलता है।'
                    : 'Corroborated by the Kashi Khanda of Skanda Purana, James Prinsep’s 1831 architectural lithographs, and Archaeological Survey of India (ASI) historical survey registries.'}
                </p>
              </div>

            </div>
          )}

          {/* TAB 3: TIMINGS & AARTI SCHEDULE */}
          {activeTab === 'timings' && (
            <div className="space-y-6">
              
              {/* Darshan Hours */}
              <div className="p-4 rounded-2xl bg-[#1c1612] border border-stone-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                    {language === 'hi' ? 'दैनिक सामान्य दर्शन' : 'General Public Darshan'}
                  </span>
                  <p className="text-base font-bold text-stone-100">
                    {temple.darshanTimings.opening} — {temple.darshanTimings.closing}
                  </p>
                  {temple.darshanTimings.breaks && (
                    <p className="text-xs text-stone-400 mt-0.5">{temple.darshanTimings.breaks}</p>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-stone-400 block">{language === 'hi' ? 'सर्वोत्तम समय' : 'Best Time'}</span>
                  <span className="text-xs text-amber-300 font-medium">
                    {language === 'hi' ? temple.bestTimeToVisitHindi : temple.bestTimeToVisit}
                  </span>
                </div>
              </div>

              {/* Aarti Schedule Table */}
              <div>
                <h4 className="text-sm font-serif font-bold text-amber-300 uppercase tracking-wider mb-3">
                  {language === 'hi' ? 'दैनिक महा आरती समय सारिणी' : 'Daily Aarti & Ritual Schedule'}
                </h4>
                <div className="space-y-2.5">
                  {temple.aartiSchedule.map((aarti) => (
                    <div
                      key={aarti.id}
                      className="p-3.5 rounded-xl bg-[#1c1612] border border-stone-800 hover:border-amber-500/40 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold text-stone-100">
                            {language === 'hi' ? aarti.hindiName : aarti.name}
                          </span>
                          <span className="px-2 py-0.5 text-xs rounded bg-amber-500/20 text-amber-300 font-mono font-bold">
                            {aarti.time}
                          </span>
                        </div>
                        <p className="text-xs text-stone-400 mt-1">{aarti.description}</p>
                        {aarti.dressCodeRequired && (
                          <span className="text-[11px] text-orange-400 font-medium block mt-1">
                            ⚠️ {language === 'hi' ? 'विशेष वेशभूषा:' : 'Dress Code:'} {aarti.dressCodeRequired}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        <span className="text-xs font-mono text-stone-300">{aarti.price}</span>
                        {aarti.bookingAvailable && (
                          <button
                            onClick={() => onOpenBooking(temple, 'aarti')}
                            className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition"
                          >
                            {language === 'hi' ? 'आरती पास बुक करें' : 'Book Pass'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dress Code & Prohibitions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#201915] border border-amber-900/30">
                  <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                    <Info className="w-4 h-4 text-amber-400" />
                    <span>{language === 'hi' ? 'अनुमोदित वेशभूषा' : 'Dress Code Guidelines'}</span>
                  </h5>
                  <p className="text-xs text-stone-300">
                    <strong className="text-stone-100">{language === 'hi' ? 'पुरुष:' : 'Men:'}</strong> {temple.dressCode.men}
                  </p>
                  <p className="text-xs text-stone-300 mt-1">
                    <strong className="text-stone-100">{language === 'hi' ? 'महिलाएं:' : 'Women:'}</strong> {temple.dressCode.women}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#201915] border border-orange-950/40">
                  <h5 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                    <AlertTriangle className="w-4 h-4 text-orange-400" />
                    <span>{language === 'hi' ? 'प्रतिबंधित वस्तुएं' : 'Prohibited Items'}</span>
                  </h5>
                  <ul className="text-xs text-stone-300 list-disc list-inside space-y-0.5">
                    {temple.dressCode.prohibited.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: TRANSIT & NEARBY */}
          {activeTab === 'transit' && (
            <div className="space-y-6">
              
              {/* Transit Distances */}
              <div>
                <h4 className="text-sm font-serif font-bold text-amber-300 uppercase tracking-wider mb-3">
                  {language === 'hi' ? 'प्रमुख यात्रा केंद्रों से दूरी' : 'Transit Distance & Travel Times'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#1c1612] border border-stone-800">
                    <span className="text-[11px] text-amber-400 font-semibold block">
                      {language === 'hi' ? 'वाराणसी कैंट (BSB)' : 'Varanasi Cantt (BSB)'}
                    </span>
                    <p className="text-sm font-bold text-stone-100 mt-1">{temple.transit.fromVaranasiCantt}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1c1612] border border-stone-800">
                    <span className="text-[11px] text-amber-400 font-semibold block">
                      {language === 'hi' ? 'बनारस स्टेशन (BSBS)' : 'Banaras Station (BSBS)'}
                    </span>
                    <p className="text-sm font-bold text-stone-100 mt-1">{temple.transit.fromBanarasStation}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1c1612] border border-stone-800">
                    <span className="text-[11px] text-amber-400 font-semibold block">
                      {language === 'hi' ? 'हवाई अड्डा बाबतपुर (VNS)' : 'LBS Airport (VNS)'}
                    </span>
                    <p className="text-sm font-bold text-stone-100 mt-1">{temple.transit.fromAirport}</p>
                  </div>
                </div>

                {/* Local transport tip */}
                <div className="mt-3 p-3 rounded-xl bg-amber-950/30 border border-amber-900/40 text-xs text-amber-200 flex items-start space-x-2">
                  <Car className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">{language === 'hi' ? 'यात्री परामर्श:' : 'Local Transport Tip:'} </span>
                    <span>{language === 'hi' ? temple.transit.localTransportTipHindi : temple.transit.localTransportTip}</span>
                  </div>
                </div>
              </div>

              {/* Nearby Ghats & Attractions */}
              <div>
                <h4 className="text-sm font-serif font-bold text-amber-300 uppercase tracking-wider mb-3">
                  {t('nearbyAttractionsTitle')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {temple.nearbyAttractions.map((attraction, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#1c1612] border border-stone-800 flex items-start space-x-3">
                      <span className="text-xl">
                        {attraction.type === 'ghat' ? '🌊' : attraction.type === 'temple' ? '🛕' : '🏛️'}
                      </span>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h5 className="text-xs font-bold text-stone-100">
                            {language === 'hi' ? attraction.hindiName : attraction.name}
                          </h5>
                          <span className="px-1.5 py-0.5 rounded text-[10px] bg-stone-800 text-amber-300 font-mono">
                            {attraction.distance}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-400 mt-0.5">{attraction.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 5: REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              
              {/* Reviews Summary */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1c1612] border border-stone-800">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl font-black text-amber-400">{temple.averageRating}</div>
                  <div>
                    <div className="flex text-amber-400">
                      {'★'.repeat(Math.round(temple.averageRating))}
                    </div>
                    <span className="text-xs text-stone-400">
                      {reviewsList.length} {language === 'hi' ? 'समीक्षाएं' : 'Devotee Reviews'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const el = document.getElementById('review-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3.5 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-semibold hover:bg-amber-500/30 transition"
                >
                  {t('writeReview')}
                </button>
              </div>

              {/* Review Cards */}
              <div className="space-y-3">
                {reviewsList.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-2xl bg-[#181310] border border-stone-800/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-stone-100">{rev.author}</span>
                        <span className="text-[11px] text-stone-500 ml-2">({rev.city})</span>
                      </div>
                      <div className="flex items-center space-x-1 text-amber-400 text-xs">
                        <span>{'★'.repeat(rev.rating)}</span>
                        <span className="text-stone-500 text-[10px] ml-1">{rev.date}</span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed font-sans">{rev.comment}</p>
                    {rev.darshanExperience && (
                      <span className="inline-block text-[11px] text-amber-400/90 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/30">
                        ✓ {rev.darshanExperience}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Write Review Form */}
              <div id="review-form" className="p-4 rounded-2xl bg-[#1f1814] border border-amber-900/30 space-y-4">
                <h4 className="text-sm font-serif font-bold text-amber-200">
                  {language === 'hi' ? 'अपना दर्शन अनुभव साझा करें' : 'Share Your Darshan Experience'}
                </h4>

                {reviewSubmitted && (
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-600/40 text-xs text-emerald-300">
                    {language === 'hi' ? 'धन्यवाद! आपकी समीक्षा प्रकाशित हो गई है।' : 'Thank you! Your review has been added.'}
                  </div>
                )}

                <form onSubmit={handleReviewSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder={language === 'hi' ? 'आपका नाम (Devotee Name)' : 'Devotee Name'}
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      required
                      className="bg-stone-900 border border-stone-700 rounded-xl px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                    <input
                      type="text"
                      placeholder={language === 'hi' ? 'आपका नगर (City / State)' : 'City / State'}
                      value={reviewCity}
                      onChange={(e) => setReviewCity(e.target.value)}
                      className="bg-stone-900 border border-stone-700 rounded-xl px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-stone-400">{language === 'hi' ? 'रेटिंग:' : 'Rating:'}</span>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setReviewRating(star)}
                        className={`text-lg transition ${star <= reviewRating ? 'text-amber-400' : 'text-stone-600'}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>

                  <textarea
                    rows={3}
                    placeholder={language === 'hi' ? 'दर्शन अनुभव, प्रतीक्षा समय, एवं सलाह लिखें...' : 'Write about darshan arrangements, crowd ease, or tips...'}
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    required
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl p-3 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                  />

                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 font-bold text-xs flex items-center space-x-1.5 hover:from-amber-400 hover:to-orange-500 transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{language === 'hi' ? 'समीक्षा सबमिट करें' : 'Post Review'}</span>
                  </button>
                </form>
              </div>

            </div>
          )}

          {/* TAB 6: OFFICIAL TRUST BOOKING */}
          {activeTab === 'booking' && (
            <div className="space-y-5">
              
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 to-stone-900/60 border border-amber-600/30">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  {temple.officialTrustBooking.trustName}
                </span>
                <h4 className="text-lg font-serif font-bold text-stone-100 mt-0.5">
                  {language === 'hi' ? 'शासकीय एवं आधिकारिक ट्रस्ट सेवाएं' : 'Government & Official Trust Services'}
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  {language === 'hi' 
                    ? 'मंदिर ट्रस्ट द्वारा निर्धारित दरों पर ऑनलाइन सुगम दर्शन, आरती पास एवं घर बैठे शुद्ध प्रसाद सेवा।'
                    : 'Authentic government portal integration for queue bypass, aarti passes, and prasad delivery.'}
                </p>
              </div>

              {/* Booking Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Sugam Darshan */}
                <div className="p-4 rounded-2xl bg-[#1c1612] border border-amber-900/40 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase">Sugam Darshan</span>
                    <h5 className="text-sm font-bold text-stone-100 mt-1">VIP Fast Track Pass</h5>
                    <p className="text-xs text-stone-400 mt-1">
                      Direct priority queue through Gate 4, e-cart shuttle, and consecrated coin.
                    </p>
                    <span className="text-sm font-mono font-bold text-amber-300 block mt-2">
                      ₹{temple.officialTrustBooking.sugamDarshanPrice || 300} / person
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenBooking(temple, 'sugam')}
                    className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition"
                  >
                    {language === 'hi' ? 'सुगम पास बुक करें' : 'Book VIP Pass'}
                  </button>
                </div>

                {/* Aarti Pass */}
                <div className="p-4 rounded-2xl bg-[#1c1612] border border-amber-900/40 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-xs font-bold text-orange-400 uppercase">Mangla / Saptarishi</span>
                    <h5 className="text-sm font-bold text-stone-100 mt-1">Aarti Pass Registration</h5>
                    <p className="text-xs text-stone-400 mt-1">
                      Reserved seating inside the inner sanctum during the sacred Vedic rituals.
                    </p>
                    <span className="text-sm font-mono font-bold text-amber-300 block mt-2">
                      ₹300 - ₹500 / seat
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenBooking(temple, 'aarti')}
                    className="w-full py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition"
                  >
                    {language === 'hi' ? 'आरती पास बुक करें' : 'Reserve Aarti Pass'}
                  </button>
                </div>

                {/* Home Prasad */}
                <div className="p-4 rounded-2xl bg-[#1c1612] border border-amber-900/40 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-xs font-bold text-yellow-400 uppercase">India Post Speed Post</span>
                    <h5 className="text-sm font-bold text-stone-100 mt-1">Sacred Prasad Delivery</h5>
                    <p className="text-xs text-stone-400 mt-1">
                      Holy Bhasma, Belpatra, Rudraksha, and dry fruit dry bhog delivered to doorstep.
                    </p>
                    <span className="text-sm font-mono font-bold text-amber-300 block mt-2">
                      ₹251 (Incl. Shipping)
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenBooking(temple, 'prasad')}
                    className="w-full py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-600/40 font-bold text-xs transition"
                  >
                    {language === 'hi' ? 'प्रसाद ऑर्डर करें' : 'Order Prasad Box'}
                  </button>
                </div>
              </div>

              {/* Official Trust Helpline */}
              {temple.officialTrustBooking.helplinePhone && (
                <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between text-xs">
                  <span className="text-stone-400">
                    {language === 'hi' ? 'आधिकारिक ट्रस्ट कंट्रोल रूम:' : 'Official Trust Helpline:'}
                  </span>
                  <a
                    href={`tel:${temple.officialTrustBooking.helplinePhone}`}
                    className="font-mono font-bold text-amber-400 hover:underline"
                  >
                    {temple.officialTrustBooking.helplinePhone}
                  </a>
                </div>
              )}

            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="px-4 sm:px-6 py-4 bg-[#140f0c] border-t border-stone-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-stone-400">
            <span>{language === 'hi' ? 'स्थान:' : 'Location:'} </span>
            <span className="text-stone-200">{language === 'hi' ? temple.locationHindi : temple.location}</span>
          </div>

          <div className="flex items-center space-x-2">
            {temple.officialTrustBooking.officialWebsite && (
              <a
                href={temple.officialTrustBooking.officialWebsite}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold flex items-center space-x-1"
              >
                <span>{language === 'hi' ? 'न्यास वेबसाइट' : 'Trust Website'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 transition"
            >
              {language === 'hi' ? 'बंद करें' : 'Done'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
