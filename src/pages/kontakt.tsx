import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:kontakt@markzeitler.de?subject=${encodeURIComponent(
      formData.subject || 'Anfrage über Website'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone}\n\nNachricht:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout title="Kontakt" description="Kontaktieren Sie Mark Zeitler Engineering UG">
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '4rem 2rem',
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '1rem',
        }}>Kontakt aufnehmen</h1>
        
        <p style={{
          fontSize: '1.125rem',
          color: '#999999',
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          Haben Sie Fragen oder möchten Sie ein Projekt besprechen? 
          Kontaktieren Sie uns – wir freuen uns auf Ihre Nachricht!
        </p>

        <form onSubmit={handleSubmit} style={{ marginBottom: '3rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="name" style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
            }}>Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid #222222',
                borderRadius: '12px',
                background: '#111111',
                color: 'white',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => e.target.style.borderColor = '#479dc1'}
              onBlur={(e) => e.target.style.borderColor = '#222222'}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="email" style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
            }}>E-Mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid #222222',
                borderRadius: '12px',
                background: '#111111',
                color: 'white',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => e.target.style.borderColor = '#479dc1'}
              onBlur={(e) => e.target.style.borderColor = '#222222'}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="phone" style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
            }}>Telefon</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid #222222',
                borderRadius: '12px',
                background: '#111111',
                color: 'white',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => e.target.style.borderColor = '#479dc1'}
              onBlur={(e) => e.target.style.borderColor = '#222222'}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="subject" style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
            }}>Betreff *</label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid #222222',
                borderRadius: '12px',
                background: '#111111',
                color: 'white',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => e.target.style.borderColor = '#479dc1'}
              onBlur={(e) => e.target.style.borderColor = '#222222'}
            >
              <option value="">Bitte wählen...</option>
              <option value="Programmierung & Inbetriebnahme">Programmierung & Inbetriebnahme</option>
              <option value="Anlagenoptimierung">Anlagenoptimierung</option>
              <option value="Wartung & Reparatur">Wartung & Reparatur</option>
              <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
            </select>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="message" style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
            }}>Nachricht *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                border: '1px solid #222222',
                borderRadius: '12px',
                background: '#111111',
                color: 'white',
                resize: 'vertical',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => e.target.style.borderColor = '#479dc1'}
              onBlur={(e) => e.target.style.borderColor = '#222222'}
            />
          </div>

          <p style={{
            fontSize: '0.875rem',
            color: '#999999',
            marginBottom: '1.5rem',
          }}>
            Mit dem Absenden des Formulars stimmen Sie unserer{' '}
            <Link to="/datenschutz" style={{ color: '#479dc1' }}>
              Datenschutzerklärung
            </Link>{' '}
            zu.
          </p>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem 2rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #479dc1 0%, #6bbfe3 100%)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '9999px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(71, 157, 193, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Nachricht senden
          </button>
        </form>

        <div style={{
          background: '#111111',
          border: '1px solid #222222',
          borderRadius: '24px',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Direkter Kontakt</h3>
          <p style={{ color: '#999999', marginBottom: '0.5rem' }}>
            <strong>E-Mail:</strong> kontakt@markzeitler.de
          </p>
          <p style={{ color: '#999999', marginBottom: '0.5rem' }}>
            <strong>Telefon:</strong> +49 (0) 123 456789
          </p>
          <p style={{ color: '#999999' }}>
            <strong>Verfügbarkeit:</strong> Mo-Fr, 9:00-18:00 Uhr
          </p>
        </div>
      </div>
    </Layout>
  );
}