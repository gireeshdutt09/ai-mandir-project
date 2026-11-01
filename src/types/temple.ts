export type TempleCategory = 'ancient' | 'modern';

export interface AartiSchedule {
  id: string;
  name: string;
  hindiName: string;
  time: string;
  description: string;
  price: string;
  bookingAvailable: boolean;
  dressCodeRequired?: string;
}

export interface CrowdStatus {
  level: 'Low' | 'Moderate' | 'High' | 'Peak';
  waitTimeMinutes: number;
  gateNumber: string;
  lastUpdated: string;
  peakHours: string;
  queueLengthMeters: number;
}

export interface TransitDistance {
  fromVaranasiCantt: string;      // Varanasi Junction (BSB)
  fromBanarasStation: string;     // Banaras Railway Station (BSBS)
  fromAirport: string;            // Lal Bahadur Shastri International (VNS)
  fromDashashwamedh: string;
  nearestGhat: string;
  nearestParking: string;
  localTransportTip: string;
  localTransportTipHindi: string;
}

export interface NearbyAttraction {
  name: string;
  hindiName: string;
  distance: string;
  description: string;
  type: 'ghat' | 'temple' | 'heritage' | 'market';
}

export interface TempleReview {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  darshanExperience: string;
  helpfulCount: number;
}

export interface OfficialBookingConfig {
  trustName: string;
  trustNameHindi: string;
  sugamDarshanAvailable: boolean;
  sugamDarshanPrice: number;
  aartiPassAvailable: boolean;
  prasadDeliveryAvailable: boolean;
  officialWebsite?: string;
  helplinePhone?: string;
}

export interface Temple {
  id: string;
  slug: string;
  name: string;
  hindiName: string;
  category: TempleCategory;
  deity: string;
  secondaryDeities: string[];
  era: string;
  eraHindi: string;
  builtBy: string;
  builtByHindi: string;
  location: string;
  locationHindi: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  heroImage: string;
  gallery: string[];
  popularityScore: number; // 0 - 100
  averageRating: number;
  totalReviews: number;
  tagline: string;
  taglineHindi: string;
  history: string;
  historyHindi: string;
  mythology: string;
  mythologyHindi: string;
  architecture: string;
  architectureHindi: string;
  architectureStyle: string;
  rituals: string[];
  ritualsHindi: string[];
  darshanTimings: {
    opening: string;
    closing: string;
    breaks?: string;
  };
  aartiSchedule: AartiSchedule[];
  dressCode: {
    men: string;
    women: string;
    prohibited: string[];
  };
  bestTimeToVisit: string;
  bestTimeToVisitHindi: string;
  festivals: string[];
  festivalsHindi: string[];
  crowdStatus: CrowdStatus;
  transit: TransitDistance;
  nearbyAttractions: NearbyAttraction[];
  officialTrustBooking: OfficialBookingConfig;
  reviews: TempleReview[];
}

export interface BookingReservation {
  id: string;
  bookingType: 'sugam' | 'aarti' | 'prasad';
  templeId: string;
  templeName: string;
  devoteeName: string;
  phone: string;
  email: string;
  date: string;
  slotOrItem: string;
  numberOfPersons?: number;
  amount: number;
  bookingRef: string;
  status: 'Confirmed' | 'Pending';
  deliveryAddress?: string;
  specialGotra?: string;
  createdAt: string;
}

export interface HelplineItem {
  id: string;
  name: string;
  hindiName: string;
  category: 'Police' | 'Temple Trust' | 'Medical' | 'Tourist Helpline' | 'Transport';
  phone: string;
  altPhone?: string;
  availableHours: string;
  description: string;
  descriptionHindi: string;
  emergency: boolean;
}

export interface PilgrimageItinerary {
  id: string;
  title: string;
  titleHindi: string;
  duration: string;
  badge: string;
  description: string;
  descriptionHindi: string;
  idealFor: string;
  stops: {
    step: number;
    time: string;
    templeId: string;
    name: string;
    activity: string;
    travelTip: string;
  }[];
}
