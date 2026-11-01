import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, X, Volume2, VolumeX, Compass, MapPin, Calendar, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { templesData } from '../data/templesData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  suggestedAction?: {
    label: string;
    actionType: 'view_temple' | 'view_itinerary' | 'view_booking';
    targetId: string;
  };
}

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTemple: (templeId: string) => void;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({ isOpen, onClose, onSelectTemple }) => {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-welcome',
      sender: 'ai',
      text: language === 'hi' 
        ? '🙏 हर हर महादेव! मैं आपका "दिव्य काशी एआई मार्गदर्शक" हूँ। आप मुझसे काशी के प्राचीन व आधुनिक मंदिरों, आरती समय, पौराणिक इतिहास, सुगम दर्शन बुकिंग, अथवा निकटवर्ती घाटों एवं खानपान के बारे में कोई भी प्रश्न पूछ सकते हैं।'
        : '🙏 Har Har Mahadev! I am your "Divya Kashi AI Heritage Guide". Ask me anything regarding ancient & modern temples, aarti schedules, historical research, dress codes, Sugam Darshan passes, or nearby ghats & Banarasi delicacies.',
      timestamp: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sampleQuestions = language === 'hi' ? [
    'काशी विश्वनाथ मंगला आरती का समय और नियम क्या हैं?',
    'वरिष्ठ नागरिकों के लिए 1-दिवसीय दर्शन योजना बताएं',
    'मृत्युंजय महादेव के धन्वंतरि कूप का क्या रहस्य है?',
    'अस्सी घाट के निकट कौन से मंदिर और प्रसिद्ध खानपान हैं?',
    'न्यू विश्वनाथ मंदिर (बीएचयू) की क्या विशेषता है?'
  ] : [
    'What is the dress code and time for Mangla Aarti?',
    'Suggest a 1-day senior-friendly pilgrimage plan',
    'What is the secret of the Dhanvantari well at Mrityunjay Mahadev?',
    'Which temples and ghats are close to Assi Ghat?',
    'What makes BHU New Vishwanath Temple architecturally unique?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateAIResponse = (query: string): { reply: string; action?: Message['suggestedAction'] } => {
    const q = query.toLowerCase();

    // Mangla Aarti / Timing
    if (q.includes('mangla') || q.includes('aarti') || q.includes('आरती') || q.includes('timing') || q.includes('समय')) {
      if (language === 'hi') {
        return {
          reply: 'श्री काशी विश्वनाथ मंदिर में ब्रह्ममुहूर्त मंगला आरती प्रातः 03:00 से 04:00 बजे तक होती है। पुरुषों के लिए धोती-कुर्ता और महिलाओं के लिए साड़ी अनिवार्य है। आप हमारे शासकीय ट्रस्ट सेक्शन से मंगला आरती पास बुक कर सकते हैं। इसके अतिरिक्त संध्या में 07:00 बजे प्रसिद्ध सप्तर्षि आरती और रात्रि 09:00 बजे शृंगार आरती होती है।',
          action: { label: 'काशी विश्वनाथ आरती विवरण देखें', actionType: 'view_temple', targetId: 'kashi-vishwanath' }
        };
      } else {
        return {
          reply: 'Mangla Aarti at Shri Kashi Vishwanath takes place during Brahma Muhurta (03:00 AM - 04:00 AM). Devotees must wear traditional attire (Dhoti for men entering sanctum, Sarees for women). Other key aartis include Bhog Aarti (11:15 AM), the iconic Saptarishi Aarti (07:00 PM), and Night Shringar Aarti (09:00 PM).',
          action: { label: 'View Kashi Vishwanath Aarti Schedule', actionType: 'view_temple', targetId: 'kashi-vishwanath' }
        };
      }
    }

    // Senior citizens / Itinerary / 1 day
    if (q.includes('senior') || q.includes('1-day') || q.includes('1 day') || q.includes('itinerary') || q.includes('plan') || q.includes('वरिष्ठ') || q.includes('योजना') || q.includes('एक दिवसीय')) {
      if (language === 'hi') {
        return {
          reply: 'वरिष्ठ तीर्थयात्रियों के लिए आदर्श योजना:\n1. प्रातः 07:30 बजे: काशी विश्वनाथ धाम (गेट 4 से ई-कार्ट व सुगम दर्शन द्वारा बिना सीढ़ियों के सुगम प्रवेश)।\n2. प्रातः 09:00 बजे: निकटवर्ती माँ अन्नपूर्णा मंदिर दर्शन।\n3. मध्याह्न 11:30 बजे: काल भैरव दर्शन (मैदागिन से सुगम पहुंच)।\n4. शाम 04:30 बजे: संकट मोचन मंदिर एवं दुर्गा कुंड।\n5. शाम 06:30 बजे: दशाश्वमेध घाट पर नौका से गंगा आरती दर्शन।',
          action: { label: 'तीर्थ यात्रा परिपथ देखें', actionType: 'view_itinerary', targetId: 'one-day-divine' }
        };
      } else {
        return {
          reply: 'Recommended Senior-Friendly 1-Day Itinerary:\n1. 07:30 AM: Shri Kashi Vishwanath via Gate 4 (Use corridor wheelchair/e-cart ramps with Sugam VIP pass).\n2. 09:00 AM: Maa Annapurna Mandir (Adjacent to corridor).\n3. 11:30 AM: Kaal Bhairav (Kotwal of Kashi) via Maidagin.\n4. 04:00 PM: Sankat Mochan Hanuman Temple (Spacious gardens, easy seating).\n5. 06:30 PM: Reserved motorboat viewing of Dashashwamedh Evening Ganga Aarti.',
          action: { label: 'Open 1-Day Pilgrimage Circuit', actionType: 'view_itinerary', targetId: 'one-day-divine' }
        };
      }
    }

    // Dhanvantari / Mrityunjay Mahadev
    if (q.includes('dhanvantari') || q.includes('mrityunjay') || q.includes('well') || q.includes('मृत्युंजय') || q.includes('कूप') || q.includes('रोग')) {
      if (language === 'hi') {
        return {
          reply: 'मृत्युंजय महादेव मंदिर दारानागर में स्थित है। मंदिर के पावन परिसर में स्थित "धन्वंतरि कूप" (औषधीय कुआं) अति चमत्कारी माना जाता है। पौराणिक मान्यता है कि देव-वैद्य भगवान धन्वंतरि ने इसमें दिव्य औषधियां विसर्जित की थीं। यहां महामृत्युंजय मंत्र जप और कूप के जल का आचमन करने से असाध्य रोगों व अकाल मृत्यु के भय से मुक्ति मिलती है।',
          action: { label: 'मृत्युंजय महादेव दर्शन विवरण', actionType: 'view_temple', targetId: 'mrityunjay-mahadev' }
        };
      } else {
        return {
          reply: 'Mrityunjay Mahadev Temple in Daranagar houses the ancient subterranean "Dhanvantari Koop" (Healing Well). According to Puranas, celestial physician Lord Dhanvantari poured divine nectar and medicinal herbs into this well. Pilgrims drink its water while chanting the Mahamrityunjaya Mantra for physical healing and victory over illness.',
          action: { label: 'Explore Mrityunjay Mahadev', actionType: 'view_temple', targetId: 'mrityunjay-mahadev' }
        };
      }
    }

    // Assi Ghat / Nearby / Food
    if (q.includes('assi') || q.includes('food') || q.includes('nearby') || q.includes('अस्सी') || q.includes('खानपान') || q.includes('घाट')) {
      if (language === 'hi') {
        return {
          reply: 'अस्सी घाट के निकट प्रमुख आकर्षण:\n1. मंदिर: संकट मोचन हनुमान मंदिर (1.2 किमी), दुर्गा कुंड (900 मी), तुलसी मानस मंदिर (800 मी)।\n2. प्रसिद्ध खानपान: अस्सी चौराहे की प्रसिद्ध "पहलवान लस्सी", सुबह की "कचौड़ी-जलेबी" और लेमन टी।\n3. विशेष अनुभव: प्रातःकाल अस्सी घाट पर "सुबहे बनारस" (सूर्य वंदना, वैदिक ऋचाएं और शास्त्रीय संगीत)।',
          action: { label: 'संकट मोचन मंदिर देखें', actionType: 'view_temple', targetId: 'sankat-mochan' }
        };
      } else {
        return {
          reply: 'Around Assi Ghat you have:\n1. Sacred Temples: Sankat Mochan Hanuman Temple (1.2 km), Durga Kund Temple (900m), and Tulsi Manas Mandir (800m).\n2. Street Food: Authentic Pehelwan Lassi at Assi Crossing, morning hot kachori-sabzi, and apple tea at the ghat.\n3. Unique Ritual: Experience "Subah-e-Banaras" at sunrise with Vedic chanting, yoga, and classical morning ragas.',
          action: { label: 'View Sankat Mochan Details', actionType: 'view_temple', targetId: 'sankat-mochan' }
        };
      }
    }

    // BHU / Birla Mandir / VT
    if (q.includes('bhu') || q.includes('birla') || q.includes('new vishwanath') || q.includes('बिरला') || q.includes('बीएचयू')) {
      if (language === 'hi') {
        return {
          reply: 'बीएचयू स्थित श्री विश्वनाथ मंदिर (बिरला मंदिर) की मुख्य विशेषताएं:\n1. इसका 77 मीटर (252 फीट) ऊंचा शिखर एशिया का सबसे ऊंचा मंदिर शिखर है।\n2. महामना पंडित मदन मोहन मालवीय जी की प्रेरणा से बिरला परिवार द्वारा 1966 में निर्मित।\n3. धवल मकराना संगमरमर की दीवारों पर संपूर्ण श्रीमद्भगवद्गीता और उपनिषदों के पावन श्लोक उत्कीर्ण हैं। यह सर्वधर्म समभाव का अनुपम प्रतीक है।',
          action: { label: 'बीएचयू बिरला मंदिर देखें', actionType: 'view_temple', targetId: 'new-vishwanath-bhu' }
        };
      } else {
        return {
          reply: 'New Vishwanath Temple (Birla Mandir) inside BHU Campus features:\n1. 77-meter (252 ft) tall tower—the tallest temple shikhara in all of Asia.\n2. Built between 1931-1966 by the Birla family under the visionary guidance of Mahamana Pt. Madan Mohan Malaviya.\n3. Spotless Makrana white marble walls intricately inscribed with the entire text of the Shrimad Bhagavad Gita and Vedic Upanishads.',
          action: { label: 'View BHU Temple Details', actionType: 'view_temple', targetId: 'new-vishwanath-bhu' }
        };
      }
    }

    // Kaal Bhairav
    if (q.includes('bhairav') || q.includes('kotwal') || q.includes('भैरव') || q.includes('कोतवाल')) {
      if (language === 'hi') {
        return {
          reply: 'भगवान काल भैरव को काशी का दंडाधिकारी व कोतवाल कहा जाता है। काशी खंड अनुसार, काशी में प्रवेश करने और यहां से विदा लेते समय काल भैरव की आज्ञा व दर्शन अनिवार्य है। यहां सरसों के तेल का दीप प्रज्वलित करने और हाथ पर काला रक्षा धागा (गंडा) बंधवाने का विशेष महात्म्य है।',
          action: { label: 'काल भैरव मंदिर विवरण देखें', actionType: 'view_temple', targetId: 'kal-bhairav' }
        };
      } else {
        return {
          reply: 'Kaal Bhairav is revered as the divine Kotwal (Chief Magistrate & Protector) of Varanasi. Tradition asserts that every pilgrimage to Kashi remains incomplete without paying respects to Kaal Bhairav. Devotees light mustard oil lamps and tie sacred black threads (Ganda) for protection against planetary obstacles.',
          action: { label: 'View Kaal Bhairav Details', actionType: 'view_temple', targetId: 'kal-bhairav' }
        };
      }
    }

    // Default intelligent response
    const matchedTemple = templesData.find(t => 
      q.includes(t.name.toLowerCase()) || 
      q.includes(t.hindiName) || 
      q.includes(t.deity.toLowerCase())
    );

    if (matchedTemple) {
      return {
        reply: language === 'hi'
          ? `${matchedTemple.hindiName} (${matchedTemple.eraHindi}): ${matchedTemple.taglineHindi}। मुख्य देवता: ${matchedTemple.deity}। दर्शन समय: ${matchedTemple.darshanTimings.opening} से ${matchedTemple.darshanTimings.closing}। निकटतम घाट: ${matchedTemple.transit.nearestGhat}।`
          : `${matchedTemple.name} (${matchedTemple.era}): ${matchedTemple.tagline}. Primary Deity: ${matchedTemple.deity}. Darshan Hours: ${matchedTemple.darshanTimings.opening} - ${matchedTemple.darshanTimings.closing}. Nearest Ghat: ${matchedTemple.transit.nearestGhat}.`,
        action: { label: `Open ${matchedTemple.name}`, actionType: 'view_temple', targetId: matchedTemple.id }
      };
    }

    return {
      reply: language === 'hi'
        ? `काशी के पावन धामों में आपका स्वागत है। आप मुझसे किसी भी मंदिर के दर्शन समय, सुगम दर्शन पास, कैंट स्टेशन अथवा हवाई अड्डे से दूरी, अथवा प्राचीन इतिहास के विषय में पूछ सकते हैं।`
        : `Welcome to the timeless sacred landscape of Kashi. You may ask me about specific temple timings, transit routes from Varanasi Cantt or Babatpur Airport, Sugam Darshan passes, or Puranic histories.`
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const { reply, action } = generateAIResponse(userText);
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction: action
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 650);
  };

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#161311] border border-amber-600/30 rounded-2xl shadow-2xl flex flex-col h-[85vh] max-h-[700px] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#291e17] via-[#35261d] to-[#1f1610] px-5 py-4 border-b border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30 text-white">
              <Bot className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-serif font-bold text-amber-200">
                  {language === 'hi' ? 'दिव्य काशी एआई मार्गदर्शक' : 'Divya Kashi AI Heritage Guide'}
                </h3>
                <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full">
                  AI Live
                </span>
              </div>
              <p className="text-xs text-stone-400">
                {language === 'hi' ? 'पुरातन इतिहास, आरती समय एवं तीर्थ नेविगेशन' : 'Varanasi Heritage, Darshan Timings & Smart Pilgrimage'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition"
            aria-label="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#14100e] to-[#0d0a08]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-md ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-br-none'
                    : 'bg-[#221c18] border border-amber-900/40 text-stone-200 rounded-bl-none'
                }`}
              >
                <div className="flex items-center justify-between mb-1 gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400/80">
                    {msg.sender === 'user' ? (language === 'hi' ? 'आप' : 'You') : (language === 'hi' ? 'दिव्य एआई' : 'Divya AI')}
                  </span>
                  {msg.sender === 'ai' && (
                    <button
                      onClick={() => handleSpeak(msg.text)}
                      className="text-stone-400 hover:text-amber-400 transition"
                      title={isSpeaking ? 'Stop speaking' : 'Read aloud'}
                    >
                      {isSpeaking ? <VolumeX className="w-3.5 h-3.5 text-amber-400" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>

                <p className="text-sm leading-relaxed whitespace-pre-line font-sans">
                  {msg.text}
                </p>

                {msg.suggestedAction && (
                  <div className="mt-3 pt-2.5 border-t border-amber-500/20">
                    <button
                      onClick={() => {
                        if (msg.suggestedAction?.actionType === 'view_temple') {
                          onSelectTemple(msg.suggestedAction.targetId);
                          onClose();
                        }
                      }}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition"
                    >
                      <span>{msg.suggestedAction.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                <span className="block text-[10px] text-stone-400 mt-1 text-right">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center space-x-2 text-amber-400 text-xs px-3 py-2 bg-[#221c18] border border-amber-900/40 rounded-xl w-fit">
              <Sparkles className="w-4 h-4 animate-spin text-amber-400" />
              <span>{language === 'hi' ? 'दिव्य ज्ञान संकलन कर रहा है...' : 'Consulting sacred texts and real-time timings...'}</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className="p-3 bg-[#181310] border-t border-amber-900/30 flex overflow-x-auto gap-2 no-scrollbar">
          {sampleQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInput(q);
              }}
              className="whitespace-nowrap px-3 py-1.5 text-xs rounded-full bg-stone-800/80 text-amber-200/90 border border-amber-700/30 hover:border-amber-500 hover:bg-amber-950/40 transition shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <div className="p-3 sm:p-4 bg-[#1e1713] border-t border-amber-600/20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={language === 'hi' ? 'काशी, मंदिरों, आरती, या इतिहास के बारे में पूछें...' : 'Ask about temples, aartis, routes, or history...'}
              className="flex-1 bg-stone-900/90 border border-stone-700 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/20 hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              aria-label="Send query"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
