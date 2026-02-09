import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Create a safe client that won't throw if URL is empty
function createSafeClient(url: string, key: string): SupabaseClient {
  if (!url || !key) {
    // Return a dummy placeholder URL so createClient won't throw
    // Actual calls will fail gracefully via try/catch in images.ts
    return createClient('https://placeholder.supabase.co', 'placeholder-key');
  }
  return createClient(url, key);
}

// Client for browser/public operations (read-only)
export const supabase = createSafeClient(supabaseUrl, supabaseAnonKey);

// Admin client for server-side operations (full access)
export const supabaseAdmin = createSafeClient(supabaseUrl, supabaseServiceRoleKey);

export const STORAGE_BUCKET = 'site-images';

export function getStorageUrl(path: string): string {
  return `${supabaseUrl}/storage/v1/object/public/${STORAGE_BUCKET}/${path}`;
}
