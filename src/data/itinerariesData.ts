import { PilgrimageItinerary } from '../types/temple';

export const itinerariesData: PilgrimageItinerary[] = [
  {
    id: 'one-day-divine',
    title: 'One-Day Essential Kashi Darshan Circuit',
    titleHindi: 'एक दिवसीय मुख्य काशी दर्शन परिपथ',
    duration: 'Full Day (05:00 AM - 09:00 PM)',
    badge: 'Most Popular for Weekend Pilgrims',
    idealFor: 'Devotees visiting Varanasi for 24-36 hours',
    description: 'A time-tested pilgrimage encompassing the primary Jyotirlinga, the city guardian Kaal Bhairav, Assi morning aarti, and the magnificent Dashashwamedh evening Ganga Aarti.',
    descriptionHindi: 'कम समय में काशी के प्रमुख ज्योतिर्लिंग, काल भैरव, अस्सी घाट सुबहे बनारस एवं दशाश्वमेध महा आरती का सम्पूर्ण दर्शन।',
    stops: [
      {
        step: 1,
        time: '05:30 AM',
        templeId: 'assi-ghat',
        name: 'Assi Ghat Subah-e-Banaras & Holy Snan',
        activity: 'Take a holy dip in the Ganga, witness classical morning raga and Vedic havan.',
        travelTip: 'Start early to catch the serene sunrise over the river.'
      },
      {
        step: 2,
        time: '07:30 AM',
        templeId: 'kashi-vishwanath',
        name: 'Shri Kashi Vishwanath Dham & Maa Annapurna',
        activity: 'Enter via Gate 4 (Corridor). Darshan of the golden Jyotirlinga and obtain Akshat blessings at Maa Annapurna.',
        travelTip: 'Book Sugam Darshan online in advance to bypass peak general queue.'
      },
      {
        step: 3,
        time: '11:00 AM',
        templeId: 'kal-bhairav',
        name: 'Kaal Bhairav Mandir (Kotwal of Kashi)',
        activity: 'Present pilgrimage respects to the Guardian Magistrate. Offer mustard oil lamp and tie black protective ganda.',
        travelTip: 'Take an e-rickshaw to Maidagin chowk, then a brief 5-minute walk.'
      },
      {
        step: 4,
        time: '01:00 PM',
        templeId: 'kachori-gali',
        name: 'Traditional Banarasi Lunch & Vishwanath Gali Walk',
        activity: 'Savor piping hot kachori-jalebi, thandai, or satvik thali near Godowlia.',
        travelTip: 'Rest briefly between 1:30 PM to 3:30 PM as many smaller temples pause for bhog.'
      },
      {
        step: 5,
        time: '04:00 PM',
        templeId: 'sankat-mochan',
        name: 'Sankat Mochan Hanuman Temple & Durga Kund',
        activity: 'Receive blessings of Lord Hanuman, offer besan laddoo, then walk to nearby Durga Mandir.',
        travelTip: 'Both temples are within 10 minutes walking distance.'
      },
      {
        step: 6,
        time: '06:30 PM',
        templeId: 'dashashwamedh',
        name: 'Dashashwamedh Ghat Evening Ganga Maha Aarti',
        activity: 'Watch the world-famous synchronized brass lamp ritual from the ghat steps or a river boat.',
        travelTip: 'Reach the ghat by 06:00 PM to secure prime front seating.'
      }
    ]
  },
  {
    id: 'shiva-shakti-circuit',
    title: 'Panch Shivalaya & Shakti Peeth Circuit',
    titleHindi: 'पंच शिवालय एवं शक्ति पीठ परिपथ',
    duration: '2 Days (Relaxed Pace)',
    badge: 'Spiritual Seekers & Meditators',
    idealFor: 'Devotees focused on deep Shaivite and Shakta rituals',
    description: 'Explore the 5 ancient Shivalingas and sacred goddess shrines of Varanasi, including Kashi Vishwanath, Kedareshwar, Tilbhandeshwar, Mrityunjay Mahadev, and Durga Kund.',
    descriptionHindi: 'काशी के पांच स्वयंभू शिवालयों एवं शक्ति पीठों का अंतरंग साधना दर्शन।',
    stops: [
      {
        step: 1,
        time: 'Day 1 - Morning',
        templeId: 'kedareshwar',
        name: 'Kedareshwar Temple & Kedar Ghat Snan',
        activity: 'Snan at Kedar Ghat and abhishek of Southern Kedarnath.',
        travelTip: 'Peaceful and virtually crowd-free at sunrise.'
      },
      {
        step: 2,
        time: 'Day 1 - Midday',
        templeId: 'tilbhandeshwar',
        name: 'Tilbhandeshwar Mahadev',
        activity: 'Darshan of the expanding Swayambhu lingam and offer black sesame seeds.',
        travelTip: 'Within walking distance from Pandey Haveli.'
      },
      {
        step: 3,
        time: 'Day 1 - Evening',
        templeId: 'kashi-vishwanath',
        name: 'Kashi Vishwanath Saptarishi Aarti',
        activity: 'Attend the mystical 7-priest evening aarti with Vedic chants.',
        travelTip: 'Aarti passes must be reserved at least 24 hours prior.'
      },
      {
        step: 4,
        time: 'Day 2 - Morning',
        templeId: 'mrityunjay-mahadev',
        name: 'Mrityunjay Mahadev & Dhanvantari Well',
        activity: 'Chant Mahamrityunjaya Mantra 108 times and take sip of medicinal well water.',
        travelTip: 'Quiet morning atmosphere ideal for japa.'
      },
      {
        step: 5,
        time: 'Day 2 - Evening',
        templeId: 'durga-kund',
        name: 'Durga Mandir & Holy Durga Kund',
        activity: 'Light lamps on the steps of the sacred pond and offer red chunri.',
        travelTip: 'Illuminated red spire looks majestic in late dusk.'
      }
    ]
  },
  {
    id: 'heritage-modern-circuit',
    title: 'Modern Temples & Cultural Heritage Walk',
    titleHindi: 'आधुनिक मंदिर एवं विद्या-धरोहर यात्रा',
    duration: '1 Day (09:00 AM - 05:00 PM)',
    badge: 'Families, Scholars & Photography',
    idealFor: 'Travelers interested in modern art, marble architecture, and educational heritage',
    description: 'Focuses on the 20th-century marble marvels of Varanasi: BHU Birla Mandir, Bharat Mata Mandir with its 3D topographical map, and Tulsi Manas Mandir.',
    descriptionHindi: 'बीएचयू विश्वनाथ मंदिर, भारत माता मंदिर एवं तुलसी मानस मंदिर का ज्ञानवर्धक पारिवारिक भ्रमण।',
    stops: [
      {
        step: 1,
        time: '09:00 AM',
        templeId: 'bharat-mata',
        name: 'Bharat Mata Mandir',
        activity: 'Examine the 3D relief marble map of undivided India and pay homage.',
        travelTip: 'Located near Varanasi Cantt station.'
      },
      {
        step: 2,
        time: '11:00 AM',
        templeId: 'tulsi-manas',
        name: 'Tulsi Manas Mandir & Tridev Mandir',
        activity: 'Read Ramcharitmanas chaupais engraved on marble walls and watch puppet dioramas.',
        travelTip: 'Tridev Mandir is immediately next door.'
      },
      {
        step: 3,
        time: '02:30 PM',
        templeId: 'new-vishwanath-bhu',
        name: 'New Vishwanath Temple (BHU Birla Mandir)',
        activity: 'Walk through Asia’s tallest temple shikhara, explore BHU green campus and Bharat Kala Bhavan museum.',
        travelTip: 'Spend sunset sitting in the manicured temple lawns.'
      }
    ]
  }
];
