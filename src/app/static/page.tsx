import Link from 'next/link';

export default function StaticPage() {
  return (
    <html>
      <head>
        <title>Static Test Page</title>
      </head>
      <body style={{ 
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{ 
          maxWidth: '800px',
          margin: '0 auto',
          padding: '40px 20px',
          backgroundColor: 'white',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          marginTop: '40px'
        }}>
          <h1 style={{ color: '#333' }}>Static Test Page</h1>
          <p>This is a completely static page with no client-side JavaScript.</p>
          <p>If you can see this, your server-side rendering is working correctly.</p>
          <div style={{ marginTop: '30px' }}>
            <Link 
              href="/"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#0070f3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px'
              }}
            >
              Return to Home
            </Link>
            <Link 
              href="/debug"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                marginLeft: '10px'
              }}
            >
              Go to Debug Page
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
} 