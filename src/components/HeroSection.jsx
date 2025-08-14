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
               C 20,15 30,25 40,40
               S 60,55 70,70
               C 80,80 90,90 100,100
               L 100,0 Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}