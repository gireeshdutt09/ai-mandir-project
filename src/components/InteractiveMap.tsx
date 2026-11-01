import React, { useState, useEffect, useRef } from 'react';
import { Temple } from '../types/temple';
import { transitHubsData, TransitHub } from '../data/transitHubsData';
import { MapPin, Navigation, Car, Compass, Clock, Activity, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import L from 'leaflet';

interface InteractiveMapProps {
  temples: Temple[];
  onSelectTemple: (temple: Temple) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ temples, onSelectTemple }) => {
  const { language } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  const [selectedHub, setSelectedHub] = useState<string>('bsb-cantt');
  const [activeCategory, setActiveCategory] = useState<'all' | 'ancient' | 'modern'>('all');
  const [hoveredTemple, setHoveredTemple] = useState<Temple | null>(null);

  const currentHub = transitHubsData.find(h => h.id === selectedHub) || transitHubsData[0];

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!leafletMapRef.current) {
      // Initialize map centered at Varanasi (center: 25.3176, 83.0062)
      const map = L.map(mapContainerRef.current, {
        center: [25.312, 83.005],
        zoom: 13,
        zoomControl: true,
      });

      // Dark styled tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        maxZoom: 19,
      }).addTo(map);

      leafletMapRef.current = map;
    }

    const map = leafletMapRef.current;

    // Clear existing markers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
        map.removeLayer(layer);
      }
    });

    // Add Transit Hubs Markers
    transitHubsData.forEach((hub) => {
      const hubIcon = L.divIcon({
        className: 'custom-hub-icon',
        html: `
          <div style="
            background: #2563eb;
            color: white;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.4);
            font-size: 16px;
          ">
            ${hub.type === 'airport' ? '✈️' : hub.type === 'railway' ? '🚆' : '⛵'}
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const hubMarker = L.marker([hub.coordinates.lat, hub.coordinates.lng], { icon: hubIcon }).addTo(map);
      hubMarker.bindPopup(`
        <div style="font-family: sans-serif; padding: 4px;">
          <b style="font-size: 13px; color: #1e3a8a;">${hub.name}</b>
          <p style="margin: 4px 0 0; font-size: 11px; color: #475569;">${hub.description}</p>
        </div>
      `);
    });

    // Add Temple Markers based on category filter
    const visibleTemples = temples.filter(t => activeCategory === 'all' || t.category === activeCategory);

    visibleTemples.forEach((temple) => {
      const isAncient = temple.category === 'ancient';
      const markerColor = isAncient ? '#ea580c' : '#ca8a04';

      const templeIcon = L.divIcon({
        className: 'custom-temple-icon',
        html: `
          <div style="
            background: ${markerColor};
            color: #ffffff;
            border-radius: 50%;
            width: 34px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2.5px solid #ffffff;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
            font-size: 18px;
            cursor: pointer;
            transition: transform 0.2s;
          ">
            🛕
          </div>
        `,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
      });

      const marker = L.marker([temple.coordinates.lat, temple.coordinates.lng], { icon: templeIcon }).addTo(map);

      // Popup content
      const popupContent = document.createElement('div');
      popupContent.style.fontFamily = 'sans-serif';
      popupContent.style.maxWidth = '220px';
      popupContent.innerHTML = `
        <img src="${temple.heroImage}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 8px; margin-bottom: 6px;" />
        <strong style="font-size: 13px; color: #0f172a; display: block;">${language === 'hi' ? temple.hindiName : temple.name}</strong>
        <span style="font-size: 11px; color: #64748b; display: block; margin: 2px 0 6px;">${temple.deity}</span>
        <div style="font-size: 10px; background: #fef3c7; color: #92400e; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-bottom: 6px;">
          ⏱️ Queue: ~${temple.crowdStatus.waitTimeMinutes} mins
        </div>
        <button id="btn-popup-${temple.id}" style="
          width: 100%;
          background: #f97316;
          color: white;
          border: none;
          padding: 6px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: bold;
          cursor: pointer;
        ">
          ${language === 'hi' ? 'विवरण देखें' : 'View Temple Details'}
        </button>
      `;

      marker.bindPopup(popupContent);

      marker.on('popupopen', () => {
        const btn = document.getElementById(`btn-popup-${temple.id}`);
        if (btn) {
          btn.onclick = () => onSelectTemple(temple);
        }
      });
    });

  }, [temples, activeCategory, language, onSelectTemple]);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      
      {/* Map Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-serif font-bold text-amber-400 uppercase tracking-widest mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'भौगोलिक दर्शन' : 'Interactive Geospatial Map'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-100">
            {language === 'hi' ? 'तीर्थ मानचित्र एवं मार्ग प्रदर्शक' : 'Kashi Temple Map & Route Guide'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            {language === 'hi' 
              ? 'वाराणसी जंक्शन, बाबतपुर एयरपोर्ट, एवं गंगा घाटों से मंदिरों की सटीक दूरी व नेविगेशन'
              : 'Precise coordinates, distance calculation, and transit routes from major railway, airport & ghat terminals'}
          </p>
        </div>

        {/* Filter on Map */}
        <div className="flex items-center space-x-2 bg-stone-900/90 p-1.5 rounded-xl border border-stone-800">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeCategory === 'all' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300 hover:text-white'
            }`}
          >
            {language === 'hi' ? 'सभी (All)' : 'All Pins'}
          </button>
          <button
            onClick={() => setActiveCategory('ancient')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeCategory === 'ancient' ? 'bg-amber-600 text-white font-bold' : 'text-stone-300 hover:text-white'
            }`}
          >
            {language === 'hi' ? 'प्राचीन' : 'Ancient'}
          </button>
          <button
            onClick={() => setActiveCategory('modern')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeCategory === 'modern' ? 'bg-yellow-500 text-stone-950 font-bold' : 'text-stone-300 hover:text-white'
            }`}
          >
            {language === 'hi' ? 'आधुनिक' : 'Modern'}
          </button>
        </div>
      </div>

      {/* Map + Route Distance Planner Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: The Leaflet Map Canvas */}
        <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-amber-900/40 shadow-2xl relative">
          <div ref={mapContainerRef} className="w-full h-[450px] sm:h-[550px] z-10" />

          {/* Map Legend Overlay */}
          <div className="absolute bottom-4 left-4 z-20 bg-[#16120e]/90 backdrop-blur-md border border-stone-700/80 rounded-xl p-3 text-[11px] text-stone-200 shadow-xl space-y-1.5">
            <span className="font-bold text-amber-300 block mb-1">
              {language === 'hi' ? 'मानचित्र संकेत:' : 'Map Legend:'}
            </span>
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-3.5 rounded-full bg-orange-600 border border-white"></span>
              <span>{language === 'hi' ? 'प्राचीन व ऐतिहासिक मंदिर' : 'Ancient & Historic Temples'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500 border border-white"></span>
              <span>{language === 'hi' ? 'आधुनिक देवालय' : 'Modern Temples (BHU, Bharat Mata)'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-3.5 rounded-full bg-blue-600 border border-white"></span>
              <span>{language === 'hi' ? 'प्रमुख यात्रा केंद्र (Airport / Cantt)' : 'Transit Hubs (Airport / Rail / Ghat)'}</span>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Departure Hub Distance Calculator & Quick Route Guide */}
        <div className="bg-[#181310] border border-amber-900/30 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-xl">
          <div>
            <div className="flex items-center space-x-2 text-amber-400 mb-1">
              <Navigation className="w-4 h-4" />
              <h3 className="text-sm font-serif font-bold uppercase tracking-wider">
                {language === 'hi' ? 'प्रस्थान केंद्र चुनें' : 'Choose Departure Point'}
              </h3>
            </div>
            <p className="text-xs text-stone-400 mb-3">
              {language === 'hi'
                ? 'अपने आगमन स्थल के अनुसार सभी मंदिरों की दूरी व समय देखें:'
                : 'Select your arrival station/airport to calculate accurate distances:'}
            </p>

            {/* Hub Selector Buttons */}
            <div className="space-y-2">
              {transitHubsData.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub.id)}
                  className={`w-full p-3 rounded-xl border text-left transition flex items-center justify-between ${
                    selectedHub === hub.id
                      ? 'bg-amber-500/20 border-amber-500 text-amber-200 shadow-md'
                      : 'bg-[#1e1713] border-stone-800 text-stone-300 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="text-lg">
                      {hub.type === 'airport' ? '✈️' : hub.type === 'railway' ? '🚆' : '⛵'}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-stone-100">
                        {language === 'hi' ? hub.hindiName : hub.name}
                      </h4>
                      <span className="text-[10px] text-stone-400 font-mono">
                        {hub.code ? `Code: ${hub.code}` : 'Central Ghat'}
                      </span>
                    </div>
                  </div>
                  {selectedHub === hub.id && (
                    <span className="text-xs text-amber-400 font-bold">● Active</span>
                  )}
                </button>
              ))}
            </div>

            {/* Hub Popular Transfers List */}
            <div className="mt-4 pt-4 border-t border-stone-800">
              <h4 className="text-xs font-bold text-stone-200 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                <Car className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'hi' ? 'अनुमानित यात्रा समय व किराया' : 'Estimated Travel & Fares'}</span>
              </h4>

              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {currentHub.popularTransfers.map((item, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-[#140f0c] border border-stone-800/80 text-[11px] space-y-1">
                    <div className="flex justify-between font-semibold text-stone-200">
                      <span>{item.destination}</span>
                      <span className="text-amber-400 font-mono">{item.distance}</span>
                    </div>
                    <div className="flex justify-between text-stone-400 text-[10px]">
                      <span>⏱️ {item.avgTime}</span>
                      <span className="text-emerald-400 font-mono font-medium">💰 {item.fareEstimate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-900/30 text-[11px] text-stone-300">
            <strong className="text-amber-400">💡 {language === 'hi' ? 'यात्री युक्ति:' : 'Pilgrim Tip:'}</strong>{' '}
            {language === 'hi'
              ? 'दशाश्वमेध एवं गोदौलिया क्षेत्र में चौपहिया वाहन प्रतिबंधित हैं; ई-रिक्शा सबसे तेज साधन है।'
              : 'Four-wheelers are restricted near Godowlia & Dashashwamedh; electric e-rickshaws are the most efficient transfer.'}
          </div>

        </div>

      </div>

    </section>
  );
};
