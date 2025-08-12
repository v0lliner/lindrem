import React, { useState } from 'react';
import { useTranslation } from '../i18nContext';

/**
 * Contact page shows the company's address, phone number and email. A
 * simple contact form allows users to enter their name, email and message.
 * The form does not submit anywhere (placeholder) but demonstrates how
 * interactive inputs can be styled.
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
    // For now we just clear the form; in a real application this would
    // trigger an API call or mailto link.
    alert('Teie sõnum on saadetud!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section>
      <div className="container">
        <h2 className="section-title">{t('pageTitle')}</h2>
        <div className="two-column">
          <div>
            <h3>{t('addressTitle')}</h3>
            <p>{t('address')}</p>
            <h3>{t('phoneTitle')}</h3>
            <p>{t('phone')}</p>
            <h3>{t('emailTitle')}</h3>
            <p>
              <a href={`mailto:${t('email')}`} style={{ color: 'var(--primary-color)' }}>
                {t('email')}
              </a>
            </p>
          </div>
          <div>
            <h3>{t('contactFormTitle')}</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="name" style={{ marginBottom: '0.25rem', fontWeight: 500 }}>
                  {t('nameLabel')}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
                  required
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="email" style={{ marginBottom: '0.25rem', fontWeight: 500 }}>
                  {t('emailLabel')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
                  required
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="message" style={{ marginBottom: '0.25rem', fontWeight: 500 }}>
                  {t('messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc', resize: 'vertical' }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: 'var(--primary-color)',
                  color: '#fff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {t('submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}