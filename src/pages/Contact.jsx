import React, { useState } from 'react';
import { useTranslation } from '../i18nContext';

/**
 * Contact page with premium 2025 design matching the homepage aesthetic.
 * Features split layout, glassmorphism cards, and sophisticated form styling.
 */
export default function Contact() {
  const t = useTranslation('contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Viestisi on lähetetty!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* Premium Hero Section */}
      <section className="premium-page-hero">
        <div className="container">
          <div className="hero-content-center">
            <div className="hero-badge">
              <span className="badge-text">Yhteystiedot</span>
              <div className="badge-shine"></div>
            </div>
            <h1 className="premium-page-title">{t('pageTitle')}</h1>
            <p className="premium-page-subtitle">Ota yhteyttä ja keskustellaan projektistasi. Vastaamme nopeasti kaikkiin yhteydenottoihin.</p>
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section className="premium-contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information Cards */}
            <div className="contact-info-column">
              <div className="contact-info-grid">
                {/* Address Card */}
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 0 1 12 1A9 9 0 0 1 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="contact-content">
                    <h3 className="contact-title">{t('addressTitle')}</h3>
                    <p className="contact-text">{t('address')}</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19.92A2 2 0 0 1 20.02 22H19.92C8.84 22 0 13.16 0 2.08V2A2 2 0 0 1 2 0H5A2 2 0 0 1 7 2V5.5A2 2 0 0 1 5.5 7.5L4 9C5.5 12.5 11.5 18.5 15 20L16.5 18.5A2 2 0 0 1 18.5 17H22A2 2 0 0 1 22 19V16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-content">
                    <h3 className="contact-title">{t('phoneTitle')}</h3>
                    <p className="contact-text">
                      <a href={`tel:${t('phone')}`} className="contact-link">{t('phone')}</a>
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-content">
                    <h3 className="contact-title">{t('emailTitle')}</h3>
                    <p className="contact-text">
                      <a href={`mailto:${t('email')}`} className="contact-link">{t('email')}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-column">
              <div className="contact-form-card">
                <div className="form-header">
                  <h3 className="form-title">{t('contactFormTitle')}</h3>
                  <p className="form-subtitle">Kerro meille projektistasi ja saat vastauksen nopeasti.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="premium-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      {t('nameLabel')}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Nimesi"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      {t('emailLabel')}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="sähköposti@esimerkki.fi"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      {t('messageLabel')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Kerro projektistasi tai kysymyksestäsi..."
                      required
                    />
                  </div>

                  <button type="submit" className="premium-form-button">
                    <span className="button-content">
                      <span className="button-text">{t('submit')}</span>
                      <svg className="button-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div className="button-glow"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}