import React from 'react';
import Layout from '@theme/Layout';

export default function Impressum() {
  return (
    <Layout>
      <div style={{ margin: '50px auto', maxWidth: '1200px', fontSize: '20px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '40px', fontWeight: 'bold' }}>Impressum</h1>
        <p style={{ textAlign: 'center', margin: 0 }}>
          Die folgenden Angaben gelten für die Geschäftsaktivitäten der Mark Zeitler Engineering UG
          (haftungsbeschränkt):
        </p>
        <hr style={{ margin: '15px 0' }} />
        <p style={{ margin: "70px" }}/>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginLeft: "70px" }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Mark Zeitler <br /> Engineering UG</h2>
            <p style={{ margin: 0 }}>Schumannstr. 15</p>
            <p style={{ margin: 0 }}>16359 Biesenthal</p>
            <p style={{ margin: 0 }}>
              <a href="mailto:info@markzeitler.de">info@markzeitler.de</a>
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Kontakt:</h2>
            <p style={{ margin: 0 }}>Telefon: +49 30 12345678</p>
          </div>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Geschäftsführer:</h2>
            <p style={{ margin: 0 }}>Mark Zeitler</p>
          </div>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Sitz der Gesellschaft:</h2>
            <p style={{ margin: 0 }}>Biesenthal</p>
            <p style={{ margin: 0 }}>Amtsgericht Frankfurt (Oder) HRB 12527 FF</p>
          </div>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Umsatzsteuer-ID:</h2>
            <p style={{ margin: 0 }}>DE123456789</p>
          </div>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Registrierungsnummer EAR:</h2>
            <p style={{ margin: 0 }}>WEEE-Reg.-Nr. DE 987654321</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}