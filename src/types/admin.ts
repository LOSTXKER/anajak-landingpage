// ===== Database Types =====

export interface SiteImage {
  id: string;
  section: string;
  slot: string;
  url: string;
  alt: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

// ===== Image Slot Config Types =====

export interface ImageSlotConfig {
  slot: string;
  label: string;
  recommendedSize: string;
  aspectRatio?: string;
  description?: string;
  photographyBrief?: string;
}

export interface SectionConfig {
  id: string;
  label: string;
  description?: string;
  slots: ImageSlotConfig[];
}

export interface PageGroupConfig {
  id: string;
  label: string;
  icon?: string;
  sections: SectionConfig[];
}

// ===== Photo Brief Review Types =====

export type ReviewStatus = 'pending' | 'approved' | 'needs_revision';

export interface PhotoBriefReview {
  id: string;
  section: string;
  slot: string;
  note: string;
  status: ReviewStatus;
  updated_at: string;
}

// ===== API Types =====

export interface UploadImageRequest {
  section: string;
  slot: string;
  alt?: string;
  sort_order?: number;
}

export interface DeleteImageRequest {
  section: string;
  slot: string;
}

export interface ImagesBySection {
  [slot: string]: SiteImage;
}
