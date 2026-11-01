export interface HistoricalEpoch {
  era: string;
  century: string;
  title: string;
  titleHindi: string;
  description: string;
  descriptionHindi: string;
  keyEvents: string[];
  archaeologicalSources: string;
}

export interface ResearchInsight {
  id: string;
  title: string;
  titleHindi: string;
  category: 'Archaeology' | 'Scriptures' | 'Architecture' | 'Sacred Geography';
  summary: string;
  summaryHindi: string;
  detailedNotes: string[];
  scholarlyCitations: string[];
}

export const heritageResearchData: {
  sacredGeographyNotes: {
    kashiKhandas: {
      name: string;
      nameHindi: string;
      symbolism: string;
      deities: string;
    }[];
    riverDynamics: string;
  };
  chronologicalTimeline: HistoricalEpoch[];
  scholarlyInsights: ResearchInsight[];
} = {
  sacredGeographyNotes: {
    kashiKhandas: [
      {
        name: 'Omkareshwar Khanda (Northern Sector)',
        nameHindi: 'ओंकारेश्वर खंड (उत्तरी भाग)',
        symbolism: 'Associated with Brahma and the cosmic sound of AUM. Extends from Rajghat and Matsyodari to Machhodari pond.',
        deities: 'Omkareshwar Mahadev, Trilochan Mahadev, Adi Keshav'
      },
      {
        name: 'Vishweshwara Khanda (Central Sector)',
        nameHindi: 'विश्वेश्वर खंड (मध्य भाग)',
        symbolism: 'Associated with Lord Shiva\'s supreme seat. The spiritual nucleus where the Jyotirlinga radiates eternal liberation.',
        deities: 'Kashi Vishwanath, Maa Annapurna, Kaal Bhairav, Dhundhiraj Ganesha'
      },
      {
        name: 'Kedareshwar Khanda (Southern Sector)',
        nameHindi: 'केदारेश्वर खंड (दक्षिणी भाग)',
        symbolism: 'Associated with Himalayan Kedarnath spiritual energy and Lord Vishnu. Encompasses Assi to Kedar Ghat.',
        deities: 'Kedareshwar Mahadev, Sankat Mochan, Durga Kund, Lolark Kund'
      }
    ],
    riverDynamics: 'Unlike most Indian rivers that flow east or south, Mother Ganga takes a north-facing crescent bend (Uttaravahini) here. This astronomical orientation aligns with Mount Kailash and symbolizes the ascent of consciousness from material bounds towards supreme liberation.'
  },

  chronologicalTimeline: [
    {
      era: 'Vedic Antiquity',
      century: 'circa 1500 - 800 BCE',
      title: 'Avimukta Kshetra & The Rigvedic Light',
      titleHindi: 'अविमुक्त क्षेत्र एवं ऋग्वैदिक काल',
      description: 'Mentioned in Vedic literature as the realm never abandoned by Shiva (Avimukta). Center of philosophical discourses recorded in the Brihadaranyaka Upanishad between King Ajatashatru and sage Gargya.',
      descriptionHindi: 'वैदिक संहिताओं एवं उपनिषदों में अविमुक्त क्षेत्र के रूप में वर्णित। महर्षि गार्ग्य एवं राजा अजातशत्रु के दार्शनिक संवाद की भूमि।',
      keyEvents: [
        'Earliest iron tools and painted grey ware pottery uncovered at Rajghat excavations',
        'Establishment of the sacred fire altars along the Ganga bank',
        'Codification of the Kashi Pilgrimage sacred routes'
      ],
      archaeologicalSources: 'Archaeological Survey of India (ASI) excavations at Rajghat (1940-1969 by Prof. A.K. Narain)'
    },
    {
      era: 'Classical Buddhist & Mauryan Era',
      century: '6th - 3rd Century BCE',
      title: 'First Sermon at Sarnath & Ashokan Pillars',
      titleHindi: 'सारनाथ प्रथम उपदेश एवं मौर्य साम्राज्य',
      description: 'Lord Buddha delivered his first sermon (Dhammacakkappavattana Sutta) at Deer Park Sarnath, just 10 km north of Kashi. Emperor Ashoka erected the Lion Capital pillar, which today forms the national emblem of modern India.',
      descriptionHindi: 'भगवान बुद्ध ने सारनाथ में प्रथम धर्मचक्र प्रवर्तन किया। सम्राट अशोक ने ऐतिहासिक सिंह स्तंभ स्थापित किया।',
      keyEvents: [
        'Gautama Buddha arrives at Kashi and sets the wheel of Dhamma in motion',
        'Sarnath emerges as a world university of Buddhist philosophy',
        'Construction of Dhamek Stupa and Ashokan edict pillars'
      ],
      archaeologicalSources: 'Alexander Cunningham Sarnath Survey (1834); ASI Sarnath Museum records'
    },
    {
      era: 'Gupta & Classical Puranic Renaissance',
      century: '4th - 7th Century CE',
      title: 'Xuanzang’s Eyewitness Chronicles & Puranic Zenith',
      titleHindi: 'ह्वेनसांग का यात्रा वृत्तांत एवं पौराणिक काल',
      description: 'In 636 CE, Chinese scholar-monk Xuanzang (Hiuen Tsang) visited Varanasi and documented a thriving city of 100 temples with a 100-foot tall copper statue of Lord Shiva glittering in the sun like a mountain of jewels.',
      descriptionHindi: '636 ई. में चीनी यात्री ह्वेनसांग ने काशी का वर्णन करते हुए 100 भव्य मंदिरों और तांबे की 100 फीट ऊंची सूर्य की तरह चमकती शिव प्रतिमा का उल्लेख किया।',
      keyEvents: [
        'Compilation of the Kashi Khanda of Skanda Purana detailing all 84 ghats and 1000+ shrines',
        'Flourishing of Sanskrit academies and astronomical observatories',
        'Philosophical visits of Adi Shankaracharya and debates on Advaita Vedanta at Manikarnika Ghat'
      ],
      archaeologicalSources: 'Records of the Western Regions by Xuanzang (Datang Xiyu Ji, translated by Samuel Beal)'
    },
    {
      era: 'Maratha & Holkar Restoration Era',
      century: '18th - 19th Century CE',
      title: 'Ahilyabai Holkar & James Prinsep’s Architectural Surveys',
      titleHindi: 'महारानी अहिल्याबाई होल्कर एवं जेम्स प्रिंसेप का सर्वेक्षण',
      description: 'In 1777, Queen Ahilyabai Holkar of Indore funded the resurrection of Shri Kashi Vishwanath. In the 1820s-1830s, British polymath James Prinsep produced exact architectural drawings of Varanasi’s ghats and temples, preserving unprecedented historical records.',
      descriptionHindi: '1777 में महारानी अहिल्याबाई होल्कर ने विश्वनाथ मंदिर का जीर्णोद्धार कराया। 1830 में जेम्स प्रिंसेप ने बनारस के घाटों व मंदिरों का वैज्ञानिक वास्तुशिल्प मानचित्र तैयार किया।',
      keyEvents: [
        'Maharani Ahilyabai Holkar consecrates the present Jyotirlinga sanctum (1777)',
        'Maharaja Ranjit Singh donates 1 ton of pure gold to gild the shikhara (1835)',
        'James Prinsep creates the first accurate census, water drainage system, and lithographs of Banaras (1830)'
      ],
      archaeologicalSources: 'Benares Illustrated (James Prinsep, 1831); Holkar State Royal Archives'
    },
    {
      era: 'Modern Renaissance & Dham Corridor',
      century: '20th - 21st Century CE',
      title: 'Malaviya’s Educational Temples to Grand Corridor 2021',
      titleHindi: 'महामना के मंदिर से भव्य विश्वनाथ धाम कॉरिडोर',
      description: 'Pt. Madan Mohan Malaviya established Banaras Hindu University and the towering New Vishwanath Temple (1966). In December 2021, the Kashi Vishwanath Corridor opened, restoring unobstructed pedestrian access between Mother Ganga and the golden sanctum.',
      descriptionHindi: 'पंडित मदन मोहन मालवीय ने बीएचयू और बिरला मंदिर की स्थापना की। 2021 में भव्य काशी विश्वनाथ धाम कॉरिडोर ने गंगा और गर्भगृह का ऐतिहासिक संबंध पुनः स्थापित किया।',
      keyEvents: [
        'Birla family and Malaviya construct the 77m tall New Vishwanath Temple at BHU (1931-1966)',
        'Inauguration of Bharat Mata Mandir by Mahatma Gandhi (1936)',
        'Completion of the 500,000 sq ft Kashi Vishwanath Dham Corridor (2021)'
      ],
      archaeologicalSources: 'Varanasi Smart City Development Authority & Shri Kashi Vishwanath Temple Trust Annals'
    }
  ],

  scholarlyInsights: [
    {
      id: 'insight-1',
      title: 'The Astronomical Alignment of Varanasi Ghats',
      titleHindi: 'वाराणसी के घाटों का खगोलीय एवं वास्तु संरेखण',
      category: 'Sacred Geography',
      summary: 'Why the temples of Varanasi face precisely eastward towards the rising sun across the Ganga river.',
      summaryHindi: 'काशी के मंदिर और घाट पूर्व दिशा में उदित होते सूर्य की ओर क्यों संरेखित हैं।',
      detailedNotes: [
        'The river Ganga forms a natural parabolic concave curve along Varanasi, shielding the western high bank from floods.',
        'Every single morning sunrise casts unobstructed rays upon the sanctum sanctorums of Kashi Vishwanath, Kedareshwar, and Nepali Temple.',
        'Sawai Jai Singh of Jaipur built the Man Mandir Observatory (Jantar Mantar) on Man Mandir Ghat in 1737 precisely to measure these planetary alignments.'
      ],
      scholarlyCitations: [
        'Prof. Rana P.B. Singh: "Sacred Scape and Urban Morphology of Varanasi" (BHU)',
        'Eck, Diana L.: "Banaras: City of Light" (Princeton University Press)'
      ]
    },
    {
      id: 'insight-2',
      title: 'The Concept of "Moksha-Dayini" in the Kashi Khanda',
      titleHindi: 'काशी खंड में मोक्षदायिनी काशी का दार्शनिक आधार',
      category: 'Scriptures',
      summary: 'The metaphysical doctrine explaining why death in Kashi is celebrated as ultimate cosmic liberation (Maha-Moksha).',
      summaryHindi: 'काशी में प्राण त्याग को मृत्यु नहीं अपितु मोक्ष का द्वार क्यों माना गया है।',
      detailedNotes: [
        'Kashi Khanda verse 30.12 explicitly states: "Kashyam Hi Maranan Muktih" (Death in Kashi is liberation itself).',
        'Lord Shiva whispers the Taraka Mantra (the sonic key across the ocean of worldly existence) into the ear of the departing soul.',
        'At Manikarnika and Harishchandra Ghats, funeral pyres have burnt uninterrupted for over 3,000 years, a living manifestation of impermanence.'
      ],
      scholarlyCitations: [
        'Skanda Purana, Kashi Khanda (Purvabhaga & Uttarabhaga)',
        'Mahanirvana Tantra, Kashi Mahatmya'
      ]
    },
    {
      id: 'insight-3',
      title: 'Hidden Architectural Ingenuity: The Cooling Stone Sanctuaries',
      titleHindi: 'वास्तु रहस्य: चुनार पत्थरों का प्राकृतिक वातानुकूलन',
      category: 'Architecture',
      summary: 'How ancient artisans used Chunar sandstone, lime mortar, and interlocking stone mortises to survive seismic vibrations and harsh summers.',
      summaryHindi: 'चुनार के बलुआ पत्थर, चूने के गारे और खांचेदार जुड़ाई से भूकंपरोधी व शीतल मंदिर निर्माण।',
      detailedNotes: [
        'Chunar sandstone contains high thermal inertia, remaining cool during the blistering 45°C North Indian summers.',
        'Interlocking stone joints without iron nails prevented rust-induced structural cracking over centuries.',
        'Traditional step designs at ghats dissipate the turbulent kinetic energy of monsoon floodwaters without eroding foundational soil.'
      ],
      scholarlyCitations: [
        'James Prinsep: Benares Illustrated, Series of Drawings (1831)',
        'ASI Architectural Survey Reports on Chunar Masonry in Varanasi District'
      ]
    }
  ]
};
