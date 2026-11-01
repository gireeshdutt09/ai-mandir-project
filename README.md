# 🛕 Kashi Darshan & Heritage Portal | काशी दर्शन एवं धरोहर पोर्टल

A comprehensive, production-ready, full-stack web and mobile-responsive application dedicated to the ancient and modern temples of sacred Varanasi (Kashi). Designed with divine aesthetic palettes (Saffron, Deep Gold, Temple Stone Sandstone, and Sacred Ivory), rich Sanskrit epigraphy, interactive geospatial navigation, and an intelligent **Divya Kashi AI Heritage Guide**.

---

## 🌟 Key Features Implemented

### 1. Interactive Temple Directory
- **Categorized Shrines**:
  - **Ancient & Historic Temples**: *Shri Kashi Vishwanath Dham, Sankat Mochan Hanuman Temple, Maa Annapurna Mandir, Kaal Bhairav (Kotwal of Kashi), Durga Kund Mandir, Mrityunjay Mahadev, Kedareshwar Temple, Tilbhandeshwar Mahadev, Nepali Kathwala Temple, etc.*
  - **Modern Temples**: *New Vishwanath Temple (Birla Mandir / VT at BHU with 77m tower), Bharat Mata Mandir (with 3D marble relief map), Tulsi Manas Mandir (Ramcharitmanas verses on marble), Tridev Mandir (Rajasthani marble craft).*
- **Multi-dimensional Filtering**: Filter by primary deity (Lord Shiva, Hanuman, Durga/Shakti, Mother India, Rama-Sita), historical era (Vedic, 16th-18th Century, Modern 20th-21st Century), and instant search.
- **Sorting Options**: Sort by Popularity, Highest Devotee Rating, or Shortest Live Queue Wait Time.

### 2. Rich Temple Detail Pages
- **High-Resolution Galleries**: Curated imagery with interactive thumbnail switcher and photo viewer.
- **History & Mythology**: Deep Puranic stories (*Kashi Khanda of Skanda Purana*, *Linga Purana*, *Taraka Mantra lore*).
- **Architecture & Art**: Nagara style, South Indian Dravidian influences, Maratha-Panchayatan stone masonry, Kathmandu pagoda woodcraft, and Makrana white marble.
- **Daily Timings & Aarti Schedule**: Full schedule for Mangla Aarti, Bhog Aarti, Saptarishi Aarti, and Night Shringar Aarti with dress codes and pricing.
- **Dress Code & Prohibited Items**: Specific guidance for sanctum visits, traditional requirements (Dhoti/Saree), and locker locations.

### 3. Government & Official Integration Features (Simulated & UI Connected)
- **Shri Kashi Vishwanath Temple Trust (SKVT) Services**:
  - **Sugam Darshan VIP Pass Booking**: Queue bypass via Gate 4, e-cart mobility, and direct sanctum facilitation.
  - **Sanctum Aarti Registration**: Mangla Aarti (03:00 AM) and Saptarishi Aarti passes.
  - **Prasad Home Delivery**: Speed Post Prasad delivery box (consecrated Bhasma, Belpatra, Rudraksha, and dry bhog) to any Indian address.
  - **Printable / Digital Slip Generator**: Instant issuance of verified booking references (e.g. `SKVT-2026-SD-8821`) with devotee details and print slip action.
- **Live Crowd Status Indicator**:
  - Live queue waiting times (e.g. `~45 mins at Gate 4`, `~20 mins at Sankat Mochan`, `~5 mins at BHU VT`).
  - Active gate recommendations and queue length in meters.
  - **Peak Hours Advisory Matrix**: Morning vs. midday vs. evening crowd patterns.
- **Administrative & Emergency Helplines**:
  - One-touch phone dialing for UP Tourist Police (`112`), Vishwanath Dham Control Room (`0542-2392629`), Riverfront Jal Ambulance (`108`), Cantt RPF (`139`), and District Boat Tariff Helpline (`0542-2508555`).

