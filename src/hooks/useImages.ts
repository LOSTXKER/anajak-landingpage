'use client';

import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { SiteImage, ImagesBySection } from '@/types/admin';

/**
 * Client-side hook to fetch images for given sections
 * Falls back gracefully if Supabase is not configured
 */
export function useImages(sections: string[]): Record<string, ImagesBySection> {
  const [imageMap, setImageMap] = useState<Record<string, ImagesBySection>>({});

  useEffect(() => {
    async function fetchImages() {
      try {
        const { data, error } = await supabase
          .from('site_images')
          .select('*')
          .in('section', sections)
          .order('sort_order', { ascending: true });

        if (error || !data) return;

        const result: Record<string, ImagesBySection> = {};
        for (const image of data as SiteImage[]) {
          if (!result[image.section]) {
            result[image.section] = {};
          }
          result[image.section][image.slot] = image;
        }
        setImageMap(result);
      } catch {
        // Silently fail - fallback images will be used
      }
    }

    if (sections.length > 0 && isSupabaseConfigured) {
      fetchImages();
    }
  }, [sections.join(',')]); // eslint-disable-line react-hooks/exhaustive-deps

  return imageMap;
}

/**
 * Get image URL from the map with fallback
 */
export function getUrl(
  imageMap: Record<string, ImagesBySection>,
  section: string,
  slot: string,
  fallback: string
): string {
  return imageMap[section]?.[slot]?.url || fallback;
}

/**
 * Get alt text from the map with fallback
 */
export function getAlt(
  imageMap: Record<string, ImagesBySection>,
  section: string,
  slot: string,
  fallback: string
): string {
  return imageMap[section]?.[slot]?.alt || fallback;
}
