import { saveReview } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { shop_uuid, rating, comment } = await req.json();
  
  if (!shop_uuid || typeof rating !== 'number' || typeof comment !== 'string') {
    return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
  }
  
  await saveReview({ shop_uuid, rating, comment });
  return NextResponse.json({ ok: true });
}