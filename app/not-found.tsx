
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '500px',
        background: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        border: '1px solid #e9ecef'
      }}>
        {/* Imagen 404 */}
        <div style={{ marginBottom: '30px' }}>
          <Image
            src="/images/not-found.png"
            alt="Página no encontrada"
            width={300}
            height={200}
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '10px'
            }}
          />
        </div>

        {/* Título */}
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#275d3c',
          marginBottom: '15px',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          404
        </h1>

        {/* Subtítulo */}
        <h2 style={{
          fontSize: '1.5rem',
          color: '#6c757d',
          marginBottom: '20px',
          fontWeight: 'normal'
        }}>
          ¡Oops! Página no encontrada
        </h2>

        {/* Descripción */}
        <p style={{
          fontSize: '1.1rem',
          color: '#6c757d',
          lineHeight: 1.6,
          marginBottom: '30px'
        }}>
          La página que buscas no existe o ha sido movida. 
          Te invitamos a conocer más sobre PuntuAr App.
        </p>

        {/* Botones */}
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link 
            href="/landing"
            style={{
              background: 'linear-gradient(135deg, #275d3c 0%, #34a853 100%)',
              color: 'white',
              padding: '12px 25px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              borderRadius: '50px',
              boxShadow: '0 4px 15px rgba(39, 93, 60, 0.3)',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-block'
            }}
          >
            🏠 Ir a inicio
          </Link>

          <Link 
            href="/landing"
            style={{
              background: 'white',
              color: '#275d3c',
              padding: '12px 25px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              borderRadius: '50px',
              border: '2px solid #275d3c',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              display: 'inline-block'
            }}
          >
            ✨ Descubrir PuntuAr
          </Link>
        </div>

        {/* Información adicional */}
        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '10px',
          border: '1px solid #e9ecef'
        }}>
          <p style={{
            fontSize: '0.9rem',
            color: '#6c757d',
            margin: 0,
            lineHeight: 1.5
          }}>
            💡 <strong>¿Tienes un código QR de algún comercio?</strong><br/>
            Escanéalo para acceder directamente a la página de valoración.
          </p>
        </div>
      </div>

      {/* Footer pequeño */}
      <div style={{
        marginTop: '40px',
        textAlign: 'center',
        color: '#6c757d',
        fontSize: '0.9rem'
      }}>
        <p>
          Desarrollado con ❤️ por <strong style={{ color: '#275d3c' }}>PuntuAr App</strong>
        </p>
      </div>
    </div>
  );
}