### 4. Interactive Geospatial Map & Transit Navigation
- **Interactive Leaflet Map**: Custom sacred icons for ancient temples, modern shrines, and transit hubs.
- **Dynamic Distance Calculator**: Select your arrival hub (*Varanasi Junction Cantt BSB, Banaras Railway Station BSBS, Babatpur Airport VNS, or Dashashwamedh Ghat*) to immediately calculate transit distance, travel time, and fair estimates.
- **Nearby Recommendations**: Walking distance to adjacent ghats, historic ponds, museums, and food spots (*Kachori Gali, Pehelwan Lassi, Thandai, Banarasi Paan*).

### 5. 🤖 Divya Kashi AI Heritage Guide (Assistant Add-On)
- **Pre-Trained Knowledge Engine**:
  - Real-time answers regarding rituals, history, dress codes, queue tips, and senior citizen advice.
  - Suggests personalized pilgrimage itineraries and nearby street food / boat ghats.
  - Quick query chips and speech synthesis (Web Speech API) to listen to answers like a personal temple tour guide.

### 6. 📜 Heritage Research & Scholarly Guide
- **The 3 Sacred Khandas**: Detailed geographical explanation of *Omkareshwar Khanda*, *Vishweshwara Khanda*, and *Kedareshwar Khanda*.
- **The Crescent River Dynamics**: The astronomical and geophysical reason behind the north-flowing (Uttaravahini) Ganges.
- **Chronological Timeline**: 3000 BCE Vedic antiquity, 6th Century BCE Buddha's first sermon at Sarnath, 636 CE Xuanzang's eyewitness chronicles, 1777 Rani Ahilyabai Holkar's reconstruction, 1831 James Prinsep's architectural drawings, and 2021 Kashi Vishwanath Dham Corridor.
- **Scholarly Insights**: Research monographs with academic citations from BHU and ASI.

### 7. User Interactive Features
- **Pilgrim Reviews & Ratings**: Devotee reviews with star ratings and interactive review submission form.
- **Saved Wishlist Drawer**: Bookmark favorite temples, view combined queue time, and export a personalized pilgrimage route.
- **Virtual Darshan Bell**: Interactive Web Audio API brass bell synthesizer providing realistic acoustic harmonic resonance on click.
- **Multilingual Support**: Instant toggle between **English** and **हिन्दी (Hindi)** with full dictionary coverage across all components.

---

## 💻 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Divine Saffron/Gold/Sandstone Theme, Lucide Icons, Google Fonts (*Cinzel*, *Plus Jakarta Sans*)
- **Maps**: Leaflet & OpenStreetMap Voyager Carto Tiles
- **Audio Synthesis**: Web Audio API (Physical harmonic brass bell synthesizer)
- **Backend**: Node.js, Express REST API, CORS, Dotenv
- **Database**: In-memory store with **Supabase PostgreSQL** integration readiness

---

## 🚀 Quick Start Guide

### Option 1: Instant Windows Double-Click (Zero Setup)
Simply double-click:
1. `start-dev.bat` to launch the **Vite React Frontend** at `http://localhost:3000`
2. `start-server.bat` to launch the **Node.js Express API Server** at `http://localhost:5000`

### Option 2: Running via Terminal / PowerShell
```powershell
# Open project directory
cd "c:\Users\GIREESH DUTT SHUKLA\Downloads\ai mandir project"

# Run Vite React development server
npm run dev

# In another terminal, run backend server
npm run server

# Build production bundle
npm run build
```

---

## 🗄️ Optional Supabase Configuration

To connect directly to a live Supabase PostgreSQL database:
1. Create a free project at [supabase.com](https://supabase.com).
2. Copy `.env.example` to `.env` and fill in:
   ```env
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_KEY=your-anon-or-service-role-key
   PORT=5000
   ```
3. Run `npm run server` — the server will automatically detect and sync bookings and reviews with your Supabase database!

---

## 🕉️ Har Har Mahadev!
Built with reverence for the sacred heritage of Varanasi and its millions of visiting pilgrims.
