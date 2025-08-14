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
    <section className="split-hero">
      {/* Left side - Image background */}
      <div className="hero-image-side">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
      </div>
      
      {/* Right side - White background with content */}
      <div className="hero-content-side">
        <div className="hero-content">
          <h1 className="hero-title">{t('heroTitle')}</h1>
          <p className="hero-subtitle">{t('heroSubtitle')}</p>
          <Link to={contactPath} className="hero-button">
            {tLayout('contactButton')}
          </Link>
        </div>
      </div>
      
      {/* Custom path separator */}
      <div className="hero-separator">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          className="separator-path"
        >
          <path 
            d="M 0,0 
               L 0,25
               Q 0,35 10,35
               L 25,35
               Q 35,35 35,45
               L 35,65
               Q 35,75 45,75
               L 65,75
               Q 75,75 75,85
               L 75,100
               L 100,100
               L 100,0 Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}