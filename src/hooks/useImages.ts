'use client';

import { useState, useEffect } from 'react';
import { SiteImage, ImagesBySection } from '@/types/admin';

/**
 * Client-side hook to fetch images via API route (uses supabaseAdmin server-side)
 * Falls back gracefully on error
 */
export function useImages(sections: string[]): Record<string, ImagesBySection> {
  const [imageMap, setImageMap] = useState<Record<string, ImagesBySection>>({});

  useEffect(() => {
    async function fetchImages() {
      try {
        const results: Record<string, ImagesBySection> = {};

        const responses = await Promise.all(
          sections.map(section =>
            fetch(`/api/admin/images?section=${encodeURIComponent(section)}`)
              .then(res => res.json())
          )
        );

        for (const response of responses) {
          if (response.images) {
            for (const image of response.images as SiteImage[]) {
              if (!results[image.section]) {
                results[image.section] = {};
              }
              results[image.section][image.slot] = image;
            }
          }
        }

        setImageMap(results);
      } catch {
        // Silently fail - fallback images will be used
      }
    }

    if (sections.length > 0) {
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
