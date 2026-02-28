import { supabaseAdmin, isSupabaseConfigured } from './supabase';
import { SiteImage, ImagesBySection } from '@/types/admin';

/**
 * Fetch all images for a given section from Supabase
 * Uses supabaseAdmin (service role) to bypass RLS
 */
export async function getImagesBySection(section: string): Promise<ImagesBySection> {
  if (!isSupabaseConfigured) return {};
  try {
    const { data, error } = await supabaseAdmin
      .from('site_images')
      .select('*')
      .eq('section', section)
      .order('sort_order', { ascending: true });

    if (error) {
      console.error(`Error fetching images for section "${section}":`, error.message);
      return {};
    }

    const result: ImagesBySection = {};
    for (const image of (data as SiteImage[]) || []) {
      result[image.slot] = image;
    }
    return result;
  } catch (err) {
    console.error(`Failed to fetch images for section "${section}":`, err);
    return {};
  }
}

/**
 * Fetch a single image by section and slot
 */
export async function getImage(section: string, slot: string): Promise<SiteImage | null> {
  if (!isSupabaseConfigured) return null;
  try {
    const { data, error } = await supabaseAdmin
      .from('site_images')
      .select('*')
      .eq('section', section)
      .eq('slot', slot)
      .single();

    if (error) {
      return null;
    }

    return data as SiteImage;
  } catch {
    return null;
  }
}

/**
 * Fetch all images across multiple sections
 * Uses supabaseAdmin (service role) to bypass RLS
 */
export async function getImagesBySections(sections: string[]): Promise<Record<string, ImagesBySection>> {
  if (!isSupabaseConfigured) return {};
  try {
    const { data, error } = await supabaseAdmin
      .from('site_images')
      .select('*')
      .in('section', sections)
      .order('sort_order', { ascending: true });

    if (error) {
      console.error('Error fetching images:', error.message);
      return {};
    }

    const result: Record<string, ImagesBySection> = {};
    for (const image of (data as SiteImage[]) || []) {
      if (!result[image.section]) {
        result[image.section] = {};
      }
      result[image.section][image.slot] = image;
    }
    return result;
  } catch (err) {
    console.error('Failed to fetch images:', err);
    return {};
  }
}

/**
 * Get image URL for a slot, with fallback to original hardcoded path
 */
export function getImageUrl(
  images: ImagesBySection,
  slot: string,
  fallback?: string
): string {
  const image = images[slot];
  if (image?.url) {
    return image.url;
  }
  return fallback || '';
}

/**
 * Get image alt text for a slot, with fallback
 */
export function getImageAlt(
  images: ImagesBySection,
  slot: string,
  fallback?: string
): string {
  const image = images[slot];
  if (image?.alt) {
    return image.alt;
  }
  return fallback || '';
}
