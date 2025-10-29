import React from 'react';
import Layout from '@theme/Layout';
<<<<<<< HEAD
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
=======

export default function Referenzen() {
  const deutschland = {
    country: 'Deutschland',
    flag: '🇩🇪',
    featured: true,
    projects: [
      { title: 'Vattenfall', date: 'Oktober 2009', description: 'Umprogrammierung einer Siemens-Steuerung (5 x 135U vernetzt), Automatische Anfahrschaltung von 3 DEs und 1 HWE' },
      { title: 'Deutsche Bahn Eberswalde', date: 'Januar 2010', description: 'Umbau der Abwasseraufbereitung (ECF1000 in CPU 315-2DP und ET200s)' },
      { title: 'Stadtentwässerung Düsseldorf', date: 'März 2010', description: 'Wartung der Dampfkesselanlage, Betrieb mit Erd- und Faulgas - Brennereinstellungen (Lamtec FMS)' },
      { title: 'Schako-Messkirch', date: 'Oktober 2010', description: 'Wartung Prüföfen' },
      { title: 'Dortmund', date: 'April 2011', description: 'Umbau eines Deckenprüfofens' },
      { title: 'DMT Lathen', date: 'April/Mai 2011', description: 'Wandprüfofen: Brennerwartung/Optimierung, Erweiterung um 80 Objekttemperaturen' },
      { title: 'Xella - Bad Grund', date: 'Juni 2011', description: 'Kleinprüfofen - Erneuerung der E-Technik, VIPA-ET200s, FU Siemens' }
    ]
  };
>>>>>>> 0be8c27 (Modern redesign: PYSolutions-inspired minimalist design mit Scroll-Animationen, optimiertem Footer und Referenzen-Styling)

  const otherCountries = [
    { country: 'Saudi Arabien', flag: '🇸🇦', projects: [
      { title: 'Chemie', date: 'Februar 2010', description: 'Inbetriebnahme einer Thermischen Abgasreinigung (sicherheitsgerichtete Siemens S7-400H/F-Steuerung und WINCC V7 mit redundanter Modbusanbindung)' },
      { title: 'Chemie', date: 'April 2010', description: 'Realisierung einer Verfahrensänderung (Umprogrammierung) von 2 Stk. Thermische Abgasreinigungen' },
      { title: 'Thermal Oxydiser', date: 'November 2010', description: 'IBN eines Thermal Oxydisers; WinCC7; S7-400HF' }
    ]},
    { country: 'Thailand', flag: '🇹🇭', projects: [
      { title: 'Thermische Abgasreinigung', date: 'Oktober 2011', description: 'S7-400HF - Programmierung + Inbetriebnahme 2 Stk. Therm. Abgasreinigungen mit je Abhitzekessel, Wäscher usw.' }
    ]},
    { country: 'Chile', flag: '🇨🇱', projects: [{ title: 'Industrieautomatisierung', date: '2010-2024', description: 'Verschiedene Automatisierungsprojekte' }] },
    { country: 'China', flag: '🇨🇳', projects: [{ title: 'Diverse Standorte', date: '2010-2024', description: 'Über 20 erfolgreiche Projekte in verschiedenen Regionen' }] },
    { country: 'Indien (Nord)', flag: '🇮🇳', projects: [{ title: 'Delhi Region', date: '2010-2024', description: 'Automatisierungsprojekte in der Hauptstadtregion' }] },
    { country: 'Mexiko', flag: '🇲🇽', projects: [{ title: 'Puebla', date: '2010-2024', description: 'Industrieautomatisierung' }] },
    { country: 'Italien', flag: '🇮🇹', projects: [{ title: 'Automatisierungstechnik', date: '2010-2024', description: 'Engineering-Projekte' }] },
    { country: 'Spanien', flag: '🇪🇸', projects: [{ title: 'Steuerungssysteme', date: '2010-2024', description: 'Prozessautomatisierung' }] },
    { country: 'Portugal', flag: '🇵🇹', projects: [{ title: 'Industrieautomation', date: '2010-2024', description: 'Automatisierungslösungen' }] },
    { country: 'Frankreich', flag: '🇫🇷', projects: [{ title: 'Automatisierungslösungen', date: '2010-2024', description: 'Engineering-Services' }] },
    { country: 'Irland', flag: '🇮🇪', projects: [{ title: 'Engineering-Dienstleistungen', date: '2010-2024', description: 'Industriesteuerungen' }] },
    { country: 'Rumänien', flag: '🇷🇴', projects: [{ title: 'Prozessautomatisierung', date: '2010-2024', description: 'Automatisierungsprojekte' }] },
    { country: 'Polen', flag: '🇵🇱', projects: [{ title: 'Steuerungstechnik', date: '2010-2024', description: 'Engineering-Lösungen' }] },
    { country: 'Tschechien', flag: '🇨🇿', projects: [{ title: 'Automatisierungsprojekte', date: '2010-2024', description: 'Prozesssteuerung' }] },
    { country: 'Luxemburg', flag: '🇱🇺', projects: [{ title: 'Engineering-Lösungen', date: '2010-2024', description: 'Automatisierungssysteme' }] },
    { country: 'Schweiz', flag: '🇨🇭', projects: [{ title: 'Präzisions-Automatisierung', date: '2010-2024', description: 'Hochwertige Steuerungssysteme' }] },
    { country: 'Österreich', flag: '🇦🇹', projects: [{ title: 'Industriesteuerungen', date: '2010-2024', description: 'Automatisierungstechnik' }] },
    { country: 'Schweden', flag: '🇸🇪', projects: [{ title: 'Automatisierungstechnik', date: '2010-2024', description: 'Prozessoptimierung' }] },
    { country: 'Finnland', flag: '🇫🇮', projects: [{ title: 'Prozesssteuerung', date: '2010-2024', description: 'Industrieautomation' }] },
    { country: 'Lettland', flag: '🇱🇻', projects: [{ title: 'Automatisierungssysteme', date: '2010-2024', description: 'Engineering-Services' }] },
    { country: 'Vereinigtes Königreich', flag: '🇬🇧', projects: [{ title: 'Engineering-Services', date: '2010-2024', description: 'Automatisierungslösungen' }] },
    { country: 'Belgien', flag: '🇧🇪', projects: [{ title: 'Industrieautomation', date: '2010-2024', description: 'Steuerungssysteme' }] },
    { country: 'Vietnam', flag: '🇻🇳', projects: [{ title: 'Automatisierungslösungen', date: '2010-2024', description: 'Prozessautomatisierung' }] },
    { country: 'Katar', flag: '🇶🇦', projects: [{ title: 'Prozessautomatisierung', date: '2010-2024', description: 'Engineering-Projekte' }] },
    { country: 'Marokko', flag: '🇲🇦', projects: [{ title: 'Engineering-Projekte', date: '2010-2024', description: 'Automatisierungstechnik' }] }
  ];

  return (
    <Layout title="Referenzen">
<<<<<<< HEAD
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
=======
      <div style={{
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '100vh'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{
            fontSize: '42px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #479dc1 0%, #6bbfe3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px',
            letterSpacing: '-0.5px'
          }}>
            Internationale Referenzen
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--ifm-color-emphasis-600)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Erfolgreiche Projekte in über 25 Ländern weltweit
          </p>
        </div>

        {/* Deutschland - Full Width */}
        <div style={{
          background: 'var(--ifm-background-surface-color)',
          borderRadius: '12px',
          padding: '32px',
          border: '1px solid var(--ifm-color-emphasis-300)',
          marginBottom: '40px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#479dc1';
          e.currentTarget.style.boxShadow = '0 8px 24px -8px rgba(71, 157, 193, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-300)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
            paddingBottom: '20px',
            borderBottom: '1px solid var(--ifm-color-emphasis-300)'
          }}>
            <span style={{ fontSize: '32px' }}>{deutschland.flag}</span>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: 'var(--ifm-color-emphasis-900)',
              margin: 0
            }}>
              {deutschland.country}
            </h2>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px'
          }}>
            {deutschland.projects.map((project, idx) => (
              <div key={idx} style={{
                padding: '16px',
                background: 'linear-gradient(135deg, rgba(71, 157, 193, 0.08) 0%, rgba(107, 191, 227, 0.08) 100%)',
                borderRadius: '8px',
                borderLeft: '3px solid #479dc1'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '8px',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'var(--ifm-color-primary)',
                    margin: 0
                  }}>
                    {project.title}
                  </h3>
                  <span style={{
                    fontSize: '13px',
                    color: 'var(--ifm-color-emphasis-600)',
                    fontWeight: '500',
                    whiteSpace: 'nowrap'
                  }}>
                    {project.date}
                  </span>
                </div>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: 'var(--ifm-color-emphasis-700)',
                  margin: 0
                }}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
>>>>>>> 0be8c27 (Modern redesign: PYSolutions-inspired minimalist design mit Scroll-Animationen, optimiertem Footer und Referenzen-Styling)
        </div>

        {/* Other Countries Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {otherCountries.map((ref, idx) => (
            <div key={idx} style={{
              background: 'var(--ifm-background-surface-color)',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid var(--ifm-color-emphasis-300)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#479dc1';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 24px -10px rgba(71, 157, 193, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-300)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px',
                paddingBottom: '16px',
                borderBottom: '1px solid var(--ifm-color-emphasis-300)'
              }}>
                <span style={{ fontSize: '28px' }}>{ref.flag}</span>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--ifm-color-emphasis-900)',
                  margin: 0
                }}>
                  {ref.country}
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {ref.projects.map((project, projectIdx) => (
                  <div key={projectIdx} style={{
                    padding: '14px',
                    background: 'linear-gradient(135deg, rgba(71, 157, 193, 0.08) 0%, rgba(107, 191, 227, 0.08) 100%)',
                    borderRadius: '8px',
                    borderLeft: '3px solid #479dc1'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginBottom: '8px',
                      gap: '12px',
                      flexWrap: 'wrap'
                    }}>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: 'var(--ifm-color-primary)',
                        margin: 0
                      }}>
                        {project.title}
                      </h3>
                      <span style={{
                        fontSize: '13px',
                        color: 'var(--ifm-color-emphasis-600)',
                        fontWeight: '500',
                        whiteSpace: 'nowrap'
                      }}>
                        {project.date}
                      </span>
                    </div>
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: 'var(--ifm-color-emphasis-700)',
                      margin: 0
                    }}>
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '80px',
          padding: '32px',
          background: 'var(--ifm-background-surface-color)',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: 'var(--ifm-color-primary)',
            marginBottom: '12px'
          }}>
            Globale Engineering-Expertise
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: 'var(--ifm-color-emphasis-700)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Zuverlässige Automatisierungslösungen und technische Exzellenz 
            in Europa, Asien, dem Nahen Osten, Nord- und Südamerika sowie Afrika.
          </p>
        </div>
      </div>
    </Layout>
  );
}
