import React from 'react';
import Layout from '@theme/Layout';

export default function Impressum() {
  return (
    <Layout>
      <div style={{ 
        margin: '0 auto', 
        maxWidth: '1200px', 
        padding: '80px 40px',
        fontSize: '18px',
        animation: 'fadeIn 0.8s ease-out'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          fontSize: '48px', 
          fontWeight: 'bold',
          background: 'var(--gradient-primary)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '20px'
        }}>
          Impressum
        </h1>
        <p style={{ 
          textAlign: 'center', 
          margin: '0 0 40px 0',
          fontSize: '20px',
          color: 'var(--ifm-color-emphasis-700)'
        }}>
          Die folgenden Angaben gelten für die Geschäftsaktivitäten der Mark Zeitler Engineering UG
          (haftungsbeschränkt)
        </p>
        <hr style={{ 
          margin: '40px auto', 
          maxWidth: '200px',
          height: '3px',
          background: 'var(--gradient-primary)',
          border: 'none',
          borderRadius: '2px'
        }} />
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px', 
          marginTop: '60px'
        }}>
          <div className="impressum-box">
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold',
              color: 'var(--ifm-color-primary)',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              🏢 Mark Peer Zeitler Engineering UG
            </h2>
            <p style={{ margin: '10px 0', lineHeight: '1.8' }}>Schumannstr. 15</p>
            <p style={{ margin: '10px 0', lineHeight: '1.8' }}>16359 Biesenthal</p>
            <p style={{ margin: '10px 0', lineHeight: '1.8' }}>
              <a href="mailto:info@markzeitler.de" style={{
                color: 'var(--ifm-color-primary)',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.2s'
              }}>
                📧 info@markzeitler.de
              </a>
            </p>
          </div>
          
          <div className="impressum-box">
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold',
              color: 'var(--ifm-color-primary)',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              📞 Kontakt
            </h2>
            <p style={{ margin: '10px 0', lineHeight: '1.8' }}>
              Telefon: <strong>+49 172 3833590</strong>
            </p>
          </div>
          
          <div className="impressum-box">
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold',
              color: 'var(--ifm-color-primary)',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              👤 Geschäftsführer
            </h2>
            <p style={{ margin: '10px 0', lineHeight: '1.8' }}>Mark Zeitler</p>
          </div>
          
          <div className="impressum-box">
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold',
              color: 'var(--ifm-color-primary)',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              🏛️ Sitz der Gesellschaft
            </h2>
            <p style={{ margin: '10px 0', lineHeight: '1.8' }}>Biesenthal</p>
            <p style={{ margin: '10px 0', lineHeight: '1.8' }}>Amtsgericht Frankfurt (Oder)</p>
            <p style={{ margin: '10px 0', lineHeight: '1.8' }}>HRB 12527 FF</p>
          </div>
          
          <div className="impressum-box">
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold',
              color: 'var(--ifm-color-primary)',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              💼 Umsatzsteuer-ID
            </h2>
            <p style={{ margin: '10px 0', lineHeight: '1.8' }}>DE265935486</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
