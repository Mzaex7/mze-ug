import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  // OPTIMIERTER Scroll-Effekt - startet früher!
  useEffect(() => {
    const observerRef = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.scrollFadeIn);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll(`.${styles.section}, .${styles.serviceCard}, .${styles.stat}, .${styles.referenceCard}, .${styles.ctaSection}`).forEach((el) => {
      observerRef.observe(el);
    });

    return () => observerRef.disconnect();
  }, []);

  const services = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m5.2-14.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m14.2 5.2l-4.2-4.2m0-6l-4.2-4.2"/>
        </svg>
      ),
      title: 'SPS-Programmierung',
      description: 'Professionelle Programmierung von S7, TIA Portal und Siemens-Steuerungen für Ihre Automatisierungsprojekte.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m5.2-14.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m14.2 5.2l-4.2-4.2m0-6l-4.2-4.2"/>
        </svg>
      ),
      title: 'Inbetriebnahme',
      description: 'Weltweite Inbetriebnahme und Optimierung von Automatisierungsanlagen mit langjähriger Erfahrung.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m5.2-14.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m14.2 5.2l-4.2-4.2m0-6l-4.2-4.2"/>
        </svg>
      ),
      title: 'Optimierung',
      description: 'Analyse und Optimierung bestehender Anlagen für höhere Effizienz und Produktivität.'
    }
  ];

  const references = [
    {
      title: '🇩🇪 Deutschland',
      description: 'Zahlreiche Projekte in der Automatisierungstechnik und Prozessoptimierung'
    },
    {
      title: '🇸🇦 Saudi-Arabien',
      description: 'Internationale Großprojekte in der Industrie-Automation'
    },
    {
      title: '🇮🇳 Indien & 🇹🇭 Thailand',
      description: 'Erfolgreiche Inbetriebnahmen in Asien'
    }
  ];

  return (
    <Layout
      title={siteConfig.title}
      description="Professionelle SPS-Programmierung und Automatisierungstechnik"
    >
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroGradient}>Automatisierungstechnik</span>
            <span className={styles.heroSecondLine}>für höchste Ansprüche</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Professionelle SPS-Programmierung und weltweite Inbetriebnahme
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.primaryButton} to="/docs/intro">
              Unsere Leistungen
            </Link>
            <Link className={styles.secondaryButton} to="/Referenzen/Referenzen">
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Unsere Expertise</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, idx) => (
            <div key={idx} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.sectionLink}>
          <Link className={styles.linkButton} to="/docs/intro">
            Alle Leistungen ansehen →
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.aboutSection}>
          <div className={styles.aboutTitleWrapper}>
            <h2 className={styles.aboutSectionTitle}>Erfahrung trifft Innovation</h2>
            <div className={styles.aboutContent}>
              <p>
                Mark Zeitler Engineering UG ist Ihr zuverlässiger Partner für anspruchsvolle Automatisierungsprojekte. 
                Mit über 15 Jahren Erfahrung in der SPS-Programmierung und Inbetriebnahme setzen wir Ihre Projekte 
                weltweit professionell um.
              </p>
              <p>
                Von der Konzeption über die Programmierung bis zur Inbetriebnahme und Optimierung – 
                wir begleiten Sie durch alle Projektphasen und sorgen für nachhaltige Lösungen.
              </p>
            </div>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Jahre Erfahrung</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Projekte</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>4</div>
              <div className={styles.statLabel}>Länder</div>
            </div>
          </div>
        </div>
      </section>

      {/* References Preview */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Internationale Referenzen</h2>
        <div className={styles.referencesGrid}>
          {references.map((ref, idx) => (
            <div key={idx} className={styles.referenceCard}>
              <h3 className={styles.referenceTitle}>{ref.title}</h3>
              <p className={styles.referenceDescription}>{ref.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.sectionLink}>
          <Link className={styles.linkButton} to="/Referenzen/Referenzen">
            Alle Referenzen ansehen →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Bereit für Ihr nächstes Projekt?</h2>
          <p className={styles.ctaDescription}>
            Lassen Sie uns gemeinsam Ihre Automatisierung voranbringen. Ob Neuprojekt, Optimierung oder 
            Modernisierung – wir analysieren Ihre Anforderungen und entwickeln maßgeschneiderte Lösungen. 
            Profitieren Sie von unserer langjährigen Erfahrung und internationalen Expertise.
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.primaryButton} to="/impressum">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}