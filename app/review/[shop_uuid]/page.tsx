import { getShopById } from '@/lib/db';
import { Suspense } from 'react';
import ReviewForm from './ReviewForm';

interface Props {
  params: Promise<{ 
    shop_uuid: string 
  }>;
} 

export default async function ReviewPage( props : Props) {
  const params = await props.params;
  const shop = await getShopById(params.shop_uuid);
  if (!shop) {
    return <div>Comercio no encontrado</div>;
  }

  return (
    <main style={{ maxWidth: 420, margin: 'auto', padding: 16 }}>
      <img
        src="/images/logo-central.jpg"
        alt={`Logo de ${shop.name}`}
        style={{ width: 120, height: 120, borderRadius: 16, margin: '0 auto', display: 'block' }}
      />
      <h1 style={{ textAlign: 'center', margin: '16px 0' }}>{shop.name}</h1>
      <p style={{ textAlign: 'center', fontSize: 18 }}>
        ¿Cómo fue tu experiencia? ¡Tu opinión nos ayuda a mejorar!
      </p>
      <Suspense fallback={<div>Cargando...</div>}>
        <ReviewForm shop={shop} />
      </Suspense>
    </main>
  );
}