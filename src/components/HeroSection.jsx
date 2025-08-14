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
               L 0,8
               Q 0,12 4,12
               L 12,12
               Q 16,12 16,16
               L 16,20
               Q 16,24 20,24
               L 28,24
               Q 32,24 32,28
               L 32,32
               Q 32,36 28,36
               L 24,36
               Q 20,36 20,40
               L 20,44
               Q 20,48 24,48
               L 36,48
               Q 40,48 40,52
               L 40,56
               Q 40,60 36,60
               L 32,60
               Q 28,60 28,64
               L 28,68
               Q 28,72 32,72
               L 44,72
               Q 48,72 48,76
               L 48,80
               Q 48,84 44,84
               L 40,84
               Q 36,84 36,88
               L 36,92
               Q 36,96 40,96
               L 52,96
               Q 56,96 56,100
               L 100,100
               L 100,0 Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}