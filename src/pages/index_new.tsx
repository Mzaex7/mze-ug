import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Button from './button';

export default function Home(): JSX.Element {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const scrollToFirstText = () => {
    const element = document.getElementById('first-text');
    const offset = -100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      wrapperClassName='es-footer-white'
    >
      <div className={styles.hero}>
        <div className={styles.titleContainer}>
          <div className={styles.titleTextContainer}>
            <h1 className={styles.title}>
              Mark Zeitler
              <br />
              Engineering UG
            </h1>
            <div className={styles.buttonContainer}>
              <Button onClick={scrollToFirstText} />
            </div>
          </div>
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.adjectiveBlock}>
            <p className={`${styles.adjective1} padding-left-180`}>erfahren</p>
            <p className={`${styles.adjective2} padding-left-180`}>zuverlässig</p>
            <p className={`${styles.adjective3} padding-left-180`}>flexibel</p>
            <p className={`${styles.adjective4} padding-left-180`}>effizient</p>
          </div>
          <div className={styles.contentText}>
            <p className={styles.subtitle} id="first-text">
              Über uns
            </p>
            <p>
              Mark Zeitler Engineering ist ein Service- und Beratungsunternehmen, das sich auf Engineering-Leistungen in der Elektrotechnik und Leittechnik spezialisiert hat.
              Mit einer langjährigen Erfahrung und einem hohen Maß an Flexibilität bieten wir unseren Kunden maßgeschneiderte Lösungen in allen Phasen von Projekten – von der Planung bis zur Umsetzung.
            </p>
          </div>
        </div>

        <div className="padding-left-180" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 className={styles.sectionTitle}>Dienstleistungen</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px',
            marginBottom: '80px'
          }}>
            <div className={styles.serviceCard} style={{ animationDelay: '0.1s' }}>
              <h3 style={{ color: 'var(--ifm-color-primary)', marginBottom: '15px', fontSize: '24px' }}>
                🔧 Prüfung & Einstellung
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>✓ Sicherheitstechnische Prüfungen von Feuerungsanlagen</li>
                <li style={{ marginBottom: '10px' }}>✓ Brennereinstellungen</li>
                <li style={{ marginBottom: '10px' }}>✓ Thermische Abgasreinigungen</li>
                <li>✓ Dampf- und Heißwassererzeuger</li>
              </ul>
            </div>

            <div className={styles.serviceCard} style={{ animationDelay: '0.2s' }}>
              <h3 style={{ color: 'var(--ifm-color-primary)', marginBottom: '15px', fontSize: '24px' }}>
                🛠️ Störungsbeseitigung
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>✓ Elektro- und MSR-Anlagen (bis 1kV)</li>
                <li style={{ marginBottom: '10px' }}>✓ Feuerungsanlagen</li>
                <li style={{ marginBottom: '10px' }}>✓ Schnelle Fehlerdiagnose</li>
                <li>✓ Zuverlässige Reparaturen</li>
              </ul>
            </div>

            <div className={styles.serviceCard} style={{ animationDelay: '0.3s' }}>
              <h3 style={{ color: 'var(--ifm-color-primary)', marginBottom: '15px', fontSize: '24px' }}>
                💻 Programmierung & Steuerung
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>✓ S5- und S7 Steuerungen (Profibus/Ethernet)</li>
                <li style={{ marginBottom: '10px' }}>✓ Hima-Steuerungen (Elop II)</li>
                <li style={{ marginBottom: '10px' }}>✓ Schneider Steuerungen (Concept)</li>
                <li>✓ Diverse Regler (Siemens, ABB, PMA, etc.)</li>
              </ul>
            </div>

            <div className={styles.serviceCard} style={{ animationDelay: '0.4s' }}>
              <h3 style={{ color: 'var(--ifm-color-primary)', marginBottom: '15px', fontSize: '24px' }}>
                📊 Visualisierung
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>✓ Intouch (Wonderware)</li>
                <li style={{ marginBottom: '10px' }}>✓ WINCC (Siemens)</li>
                <li style={{ marginBottom: '10px' }}>✓ Wizcon Supervisor (Emation)</li>
                <li>✓ Siemens Operator-/Touch-/Multipanels</li>
              </ul>
            </div>

            <div className={styles.serviceCard} style={{ animationDelay: '0.5s' }}>
              <h3 style={{ color: 'var(--ifm-color-primary)', marginBottom: '15px', fontSize: '24px' }}>
                🚀 Inbetriebnahme
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>✓ Automatisierungsanlagen</li>
                <li style={{ marginBottom: '10px' }}>✓ Thermische Abgasreinigungen</li>
                <li style={{ marginBottom: '10px' }}>✓ Dampf- und Heißwassererzeuger</li>
                <li>✓ Brennersteuerungen</li>
              </ul>
            </div>

            <div className={styles.serviceCard} style={{ animationDelay: '0.6s' }}>
              <h3 style={{ color: 'var(--ifm-color-primary)', marginBottom: '15px', fontSize: '24px' }}>
                🌐 Support & Service
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>✓ Fernwartung (pcAnywhere, VNC, Teleservice)</li>
                <li style={{ marginBottom: '10px' }}>✓ PC-Systeme & Netzwerk</li>
                <li style={{ marginBottom: '10px' }}>✓ Frequenzumrichter</li>
                <li>✓ Meßdatenerfassungssysteme</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
