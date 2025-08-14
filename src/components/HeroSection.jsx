import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, useLanguage } from '../i18nContext';

/**
 * HeroSection displays a large headline and subtitle over the hero
 * background. It optionally shows a call to action button that links
 * to the contact page in the current language.
 */
export default function HeroSection() {
  const { language } = useLanguage();
  const t = useTranslation('home');
  const tLayout = useTranslation('layout');
  const contactPath = language === 'fi' ? `/${language}/yhteys` : `/${language}/kontakt`;
  return (
    <section className="hero">
      <div className="container">
        <h1>{t('heroTitle')}</h1>
        <p>{t('heroSubtitle')}</p>
        <Link
          to={contactPath}
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            backgroundColor: '#fff',
            color: 'var(--primary-color)',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'background-color 0.3s, color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--light-primary)';
            e.target.style.color = 'var(--primary-color)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#fff';
            e.target.style.color = 'var(--primary-color)';
          }}
        >
          {tLayout('contactButton')}
        </Link>
      </div>
    </section>
  );
}