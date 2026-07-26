export type Season = "spring" | "summer" | "autumn" | "winter";

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface CityAttraction {
  id: string;
  name: string;
  category: "temple" | "shrine" | "museum" | "nature" | "landmark" | "district" | "castle";
  description: string;
  tip: string;
}

export interface FoodItem {
  id: string;
  name: string;
  jp: string;
  description: string;
}

export interface City {
  id: string;
  slug: string;
  name: string;
  jp: string;
  region: string;
  tagline: string;
  founded: string;
  population: string;
  heroImage: string;
  galleryImages: string[];
  coordinates: { x: number; y: number }; // percentage position on the stylized map
  intro: string;
  history: string;
  architecture: string;
  traditionalCulture: string;
  modernCulture: string;
  bestSeason: Season[];
  nightlife: string;
  transportation: string;
  facts: string[];
  attractions: CityAttraction[];
  food: FoodItem[];
  hiddenGems: string[];
  photographySpots: string[];
  travelTips: string[];
  nearby: string[]; // city ids
  itinerary: { day: number; plan: string }[];
}

export interface CultureTopic {
  id: string;
  slug: string;
  title: string;
  jp: string;
  eyebrow: string;
  summary: string;
  body: string[];
  image: string;
  accent: "shu" | "sakura" | "gold" | "indigo";
}

export interface HistoryEra {
  id: string;
  period: string;
  years: string;
  jp: string;
  title: string;
  summary: string;
  highlights: string[];
}
