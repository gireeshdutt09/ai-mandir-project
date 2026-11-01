import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-Memory Database store with seed data (and Supabase integration readiness)
let bookingsStore = [
  {
    id: 'bkg-101',
    bookingType: 'sugam',
    templeId: 'kashi-vishwanath',
    templeName: 'Shri Kashi Vishwanath Temple',
    devoteeName: 'Ananya Sharma',
    phone: '+91 98765 43210',
    email: 'ananya@example.com',
    date: '2026-11-05',
    slotOrItem: 'Morning Slot (06:00 AM - 08:00 AM)',
    numberOfPersons: 2,
    amount: 600,
    bookingRef: 'SKVT-2026-SD-8821',
    status: 'Confirmed',
    createdAt: '2026-11-01'
  }
];

let reviewsStore = [
  {
    id: 'rev-global-1',
    templeId: 'kashi-vishwanath',
    author: 'Pandit Raghavendra Joshi',
    city: 'Pune, Maharashtra',
    rating: 5,
    date: '24 Oct 2026',
    comment: 'The new corridor makes darshan remarkably easy for senior citizens.',
    darshanExperience: 'Sugam Darshan took just 25 minutes through Gate 4.'
  }
];

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'Healthy',
    service: 'Kashi Darshan & Heritage Portal Backend',
    timestamp: new Date().toISOString(),
    supabaseConnected: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
  });
});

// Bookings Endpoints
app.get('/api/bookings', (req, res) => {
  res.json({ success: true, count: bookingsStore.length, data: bookingsStore });
});

app.post('/api/bookings', (req, res) => {
  const { bookingType, templeId, templeName, devoteeName, phone, email, date, slotOrItem, numberOfPersons, amount, deliveryAddress, specialGotra } = req.body;

  if (!devoteeName || !phone) {
    return res.status(400).json({ success: false, error: 'Name and Phone number are required' });
  }

  const randomHex = Math.floor(1000 + Math.random() * 9000);
  const prefix = bookingType === 'sugam' ? 'SKVT-SD' : bookingType === 'aarti' ? 'SKVT-AR' : 'SKVT-PR';

  const newBooking = {
    id: `bkg-${Date.now()}`,
    bookingType: bookingType || 'sugam',
    templeId: templeId || 'kashi-vishwanath',
    templeName: templeName || 'Shri Kashi Vishwanath Temple',
    devoteeName,
    phone,
    email: email || '',
    date: date || new Date().toISOString().split('T')[0],
    slotOrItem: slotOrItem || 'General Darshan',
    numberOfPersons: numberOfPersons || 1,
    amount: amount || 300,
    deliveryAddress: deliveryAddress || '',
    specialGotra: specialGotra || '',
    bookingRef: `${prefix}-2026-${randomHex}`,
    status: 'Confirmed',
    createdAt: new Date().toISOString().split('T')[0]
  };

  bookingsStore.unshift(newBooking);

  res.status(201).json({
    success: true,
    message: 'Booking confirmed successfully',
    data: newBooking
  });
});

// Reviews Endpoints
app.get('/api/reviews/:templeId', (req, res) => {
  const { templeId } = req.params;
  const filtered = reviewsStore.filter(r => r.templeId === templeId);
  res.json({ success: true, data: filtered });
});

app.post('/api/reviews', (req, res) => {
  const { templeId, author, city, rating, comment, darshanExperience } = req.body;
  if (!author || !comment) {
    return res.status(400).json({ success: false, error: 'Author and comment are required' });
  }

  const newReview = {
    id: `rev-${Date.now()}`,
    templeId: templeId || 'general',
    author,
    city: city || 'Pilgrim',
    rating: Number(rating) || 5,
    date: 'Just now',
    comment,
    darshanExperience: darshanExperience || 'General Visit'
  };

  reviewsStore.unshift(newReview);
  res.status(201).json({ success: true, data: newReview });
});

// AI Chat Endpoint
app.post('/api/ai/chat', (req, res) => {
  const { message, language = 'en' } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message query required' });
  }

  const q = message.toLowerCase();
  let reply = '';

  if (q.includes('mangla') || q.includes('मंगला')) {
    reply = language === 'hi' 
      ? 'श्री काशी विश्वनाथ मंदिर में ब्रह्ममुहूर्त मंगला आरती प्रातः 03:00 - 04:00 बजे तक होती है। धोती-कुर्ता या साड़ी अनिवार्य है।'
      : 'Mangla Aarti at Kashi Vishwanath occurs during Brahma Muhurta (03:00 AM - 04:00 AM). Traditional attire is mandatory.';
  } else if (q.includes('bhu') || q.includes('बिरला')) {
    reply = language === 'hi'
      ? 'बीएचयू स्थित न्यू विश्वनाथ मंदिर का 77 मीटर ऊंचा शिखर एशिया का सर्वोच्च मंदिर शिखर है।'
      : 'New Vishwanath Temple at BHU features a 77m high tower, the tallest temple shikhara in Asia.';
  } else {
    reply = language === 'hi'
      ? 'हर हर महादेव! काशी के सभी मंदिरों की दर्शन समय सारिणी, कतार स्थिति एवं सुगम पास पोर्टल पर उपलब्ध हैं।'
      : 'Har Har Mahadev! Timings, live wait times, and Sugam VIP passes are fully accessible via the Kashi Darshan portal.';
  }

  res.json({ reply, timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🛕 Kashi Darshan & Heritage Backend running on http://localhost:${PORT}`);
});
