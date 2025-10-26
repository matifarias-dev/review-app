'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Review {
  id: number;
  shop_uuid: string;
  rating: number;
  comment: string;
  created_at: string;
}

interface Shop {
  id: number;
  shop_uuid: string;
  place_id: string;
  formatted_address: string;
  name: string;
  logo_url: string;
  ratingGoal: number;
  created_at: string;
  reviews: Review[];
}

export default function ShopDashboard() {
  const params = useParams();
  const shop_uuid = params.shop_uuid as string;
  
  const [shopData, setShopData] = useState<Shop | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'positive' | 'negative'>('all');

  useEffect(() => {
    fetchShopData();
  }, [shop_uuid]);

  const fetchShopData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/review?shop_uuid=${shop_uuid}&includeShop=true`);
      
      if (!response.ok) {
        throw new Error('Error al cargar los datos');
      }
      
      const data = await response.json();
      setShopData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const getFilteredReviews = () => {
    if (!shopData?.reviews) return [];
    
    switch (filter) {
      case 'positive':
        return shopData.reviews.filter(review => review.rating > shopData.ratingGoal);
      case 'negative':
        return shopData.reviews.filter(review => review.rating <= shopData.ratingGoal);
      default:
        return shopData.reviews;
    }
  };

  const getStats = () => {
    if (!shopData?.reviews) return { total: 0, average: 0, positive: 0, negative: 0 };
    
    const reviews = shopData.reviews;
    const total = reviews.length;
    const average = total > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / total : 0;
    const positive = reviews.filter(r => r.rating > shopData.ratingGoal).length;
    const negative = reviews.filter(r => r.rating <= shopData.ratingGoal).length;
    
    return { total, average, positive, negative };
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⏳</div>
        <h2 style={{ color: '#275d3c', marginBottom: '10px' }}>Cargando dashboard...</h2>
        <p style={{ color: '#6c757d' }}>Obteniendo información del comercio</p>
      </div>
    );
  }

  if (error || !shopData) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: '3rem', marginBottom: '20px' }}>❌</div>
        <h2 style={{ color: '#dc3545', marginBottom: '10px' }}>Error al cargar datos</h2>
        <p style={{ color: '#6c757d', marginBottom: '20px' }}>{error || 'Comercio no encontrado'}</p>
        <button 
          onClick={fetchShopData}
          style={{
            background: '#275d3c',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          🔄 Reintentar
        </button>
      </div>
    );
  }

  const stats = getStats();
  const filteredReviews = getFilteredReviews();

  return (
    <div>
      {/* Header del comercio */}
      <div style={{
        background: 'white',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <img
            src={shopData.logo_url}
            alt={`Logo de ${shopData.name}`}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '12px',
              objectFit: 'cover'
            }}
          />
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#275d3c',
              margin: '0 0 8px 0'
            }}>
              {shopData.name}
            </h1>
            <p style={{ color: '#6c757d', margin: '0 0 8px 0' }}>
              📍 {shopData.formatted_address}
            </p>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{
                background: '#e8f5e8',
                color: '#275d3c',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>
                🎯 Meta: {shopData.ratingGoal}+ estrellas
              </span>
              <span style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                ID: {shopData.shop_uuid}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📊</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#275d3c' }}>{stats.total}</div>
          <div style={{ color: '#6c757d', fontSize: '0.9rem' }}>Total Reviews</div>
        </div>

        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>⭐</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#F3BF1A' }}>
            {stats.average.toFixed(1)}
          </div>
          <div style={{ color: '#6c757d', fontSize: '0.9rem' }}>Promedio</div>
        </div>

        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>👍</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>{stats.positive}</div>
          <div style={{ color: '#6c757d', fontSize: '0.9rem' }}>Positivas</div>
        </div>

        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>👎</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#dc3545' }}>{stats.negative}</div>
          <div style={{ color: '#6c757d', fontSize: '0.9rem' }}>Negativas</div>
        </div>
      </div>

      {/* Filtros */}
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#275d3c' }}>Filtrar Reviews</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {[
            { key: 'all', label: '📋 Todas', count: stats.total },
            { key: 'positive', label: '😊 Positivas', count: stats.positive },
            { key: 'negative', label: '😞 Negativas', count: stats.negative }
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              style={{
                padding: '10px 20px',
                border: filter === key ? '2px solid #275d3c' : '1px solid #e9ecef',
                borderRadius: '25px',
                background: filter === key ? '#e8f5e8' : 'white',
                color: filter === key ? '#275d3c' : '#6c757d',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.2s'
              }}
            >
              {label} ({count})
            </button>
          ))}
        </div>
      </div>

      {/* Listado de Reviews */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #e9ecef',
          background: '#f8f9fa'
        }}>
          <h3 style={{ margin: 0, color: '#275d3c' }}>
            📝 Reviews ({filteredReviews.length})
          </h3>
        </div>

        {filteredReviews.length === 0 ? (
          <div style={{ padding: '60px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📭</div>
            <h4 style={{ color: '#6c757d', margin: '0 0 10px 0' }}>No hay reviews</h4>
            <p style={{ color: '#6c757d', margin: 0 }}>
              {filter === 'all' 
                ? 'Aún no se han recibido reviews para este comercio'
                : `No hay reviews ${filter === 'positive' ? 'positivas' : 'negativas'} para mostrar`
              }
            </p>
          </div>
        ) : (
          <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
            {filteredReviews.map((review, index) => (
              <div
                key={review.id}
                style={{
                  padding: '20px',
                  borderBottom: index < filteredReviews.length - 1 ? '1px solid #f1f3f4' : 'none'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '10px',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <div style={{
                    color: review.rating > shopData.ratingGoal ? '#F3BF1A' : '#6c757d',
                    fontSize: '1.2rem',
                    fontWeight: 'bold'
                  }}>
                    {renderStars(review.rating)} ({review.rating}/5)
                  </div>
                  <div style={{
                    color: '#6c757d',
                    fontSize: '0.9rem'
                  }}>
                    {formatDate(review.created_at)}
                  </div>
                </div>
                
                {review.comment && (
                  <div style={{
                    background: '#f8f9fa',
                    padding: '15px',
                    borderRadius: '8px',
                    borderLeft: `4px solid ${review.rating > shopData.ratingGoal ? '#28a745' : '#dc3545'}`,
                    marginTop: '10px'
                  }}>
                    <p style={{
                      margin: 0,
                      color: '#495057',
                      lineHeight: 1.5,
                      fontStyle: review.comment ? 'normal' : 'italic'
                    }}>
                      {review.comment || 'Sin comentarios'}
                    </p>
                  </div>
                )}

                <div style={{
                  display: 'flex',
                  gap: '10px',
                  marginTop: '10px',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    background: review.rating > shopData.ratingGoal ? '#d4edda' : '#f8d7da',
                    color: review.rating > shopData.ratingGoal ? '#155724' : '#721c24',
                    padding: '4px 12px',
                    borderRadius: '15px',
                    fontSize: '0.8rem'
                  }}>
                    {review.rating > shopData.ratingGoal ? '🎉 Positiva' : '📝 Feedback'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}