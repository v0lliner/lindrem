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
    <section className="hero-split">
      <div className="hero-left">
        {/* Background image with overlay - same as original hero */}
      </div>
      <div className="hero-right">
        <div className="hero-content">
          <h1 className="hero-title">{t('heroTitle')}</h1>
          <p className="hero-subtitle">{t('heroSubtitle')}</p>
          <Link to={contactPath} className="hero-button">
            {tLayout('contactButton')}
          </Link>
        </div>
      </div>
    </section>
  );
}