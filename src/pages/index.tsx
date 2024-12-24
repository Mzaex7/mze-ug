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
    const offset = -100; // Adjust this value to your needs
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
              <Button onClick={scrollToFirstText} /> {/* Übergebe die scrollToFirstText-Funktion als onClick-Prop */}
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
              Mit einer langjährigen Erfahrung und einem hohen Maß an Flexibilität bieten wir unseren Kunden maßgeschneiderte Lösungen in allen Phasen von Projekten – <br/> von der Planung bis zur Umsetzung.
            </p>
          </div>
        </div>
        <h2 className={`${styles.sectionTitle} padding-left-180`}>Dienstleistungen:</h2>
        <ul className={`${styles.list} padding-left-180`}>
          <li>Sicherheitstechnische Prüfungen und Brennereinstellungen von Feuerungsanlagen (thermische Abgasreinigungen, Dampf- und Heißwassererzeuger und Sonderofenbau)</li>
          <li>Störungsbeseitigung in Elektro- und MSR-Anlagen (bis 1kV), Feuerungsanlagen</li>
          <li>Projektierung, Programmierung und Inbetriebnahme von:</li>
          <ul>
            <li>S5- und S7 Steuerungen mit Profibus- und Ethernetanbindung (Thermische Abgasreinigungsanlagen / Feuerungsanlagen in der chemischen Industrie; Produktions- und Fördertechnikanlagen in der Automobilindustrie; Prüföfen/Sonderofenbau)</li>
            <li>Hima-Steuerungen mittels Elop II NT/XP und Elop II Factory</li>
            <li>Reglern diverser Hersteller (Siemens, H&B, ABB, PMA, Phillips, K&P, Mytec und Lamtec)</li>
            <li>Schneider Steuerungen (Concept)</li>
            <li>Visualisierungssystemen Intouch (Wonderware), WINCC (Siemens), Wizcon Supervisor (Emation)</li>
            <li>Siemens Operator- / Touch- und Multipanels mit Protool oder Wincc Flex.</li>
            <li>Meßdatenerfassungssystem / Visualisierung – PMA’s MSI-WPCI</li>
            <li>Frequenzumrichtern div. Hersteller</li>
          </ul>
          <li>Fernwartung (z.B. pcAnywhere, VNC und Teleservice)</li>
          <li>Projektierung, Montage und Inbetriebnahme von Automatisierungsanlagen</li>
          <li>Aufbau, Installation, Sicherung und Konfiguration von PC-Systemen inkl. Netzwerk</li>
        </ul>
      </div>
    </Layout>
  );
}