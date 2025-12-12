import { LucideIcon } from 'lucide-react';

// Base service type
export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
  badge?: string;
  color: string; // Tailwind gradient classes e.g., "from-blue-500 to-indigo-600"
  link: string;
  useCases: UseCase[];
  features: string[];
}

export interface UseCase {
  icon: LucideIcon;
  text: string;
}

// For service detail pages
export interface ServicePageData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  badge?: string;
  heroImage?: string;
}

// Product type for blank shirts
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  colors: string[];
  sizes: string[];
  badge?: string;
  weight: string;
  category: string;
  rating: number;
  reviews: number;
  features: string[];
}

// Feature card type
export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  price?: string;
}

// Process step type
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

// Stat type
export interface Stat {
  value: string;
  label: string;
  icon?: LucideIcon;
}

// Benefit type
export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}
