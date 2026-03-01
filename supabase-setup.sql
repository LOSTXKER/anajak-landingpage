-- ============================================================
-- Supabase Setup SQL Script
-- Run this in your Supabase SQL Editor
-- ============================================================

-- Create site_images table
CREATE TABLE IF NOT EXISTS site_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section TEXT NOT NULL,
  slot TEXT NOT NULL,
  url TEXT NOT NULL,
  alt TEXT DEFAULT '',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(section, slot)
);

-- Create index for fast lookups
CREATE INDEX IF NOT EXISTS idx_site_images_section ON site_images(section);
CREATE INDEX IF NOT EXISTS idx_site_images_section_slot ON site_images(section, slot);

-- Enable Row Level Security
ALTER TABLE site_images ENABLE ROW LEVEL SECURITY;

-- Allow public read access (for the website)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'site_images' AND policyname = 'Allow public read') THEN
    CREATE POLICY "Allow public read" ON site_images FOR SELECT USING (true);
  END IF;
END $$;

-- Allow service role full access (for admin API)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'site_images' AND policyname = 'Allow service role full access') THEN
    CREATE POLICY "Allow service role full access" ON site_images FOR ALL USING (auth.role() = 'service_role');
  END IF;
END $$;

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_updated_at
  BEFORE UPDATE ON site_images
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- ============================================================
-- Storage Bucket Setup (รันใน SQL Editor ได้เลย)
-- ============================================================

-- สร้าง Storage Bucket ชื่อ "site-images" (public)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'site-images',
  'site-images',
  true,
  20971520, -- 20MB
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- Storage Policies (ใครก็อ่านได้ แต่แก้ไขได้เฉพาะ service_role)
-- ============================================================

-- อนุญาตให้ทุกคนดูรูปได้ (public read)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Public read access' AND schemaname = 'storage') THEN
    CREATE POLICY "Public read access" ON storage.objects FOR SELECT USING (bucket_id = 'site-images');
  END IF;
END $$;

-- อนุญาตให้ service_role อัปโหลดได้
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Service role upload' AND schemaname = 'storage') THEN
    CREATE POLICY "Service role upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'site-images' AND auth.role() = 'service_role');
  END IF;
END $$;

-- อนุญาตให้ service_role อัปเดตได้ (overwrite)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Service role update' AND schemaname = 'storage') THEN
    CREATE POLICY "Service role update" ON storage.objects FOR UPDATE USING (bucket_id = 'site-images' AND auth.role() = 'service_role');
  END IF;
END $$;

-- อนุญาตให้ service_role ลบได้
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Service role delete' AND schemaname = 'storage') THEN
    CREATE POLICY "Service role delete" ON storage.objects FOR DELETE USING (bucket_id = 'site-images' AND auth.role() = 'service_role');
  END IF;
END $$;

-- ============================================================
-- Photo Brief Reviews (review notes & status per image slot)
-- ============================================================

CREATE TABLE IF NOT EXISTS photo_brief_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section TEXT NOT NULL,
  slot TEXT NOT NULL,
  note TEXT DEFAULT '',
  status TEXT DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'needs_revision')),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(section, slot)
);

CREATE INDEX IF NOT EXISTS idx_photo_brief_reviews_section_slot
  ON photo_brief_reviews(section, slot);

ALTER TABLE photo_brief_reviews ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'photo_brief_reviews' AND policyname = 'Allow public read') THEN
    CREATE POLICY "Allow public read" ON photo_brief_reviews FOR SELECT USING (true);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'photo_brief_reviews' AND policyname = 'Allow service role full access') THEN
    CREATE POLICY "Allow service role full access" ON photo_brief_reviews FOR ALL USING (auth.role() = 'service_role');
  END IF;
END $$;

CREATE TRIGGER trigger_update_photo_brief_reviews_updated_at
  BEFORE UPDATE ON photo_brief_reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
