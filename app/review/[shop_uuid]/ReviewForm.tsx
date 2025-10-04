'use client';

import { Shop } from '@prisma/client';
import { useState } from 'react';

interface Props {
  shop: Shop;
}

export default function ReviewForm({ shop }: Props) {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Guardar en base de datos
    await fetch('/api/review', {
      method: 'POST',
      body: JSON.stringify({ shop_uuid: shop.shop_uuid, rating, comment }),
      headers: { 'Content-Type': 'application/json' },
    });
    setSubmitted(true);
    if (rating !== null && rating > shop.ratingGoal) {
      window.open(`https://search.google.com/local/writereview?placeid=${shop.place_id}`, '_blank');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: 24 }}>
      <div style={{ fontSize: 30 }}>
        {[1,2,3,4,5].map(n => (
          <span
            key={n}
            style={{
              cursor: 'pointer',
              color: n <= (rating ?? 0) ? '#F3BF1A' : '#ccc',
              marginRight: 6,
            }}
            onClick={() => setRating(n)}
            aria-label={`Puntuar con ${n} estrellas`}
          >★</span>
        ))}
      </div>
      { rating !== null && (
        <div style={{ marginTop: 24 }}>
          {rating <= shop.ratingGoal && (
            <div style={{ marginTop: 16 }}>
              <p>¿Nos ayudas a mejorar?</p>
              <textarea
                placeholder="Déjanos tu comentario"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{ width: '100%', height: 80, padding: 8, borderRadius: 8, borderColor: '#ccc', marginTop: 8 }}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={rating === null}
            style={{ marginTop: 16, padding: '8px 24px', fontSize: 16, borderRadius: 8, background: '#275d3c', color: '#fff', border: 'none', cursor: 'pointer' }}
            >
            Enviar
          </button>
          {
            submitted && (
              <div style={{ marginTop: 16 }}>
                <span>¡Gracias por tu opinión!</span>
              </div>
            )
          }
        </div>
      )}
    </form>
  );
}