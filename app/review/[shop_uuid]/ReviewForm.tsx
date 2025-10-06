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
  const [showRedirectButton, setShowRedirectButton] = useState(false);

  const googleReviewUrl = `https://search.google.com/local/writereview?placeid=${shop.place_id}`;

  // Detectar si estamos en iOS
  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  };

  const openGoogleReview = () => {
    if (isIOS()) {
      // En iOS, usar location.href para evitar problemas con popups
      window.location.href = googleReviewUrl;
    } else {
      // En otros dispositivos, usar window.open
      const newWindow = window.open(googleReviewUrl, '_blank');
      
      // Verificar si se bloqueó el popup
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        setShowRedirectButton(true);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Para Safari/iPhone: abrir la ventana ANTES del fetch asíncrono
    let newWindow: Window | null = null;
    if (rating !== null && rating > shop.ratingGoal && !isIOS()) {
      // Solo para non-iOS: abrir ventana en blanco inmediatamente
      newWindow = window.open('', '_blank');
    }
    
    try {
      // Guardar en base de datos
      await fetch('/api/review', {
        method: 'POST',
        body: JSON.stringify({ shop_uuid: shop.shop_uuid, rating, comment }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      setSubmitted(true);
      
      // Redirigir la ventana ya abierta
      if (newWindow && rating !== null && rating > shop.ratingGoal) {
        newWindow.location.href = googleReviewUrl;
      } else if (rating !== null && rating > shop.ratingGoal) {
        // Fallback: intentar abrir directamente
        openGoogleReview();
      }
    } catch (error) {
      console.error('Error al enviar review:', error);
      // Si hay error, cerrar la ventana abierta
      if (newWindow) {
        newWindow.close();
      }
    }
  };

  return (
    submitted ? (
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <span>¡Gracias por tu opinión!</span>
        {showRedirectButton && (
          <div style={{ marginTop: 16 }}>
            <p style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
              Por favor dejanos tu reseña en Google:
            </p>
            <a 
              href={googleReviewUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-block',
                padding: '8px 16px', 
                backgroundColor: '#4285f4', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: 8,
                fontSize: 14
              }}
            >
              Ir a Google
            </a>
          </div>
        )}
      </div>
    ) : (
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
        </div>
      )}
    </form>
  ));
}