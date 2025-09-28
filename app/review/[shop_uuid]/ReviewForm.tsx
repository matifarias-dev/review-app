'use client';

import { useState } from 'react';

export default function ReviewForm({ shop }: { shop: any }) {
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
    if (rating !== null && rating >= 3) {
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
              color: n <= (rating ?? 0) ? '#FFD700' : '#ccc',
              marginRight: 6,
            }}
            onClick={() => setRating(n)}
            aria-label={`Puntuar con ${n} estrellas`}
          >★</span>
        ))}
      </div>
      <button
        type="submit"
        disabled={rating === null}
        style={{ marginTop: 16, padding: '8px 24px', fontSize: 16, borderRadius: 8, background: '#0070f3', color: '#fff', border: 'none', cursor: 'pointer' }}
      >Enviar puntuación</button>
      {submitted && rating !== null && (
        <div style={{ marginTop: 24 }}>
          <span>
            ¡Gracias por tu reseña!
          </span>
          {/* {rating >= 3 && (
            <div style={{ marginTop: 16 }}>
              <p>¿Te animas a repetir tu reseña en Google Maps?</p>
              <a
                href={`https://search.google.com/local/writereview?placeid=${shop.place_id}`}
                target="_blank"
                rel="noopener"
                style={{
                  color: '#fff',
                  background: '#34a853',
                  padding: '10px 22px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontWeight: 600,
                  marginTop: 8,
                  display: 'inline-block'
                }}
              >Dejar reseña en Google Maps</a>
            </div>
          )} */}
        </div>
      )}
    </form>
  );
}