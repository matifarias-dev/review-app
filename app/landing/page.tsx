import Link from 'next/link';

export default function LandingPage() {
  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      lineHeight: 1.6,
      color: '#333'
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #275d3c 0%, #34a853 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            PuntuAr App
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '40px',
            opacity: 0.95
          }}>
            La plataforma definitiva para gestionar reseñas y mejorar la reputación online de tu comercio
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: 'white',
              color: '#275d3c',
              padding: '15px 30px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s'
            }}>
              Comenzar Ahora
            </button>
            <button style={{
              background: 'transparent',
              color: 'white',
              padding: '15px 30px',
              fontSize: '1.1rem',
              border: '2px solid white',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              Login
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '60px',
            color: '#275d3c'
          }}>
            ¿Cómo funciona PuntuAr?
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px' 
          }}>
            {/* Feature 1 */}
            <div style={{ 
              background: 'white', 
              padding: '40px', 
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '20px',
                color: '#275d3c'
              }}>
                📱
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '15px',
                color: '#275d3c'
              }}>
                Acceso por QR
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Tus clientes escanean un código QR y acceden directamente a la página de valoración de tu comercio. Simple y rápido.
              </p>
            </div>

            {/* Feature 2 */}
            <div style={{ 
              background: 'white', 
              padding: '40px', 
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '20px',
                color: '#F3BF1A'
              }}>
                ⭐
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '15px',
                color: '#275d3c'
              }}>
                Sistema de Estrellas
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Valoración de 1 a 5 estrellas de forma intuitiva. Captura la experiencia del cliente en segundos.
              </p>
            </div>

            {/* Feature 3 */}
            <div style={{ 
              background: 'white', 
              padding: '40px', 
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '20px',
                color: '#4285f4'
              }}>
                🔄
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '15px',
                color: '#275d3c'
              }}>
                Integración Google
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Las reseñas positivas se redirigen automáticamente a Google Maps para mejorar tu reputación online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '60px',
            color: '#275d3c'
          }}>
            Proceso Inteligente
          </h2>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '40px' 
          }}>
            {/* Step 1 */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '30px',
              flexWrap: 'wrap'
            }}>
              <div style={{ 
                minWidth: '80px',
                height: '80px',
                background: '#275d3c',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                1
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '10px',
                  color: '#275d3c'
                }}>
                  Cliente valora tu servicio
                </h3>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>
                  El cliente escanea el QR y puntúa su experiencia del 1 al 5.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '30px',
              flexWrap: 'wrap'
            }}>
              <div style={{ 
                minWidth: '80px',
                height: '80px',
                background: '#34a853',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                2
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '10px',
                  color: '#275d3c'
                }}>
                  Clasificación inteligente
                </h3>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>
                  <strong>⭐ 4-5 estrellas:</strong> Se redirige a Google Maps para dejar reseña pública<br/>
                  <strong>⭐ 1-3 estrellas:</strong> Se solicita feedback privado para mejorar
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '30px',
              flexWrap: 'wrap'
            }}>
              <div style={{ 
                minWidth: '80px',
                height: '80px',
                background: '#F3BF1A',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                3
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '10px',
                  color: '#275d3c'
                }}>
                  Mejora continua
                </h3>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>
                  Todas las valoraciones se guardan en tu panel para analizar tendencias y áreas de mejora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '60px',
            color: '#275d3c'
          }}>
            Beneficios para tu negocio
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '30px' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📈</div>
              <h3 style={{ color: '#275d3c', marginBottom: '10px' }}>Mejora tu reputación</h3>
              <p style={{ color: '#666' }}>Las reseñas positivas van directamente a Google Maps</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💬</div>
              <h3 style={{ color: '#275d3c', marginBottom: '10px' }}>Feedback constructivo</h3>
              <p style={{ color: '#666' }}>Recibe comentarios privados para mejorar tu servicio</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⚡</div>
              <h3 style={{ color: '#275d3c', marginBottom: '10px' }}>Fácil implementación</h3>
              <p style={{ color: '#666' }}>Solo necesitas imprimir un código QR</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📊</div>
              <h3 style={{ color: '#275d3c', marginBottom: '10px' }}>Análisis detallado</h3>
              <p style={{ color: '#666' }}>Estadísticas completas de la satisfacción del cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '40px',
            color: '#275d3c'
          }}>
            Tecnología de vanguardia
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666', 
            marginBottom: '40px' 
          }}>
            Construido con las últimas tecnologías para garantizar velocidad, seguridad y escalabilidad
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px', 
            flexWrap: 'wrap',
            marginTop: '40px'
          }}>
            <div style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '10px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
              minWidth: '120px'
            }}>
              <strong style={{ color: '#275d3c' }}>Next.js</strong>
              <p style={{ color: '#666', fontSize: '0.9rem', margin: '5px 0 0 0' }}>Frontend & Backend</p>
            </div>
            <div style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '10px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
              minWidth: '120px'
            }}>
              <strong style={{ color: '#275d3c' }}>PostgreSQL</strong>
              <p style={{ color: '#666', fontSize: '0.9rem', margin: '5px 0 0 0' }}>Base de datos</p>
            </div>
            <div style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '10px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
              minWidth: '120px'
            }}>
              <strong style={{ color: '#275d3c' }}>Supabase</strong>
              <p style={{ color: '#666', fontSize: '0.9rem', margin: '5px 0 0 0' }}>Almacenamiento</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #275d3c 0%, #34a853 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            ¿Listo para mejorar tu reputación online?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '40px',
            opacity: 0.95
          }}>
            Únete a los comercios que ya están transformando sus reseñas en crecimiento
          </p>
          <button style={{
            background: 'white',
            color: '#275d3c',
            padding: '20px 40px',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s'
          }}>
            Comenzar gratis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#2c3e50',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '10px',
            color: '#34a853'
          }}>
            PuntuAr App
          </h3>
          <p style={{ 
            color: '#bdc3c7', 
            marginBottom: '20px' 
          }}>
            Transformando la gestión de reseñas para comercios modernos
          </p>
          <div style={{ 
            borderTop: '1px solid #34495e', 
            paddingTop: '20px',
            color: '#95a5a6',
            fontSize: '0.9rem'
          }}>
            © 2025 PuntuAr App. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
