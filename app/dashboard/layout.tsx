import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e9ecef',
        padding: '0 20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link 
              href="/landing" 
              style={{
                textDecoration: 'none',
                color: '#275d3c',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}
            >
              📊 PuntuAr Dashboard
            </Link>
          </div>
          
          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link 
              href="/landing" 
              style={{
                textDecoration: 'none',
                color: '#6c757d',
                fontSize: '0.9rem',
                padding: '8px 16px',
                borderRadius: '20px',
                transition: 'all 0.2s'
              }}
            >
              🏠 Inicio
            </Link>
            <div style={{
              padding: '8px 16px',
              backgroundColor: '#275d3c',
              color: 'white',
              borderRadius: '20px',
              fontSize: '0.9rem'
            }}>
              👤 Dashboard
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        marginTop: '60px',
        padding: '40px 20px',
        backgroundColor: 'white',
        borderTop: '1px solid #e9ecef',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          color: '#6c757d',
          fontSize: '0.9rem'
        }}>
          <p style={{ margin: 0 }}>
            © 2025 PuntuAr App - Gestión inteligente de reseñas
          </p>
        </div>
      </footer>
    </div>
  );
}