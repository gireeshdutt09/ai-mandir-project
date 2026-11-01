import { Temple } from '../types/temple';

export const templesData: Temple[] = [
  {
    id: 'kashi-vishwanath',
    slug: 'kashi-vishwanath',
    name: 'Shri Kashi Vishwanath Temple',
    hindiName: 'श्री काशी विश्वनाथ मंदिर',
    category: 'ancient',
    deity: 'Lord Shiva (Vishveshwara / Vishwanath)',
    secondaryDeities: ['Maa Annapurna', 'Maa Parvati', 'Lord Ganesha', 'Kal Bhairav'],
    era: 'Vedic / Rebuilt 1777 CE & Corridor 2021 CE',
    eraHindi: 'वैदिक काल / पुनर्निर्माण 1777 ई. एवं कॉरिडोर 2021',
    builtBy: 'Rani Ahilyabai Holkar & Corridor inaugurated by PM Narendra Modi',
    builtByHindi: 'महारानी अहिल्याबाई होल्कर एवं नव्य भव्य कॉरिडोर 2021',
    location: 'Vishwanath Gali, Lahori Tola, near Manikarnika Ghat',
    locationHindi: 'विश्वनाथ गली, लाहौरी टोला, मणिकर्णिका घाट के समीप',
    coordinates: { lat: 25.3109, lng: 83.0107 },
    heroImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80'
    ],
    popularityScore: 99,
    averageRating: 4.9,
    totalReviews: 4820,
    tagline: 'The Supreme Golden Jyotirlinga on the Sacred Crescent of Mother Ganga',
    taglineHindi: 'मां गंगा के पावन तट पर स्थित द्वादश ज्योतिर्लिंगों में शिरोमणि',
    history: 'Mentioned in the Kashi Khanda of the Skanda Purana, Shri Kashi Vishwanath is the spiritual nucleus of Sanatan Dharma. The temple was repeatedly rebuilt across millennia, notably restored in 1777 by Maharani Ahilyabai Holkar of Indore. Maharaja Ranjit Singh of Punjab donated 1 ton of pure gold in 1835 to plate the magnificent towers. In December 2021, the state-of-the-art Kashi Vishwanath Dham Corridor was opened, directly connecting the sanctum to the sacred Ganga river ghats across 500,000 square feet.',
    historyHindi: 'स्कंद पुराण के काशी खंड में वर्णित श्री काशी विश्वनाथ सनातन धर्म का आध्यात्मिक केंद्र है। 1777 में इंदौर की महारानी अहिल्याबाई होल्कर ने इसका जीर्णोद्धार कराया। 1835 में पंजाब केसरी महाराजा रणजीत सिंह ने शिखर को 1 टन विशुद्ध स्वर्ण से मढ़वाया। 2021 में गंगा तट से सीधे गर्भ गृह को जोड़ने वाले भव्य धाम कॉरिडोर का लोकार्पण हुआ।',
    mythology: 'According to holy scriptures, Kashi rests on the tip of Lord Shiva\'s Trishul (Trident) and remains unharmed during cosmic dissolution (Pralaya). It is declared that anyone who sheds their mortal coil here receives the Taraka Mantra directly from Mahadeva, attaining immediate Moksha (liberation from the cycle of rebirth).',
    mythologyHindi: 'पौराणिक मान्यता है कि काशी भगवान शिव के त्रिशूल की नोक पर बसी है। प्रलय काल में भी इस नगरी का विनाश नहीं होता। जो प्राणी काशी में प्राण त्यागता है, स्वयं भोलेनाथ उसके कान में तारक मंत्र फूंककर उसे मोक्ष प्रदान करते हैं।',
    architecture: 'Classical Nagara stone temple architecture with ornate stone pillars, sanctum circumambulation path, and gold-plated Shikhara and spire. The newly built corridor integrates heritage red Chunar sandstone, open courtyards, pilgrim facilitation centers, and riverfront viewing plazas.',
    architectureHindi: 'पारंपरिक नागर शैली में निर्मित भव्य गर्भगृह जिसके ऊपर स्वर्णजड़ित शिखर है। चुनार के लाल बलुआ पत्थरों से निर्मित आधुनिक कॉरिडोर 5 लाख वर्गफुट में फैला है।',
    architectureStyle: 'Nagara & Royal Maratha with Golden Spire',
    rituals: [
      'Jalabhishekam with holy Ganga water',
      'Rudrabhishekam by Ved-pathak priests',
      'Mangla Aarti in early dawn (brahma-muhurta)',
      'Saptarishi Aarti performed by seven seers',
      'Shringar & Shayan Aarti at night'
    ],
    ritualsHindi: [
      'पवित्र गंगाजल से जलाभिषेक',
      'वेदपाठी ब्राह्मणों द्वारा रुद्राभिषेक',
      'ब्रह्ममुहूर्त में मंगला आरती',
      'सप्तर्षि आरती संध्या काल में',
      'रात्रि शृंगार एवं शयन आरती'
    ],
    darshanTimings: {
      opening: '03:00 AM',
      closing: '11:00 PM',
      breaks: 'Closes briefly during Bhog Aarti (11:30 AM - 12:00 PM)'
    },
    aartiSchedule: [
      {
        id: 'kv-mangla',
        name: 'Mangla Aarti',
        hindiName: 'मंगला आरती',
        time: '03:00 AM - 04:00 AM',
        description: 'First divine waking ritual of Vishveshwara with Vedic mantras and conch blows. Highly auspicious.',
        price: '₹500 / person',
        bookingAvailable: true,
        dressCodeRequired: 'Dhoti/Kurta for Men, Saree for Women'
      },
      {
        id: 'kv-bhog',
        name: 'Midday Bhog Aarti',
        hindiName: 'भोग आरती',
        time: '11:15 AM - 12:20 PM',
        description: 'Divine offering of sacred vegetarian feast and milk preparations.',
        price: '₹300 / person',
        bookingAvailable: true
      },
      {
        id: 'kv-saptarshi',
        name: 'Saptarishi Aarti',
        hindiName: 'सप्तर्षि आरती',
        time: '07:00 PM - 08:15 PM',
        description: 'Iconic 700-year-old ritual performed simultaneously by seven learned priests representing the seven cosmic seers.',
        price: '₹300 / person',
        bookingAvailable: true
      },
      {
        id: 'kv-shringar',
        name: 'Night Shringar & Shayan Aarti',
        hindiName: 'रात्रि शृंगार एवं शयन आरती',
        time: '09:00 PM - 10:30 PM',
        description: 'Bedtime floral ornamentation with silver ornaments and sweet fragrance.',
        price: '₹300 / person',
        bookingAvailable: true
      }
    ],
    dressCode: {
      men: 'Traditional Dhoti-Kurta or clean pants & shirt (Strict Dhoti required inside sanctum during Mangla Aarti)',
      women: 'Saree, Salwar Kameez, or traditional ethnic wear',
      prohibited: ['Shorts', 'Sleeveless tops', 'Leather belts inside sanctum', 'Electronic gadgets & cameras (lockers provided at entry)']
    },
    bestTimeToVisit: 'October to March (Pleasant weather) and during Shravan Maas & Mahashivratri',
    bestTimeToVisitHindi: 'अक्टूबर से मार्च (सुहावना मौसम) एवं पावन श्रावण मास व महाशिवरात्रि',
    festivals: ['Mahashivratri', 'Dev Deepawali', 'Rangbhari Ekadashi', 'Shravan Somwar'],
    festivalsHindi: ['महाशिवरात्रि', 'देव दीपावली', 'रंगभरी एकादशी', 'श्रावण सोमवार'],
    crowdStatus: {
      level: 'High',
      waitTimeMinutes: 45,
      gateNumber: 'Gate No. 4 (Chhatrapati Shivaji Maharaj Dwar / Corridor)',
      lastUpdated: '10 mins ago',
      peakHours: '06:00 AM - 10:00 AM & 05:00 PM - 08:30 PM',
      queueLengthMeters: 280
    },
    transit: {
      fromVaranasiCantt: '4.8 km (~22 mins by e-rickshaw or taxi)',
      fromBanarasStation: '5.2 km (~25 mins)',
      fromAirport: '24.5 km (~45-55 mins via highway & ring road)',
      fromDashashwamedh: '600 meters (5-7 mins peaceful walk through corridor)',
      nearestGhat: 'Manikarnika Ghat & Lalita Ghat (Directly attached via Corridor)',
      nearestParking: 'Godowlia Multi-level Parking or Maidagin Parking',
      localTransportTip: 'Take an e-rickshaw to Godowlia Chowk or Maidagin, then enter via Corridor Gate 4.',
      localTransportTipHindi: 'गोदौलिया चौक या मैदागिन तक ई-रिक्शा लें, फिर गेट 4 कॉरिडोर से प्रवेश करें।'
    },
    nearbyAttractions: [
      { name: 'Dashashwamedh Ghat & Evening Ganga Aarti', hindiName: 'दशाश्वमेध घाट एवं महा आरती', distance: '600m', description: 'World renowned grand Ganga Aarti ritual every evening', type: 'ghat' },
      { name: 'Maa Annapurna Mandir', hindiName: 'माँ अन्नपूर्णा मंदिर', distance: '120m', description: 'Goddess of nutrition and nourishment', type: 'temple' },
      { name: 'Manikarnika Ghat', hindiName: 'मणिकर्णिका महाश्मशान घाट', distance: '300m', description: 'The sacred cremation ground granting eternal liberation', type: 'ghat' },
      { name: 'Kashi Vishwanath Corridor Cultural Museum', hindiName: 'विश्वनाथ धाम संग्रहालय', distance: '50m', description: 'Interactive exhibits of Varanasi history and temples', type: 'heritage' }
    ],
    officialTrustBooking: {
      trustName: 'Shri Kashi Vishwanath Temple Trust (SKVT)',
      trustNameHindi: 'श्री काशी विश्वनाथ मंदिर न्यास',
      sugamDarshanAvailable: true,
      sugamDarshanPrice: 300,
      aartiPassAvailable: true,
      prasadDeliveryAvailable: true,
      officialWebsite: 'https://shrikashivishwanath.org',
      helplinePhone: '+91-542-2392629'
    },
    reviews: [
      {
        id: 'rev-1',
        author: 'Pandit Raghavendra Joshi',
        city: 'Pune, Maharashtra',
        rating: 5,
        date: '24 Oct 2026',
        comment: 'The new corridor makes darshan remarkably easy for senior citizens. Mangla Aarti experience was spiritually transcendent; the vibration of Vedic chanting stays in your soul forever.',
        darshanExperience: 'Sugam Darshan took just 25 minutes through Gate 4.',
        helpfulCount: 42
      },
      {
        id: 'rev-2',
        author: 'Sunita Mehra',
        city: 'Jaipur, Rajasthan',
        rating: 5,
        date: '18 Oct 2026',
        comment: 'Walking directly from Lalita Ghat into the Vishwanath temple complex at dawn while the sun rises over Ganga is unmatched divine beauty.',
        darshanExperience: 'Booked Sugam Darshan online; very smooth queue management.',
        helpfulCount: 31
      }
    ]
  },
  {
    id: 'sankat-mochan',
    slug: 'sankat-mochan',
    name: 'Sankat Mochan Hanuman Temple',
    hindiName: 'संकट मोचन हनुमान मंदिर',
    category: 'ancient',
    deity: 'Lord Hanuman (Sankat Mochan)',
    secondaryDeities: ['Lord Rama', 'Maa Sita', 'Lakshmana'],
    era: '16th Century CE (Established by Goswami Tulsidas)',
    eraHindi: '16वीं शताब्दी (गोस्वामी तुलसीदास जी द्वारा स्थापित)',
    builtBy: 'Sant Goswami Tulsidas',
    builtByHindi: 'संत गोस्वामी तुलसीदास जी महाराज',
    location: 'Sankat Mochan Road, Saket Nagar Colony, near Assi Ghat',
    locationHindi: 'संकट मोचन रोड, साकेत नगर, अस्सी घाट के निकट',
    coordinates: { lat: 25.2818, lng: 82.9995 },
    heroImage: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80'
    ],
    popularityScore: 96,
    averageRating: 4.9,
    totalReviews: 3410,
    tagline: 'The Reliever of All Sorrows Founded by Goswami Tulsidas',
    taglineHindi: 'गोस्वामी तुलसीदास जी द्वारा स्थापित सर्व संकटहर्ता पावन धाम',
    history: 'Founded in the early 1500s by Goswami Tulsidas, the revered author of Ramcharitmanas and Hanuman Chalisa. Legend relates that Tulsidas had a direct divine vision of Lord Hanuman at this very spot. The current structure was developed in the early 1900s by Mahamana Pandit Madan Mohan Malaviya.',
    historyHindi: '16वीं सदी में गोस्वामी तुलसीदास जी को यहीं श्री हनुमान जी के साक्षात दर्शन हुए थे। बाद में महामना पंडित मदन मोहन मालवीय जी ने मंदिर के वर्तमान स्वरूप का विस्तार कराया।',
    mythology: 'Devotees believe that praying here dispels astrological distress caused by Shani (Saturn) and removes all hurdles, grief, and health ailments. The pure besan laddoo prasad offered here is renowned across India.',
    mythologyHindi: 'मान्यता है कि यहां दर्शन करने से शनिदेव के कुप्रभाव व जीवन के समस्त संकट दूर हो जाते हैं। यहां का शुद्ध देशी घी का बेसन लड्डू प्रसाद अति प्रसिद्ध है।',
    architecture: 'Traditional courtyards filled with sacred trees, neem and peepal, with a vibrant red-and-gold sanctum surrounded by serene open galleries.',
    architectureHindi: 'विशाल प्रांगण, सघन वृक्षों से घिरा प्राकृतिक शांत वातावरण और लाल-सुनहरे रंगों से सुसज्जित गर्भगृह।',
    architectureStyle: 'Traditional Hindu Temple Courtyard',
    rituals: [
      'Sindoor & Jasmine oil offering to Maruti Nandan',
      'Hanuman Chalisa & Sundarkand mass recitations',
      'Offering pure ghee Besan ke Laddoos',
      'Annual Sankat Mochan Sangeet Samaroh (world-class classical music festival)'
    ],
    ritualsHindi: [
      'सिंदूर एवं चमेली तेल अर्पण',
      'सामूहिक हनुमान चालीसा एवं सुंदरकांड पाठ',
      'देशी घी के बेसन लड्डू का भोग',
      'वार्षिक संकट मोचन संगीत समारोह'
    ],
    darshanTimings: {
      opening: '05:00 AM',
      closing: '10:00 PM',
      breaks: 'Closes 12:00 PM - 03:00 PM for Bhog & Rest'
    },
    aartiSchedule: [
      {
        id: 'sm-morning',
        name: 'Pratah Aarti',
        hindiName: 'प्रातः आरती',
        time: '05:00 AM',
        description: 'Morning awakening aarti with chanting of Ram Raksha Stotra.',
        price: 'Free Darshan',
        bookingAvailable: false
      },
      {
        id: 'sm-evening',
        name: 'Sandhya Aarti',
        hindiName: 'संध्या महा आरती',
        time: '08:30 PM',
        description: 'Spectacular evening aarti filled with brass bells and devotional hymns.',
        price: 'Free Darshan',
        bookingAvailable: false
      }
    ],
    dressCode: {
      men: 'Modest Indian attire, dhoti, kurta or formal trouser/shirt',
      women: 'Saree, Salwar suit, modest wear',
      prohibited: ['Short pants', 'Skirts', 'Leather items near sanctum']
    },
    bestTimeToVisit: 'Tuesdays & Saturdays (Special days of Bajrangbali), Hanuman Jayanti, and evenings',
    bestTimeToVisitHindi: 'मंगलवार और शनिवार, हनुमान जयंती एवं सायंकालीन समय',
    festivals: ['Hanuman Jayanti', 'Sankat Mochan Sangeet Samaroh', 'Ram Navami'],
    festivalsHindi: ['हनुमान जयंती', 'संकट मोचन संगीत समारोह', 'राम नवमी'],
    crowdStatus: {
      level: 'Moderate',
      waitTimeMinutes: 20,
      gateNumber: 'Main North Gate',
      lastUpdated: '15 mins ago',
      peakHours: 'Tuesday & Saturday 07:00 AM - 12:00 PM & 06:00 PM - 10:00 PM',
      queueLengthMeters: 120
    },
    transit: {
      fromVaranasiCantt: '6.5 km (~28 mins by auto/cab)',
      fromBanarasStation: '4.8 km (~20 mins)',
      fromAirport: '28.0 km (~55 mins)',
      fromDashashwamedh: '3.2 km (~15 mins)',
      nearestGhat: 'Assi Ghat (1.2 km)',
      nearestParking: 'Temple premise designated parking space',
      localTransportTip: 'Auto rickshaws and e-rickshaws frequently ply directly to Sankat Mochan temple gate.',
      localTransportTipHindi: 'कैंट या अस्सी से सीधे संकट मोचन के लिए ऑटो व ई-रिक्शा उपलब्ध हैं।'
    },
    nearbyAttractions: [
      { name: 'Assi Ghat', hindiName: 'अस्सी घाट', distance: '1.2 km', description: 'Famous for Subah-e-Banaras morning Ganga Aarti & yoga', type: 'ghat' },
      { name: 'Durga Kund Mandir', hindiName: 'दुर्गा कुंड मंदिर', distance: '900m', description: 'Red stone 18th century Shakti temple', type: 'temple' },
      { name: 'Tulsi Manas Mandir', hindiName: 'तुलसी मानस मंदिर', distance: '800m', description: 'Marble temple dedicated to Ramcharitmanas', type: 'temple' }
    ],
    officialTrustBooking: {
      trustName: 'Sankat Mochan Hanuman Temple Foundation',
      trustNameHindi: 'संकट मोचन हनुमान मंदिर ट्रस्ट',
      sugamDarshanAvailable: false,
      sugamDarshanPrice: 0,
      aartiPassAvailable: false,
      prasadDeliveryAvailable: true,
      officialWebsite: 'https://sankatmochantemple.org',
      helplinePhone: '+91-542-2313888'
    },
    reviews: [
      {
        id: 'rev-sm-1',
        author: 'Ananya Sharma',
        city: 'Lucknow, UP',
        rating: 5,
        date: '20 Oct 2026',
        comment: 'Peaceful and full of divine presence. Sitting beneath the trees listening to the continuous chanting clears the mind completely. Besan laddu prasad is heavenly.',
        darshanExperience: 'Visited Tuesday afternoon; took 30 mins. Monkeys are very gentle if unprovoked.',
        helpfulCount: 29
      }
    ]
  },
  {
    id: 'annapurna',
    slug: 'annapurna',
    name: 'Maa Annapurna Mandir',
    hindiName: 'माँ अन्नपूर्णा मंदिर',
    category: 'ancient',
    deity: 'Maa Annapurna (Goddess of Food & Nourishment)',
    secondaryDeities: ['Lord Shiva begging for alms (Bhikshatan Murti)'],
    era: '18th Century CE (Ancient roots dating to Puranas)',
    eraHindi: '18वीं शताब्दी (पौराणिक काल से मान्यता)',
    builtBy: 'Peshwa Baji Rao I in 1729 CE',
    builtByHindi: 'बाजीराव पेशवा प्रथम (1729 ई.)',
    location: 'Vishwanath Gali, adjacent to Shri Kashi Vishwanath Sanctum',
    locationHindi: 'विश्वनाथ गली, श्री काशी विश्वनाथ गर्भगृह के निकट',
    coordinates: { lat: 25.3112, lng: 83.0112 },
    heroImage: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'
    ],
    popularityScore: 94,
    averageRating: 4.8,
    totalReviews: 2190,
    tagline: 'The Mother Divine of Kashi Who Ensures No One Sleeps Hungry',
    taglineHindi: 'काशी की अधिष्ठात्री अन्नदात्री, जिनके राज्य में कोई भूखा नहीं रहता',
    history: 'According to scriptures, when famine once struck Kashi, Lord Shiva himself begged for alms from Maa Annapurna. Pleased with his humility, she pledged that within Kashi, no soul would ever starve. Reconstructed in 1729 by Maratha Peshwa Baji Rao, the sanctum features a sacred golden idol opened only during the 4-day Annakoot festival after Diwali.',
    historyHindi: 'मान्यता है कि जब काशी में अकाल पड़ा, स्वयं देवाधिदेव महादेव ने माँ अन्नपूर्णा की झोली में भिक्षा याचना की थी। देवी ने आशीर्वाद दिया कि काशी में कोई भूखा नहीं सोएगा। मंदिर में स्थापित स्वर्ण प्रतिमा के दर्शन वर्ष में केवल 4 दिन (दीपावली अन्नकूट) होते हैं।',
    mythology: 'Maa Annapurna is the manifestation of Maa Parvati. Pilgrims believe that taking her darshan and prasad guarantees perpetual abundance in home grain stores and peace of mind.',
    mythologyHindi: 'माँ अन्नपूर्णा के दर्शन व अक्षत (चावल) को तिजोरी में रखने से घर में धन-धान्य की कभी कमी नहीं होती।',
    architecture: 'Maratha-Nagara stone temple style with a graceful silver-plated sanctum throne and traditional brass hanging lamps.',
    architectureHindi: 'मराठा-नागर स्थापत्य शैली जिसमें गर्भगृह में चांदी का भव्य सिंहासन व प्राचीन पीतल के दीपस्तंभ हैं।',
    architectureStyle: 'Maratha Nagara Style',
    rituals: [
      'Offering Akshat (raw sacred rice) and coins',
      'Daily free Annakshetra (Mahaprasad dining hall for all devotees)',
      'Annakoot Mahotsav with 56 Bhog display'
    ],
    ritualsHindi: [
      'अक्षत (चावल) एवं सिक्का अर्पण',
      'दैनिक निःशुल्क अन्नक्षेत्र में महाप्रसाद वितरण',
      'अन्नकूट महोत्सव पर 56 भोग दर्शन'
    ],
    darshanTimings: {
      opening: '04:00 AM',
      closing: '10:30 PM',
      breaks: 'Bhog rest from 12:00 PM to 02:00 PM'
    },
    aartiSchedule: [
      {
        id: 'an-mangla',
        name: 'Pratah Mangla Aarti',
        hindiName: 'प्रातः मंगला आरती',
        time: '04:30 AM',
        description: 'Morning prayer offering raw milk and vermilion.',
        price: 'Free Darshan',
        bookingAvailable: false
      },
      {
        id: 'an-shringar',
        name: 'Sandhya Shringar Aarti',
        hindiName: 'संध्या शृंगार आरती',
        time: '07:30 PM',
        description: 'Grand evening aarti with silver ornaments and fresh flower garlands.',
        price: 'Free Darshan',
        bookingAvailable: false
      }
    ],
    dressCode: {
      men: 'Traditional attire, shirts/trousers, dhoti',
      women: 'Saree, Salwar Kameez',
      prohibited: ['Short skirts', 'Shorts', 'Leather accessories']
    },
    bestTimeToVisit: 'Diwali Annakoot Festival (Gold Idol Darshan) and Navratri',
    bestTimeToVisitHindi: 'दीपावली अन्नकूट महोत्सव (स्वर्ण प्रतिमा दर्शन) एवं दोनों नवरात्र',
    festivals: ['Annakoot', 'Chaitra Navratri', 'Sharadiya Navratri', 'Dhanteras'],
    festivalsHindi: ['अन्नकूट महोत्सव', 'चैत्र नवरात्रि', 'शारदीय नवरात्रि', 'धनतेरस'],
    crowdStatus: {
      level: 'Moderate',
      waitTimeMinutes: 25,
      gateNumber: 'Direct Entry from Vishwanath Gali',
      lastUpdated: '12 mins ago',
      peakHours: '08:00 AM - 11:30 AM & 06:00 PM - 08:30 PM',
      queueLengthMeters: 90
    },
    transit: {
      fromVaranasiCantt: '4.8 km (~22 mins)',
      fromBanarasStation: '5.2 km (~25 mins)',
      fromAirport: '24.5 km (~50 mins)',
      fromDashashwamedh: '550 meters (walk through lane)',
      nearestGhat: 'Dashashwamedh Ghat & Lalita Ghat',
      nearestParking: 'Godowlia Multilevel Parking',
      localTransportTip: 'Combined smoothly with Shri Kashi Vishwanath visit.',
      localTransportTipHindi: 'काशी विश्वनाथ मंदिर दर्शन के साथ ही सुगमता से दर्शन करें।'
    },
    nearbyAttractions: [
      { name: 'Shri Kashi Vishwanath Temple', hindiName: 'श्री काशी विश्वनाथ मंदिर', distance: '50m', description: 'Primary Jyotirlinga', type: 'temple' },
      { name: 'Ganga Riverfront at Lalita Ghat', hindiName: 'ललिता घाट', distance: '250m', description: 'Sacred riverfront', type: 'ghat' }
    ],
    officialTrustBooking: {
      trustName: 'Maa Annapurna Mandir Trust',
      trustNameHindi: 'माँ अन्नपूर्णा मंदिर न्यास',
      sugamDarshanAvailable: false,
      sugamDarshanPrice: 0,
      aartiPassAvailable: false,
      prasadDeliveryAvailable: true,
      officialWebsite: 'https://kashiannapurna.org',
      helplinePhone: '+91-542-2401666'
    },
    reviews: [
      {
        id: 'rev-an-1',
        author: 'Rameshwar Upadhyay',
        city: 'Gorakhpur, UP',
        rating: 5,
        date: '14 Oct 2026',
        comment: 'Having prasad in the temple Annakshetra is an experience of pure grace. The divine warmth of the priests and the peace inside is exceptional.',
        darshanExperience: 'Visited right after Vishwanath darshan; took 20 mins.',
        helpfulCount: 19
      }
    ]
  },
  {
    id: 'kal-bhairav',
    slug: 'kal-bhairav',
    name: 'Kaal Bhairav Mandir (Kotwal of Kashi)',
    hindiName: 'काल भैरव मंदिर (काशी के कोतवाल)',
    category: 'ancient',
    deity: 'Kaal Bhairav (Fierce manifestation of Shiva)',
    secondaryDeities: ['Bhairavi', 'Lord Ganesha'],
    era: 'Mid 17th Century (Ancient presence in Shiva Purana)',
    eraHindi: '17वीं शताब्दी (शिव पुराण कालीन मूल)',
    builtBy: 'King Bhadrasen / Restored in Maratha Era',
    builtByHindi: 'राजा भद्रसेन / मराठा कालीन जीर्णोद्धार',
    location: 'K-32/22, Bharonath, Golgadda, Visheshwarganj',
    locationHindi: 'भैरोनाथ, गोलगड्डा, विशेश्वरगंज',
    coordinates: { lat: 25.3214, lng: 83.0135 },
    heroImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'
    ],
    popularityScore: 92,
    averageRating: 4.8,
    totalReviews: 2840,
    tagline: 'The Supreme Magistrate & Guardian of Kashi',
    taglineHindi: 'काशी के दंडाधिकारी, जिनकी आज्ञा बिना काशी वास संभव नहीं',
    history: 'Known as the "Kotwal" (Chief Police Officer and Divine Magistrate) of Varanasi. According to sacred tradition, anyone desiring to stay in or leave Varanasi must seek the blessings and clearance of Kaal Bhairav. The idol holds a silver trident and rides a dog (Shvana), his celestial vehicle.',
    historyHindi: 'काशी के कोतवाल कहे जाने वाले भगवान काल भैरव काशी के रक्षक व दंडाधिकारी हैं। परंपरा अनुसार काशी दर्शन काल भैरव की अनुमति के बिना अधूरा माना जाता है। गर्भगृह में उनकी रजत मुखौटा युक्त भव्य प्रतिमा विराजमान है।',
    mythology: 'When Brahma claimed superiority over Shiva, Shiva created Bhairava from his third eye, who severed Brahma’s arrogant fifth head. The head became stuck to Bhairava\'s hand as Kapala until he entered Kashi, where the sin of Brahmahatya melted away into the earth.',
    mythologyHindi: 'ब्रह्मदेव का अहंकार नष्ट करने हेतु शिवजी के तीसरे नेत्र से भैरव प्रकट हुए। ब्रह्महत्या के प्रायश्चित हेतु जब वे काशी पहुंचे, तो कपाल उनके हाथ से छूट गया और उन्हें काशी का स्थायी कोतवाल नियुक्त किया गया।',
    architecture: 'Traditional narrow corridor leading to an ancient stone sanctum decorated with silver face mask, bells, and mustard oil brass lamps.',
    architectureHindi: 'सघन गलियों के बीच स्थित प्राचीन पाषाण मंदिर, गर्भगृह में रजत शृंगार और सरसों के तेल के विशाल दीप।',
    architectureStyle: 'Ancient Nagara Stone Architecture',
    rituals: [
      'Offering Mustard Oil (Sarson ka Tel) lamps',
      'Tying of holy black thread (Bhairav Ganda) around the wrist/neck for protection',
      'Offering of liquor and sweets as per Aghor/Tantric traditions',
      'Peacock feather blessing (Jhaada) by temple sevaks'
    ],
    ritualsHindi: [
      'सरसों के तेल का दीपक जलाना',
      'रक्षा हेतु काला धागा (गंडा) बंधवाना',
      'नैवेद्य अर्पण',
      'मोर पंख से झाड़ा लगवाना'
    ],
    darshanTimings: {
      opening: '05:00 AM',
      closing: '01:30 PM & 04:30 PM - 10:30 PM',
      breaks: 'Temple closed 01:30 PM - 04:30 PM'
    },
    aartiSchedule: [
      {
        id: 'kb-morning',
        name: 'Pratah Aarti',
        hindiName: 'प्रातः कालीन आरती',
        time: '05:30 AM',
        description: 'Morning awakening aarti with dynamic drum and gong vibrations.',
        price: 'Free Darshan',
        bookingAvailable: false
      },
      {
        id: 'kb-night',
        name: 'Shayan Aarti',
        hindiName: 'शयन आरती',
        time: '10:00 PM',
        description: 'Grand concluding aarti.',
        price: 'Free Darshan',
        bookingAvailable: false
      }
    ],
    dressCode: {
      men: 'Decent traditional or casual attire',
      women: 'Saree or suit',
      prohibited: ['Objectionable short dresses']
    },
    bestTimeToVisit: 'Sundays & Tuesdays, Bhairav Ashtami (Margashirsha Krishna Ashtami)',
    bestTimeToVisitHindi: 'रविवार एवं मंगलवार, काल भैरव अष्टमी',
    festivals: ['Kaal Bhairav Ashtami', 'Mahashivratri', 'Holi'],
    festivalsHindi: ['काल भैरव अष्टमी', 'महाशिवरात्रि', 'होली उत्सव'],
    crowdStatus: {
      level: 'Moderate',
      waitTimeMinutes: 30,
      gateNumber: 'Main Entrance Lane',
      lastUpdated: '18 mins ago',
      peakHours: 'Sunday 08:00 AM - 01:00 PM & Tuesday evenings',
      queueLengthMeters: 140
    },
    transit: {
      fromVaranasiCantt: '4.2 km (~18 mins)',
      fromBanarasStation: '6.0 km (~26 mins)',
      fromAirport: '23.0 km (~45 mins)',
      fromDashashwamedh: '2.5 km (~12 mins)',
      nearestGhat: 'Rajghat / Gaighat (1.5 km)',
      nearestParking: 'Maidagin Town Hall parking',
      localTransportTip: 'Take auto to Maidagin, then walk 400m into Bharonath lane.',
      localTransportTipHindi: 'मैदागिन तक ऑटो लें, वहां से 400 मीटर पैदल गली में चलें।'
    },
    nearbyAttractions: [
      { name: 'Mrityunjay Mahadev Temple', hindiName: 'मृत्युंजय महादेव मंदिर', distance: '600m', description: 'Temple of healing water well', type: 'temple' },
      { name: 'Town Hall & Maidagin Park', hindiName: 'टाउन हॉल मैदान', distance: '500m', description: 'Historic civic square', type: 'heritage' }
    ],
    officialTrustBooking: {
      trustName: 'Kaal Bhairav Mandir Samiti',
      trustNameHindi: 'काल भैरव मंदिर प्रबंध समिति',
      sugamDarshanAvailable: false,
      sugamDarshanPrice: 0,
      aartiPassAvailable: false,
      prasadDeliveryAvailable: true,
      helplinePhone: '+91-542-2435555'
    },
    reviews: [
      {
        id: 'rev-kb-1',
        author: 'Vikramaditya Rathore',
        city: 'Jodhpur, Rajasthan',
        rating: 5,
        date: '08 Oct 2026',
        comment: 'The energy here is truly intense and protective. Don’t forget to receive the holy black thread from the priests.',
        darshanExperience: 'Quick darshan on a weekday morning; approximately 15 minutes.',
        helpfulCount: 22
      }
    ]
  },
  {
    id: 'durga-kund',
    slug: 'durga-kund',
    name: 'Durga Mandir (Durga Kund)',
    hindiName: 'दुर्गा मंदिर (दुर्गा कुंड)',
    category: 'ancient',
    deity: 'Goddess Durga (Jagadamba)',
    secondaryDeities: ['Bhairava', 'Saraswati', 'Lakshmi'],
    era: '18th Century CE',
    eraHindi: '18वीं शताब्दी (1760 ई.)',
    builtBy: 'Rani Bhabani of Natore (Bengal)',
    builtByHindi: 'नाटोर की महारानी भवानी (बंगाल)',
    location: 'Durga Kund Road, Jawahar Nagar Colony, Bhelupur',
    locationHindi: 'दुर्गा कुंड रोड, भेलूपुर',
    coordinates: { lat: 25.2869, lng: 82.9989 },
    heroImage: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80'
    ],
    popularityScore: 91,
    averageRating: 4.7,
    totalReviews: 2450,
    tagline: 'Vibrant Terracotta Red Temple Overlooking Holy Durga Kund',
    taglineHindi: 'पवित्र दुर्गा कुंड के तट पर लाल चुनार पत्थरों का भव्य शक्ति पीठ',
    history: 'Built in 1760 by Rani Bhabani of Natore, this radiant red-ochre temple features exquisite multi-tiered spires. The deity is believed to be Swayambhu (self-manifested). Beside the temple sits the sprawling Durga Kund water tank, historically connected to the river Ganga.',
    historyHindi: '1760 में बंगाल की रानी भवानी द्वारा निर्मित यह लाल गेरुए रंग का मंदिर नागर स्थापत्य का अनुपम उदाहरण है। मंदिर के समीप विशाल दुर्गा कुंड स्थित है।',
    mythology: 'Scriptures state Goddess Durga rested here after destroying the demons Shumbha and Nishumbha. Visiting here invokes valor, removes fear, and dissolves internal negativities.',
    mythologyHindi: 'दैत्य शुंभ-निशुंभ के वधोपरांत देवी ने इसी स्थान पर विश्राम किया था। यहां दर्शन से शत्रुओं व भय से मुक्ति मिलती है।',
    architecture: 'Exquisite multi-tiered Nagara Shikhara colored in striking sacred red ochre, surrounded by grand colonnaded stone verandas overlooking the sacred pond.',
    architectureHindi: 'लाल गेरुए रंग में रंगा बहुमंजिला नागर शिखर, विशाल पाषाण स्तंभ और पवित्र कुंड।',
    architectureStyle: 'Bengal-influenced Classical Nagara',
    rituals: [
      'Offering red hibiscus flowers, red chunri, and coconuts',
      'Chandi Path and Durga Saptashati recitations',
      'Special Navratri Mahapuja & Havan'
    ],
    ritualsHindi: [
      'लाल अड़हुल पुष्प, लाल चुनरी व नारियल अर्पण',
      'चंडी पाठ एवं दुर्गा सप्तशती पाठ',
      'नवरात्रि महापूजा एवं हवन'
    ],
    darshanTimings: {
      opening: '05:00 AM',
      closing: '11:00 PM',
      breaks: 'None (continuous darshan)'
    },
    aartiSchedule: [
      {
        id: 'dk-morning',
        name: 'Mangal Aarti',
        hindiName: 'मंगल आरती',
        time: '05:30 AM',
        description: 'Morning invocation with shankh-naad.',
        price: 'Free Darshan',
        bookingAvailable: false
      },
      {
        id: 'dk-sandhya',
        name: 'Maha Aarti',
        hindiName: 'संध्या महा आरती',
        time: '08:00 PM',
        description: 'Grand evening flame aarti.',
        price: 'Free Darshan',
        bookingAvailable: false
      }
    ],
    dressCode: {
      men: 'Modest pants, dhoti, kurta',
      women: 'Saree or suit',
      prohibited: ['Sleeveless clothes', 'Short skirts']
    },
    bestTimeToVisit: 'Chaitra & Sharadiya Navratri, Tuesday & Friday evenings',
    bestTimeToVisitHindi: 'चैत्र व शारदीय नवरात्रि, मंगलवार व शुक्रवार शाम',
    festivals: ['Sharadiya Navratri', 'Chaitra Navratri', 'Durga Puja'],
    festivalsHindi: ['शारदीय नवरात्रि', 'चैत्र नवरात्रि', 'दुर्गा पूजा'],
    crowdStatus: {
      level: 'Low',
      waitTimeMinutes: 10,
      gateNumber: 'East Kund Gate',
      lastUpdated: '8 mins ago',
      peakHours: 'Tuesdays & Navratri periods',
      queueLengthMeters: 40
    },
    transit: {
      fromVaranasiCantt: '5.8 km (~24 mins)',
      fromBanarasStation: '4.2 km (~18 mins)',
      fromAirport: '27.5 km (~50 mins)',
      fromDashashwamedh: '3.0 km (~15 mins)',
      nearestGhat: 'Assi Ghat (1.5 km)',
      nearestParking: 'Durga Kund municipal parking lot',
      localTransportTip: 'Direct auto-rickshaws available from Cantt to Durga Kund.',
      localTransportTipHindi: 'कैंट रेलवे स्टेशन से सीधे दुर्गा कुंड के लिए ऑटो उपलब्ध हैं।'
    },
    nearbyAttractions: [
      { name: 'Tulsi Manas Mandir', hindiName: 'तुलसी मानस मंदिर', distance: '250m', description: 'White marble Ramcharitmanas temple', type: 'temple' },
      { name: 'Sankat Mochan Temple', hindiName: 'संकट मोचन मंदिर', distance: '900m', description: 'Hanuman shrine', type: 'temple' }
    ],
    officialTrustBooking: {
      trustName: 'Durga Kund Mandir Nyas',
      trustNameHindi: 'दुर्गा कुंड मंदिर न्यास',
      sugamDarshanAvailable: false,
      sugamDarshanPrice: 0,
      aartiPassAvailable: false,
      prasadDeliveryAvailable: false,
      helplinePhone: '+91-542-2311234'
    },
    reviews: [
      {
        id: 'rev-dk-1',
        author: 'Meenakshi Iyer',
        city: 'Chennai, Tamil Nadu',
        rating: 5,
        date: '02 Oct 2026',
        comment: 'The striking red color against the evening sky creates a mesmerizing atmosphere. Very peaceful inside.',
        darshanExperience: 'Only took 10 minutes. Clean environment.',
        helpfulCount: 14
      }
    ]
  },
  {
    id: 'mrityunjay-mahadev',
    slug: 'mrityunjay-mahadev',
    name: 'Mrityunjay Mahadev Mandir',
    hindiName: 'मृत्युंजय महादेव मंदिर',
    category: 'ancient',
    deity: 'Lord Shiva as Mrityunjaya (Conqueror of Death)',
    secondaryDeities: ['Dhanvantari', 'Lord Ganesha'],
    era: 'Vedic Roots / Rebuilt 18th Century',
    eraHindi: 'वैदिक काल / 18वीं सदी में वर्तमान स्वरूप',
    builtBy: 'Ancient Seers & Local Pilgrimage Trust',
    builtByHindi: 'प्राचीन ऋषि परंपरा एवं स्थानीय तीर्थ न्यास',
    location: 'Daranagar, Kotwali Ward, near Kaal Bhairav Temple',
    locationHindi: 'दारानागर, कोतवाली वार्ड, काल भैरव के समीप',
    coordinates: { lat: 25.3242, lng: 83.0149 },
    heroImage: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80'
    ],
    popularityScore: 86,
    averageRating: 4.7,
    totalReviews: 1240,
    tagline: 'The Shrine of the Mahamrityunjaya Mantra & Miraculous Dhanvantari Well',
    taglineHindi: 'महामृत्युंजय मंत्र साधना व चमत्कारी धन्वंतरि कूप का पावन धाम',
    history: 'Dedicated to Lord Shiva as the vanquisher of untimely death (Akal Mrityu). Inside the temple complex is a sacred underground ancient well (Dhanvantari Koop). Tradition states that Lord Dhanvantari, the physician of the gods, poured celestial medicinal herbs into this well.',
    historyHindi: 'अकाल मृत्यु के निवारण व आरोग्य के दाता भगवान शिव का प्रसिद्ध मंदिर। परिसर में ऐतिहासिक धन्वंतरि कूप स्थित है जिसके जल में औषधीय गुण माने जाते हैं।',
    mythology: 'Chanting the Mahamrityunjaya Mantra here 108 times is believed to alleviate severe illnesses, mental distress, and negative planetary afflictions.',
    mythologyHindi: 'यहां महामृत्युंजय मंत्र के जाप से असाध्य रोगों व अकाल मृत्यु के भय से मुक्ति मिलती है।',
    architecture: 'Ancient sandstone courtyard temple with deep subterranean sanctum and stone-carved steps leading to the medicinal well.',
    architectureHindi: 'प्राचीन चुनार पत्थर का शांत प्रांगण, भूमिगत गर्भगृह और पाषाण-निर्मित धन्वंतरि कूप।',
    architectureStyle: 'Traditional Kashi Mohalla Shivalaya',
    rituals: [
      'Mahamrityunjaya Japa Anushthan',
      'Drinking holy water from Dhanvantari Koop',
      'Belpatra & Dhatura offering'
    ],
    ritualsHindi: [
      'महामृत्युंजय जप अनुष्ठान',
      'धन्वंतरि कूप का औषधीय जल ग्रहण',
      'बेलपत्र एवं धतूरा अर्पण'
    ],
    darshanTimings: {
      opening: '04:00 AM',
      closing: '11:00 PM',
      breaks: 'None'
    },
    aartiSchedule: [
      {
        id: 'mm-morning',
        name: 'Pratah Aarti',
        hindiName: 'प्रातः आरती',
        time: '05:30 AM',
        description: 'Vedic Rudra path and holy bath.',
        price: 'Free Darshan',
        bookingAvailable: false
      },
      {
        id: 'mm-sandhya',
        name: 'Sandhya Aarti',
        hindiName: 'संध्या आरती',
        time: '07:30 PM',
        description: 'Deepdan and prayer for wellness.',
        price: 'Free Darshan',
        bookingAvailable: false
      }
    ],
    dressCode: {
      men: 'Modest traditional or casual',
      women: 'Saree or suit',
      prohibited: ['Short pants']
    },
    bestTimeToVisit: 'Mondays, Shravan Maas, Mahashivratri',
    bestTimeToVisitHindi: 'सोमवार, सावन मास एवं महाशिवरात्रि',
    festivals: ['Mahashivratri', 'Shravan Somwar'],
    festivalsHindi: ['महाशिवरात्रि', 'सावन सोमवार'],
    crowdStatus: {
      level: 'Low',
      waitTimeMinutes: 10,
      gateNumber: 'Single Entrance Gate',
      lastUpdated: '25 mins ago',
      peakHours: 'Monday mornings',
      queueLengthMeters: 35
    },
    transit: {
      fromVaranasiCantt: '4.5 km (~20 mins)',
      fromBanarasStation: '6.2 km (~28 mins)',
      fromAirport: '23.5 km (~45 mins)',
      fromDashashwamedh: '2.8 km (~15 mins)',
      nearestGhat: 'Trilochana Ghat (800m)',
      nearestParking: 'Maidagin Town Hall',
      localTransportTip: 'Combine with Kaal Bhairav temple; only 500 meters walking distance away.',
      localTransportTipHindi: 'काल भैरव मंदिर से मात्र 500 मीटर की दूरी पर स्थित है।'
    },
    nearbyAttractions: [
      { name: 'Kaal Bhairav Mandir', hindiName: 'काल भैरव मंदिर', distance: '500m', description: 'Kotwal of Kashi', type: 'temple' }
    ],
    officialTrustBooking: {
      trustName: 'Mrityunjay Mahadev Seva Samiti',
      trustNameHindi: 'मृत्युंजय महादेव सेवा समिति',
      sugamDarshanAvailable: false,
      sugamDarshanPrice: 0,
      aartiPassAvailable: false,
      prasadDeliveryAvailable: false,
      helplinePhone: '+91-542-2438900'
    },
    reviews: [
      {
        id: 'rev-mm-1',
        author: 'Dr. Alok Nath',
        city: 'New Delhi',
        rating: 5,
        date: '11 Oct 2026',
        comment: 'Very spiritually charged and deeply calming. Tasting the water from Dhanvantari well felt refreshing.',
        darshanExperience: 'Very peaceful, took less than 15 minutes.',
        helpfulCount: 16
      }
    ]
  },
  {
    id: 'new-vishwanath-bhu',
    slug: 'new-vishwanath-bhu',
    name: 'New Vishwanath Temple (Birla Mandir, VT BHU)',
    hindiName: 'श्री विश्वनाथ मंदिर (बिरला मंदिर - बीएचयू)',
    category: 'modern',
    deity: 'Lord Shiva (Vishwanath)',
    secondaryDeities: ['Goddess Saraswati', 'Lord Ganesha', 'Goddess Parvati', 'Lord Hanuman', 'Nandi'],
    era: '1966 CE (Modern Era)',
    eraHindi: '1966 ई. (आधुनिक काल)',
    builtBy: 'Birla Family & Mahamana Pt. Madan Mohan Malaviya',
    builtByHindi: 'बिरला परिवार एवं महामना पंडित मदन मोहन मालवीय',
    location: 'Banaras Hindu University (BHU) Campus, Lanka',
    locationHindi: 'काशी हिन्दू विश्वविद्यालय (BHU) परिसर, लंका',
    coordinates: { lat: 25.2657, lng: 82.9897 },
    heroImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'
    ],
    popularityScore: 98,
    averageRating: 4.9,
    totalReviews: 5120,
    tagline: 'Asia\'s Tallest Temple Tower Nestled in Serene BHU Greenery',
    taglineHindi: 'एशिया का सबसे ऊंचा मंदिर शिखर, बीएचयू की हरी-भरी हरियाली में स्थित',
    history: 'Envisioned by Mahamana Pandit Madan Mohan Malaviya to create an open temple accessible to all human beings regardless of caste, creed, or nationality. Construction began in 1931 with generous patronage from the industrialist Birla family and concluded in 1966. Its 77-meter (252-foot) high Shikhara stands as the tallest temple tower in Asia.',
    historyHindi: 'महामना मदन मोहन मालवीय जी की परिकल्पना अनुसार 1931 में निर्माण प्रारंभ और 1966 में पूर्ण हुआ। बिरला परिवार के सहयोग से निर्मित इस मंदिर का 77 मीटर ऊंचा शिखर एशिया का सर्वोच्च मंदिर शिखर है। यहां जाति-धर्म के भेद बिना सभी को प्रवेश का अधिकार है।',
    mythology: 'Dedicated to universal education, Vedic philosophy, and Lord Shiva. The interior walls are sculpted with the entire text of the Shrimad Bhagavad Gita and Upanishads on pristine Makrana white marble.',
    mythologyHindi: 'मंदिर की संगमरमरी दीवारों पर संपूर्ण श्रीमद्भगवद्गीता और उपनिषदों के पावन श्लोक उत्कीर्ण हैं।',
    architecture: 'Two-tier colossal marble edifice with a 77m soaring tower, vast manicured botanical gardens, wide reflection courtyards, and grand pillared halls carved in white and pink marble.',
    architectureHindi: 'विशाल दो-मंजिला श्वेत-गुलाबी मकराना संगमरमर स्थापत्य, 77 मीटर ऊंचा भव्य शिखर एवं सुंदर पुष्प वाटिकाएं।',
    architectureStyle: 'Modern Indo-Aryan White Marble Classical',
    rituals: [
      'Daily Bhagavad Gita recitation in the hall',
      'Morning Rudrabhishekam with holy Ganga water',
      'Evening illuminated garden aarti and bhajan satsang'
    ],
    ritualsHindi: [
      'दैनिक गीता एवं उपनिषद श्लोक पाठ',
      'प्रातः काल गंगाजल से रुद्राभिषेक',
      'सायंकालीन जगमगाती संध्या आरती'
    ],
    darshanTimings: {
      opening: '04:00 AM',
      closing: '12:00 PM & 01:00 PM - 09:00 PM',
      breaks: 'Closes 12:00 PM - 01:00 PM for Bhog'
    },
    aartiSchedule: [
      {
        id: 'vt-mangla',
        name: 'Mangla Aarti',
        hindiName: 'मंगला आरती',
        time: '04:45 AM',
        description: 'Morning aarti with flute and conch melody.',
        price: 'Free Entry',
        bookingAvailable: false
      },
      {
        id: 'vt-sandhya',
        name: 'Sandhya Maha Aarti',
        hindiName: 'संध्या महा आरती',
        time: '07:30 PM',
        description: 'Illuminated evening prayer, favorite among students and pilgrims.',
        price: 'Free Entry',
        bookingAvailable: false
      }
    ],
    dressCode: {
      men: 'Respectful attire (shirts, pants, Indian wear)',
      women: 'Respectful attire',
      prohibited: ['Bathing suits', 'Smoking or eating non-veg in campus']
    },
    bestTimeToVisit: 'Evenings (around sunset) and early mornings; Shivratri is celebrated grandly',
    bestTimeToVisitHindi: 'शाम को सूर्यास्त के समय, सुबह की शांति में, एवं शिवरात्रि',
    festivals: ['Mahashivratri', 'Krishna Janmashtami', 'Saraswati Puja'],
    festivalsHindi: ['महाशिवरात्रि', 'श्रीकृष्ण जन्माष्टमी', 'सरस्वती पूजा'],
    crowdStatus: {
      level: 'Low',
      waitTimeMinutes: 15,
      gateNumber: 'Main Campus East Entrance',
      lastUpdated: '5 mins ago',
      peakHours: 'Evenings 05:00 PM - 08:00 PM',
      queueLengthMeters: 50
    },
    transit: {
      fromVaranasiCantt: '9.0 km (~35 mins)',
      fromBanarasStation: '6.5 km (~25 mins)',
      fromAirport: '32.0 km (~1 hr)',
      fromDashashwamedh: '6.8 km (~28 mins)',
      nearestGhat: 'Assi Ghat (3.2 km)',
      nearestParking: 'Ample vehicle parking directly outside the temple garden gate',
      localTransportTip: 'Take an e-rickshaw or bus to Lanka BHU Gate, then e-rickshaw inside BHU campus directly to VT.',
      localTransportTipHindi: 'लंका बीएचयू मुख्य द्वार से परिसर के अंदर विश्वनाथ मंदिर के लिए ई-रिक्शा मिलते हैं।'
    },
    nearbyAttractions: [
      { name: 'Bharat Kala Bhavan Museum (BHU)', hindiName: 'भारत कला भवन संग्रहालय', distance: '800m', description: 'Premier art and archaeological treasure of India', type: 'heritage' },
      { name: 'Sir Sunderlal Hospital & Ayurveda Garden', hindiName: 'आयुर्वेद वाटिका', distance: '1.2 km', description: 'Medicinal herb gardens', type: 'heritage' },
      { name: 'Assi Ghat', hindiName: 'अस्सी घाट', distance: '3.2 km', description: 'Southernmost iconic ghat of Varanasi', type: 'ghat' }
    ],
    officialTrustBooking: {
      trustName: 'BHU Vishwanath Temple Administrative Committee',
      trustNameHindi: 'काशी हिंदू विश्वविद्यालय विश्वनाथ मंदिर प्रबंधन',
      sugamDarshanAvailable: false,
      sugamDarshanPrice: 0,
      aartiPassAvailable: false,
      prasadDeliveryAvailable: false,
      officialWebsite: 'https://bhu.ac.in',
      helplinePhone: '+91-542-2368558'
    },
    reviews: [
      {
        id: 'rev-vt-1',
        author: 'Siddharth Nair',
        city: 'Bengaluru, Karnataka',
        rating: 5,
        date: '28 Oct 2026',
        comment: 'One of the most tranquil temple environments in all of India. The vast gardens, spotless marble, and the verses carved on the walls make it an intellectual and spiritual paradise.',
        darshanExperience: 'Extremely peaceful, plenty of seating, no rush or jostling.',
        helpfulCount: 45
      }
    ]
  },
  {
    id: 'bharat-mata',
    slug: 'bharat-mata',
    name: 'Bharat Mata Mandir',
    hindiName: 'भारत माता मंदिर',
    category: 'modern',
    deity: 'Mother India (Bharat Mata)',
    secondaryDeities: ['Undivided India Relief Map in Pure Marble'],
    era: '1936 CE (Inaugurated by Mahatma Gandhi)',
    eraHindi: '1936 ई. (महात्मा गांधी द्वारा लोकार्पित)',
    builtBy: 'Babu Shiv Prasad Gupta & Rashtraratna Shri Durga Prasad Khatri',
    builtByHindi: 'बाबू शिव प्रसाद गुप्त एवं राष्ट्ररत्न दुर्गा प्रसाद खत्री',
    location: 'Mahatma Gandhi Kashi Vidyapith Campus, Vidyapeeth Road, Cantt',
    locationHindi: 'महात्मा गांधी काशी विद्यापीठ परिसर, कैंट के निकट',
    coordinates: { lat: 25.3176, lng: 82.9893 },
    heroImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'
    ],
    popularityScore: 89,
    averageRating: 4.7,
    totalReviews: 1830,
    tagline: 'Unique Patriotic Temple Dedicated to Mother India with Topographical Marble Map',
    taglineHindi: 'अखंड भारत के मकराना संगमरमर के भौगोलिक मानचित्र का अद्वितीय मंदिर',
    history: 'A one-of-a-kind national monument inaugurated by Mahatma Gandhi on 25 October 1936 during the Indian freedom movement. Instead of conventional religious idols, the temple enshrines a breathtaking three-dimensional topographical map of undivided India carved out of 762 meticulously matched blocks of Makrana marble, showing mountains, rivers, and plateaus to precise scale.',
    historyHindi: '25 अक्टूबर 1936 को राष्ट्रपिता महात्मा गांधी ने इसका उद्घाटन किया था। यहां किसी देवी-देवता की मूर्ति के स्थान पर मकराना संगमरमर के 762 शिलाखंडों पर उकेरा गया अखंड भारत का त्रि-आयामी भौगोलिक मानचित्र प्रतिष्ठित है।',
    mythology: 'Conceived as a sacred sanctum of patriotic unity, honoring the motherland that sustains all children irrespective of religious identity. On Republic Day and Independence Day, the marble map is filled with water in the oceans and flower petals on the land.',
    mythologyHindi: 'राष्ट्रभक्ति एवं एकता का प्रतीक धाम। 15 अगस्त और 26 जनवरी को महासागरों में जल भरकर और पर्वतों पर पुष्प अर्पित कर विशेष वंदन किया जाता है।',
    architecture: 'Classical sandstone building with five arched entryways and an open observation gallery surrounding the sunk marble relief map.',
    architectureHindi: 'पाषाण मेहराबदार संरचना जिसके केंद्र में नीचे धंसा हुआ संगमरमरी मानचित्र और चारों ओर परिक्रमा वीथिका है।',
    architectureStyle: 'Modern Nationalist Stone Architecture',
    rituals: [
      'Singing of Vande Mataram and national anthem',
      'Observation of Himalayan elevations and river trajectories',
      'Independence Day & Republic Day water filling ceremonies'
    ],
    ritualsHindi: [
      'वंदे मातरम् एवं राष्ट्रगान गायन',
      'अखंड भारत के भूगोल का अध्ययन व दर्शन',
      'राष्ट्रीय पर्वों पर विशेष पुष्पार्चन'
    ],
    darshanTimings: {
      opening: '07:00 AM',
      closing: '05:30 PM',
      breaks: 'None'
    },
    aartiSchedule: [
      {
        id: 'bm-prayer',
        name: 'Vande Mataram Rashtriya Vandana',
        hindiName: 'वंदे मातरम् राष्ट्र वंदना',
        time: '08:00 AM',
        description: 'Morning patriotic invocation and floral tribute.',
        price: 'Free Entry',
        bookingAvailable: false
      }
    ],
    dressCode: {
      men: 'Casual or formal clothing',
      women: 'Casual or formal clothing',
      prohibited: ['Shoes inside the map hall (shoe stand available outside)']
    },
    bestTimeToVisit: 'Morning to late afternoon; especially vibrant on August 15 and January 26',
    bestTimeToVisitHindi: 'सुबह से दोपहर तक; 15 अगस्त व 26 जनवरी को विशेष रूप से दर्शनीय',
    festivals: ['Independence Day', 'Republic Day', 'Gandhi Jayanti'],
    festivalsHindi: ['स्वतंत्रता दिवस', 'गणतंत्र दिवस', 'गांधी जयंती'],
    crowdStatus: {
      level: 'Low',
      waitTimeMinutes: 5,
      gateNumber: 'Main Vidyapith Road Gate',
      lastUpdated: '30 mins ago',
      peakHours: '11:00 AM - 03:00 PM',
      queueLengthMeters: 10
    },
    transit: {
      fromVaranasiCantt: '1.5 km (~7 mins by auto or walk)',
      fromBanarasStation: '3.8 km (~15 mins)',
      fromAirport: '22.0 km (~40 mins)',
      fromDashashwamedh: '3.6 km (~18 mins)',
      nearestGhat: 'Harishchandra Ghat (3.5 km)',
      nearestParking: 'Vidyapeeth premises visitor parking',
      localTransportTip: 'Very close to Varanasi Cantt Railway station; perfect first stop when arriving in Varanasi.',
      localTransportTipHindi: 'वाराणसी कैंट रेलवे स्टेशन से मात्र 1.5 किमी; वाराणसी आगमन पर सबसे पहले दर्शन कर सकते हैं।'
    },
    nearbyAttractions: [
      { name: 'Varanasi Junction (Cantt) Heritage Building', hindiName: 'वाराणसी कैंट रेलवे स्टेशन', distance: '1.5 km', description: 'Major transit hub', type: 'heritage' },
      { name: 'Sampurnanand Sanskrit University', hindiName: 'संपूर्णानंद संस्कृत विश्वविद्यालय', distance: '2.0 km', description: 'Gothic style historic Sanskrit library', type: 'heritage' }
    ],
    officialTrustBooking: {
      trustName: 'Kashi Vidyapeeth Bharat Mata Memorial Trust',
      trustNameHindi: 'काशी विद्यापीठ भारत माता स्मारक न्यास',
      sugamDarshanAvailable: false,
      sugamDarshanPrice: 0,
      aartiPassAvailable: false,
      prasadDeliveryAvailable: false,
      helplinePhone: '+91-542-2226194'
    },
    reviews: [
      {
        id: 'rev-bm-1',
        author: 'Major General (Retd.) K. K. Verma',
        city: 'Chandigarh',
        rating: 5,
        date: '15 Oct 2026',
        comment: 'Seeing the precise scale of Mount Everest, K2, the Indus, Ganga, and Brahmaputra carved in marble gives immense pride and goosebumps.',
        darshanExperience: 'Pleasant and uncrowded. Knowledgeable caretakers explain every plateau and mountain range.',
        helpfulCount: 28
      }
    ]
  },
  {
    id: 'tulsi-manas',
    slug: 'tulsi-manas',
    name: 'Tulsi Manas Mandir',
    hindiName: 'तुलसी मानस मंदिर',
    category: 'modern',
    deity: 'Lord Rama, Maa Sita, Lakshmana, Lord Hanuman',
    secondaryDeities: ['Goswami Tulsidas'],
    era: '1964 CE (Modern Era)',
    eraHindi: '1964 ई. (आधुनिक काल)',
    builtBy: 'Thakur Das Sureka Family of Howrah',
    builtByHindi: 'ठाकुर दास सुरेका परिवार (हावड़ा/कोलकाता)',
    location: 'Sankat Mochan Road, Near Durga Kund, Durgakund',
    locationHindi: 'संकट मोचन रोड, दुर्गा कुंड के निकट',
    coordinates: { lat: 25.2849, lng: 82.9985 },
    heroImage: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80'
    ],
    popularityScore: 93,
    averageRating: 4.8,
    totalReviews: 2980,
    tagline: 'Magnificent White Marble Shrine Where Ramcharitmanas Was Written',
    taglineHindi: 'मकराना संगमरमर का पावन धाम जहां रचा गया था श्री रामचरितमानस',
    history: 'Built in 1964 on the very historical spot where Goswami Tulsidas sat in meditation and composed the epic Ramcharitmanas in the Awadhi language. Built of gleaming white Makrana marble, the temple has the entire text of the Ramcharitmanas engraved on its walls along with lively mechanical puppetry portraying scenes from the Ramayana.',
    historyHindi: '1964 में सुरेका परिवार द्वारा निर्मित। इसी पावन स्थल पर तुलसीदास जी ने महाकाव्य रामचरितमानस की रचना की थी। मंदिर की संगमरमरी दीवारों पर सम्पूर्ण मानस की चौपाइयां और दोहे उत्कीर्ण हैं।',
    mythology: 'Before Tulsidas, the Ramayana was written only in Sanskrit by Valmiki, inaccessible to common people. In Kashi, with Lord Shiva and Hanuman\'s inspiration, Tulsidas rendered it into the folk dialect, bringing divine devotion to every household.',
    mythologyHindi: 'लोक भाषा अवधी में जन-जन तक प्रभु राम की कथा पहुंचाने वाले संत तुलसीदास की स्मृति में यह मंदिर ज्ञान व भक्ति का संगम है।',
    architecture: 'Two-story pristine white marble temple set in landscaped gardens. The upper floor contains mechanical animated dioramas of the Ramayana and Mahabharata.',
    architectureHindi: 'दो मंजिला धवल संगमरमरी स्थापत्य, सुंदर हरियाली वाटिका और ऊपरी तल पर रामायण प्रसंगों की यांत्रिक चलंत झांकियां।',
    architectureStyle: 'Modern White Marble with Engraved Epics',
    rituals: [
      'Continuous Akhand Ramayan path recitations',
      'Evening illuminated Ram Aarti',
      'Mechanical animated Ramayana puppet shows for children and families'
    ],
    ritualsHindi: [
      'अखंड रामायण पाठ',
      'सायंकालीन श्री राम आरती',
      'रामायण प्रसंगों की सचल यांत्रिक झांकियों का प्रदर्शन'
    ],
    darshanTimings: {
      opening: '05:30 AM',
      closing: '12:00 PM & 03:30 PM - 09:00 PM',
      breaks: 'Closed 12:00 PM to 03:30 PM'
    },
    aartiSchedule: [
      {
        id: 'tm-pratah',
        name: 'Pratah Aarti',
        hindiName: 'प्रातः आरती',
        time: '06:00 AM',
        description: 'Morning prayer and musical stuti.',
        price: 'Free Entry',
        bookingAvailable: false
      },
      {
        id: 'tm-sandhya',
        name: 'Ram Sandhya Aarti',
        hindiName: 'राम संध्या आरती',
        time: '07:30 PM',
        description: 'Melodious aarti with traditional bhajans.',
        price: 'Free Entry',
        bookingAvailable: false
      }
    ],
    dressCode: {
      men: 'Modest shirts and trousers or traditional wear',
      women: 'Modest Indian wear',
      prohibited: ['Shorts']
    },
    bestTimeToVisit: 'Ram Navami, Diwali, and cool autumn evenings',
    bestTimeToVisitHindi: 'राम नवमी, दीपावली एवं शरद ऋतु की शामें',
    festivals: ['Ram Navami', 'Tulsi Jayanti', 'Diwali'],
    festivalsHindi: ['राम नवमी', 'तुलसी जयंती', 'दीपावली'],
    crowdStatus: {
      level: 'Low',
      waitTimeMinutes: 10,
      gateNumber: 'Main Front Garden Gate',
      lastUpdated: '14 mins ago',
      peakHours: '05:30 PM - 07:30 PM',
      queueLengthMeters: 30
    },
    transit: {
      fromVaranasiCantt: '6.0 km (~25 mins)',
      fromBanarasStation: '4.5 km (~18 mins)',
      fromAirport: '27.8 km (~50 mins)',
      fromDashashwamedh: '3.1 km (~15 mins)',
      nearestGhat: 'Assi Ghat (1.3 km)',
      nearestParking: 'Temple front parking facility',
      localTransportTip: 'Located directly between Durga Kund and Sankat Mochan; easily visited together on foot.',
      localTransportTipHindi: 'दुर्गा कुंड और संकट मोचन के ठीक मध्य में स्थित, तीनों मंदिरों का एक साथ पैदल भ्रमण सुगम है।'
    },
    nearbyAttractions: [
      { name: 'Durga Kund Mandir', hindiName: 'दुर्गा कुंड मंदिर', distance: '250m', description: 'Red stone Shakti temple', type: 'temple' },
      { name: 'Sankat Mochan Temple', hindiName: 'संकट मोचन मंदिर', distance: '800m', description: 'Ancient Hanuman temple', type: 'temple' },
      { name: 'Tridev Mandir', hindiName: 'त्रिदेव मंदिर', distance: '150m', description: 'Modern Rajasthani marble shrine', type: 'temple' }
    ],
    officialTrustBooking: {
      trustName: 'Tulsi Manas Mandir Trust',
      trustNameHindi: 'तुलसी मानस मंदिर न्यास',
      sugamDarshanAvailable: false,
      sugamDarshanPrice: 0,
      aartiPassAvailable: false,
      prasadDeliveryAvailable: false,
      helplinePhone: '+91-542-2310111'
    },
    reviews: [
      {
        id: 'rev-tm-1',
        author: 'Pooja Chawla',
        city: 'Indore, MP',
        rating: 5,
        date: '22 Oct 2026',
        comment: 'Reading the verses of Ramcharitmanas inscribed on pure white marble while walking along the peaceful corridors is spiritually uplifting. Children loved the moving Ramayana puppets upstairs.',
        darshanExperience: 'Calm, well-maintained gardens, easy parking.',
        helpfulCount: 23
      }
    ]
  },
  {
    id: 'tridev-mandir',
    slug: 'tridev-mandir',
    name: 'Tridev Mandir',
    hindiName: 'त्रिदेव मंदिर',
    category: 'modern',
    deity: 'Salasar Hanuman, Rani Sati Dadi, Khatu Shyam Ji',
    secondaryDeities: ['Radha Krishna', 'Lord Shiva'],
    era: 'Late 20th Century (Modern Era)',
    eraHindi: '20वीं शताब्दी के अंत में (आधुनिक काल)',
    builtBy: 'Rajasthani Marwari Devotees & Charitable Trust',
    builtByHindi: 'राजस्थानी मारवाड़ी समाज एवं धर्मार्थ न्यास',
    location: 'Near Tulsi Manas Mandir, Durgakund Road',
    locationHindi: 'तुलसी मानस मंदिर के समीप, दुर्गाकुंड रोड',
    coordinates: { lat: 25.2842, lng: 82.9982 },
    heroImage: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80'
    ],
    popularityScore: 88,
    averageRating: 4.8,
    totalReviews: 1670,
    tagline: 'Ornate Rajasthani Marble Temple Honoring Three Revered Deities',
    taglineHindi: 'सालासर हनुमान, राणी सती दादी एवं खाटू श्याम जी का भव्य राजस्थानी संगमरमरी धाम',
    history: 'A striking modern temple built with intricate Rajasthani marble craftsmanship. It is uniquely dedicated to three prominent divine figures revered in western and northern India: Salasar Balaji (Hanuman with beard and mustache), Khatu Shyam Ji (Barbareek), and Maa Rani Sati Dadi.',
    historyHindi: 'विशाल संगमरमरी नक्काशी से बना आधुनिक मंदिर जिसमें सालासर बालाजी, खाटू श्याम जी और राणी सती दादी की भव्य प्रतिमाएं प्रतिष्ठित हैं।',
    mythology: 'Pilgrims seeking relief from complex worldly problems, family welfare, and business blessings visit this triad shrine. The atmosphere is filled with round-the-clock bhajan and kirtan.',
    mythologyHindi: 'व्यापार वृद्धि, पारिवारिक मंगल और मनोकामना पूर्ति हेतु भक्त यहां शीश नवाते हैं।',
    architecture: 'Exquisite white Makrana and pink Italian marble with delicate jali carvings, glass mosaics, and glittering chandeliers.',
    architectureHindi: 'मकराना श्वेत संगमरमर, बारीक जालीदार नक्काशी, कांच का मीनाकारी कार्य और भव्य झूमर।',
    architectureStyle: 'Ornate Rajasthani Marble Style',
    rituals: [
      'Khatu Shyam Ji Phalgun Nishan Yatra',
      'Salasar Balaji Churma Bhog offering',
      'Daily devotional kirtan sessions'
    ],
    ritualsHindi: [
      'खाटू श्याम जी फाल्गुन निशान यात्रा',
      'सालासर बालाजी को चूरमा भोग',
      'दैनिक भक्तिमय संकीर्तन'
    ],
    darshanTimings: {
      opening: '06:00 AM',
      closing: '12:00 PM & 04:00 PM - 10:00 PM',
      breaks: 'Closed 12:00 PM to 04:00 PM'
    },
    aartiSchedule: [
      {
        id: 'td-morning',
        name: 'Pratah Mangal Aarti',
        hindiName: 'प्रातः मंगल आरती',
        time: '06:30 AM',
        description: 'Morning aarti to all three deities.',
        price: 'Free Entry',
        bookingAvailable: false
      },
      {
        id: 'td-evening',
        name: 'Sandhya Maha Aarti',
        hindiName: 'संध्या महा आरती',
        time: '08:00 PM',
        description: 'Vibrant evening prayer with nagada and dhol.',
        price: 'Free Entry',
        bookingAvailable: false
      }
    ],
    dressCode: {
      men: 'Clean casual or traditional',
      women: 'Saree or suit',
      prohibited: ['Short dresses']
    },
    bestTimeToVisit: 'Ekadashi, Tuesdays, and Phalguna month',
    bestTimeToVisitHindi: 'एकादशी, मंगलवार एवं फाल्गुन मास',
    festivals: ['Phalgun Mela', 'Hanuman Jayanti', 'Janmashtami'],
    festivalsHindi: ['फाल्गुन मेला', 'हनुमान जयंती', 'जन्माष्टमी'],
    crowdStatus: {
      level: 'Low',
      waitTimeMinutes: 10,
      gateNumber: 'Main Entrance Portal',
      lastUpdated: '10 mins ago',
      peakHours: 'Ekadashi evenings',
      queueLengthMeters: 25
    },
    transit: {
      fromVaranasiCantt: '6.1 km (~25 mins)',
      fromBanarasStation: '4.6 km (~19 mins)',
      fromAirport: '27.9 km (~50 mins)',
      fromDashashwamedh: '3.2 km (~16 mins)',
      nearestGhat: 'Assi Ghat (1.4 km)',
      nearestParking: 'Street parking & Tulsi Manas ground',
      localTransportTip: 'Just 100 meters walk from Tulsi Manas Mandir.',
      localTransportTipHindi: 'तुलसी मानस मंदिर से मात्र 100 मीटर की दूरी पर स्थित।'
    },
    nearbyAttractions: [
      { name: 'Tulsi Manas Mandir', hindiName: 'तुलसी मानस मंदिर', distance: '100m', description: 'Marble Ram temple', type: 'temple' },
      { name: 'Durga Kund Mandir', hindiName: 'दुर्गा कुंड मंदिर', distance: '300m', description: 'Historic Shakti temple', type: 'temple' }
    ],
    officialTrustBooking: {
      trustName: 'Tridev Mandir Charitable Trust',
      trustNameHindi: 'त्रिदेव मंदिर चैरिटेबल ट्रस्ट',
      sugamDarshanAvailable: false,
      sugamDarshanPrice: 0,
      aartiPassAvailable: false,
      prasadDeliveryAvailable: false,
      helplinePhone: '+91-542-2314567'
    },
    reviews: [
      {
        id: 'rev-td-1',
        author: 'Gaurav Khandelwal',
        city: 'Jaipur, Rajasthan',
        rating: 5,
        date: '25 Oct 2026',
        comment: 'Superbly maintained and spotless marble floors. Felt like being in Rajasthan while in the heart of Kashi.',
        darshanExperience: 'Easy and quick, wonderful darshan.',
        helpfulCount: 17
      }
    ]
  },
  {
    id: 'kedareswar',
    slug: 'kedareswar',
    name: 'Kedareshwar Temple (Kedar Ghat)',
    hindiName: 'श्री केदारेश्वर मंदिर (केदार घाट)',
    category: 'ancient',
    deity: 'Lord Shiva as Kedareshwar (Swayambhu Lingam)',
    secondaryDeities: ['Gauri Kund holy well', 'Lord Ganesha', 'Nandi'],
    era: 'Ancient (Pre-dates 12th Century CE)',
    eraHindi: 'अति प्राचीन (12वीं सदी से पूर्व)',
    builtBy: 'Ancient Rajas & Vijayanagara Era Patrons',
    builtByHindi: 'प्राचीन राजा एवं विजयनगर साम्राज्य कालीन विस्तार',
    location: 'Kedar Ghat, southern riverfront of Varanasi',
    locationHindi: 'केदार घाट, दक्षिणी गंगा तट',
    coordinates: { lat: 25.2974, lng: 83.0076 },
    heroImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80'
    ],
    popularityScore: 90,
    averageRating: 4.8,
    totalReviews: 1910,
    tagline: 'The Southern Kedarnath on the Sacred Steps of Kedar Ghat',
    taglineHindi: 'काशी के पावन केदार घाट पर स्थित साक्षात् केदारनाथ स्वरूप',
    history: 'Ancient texts proclaim that before Kashi Vishwanath gained supremacy, Kedareshwar was the principal deity of the southern zone (Kedar Khanda) of Kashi. It is believed that taking a holy dip at Kedar Ghat and worshipping Kedareshwar yields the identical spiritual fruit as trekking to Kedarnath in the Himalayas.',
    historyHindi: 'काशी खंड के अनुसार केदारेश्वर मंदिर दक्षिण काशी का मुख्य ज्योतिर्लिंग माना जाता है। मान्यता है कि केदार घाट पर स्नान कर यहां पूजन करने से हिमालय के केदारनाथ धाम के समान पुण्य फल प्राप्त होता है।',
    mythology: 'Scriptures tell of a pure devotee named Vashishta who regularly visited Kedarnath. In his old age, unable to make the mountain journey, Lord Shiva manifested here directly from a dish of khichdi (rice-lentils) as a Swayambhu Lingam.',
    mythologyHindi: 'भगवान शिव अपने अनन्य वृद्ध भक्त की भक्ति से प्रसन्न होकर खिचड़ी के पात्र से स्वयं प्रकट हुए थे।',
    architecture: 'Robust ancient sandstone temple overlooking the river steps, with red-and-white striped facade characteristic of South Indian Shaivite heritage.',
    architectureHindi: 'गंगा तट की सीढ़ियों पर स्थित लाल और सफेद धारियों वाला प्राचीन पाषाण मंदिर जो दक्षिण भारतीय प्रभाव दर्शाता है।',
    architectureStyle: 'South Indian & Nagara Confluence',
    rituals: [
      'Snan (holy dip) at Kedar Ghat followed by Jalabhishek',
      'Khichdi offering to Mahadev',
      'Gauri Kund Jal snan for inner purity'
    ],
    ritualsHindi: [
      'केदार घाट पर गंगा स्नान उपरांत जलाभिषेक',
      'महादेव को खिचड़ी का भोग',
      'गौरी कुंड के पवित्र जल का आचमन'
    ],
    darshanTimings: {
      opening: '04:00 AM',
      closing: '10:30 PM',
      breaks: 'None'
    },
    aartiSchedule: [
      {
        id: 'kd-morning',
        name: 'Pratah Bhasma Aarti',
        hindiName: 'प्रातः भस्म आरती',
        time: '04:30 AM',
        description: 'Morning prayer with sacred ash.',
        price: 'Free Entry',
        bookingAvailable: false
      },
      {
        id: 'kd-sandhya',
        name: 'Sandhya Aarti',
        hindiName: 'संध्या महा आरती',
        time: '07:30 PM',
        description: 'Evening lamp offering echoing across the Ganga river.',
        price: 'Free Entry',
        bookingAvailable: false
      }
    ],
    dressCode: {
      men: 'Traditional wear or clean clothes',
      women: 'Saree or traditional wear',
      prohibited: ['Leather inside sanctum']
    },
    bestTimeToVisit: 'Shravan Maas, Mahashivratri, and early mornings at sunrise',
    bestTimeToVisitHindi: 'सावन मास, महाशिवरात्रि एवं सूर्योदय का पावन समय',
    festivals: ['Mahashivratri', 'Kedar Gauri Vrat', 'Shravan Somwar'],
    festivalsHindi: ['महाशिवरात्रि', 'केदार गौरी व्रत', 'सावन सोमवार'],
    crowdStatus: {
      level: 'Low',
      waitTimeMinutes: 15,
      gateNumber: 'Ghat Steps Riverfront Portal',
      lastUpdated: '16 mins ago',
      peakHours: 'Early morning 06:00 AM - 08:30 AM',
      queueLengthMeters: 45
    },
    transit: {
      fromVaranasiCantt: '5.5 km (~23 mins)',
      fromBanarasStation: '4.8 km (~20 mins)',
      fromAirport: '26.0 km (~50 mins)',
      fromDashashwamedh: '1.2 km (12 mins walk along river ghats or boat ride)',
      nearestGhat: 'Kedar Ghat (Directly situated on the ghat steps)',
      nearestParking: 'Sonarpura Crossing Parking',
      localTransportTip: 'Take auto to Sonarpura, then walk 300 meters towards Kedar Ghat steps.',
      localTransportTipHindi: 'सोनारपुरा तक ऑटो लें, वहां से केदार घाट की ओर 300 मीटर पैदल चलें।'
    },
    nearbyAttractions: [
      { name: 'Kedar Ghat Riverfront', hindiName: 'केदार घाट', distance: '0m', description: 'Scenic red and white ghat steps', type: 'ghat' },
      { name: 'Harishchandra Ghat', hindiName: 'हरिश्चंद्र घाट', distance: '400m', description: 'Sacred liberation cremation ghat', type: 'ghat' },
      { name: 'Dashashwamedh Ghat', hindiName: 'दशाश्वमेध घाट', distance: '1.2 km', description: 'Main aarti ghat', type: 'ghat' }
    ],
    officialTrustBooking: {
      trustName: 'Sri Kedareshwar Mandir Seva Trust',
      trustNameHindi: 'श्री केदारेश्वर मंदिर सेवा ट्रस्ट',
      sugamDarshanAvailable: false,
      sugamDarshanPrice: 0,
      aartiPassAvailable: false,
      prasadDeliveryAvailable: false,
      helplinePhone: '+91-542-2451234'
    },
    reviews: [
      {
        id: 'rev-kd-1',
        author: 'S. Ramachandran',
        city: 'Madurai, Tamil Nadu',
        rating: 5,
        date: '17 Oct 2026',
        comment: 'A true Kedarnath experience in Kashi. Taking a dip at Kedar Ghat and immediately entering the temple to touch the Swayambhu lingam brings tears of devotion.',
        darshanExperience: 'Serene sunrise darshan; no commercial rush.',
        helpfulCount: 34
      }
    ]
  },
  {
    id: 'tilbhandeshwar',
    slug: 'tilbhandeshwar',
    name: 'Tilbhandeshwar Mahadev Mandir',
    hindiName: 'तिलभांडेश्वर महादेव मंदिर',
    category: 'ancient',
    deity: 'Lord Shiva (Swayambhu Mahalingam)',
    secondaryDeities: ['Nandi', 'Maa Parvati', 'Lord Kartikeya'],
    era: 'Vedic Antiquity (Mentioned in Kashi Khanda)',
    eraHindi: 'वैदिक पुरातनता (काशी खंड में उल्लेख)',
    builtBy: 'Ancient Swayambhu Pilgrimage Site',
    builtByHindi: 'प्राचीन स्वयंभू तीर्थ',
    location: 'Pandey Haveli, Bhelupur, Varanasi',
    locationHindi: 'पांडेय हवेली, भेलूपुर, वाराणसी',
    coordinates: { lat: 25.3025, lng: 83.0019 },
    heroImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80'
    ],
    popularityScore: 85,
    averageRating: 4.7,
    totalReviews: 1120,
    tagline: 'The Swayambhu Lingam That Miraculously Grows Every Makar Sankranti',
    taglineHindi: 'स्वयंभू महालिंग जो प्रतिवर्ष मकर संक्रांति पर तिल के बराबर बढ़ता है',
    history: 'One of the oldest and most enigmatic Shiva temples in Kashi. The massive Swayambhu Shivalinga is legendary because it grows naturally every year by the size of a sesame seed (Til) on the auspicious day of Makar Sankranti. The lingam is surrounded by an expansive brass Jalhari.',
    historyHindi: 'काशी के सबसे प्राचीन मंदिरों में से एक। मान्यता है कि मकर संक्रांति पर यह विशाल शिवलिंग तिल (तिल के दाने) के बराबर बढ़ता है, इसी कारण इसका नाम तिलभांडेश्वर पड़ा।',
    mythology: 'Lord Shiva appeared here self-manifested to bless a humble farmer who lived solely by harvesting sesame seeds. Worship here dissolves all sins accumulated over lifetimes.',
    mythologyHindi: 'शिवजी के अनन्य तिल-उत्पादक भक्त की भक्ति पर प्रसन्न होकर महादेव यहां स्वयं प्रकट हुए थे।',
    architecture: 'Ancient red stone sanctuary with a courtyard housing colossal peepal and banyan trees providing serene shadow.',
    architectureHindi: 'प्राचीन लाल पाषाण गर्भगृह, विशाल पीपल व वटवृक्षों से आच्छादित शांत प्रांगण।',
    architectureStyle: 'Ancient Nagara Courtyard',
    rituals: [
      'Offering of Black Sesame seeds (Kala Til) and Ganga water',
      'Makar Sankranti Mahabhishekam',
      'Maha Rudrabhisheka'
    ],
    ritualsHindi: [
      'काले तिल एवं गंगाजल से अभिषेक',
      'मकर संक्रांति पर विशेष महाभिषेक',
      'सावन में रुद्राभिषेक'
    ],
    darshanTimings: {
      opening: '04:30 AM',
      closing: '10:30 PM',
      breaks: 'None'
    },
    aartiSchedule: [
      {
        id: 'tb-morning',
        name: 'Pratah Aarti',
        hindiName: 'प्रातः आरती',
        time: '05:00 AM',
        description: 'Morning ritual with incense and bells.',
        price: 'Free Entry',
        bookingAvailable: false
      },
      {
        id: 'tb-sandhya',
        name: 'Sandhya Aarti',
        hindiName: 'संध्या आरती',
        time: '07:30 PM',
        description: 'Evening deeparadhana.',
        price: 'Free Entry',
        bookingAvailable: false
      }
    ],
    dressCode: {
      men: 'Modest wear, dhoti or casual',
      women: 'Saree or suit',
      prohibited: ['Indecent dress']
    },
    bestTimeToVisit: 'Makar Sankranti (Mid-January) & Shravan Maas',
    bestTimeToVisitHindi: 'मकर संक्रांति (14-15 जनवरी) एवं श्रावण मास',
    festivals: ['Makar Sankranti', 'Mahashivratri'],
    festivalsHindi: ['मकर संक्रांति', 'महाशिवरात्रि'],
    crowdStatus: {
      level: 'Low',
      waitTimeMinutes: 10,
      gateNumber: 'Pandey Haveli Gate',
      lastUpdated: '20 mins ago',
      peakHours: 'Makar Sankranti day and Mondays',
      queueLengthMeters: 30
    },
    transit: {
      fromVaranasiCantt: '4.9 km (~20 mins)',
      fromBanarasStation: '4.2 km (~18 mins)',
      fromAirport: '25.5 km (~48 mins)',
      fromDashashwamedh: '1.5 km (~10 mins)',
      nearestGhat: 'Pandey Ghat & Kedar Ghat (600m)',
      nearestParking: 'Bhelupur Thana parking area',
      localTransportTip: 'Auto to Bhelupur or Sonarpura, then a 5-minute walk down Pandey Haveli street.',
      localTransportTipHindi: 'भेलूपुर या सोनारपुरा से 5 मिनट की पैदल दूरी पर।'
    },
    nearbyAttractions: [
      { name: 'Kedareshwar Temple', hindiName: 'केदारेश्वर मंदिर', distance: '600m', description: 'Ancient ghat shivalaya', type: 'temple' }
    ],
    officialTrustBooking: {
      trustName: 'Tilbhandeshwar Mahadev Dharmik Nyas',
      trustNameHindi: 'तिलभांडेश्वर महादेव धार्मिक न्यास',
      sugamDarshanAvailable: false,
      sugamDarshanPrice: 0,
      aartiPassAvailable: false,
      prasadDeliveryAvailable: false,
      helplinePhone: '+91-542-2458989'
    },
    reviews: [
      {
        id: 'rev-tb-1',
        author: 'Ashok Pandey',
        city: 'Varanasi',
        rating: 5,
        date: '12 Oct 2026',
        comment: 'One of the quietest hidden gems of Kashi. The Shivalinga is gigantic and commands awe. A must visit for true devotees.',
        darshanExperience: 'Zero waiting time, touching the sacred lingam directly felt divine.',
        helpfulCount: 21
      }
    ]
  },
  {
    id: 'nepali-mandir',
    slug: 'nepali-mandir',
    name: 'Nepali Mandir (Kathwala Temple)',
    hindiName: 'नेपाली मंदिर (काठवाला मंदिर)',
    category: 'ancient',
    deity: 'Lord Shiva as Pashupatinath',
    secondaryDeities: ['Nandi in Brass', 'Maa Parvati'],
    era: '1843 CE (19th Century)',
    eraHindi: '1843 ई. (19वीं शताब्दी)',
    builtBy: 'King Rana Bahadur Shah of Nepal',
    builtByHindi: 'नेपाल नरेश राणा बहादुर शाह',
    location: 'Lalita Ghat, riverfront near Kashi Vishwanath Corridor',
    locationHindi: 'ललिता घाट, गंगा तट (काशी विश्वनाथ कॉरिडोर के समीप)',
    coordinates: { lat: 25.3105, lng: 83.0132 },
    heroImage: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80'
    ],
    popularityScore: 91,
    averageRating: 4.8,
    totalReviews: 2100,
    tagline: 'Exquisite Pagoda Carved of Himalayan Timber Overlooking the Sacred River',
    taglineHindi: 'हिमालयी काष्ठ कला एवं पगोडा शैली का अद्भुत संगम, गंगा तट पर स्थित',
    history: 'Built in 1843 by King Rana Bahadur Shah of Nepal in exile and completed by his son King Girvan Yuddha Bikram Shah. It is an exact replica of the famed Pashupatinath Temple in Kathmandu. Crafted entirely of termite-resistant Himalayan Sal wood and terracotta brick, it is also known as "Kathwala Mandir" (Wooden Temple).',
    historyHindi: 'नेपाल नरेश राणा बहादुर शाह द्वारा 1843 में प्रारंभ और उनके पुत्र द्वारा पूर्ण। यह काठमांडू के पशुपतिनाथ मंदिर की अनुकृति है। हिमालय से लाई गई साल की लकड़ियों की नक्काशी के कारण इसे "काठवाला मंदिर" कहा जाता है।',
    mythology: 'Brings the divine grace of Nepal’s sacred Pashupatinath directly to the riverfront of Kashi. It represents the timeless cultural and spiritual communion between India and Nepal.',
    mythologyHindi: 'भारत और नेपाल के आध्यात्मिक संबंधों का प्रतीक, पशुपतिनाथ महादेव का साक्षात वास।',
    architecture: 'Two-tiered traditional Nepali pagoda architecture with carved timber struts displaying mythological figures, sloping terracotta tiled roofs, and fine filigree woodwork.',
    architectureHindi: 'दो मंजिला नेपाली पगोडा शैली, बारीक काष्ठ नक्काशी और ढलवां लाल खपरैल छतें।',
    architectureStyle: 'Kathmandu Pagoda & Himalayan Woodcraft',
    rituals: [
      'Pashupatinath Vedic Puja',
      'Rudrabhishekam with holy Ganga water',
      'Evening river breeze meditation'
    ],
    ritualsHindi: [
      'पशुपतिनाथ वैदिक पूजा',
      'गंगाजल से रुद्राभिषेक',
      'गंगा तट पर सायंकालीन ध्यान'
    ],
    darshanTimings: {
      opening: '04:00 AM',
      closing: '12:00 PM & 02:00 PM - 09:00 PM',
      breaks: 'Closed 12:00 PM to 02:00 PM'
    },
    aartiSchedule: [
      {
        id: 'nm-morning',
        name: 'Pratah Aarti',
        hindiName: 'प्रातः आरती',
        time: '05:30 AM',
        description: 'Morning invocation as the sun rises over Ganga.',
        price: 'Free Entry',
        bookingAvailable: false
      },
      {
        id: 'nm-sandhya',
        name: 'Sandhya Aarti',
        hindiName: 'संध्या आरती',
        time: '07:00 PM',
        description: 'Atmospheric evening aarti overlooking Lalita Ghat.',
        price: 'Free Entry',
        bookingAvailable: false
      }
    ],
    dressCode: {
      men: 'Respectful attire',
      women: 'Respectful attire',
      prohibited: ['Touching the delicate wood carvings']
    },
    bestTimeToVisit: 'Sunrise and sunset times; Mahashivratri',
    bestTimeToVisitHindi: 'सूर्योदय व सूर्यास्त के समय, महाशिवरात्रि',
    festivals: ['Mahashivratri', 'Teej', 'Buddha Purnima'],
    festivalsHindi: ['महाशिवरात्रि', 'हरितालिका तीज', 'बुद्ध पूर्णिमा'],
    crowdStatus: {
      level: 'Low',
      waitTimeMinutes: 10,
      gateNumber: 'Lalita Ghat Riverfront Gate',
      lastUpdated: '12 mins ago',
      peakHours: '05:00 PM - 07:00 PM',
      queueLengthMeters: 20
    },
    transit: {
      fromVaranasiCantt: '4.9 km (~22 mins)',
      fromBanarasStation: '5.3 km (~25 mins)',
      fromAirport: '24.6 km (~50 mins)',
      fromDashashwamedh: '350 meters (5 minutes walk along the ghats)',
      nearestGhat: 'Lalita Ghat (Directly situated above the ghat)',
      nearestParking: 'Godowlia Multilevel Parking',
      localTransportTip: 'Enter through the Kashi Vishwanath Dham riverfront gate at Lalita Ghat.',
      localTransportTipHindi: 'ललिता घाट या काशी विश्वनाथ धाम के गंगा द्वार से आसानी से पहुंचा जा सकता है।'
    },
    nearbyAttractions: [
      { name: 'Kashi Vishwanath Corridor Riverfront', hindiName: 'काशी विश्वनाथ गंगा द्वार', distance: '50m', description: 'Grand gateway to the Jyotirlinga', type: 'heritage' },
      { name: 'Manikarnika Ghat', hindiName: 'मणिकर्णिका घाट', distance: '200m', description: 'Sacred cremation ghat', type: 'ghat' }
    ],
    officialTrustBooking: {
      trustName: 'Nepal Rajkiya Dharmashala & Temple Trust',
      trustNameHindi: 'नेपाल राजकीय धर्मशाला एवं मंदिर न्यास',
      sugamDarshanAvailable: false,
      sugamDarshanPrice: 0,
      aartiPassAvailable: false,
      prasadDeliveryAvailable: false,
      helplinePhone: '+91-542-2402123'
    },
    reviews: [
      {
        id: 'rev-nm-1',
        author: 'Elena Rostova',
        city: 'Prague, Czechia',
        rating: 5,
        date: '27 Oct 2026',
        comment: 'The woodwork here looks like a piece of Kathmandu transported directly to the holy Ganga. Watching the river boats from the wooden balcony was unforgettable.',
        darshanExperience: 'Serene, quiet, stunning views over the river.',
        helpfulCount: 38
      }
    ]
  }
];
