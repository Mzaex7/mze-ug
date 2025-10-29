import React from 'react';
import Layout from '@theme/Layout';
import styles from './Referenzen.module.css';

export default function Referenzen() {
  const references = [
    {
      country: 'Deutschland',
      flag: '🇩�',
      projects: [
        {
          title: 'Vattenfall',
          date: 'Oktober 2009',
          description: 'Umprogrammierung einer Siemens-Steuerung (5 x 135U vernetzt), Automatische Anfahrschaltung von 3 DEs und 1 HWE'
        },
        {
          title: 'Deutsche Bahn Eberswalde',
          date: 'Januar 2010',
          description: 'Umbau der Abwasseraufbereitung (ECF1000 in CPU 315-2DP und ET200s)'
        },
        {
          title: 'Stadtentwässerung Düsseldorf',
          date: 'März 2010',
          description: 'Wartung der Dampfkesselanlage, Betrieb mit Erd- und Faulgas - Brennereinstellungen (Lamtec FMS)'
        },
        {
          title: 'Schako-Messkirch',
          date: 'Oktober 2010',
          description: 'Wartung Prüföfen'
        },
        {
          title: 'Dortmund',
          date: 'April 2011',
          description: 'Umbau eines Deckenprüfofens'
        },
        {
          title: 'DMT Lathen',
          date: 'April/Mai 2011',
          description: 'Wandprüfofen: Brennerwartung/Optimierung, Erweiterung um 80 Objekttemperaturen'
        },
        {
          title: 'Xella - Bad Grund',
          date: 'Juni 2011',
          description: 'Kleinprüfofen - Erneuerung der E-Technik, VIPA-ET200s, FU Siemens'
        }
      ]
    },
    { country: '🇨🇱 Chile', icon: '🏔️', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Verschiedene Automatisierungsprojekte' }] },
    { country: '�� China', icon: '🏯', projects: [{ title: 'Diverse Standorte', date: '2010-2024', description: 'Über 20 erfolgreiche Projekte in verschiedenen Regionen' }] },
    { country: '🇮🇳 Nord Indien', icon: '🕌', projects: [{ title: 'Delhi Region', date: '2010-2024', description: 'Automatisierungsprojekte in der Hauptstadtregion' }] },
    {
      country: '🇹🇭 Thailand',
      icon: '🔥',
      projects: [
        {
          title: 'Thermische Abgasreinigung',
          date: 'Oktober 2011',
          description: 'S7-400HF - Programmierung + Inbetriebnahme 2 Stk. Therm. Abgasreinigungen mit je Abhitzekessel, Wäscher usw.'
        }
      ]
    },
    { country: '🇲🇽 Mexiko', icon: '🌮', projects: [{ title: 'Puebla', date: '2010-2024', description: 'Industrieautomatisierung' }] },
    { country: '🇮🇹 Italien', icon: '🍝', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Automatisierungstechnik' }] },
    { country: '🇪🇸 Spanien', icon: '🎸', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Steuerungssysteme' }] },
    { country: '🇵🇹 Portugal', icon: '⚓', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Industrieautomation' }] },
    { country: '🇫🇷 Frankreich', icon: '🥐', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Automatisierungslösungen' }] },
    { country: '🇮🇪 Irland', icon: '☘️', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Engineering-Dienstleistungen' }] },
    { country: '🇷🇴 Rumänien', icon: '🏰', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Prozessautomatisierung' }] },
    { country: '🇵🇱 Polen', icon: '🦅', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Steuerungstechnik' }] },
    { country: '🇨🇿 Tschechien', icon: '🍺', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Automatisierungsprojekte' }] },
    { country: '🇱🇺 Luxemburg', icon: '💶', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Engineering-Lösungen' }] },
    { country: '🇨🇭 Schweiz', icon: '⛰️', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Präzisions-Automatisierung' }] },
    { country: '🇦🇹 Österreich', icon: '🎿', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Industriesteuerungen' }] },
    { country: '🇸🇪 Schweden', icon: '👑', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Automatisierungstechnik' }] },
    { country: '🇫🇮 Finnland', icon: '🦌', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Prozesssteuerung' }] },
    { country: '🇱🇻 Lettland', icon: '🌲', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Automatisierungssysteme' }] },
    { country: '🇬🇧 UK', icon: '☕', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Engineering-Services' }] },
    { country: '🇧🇪 Belgien', icon: '🍫', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Industrieautomation' }] },
    { country: '🇻🇳 Vietnam', icon: '🍜', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Automatisierungslösungen' }] },
    { country: '🇶🇦 Katar', icon: '🏜️', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Prozessautomatisierung' }] },
    {
      country: '�� Saudi Arabien',
      icon: '⚗️',
      projects: [
        {
          title: 'Chemie',
          date: 'Februar 2010',
          description: 'Inbetriebnahme einer Thermischen Abgasreinigung (sicherheitsgerichtete Siemens S7-400H/F-Steuerung und WINCC V7 mit redundanter Modbusanbindung)'
        },
        {
          title: 'Chemie',
          date: 'April 2010',
          description: 'Realisierung einer Verfahrensänderung (Umprogrammierung) von 2 Stk. Thermische Abgasreinigungen'
        },
        {
          title: 'Thermal Oxydiser',
          date: 'November 2010',
          description: 'IBN eines Thermal Oxydisers; WinCC7; S7-400HF'
        }
      ]
    },
    { country: '🇲🇦 Marokko', icon: '🐪', projects: [{ title: 'Projekt', date: '2010-2024', description: 'Engineering-Projekte' }] }
  ];

  return (
    <Layout title="Referenzen">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Unsere Referenzen
          </h1>
          <p className={styles.subtitle}>
            Internationale Projekte und erfolgreiche Zusammenarbeit
          </p>
          <p className={styles.note}>
            Die Auflistung wird laufend aktualisiert.
          </p>
        </div>

        <div className={styles.grid}>
          {references.map((ref, idx) => (
            <div key={idx} className={styles.countryCard}>
              <div className={styles.countryHeader}>
                <span className={styles.icon}>{ref.icon}</span>
                <h2 className={styles.countryName}>
                  {ref.country}
                </h2>
              </div>

              <div className={styles.projectsContainer}>
                {ref.projects.map((project, projectIdx) => (
                  <div key={projectIdx} className={styles.projectCard}>
                    <div className={styles.projectHeader}>
                      <h3 className={styles.projectTitle}>
                        {project.title}
                      </h3>
                      <span className={styles.projectDate}>
                        {project.date}
                      </span>
                    </div>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <h3 className={styles.footerTitle}>
            🌍 Internationale Expertise
          </h3>
          <p className={styles.footerText}>
            Mit erfolgreichen Projekten in Deutschland, Saudi-Arabien, Indien und Thailand 
            bieten wir internationale Erfahrung in der Automatisierungstechnik und Prozessoptimierung.
          </p>
        </div>
      </div>
    </Layout>
  );
}