import { getReviewsByShop, getShopWithReviews, saveReview } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { shop_uuid, rating, comment } = await req.json();
  
  if (!shop_uuid || typeof rating !== 'number' || typeof comment !== 'string') {
    return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
  }
  
  await saveReview({ shop_uuid, rating, comment });
  console.log('Review guardada:', { shop_uuid, rating, comment });
  return NextResponse.json({ ok: true });
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const shop_uuid = searchParams.get('shop_uuid');
    const includeShop = searchParams.get('includeShop') === 'true';

    if (!shop_uuid) {
      return NextResponse.json({ error: 'shop_uuid es requerido' }, { status: 400 });
    }

    let data;
    if (includeShop) {
      // Obtener shop con sus reviews
      data = await getShopWithReviews(shop_uuid);
      console.log('Shop con reviews obtenida:', data);
      if (!data) {
        return NextResponse.json({ error: 'Comercio no encontrado' }, { status: 404 });
      }
    } else {
      // Solo obtener las reviews
      data = await getReviewsByShop(shop_uuid);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error al obtener reviews:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}