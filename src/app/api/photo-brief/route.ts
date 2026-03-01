import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

const COOKIE_NAME = 'admin_token';
const TOKEN_VALUE = 'authenticated';

function isAuthenticated(request: NextRequest): boolean {
  return request.cookies.get(COOKIE_NAME)?.value === TOKEN_VALUE;
}

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('photo_brief_reviews')
    .select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ reviews: data ?? [] });
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { section, slot, note, status } = body;

    if (!section || !slot) {
      return NextResponse.json(
        { error: 'Missing required fields: section, slot' },
        { status: 400 },
      );
    }

    if (status && !['pending', 'approved', 'needs_revision'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status value' },
        { status: 400 },
      );
    }

    const { data, error } = await supabaseAdmin
      .from('photo_brief_reviews')
      .upsert(
        {
          section,
          slot,
          note: note ?? '',
          status: status ?? 'pending',
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'section,slot' },
      )
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: `Database error: ${error.message}` },
        { status: 500 },
      );
    }

    return NextResponse.json({ review: data });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
