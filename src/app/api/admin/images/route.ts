import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { supabaseAdmin, STORAGE_BUCKET } from '@/lib/supabase';

const COOKIE_NAME = 'admin_token';
const TOKEN_VALUE = 'authenticated';

function isAuthenticated(request: NextRequest): boolean {
  return request.cookies.get(COOKIE_NAME)?.value === TOKEN_VALUE;
}

// GET: Fetch images (optionally by section)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const section = searchParams.get('section');

  let query = supabaseAdmin.from('site_images').select('*').order('sort_order', { ascending: true });
  if (section) {
    query = query.eq('section', section);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ images: data });
}

// POST: Upload image and save to DB
export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const section = formData.get('section') as string;
    const slot = formData.get('slot') as string;
    const alt = (formData.get('alt') as string) || '';
    const sortOrder = parseInt((formData.get('sort_order') as string) || '0', 10);

    if (!file || !section || !slot) {
      return NextResponse.json(
        { error: 'Missing required fields: file, section, slot' },
        { status: 400 }
      );
    }

    // Generate unique file path
    const ext = file.name.split('.').pop() || 'jpg';
    const filePath = `${section}/${slot}.${ext}`;

    // Upload to Supabase Storage (overwrite if exists)
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const { error: uploadError } = await supabaseAdmin.storage
      .from(STORAGE_BUCKET)
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: true,
      });

    if (uploadError) {
      return NextResponse.json(
        { error: `Upload failed: ${uploadError.message}` },
        { status: 500 }
      );
    }

    // Get public URL
    const { data: urlData } = supabaseAdmin.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(filePath);

    const url = urlData.publicUrl;

    // Upsert to database
    const { data, error: dbError } = await supabaseAdmin
      .from('site_images')
      .upsert(
        {
          section,
          slot,
          url,
          alt,
          sort_order: sortOrder,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'section,slot' }
      )
      .select()
      .single();

    if (dbError) {
      return NextResponse.json(
        { error: `Database error: ${dbError.message}` },
        { status: 500 }
      );
    }

    revalidatePath('/', 'layout');

    return NextResponse.json({ image: data });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE: Remove image from storage and DB
export async function DELETE(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { section, slot } = body;

    if (!section || !slot) {
      return NextResponse.json(
        { error: 'Missing required fields: section, slot' },
        { status: 400 }
      );
    }

    // Get the image record first
    const { data: existing } = await supabaseAdmin
      .from('site_images')
      .select('url')
      .eq('section', section)
      .eq('slot', slot)
      .single();

    if (existing?.url) {
      // Extract file path from URL
      const urlParts = existing.url.split(`${STORAGE_BUCKET}/`);
      if (urlParts[1]) {
        await supabaseAdmin.storage
          .from(STORAGE_BUCKET)
          .remove([urlParts[1]]);
      }
    }

    // Delete from database
    const { error: dbError } = await supabaseAdmin
      .from('site_images')
      .delete()
      .eq('section', section)
      .eq('slot', slot);

    if (dbError) {
      return NextResponse.json(
        { error: `Database error: ${dbError.message}` },
        { status: 500 }
      );
    }

    revalidatePath('/', 'layout');

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Delete error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PATCH: Update alt text only
export async function PATCH(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { section, slot, alt } = body;

    if (!section || !slot) {
      return NextResponse.json(
        { error: 'Missing required fields: section, slot' },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from('site_images')
      .update({ alt, updated_at: new Date().toISOString() })
      .eq('section', section)
      .eq('slot', slot)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: `Database error: ${error.message}` },
        { status: 500 }
      );
    }

    revalidatePath('/', 'layout');

    return NextResponse.json({ image: data });
  } catch (err) {
    console.error('Update error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
