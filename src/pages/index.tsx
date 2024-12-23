import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Button from './button';
import { Hero, ImageAndText, CtaCards, TextCards, FeatureShowcase, CtaImageButton, icons } from '@infinum/docusaurus-theme';


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
        <div className={`${styles.titleContainer} padding-left-180`}>
          <h1 className={styles.title}>
            Mark Zeitler
            <br />
            Engineering UG
          </h1>
          <img src="/img/w-logo.svg" alt="Logo" className={styles.titleImage} />
        </div>
        <Button onClick={scrollToFirstText} /> {/* Übergebe die scrollToFirstText-Funktion als onClick-Prop */}
        <p className={`${styles.subtitle} padding-left-180`} id="first-text">
          Die Mark Zeitler Engineering UG (haftungsbeschränkt) ist ein Service- und Beratungsunternehmen
          für Engineering-Leistungen der Elektrotechnik / Leittechnik
        </p>
        <p className={`${styles.tagline} padding-left-180`}>
          erfahren, zuverlässig, flexibel und effizient
        </p>
        <p className={`${styles.services} padding-left-180`}>
          PROGRAMMIERUNG * REPARATUR * WARTUNG * INBETRIEBNAHME * ANLAGENOPTIMIERUNG
        </p>
        <p className={`${styles.description} padding-left-180`}>
          Ich berate und unterstütze herstellerunabhängig meine Kunden bei der Planung und Umsetzung von
          Elektro- und MSR-technischen Aufgabenstellungen.
        </p>
        <p className={`${styles.description} padding-left-180`}>
          Im Vordergrund steht die durchgängige Unterstützung in allen Phasen eines Projektes.
        </p>
        <h2 className={`${styles.sectionTitle} padding-left-180`}>Die Betätigungsfelder sind insbesondere:</h2>
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