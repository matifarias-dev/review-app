import { prisma } from './prisma';

export async function getShopById(shop_uuid: string) {
  return await prisma.shop.findUnique({  // 'shop' está correcto (camelCase de 'Shop')
    where: { shop_uuid: shop_uuid },
  });
}

export async function saveReview({ shop_uuid, rating, comment }: { 
  shop_uuid: string; 
  rating: number; 
  comment: string;  // Agregado comment que está en tu schema
}) {
  await prisma.review.create({
    data: { 
      shop_uuid, 
      rating, 
      comment
    },
  });
}

// Función adicional para obtener reviews de un shop
export async function getReviewsByShop(shop_uuid: string) {
  return await prisma.review.findMany({
    where: { shop_uuid },
    orderBy: { created_at: 'desc' }
  });
}

// Función para obtener shop con sus reviews
export async function getShopWithReviews(shop_uuid: string) {
  console.log('Obteniendo shop con reviews para shop_uuid:', shop_uuid);
  const shop = await prisma.shop.findUnique({
    where: { shop_uuid: shop_uuid },
  });

  console.log("SHOP:", shop);

  return await prisma.shop.findUnique({
    where: { shop_uuid: shop_uuid },
    include: {
      reviews: {
        orderBy: { created_at: 'desc' }
      }
    }
  });
}