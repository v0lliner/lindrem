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
               L 0,15
               Q 0,20 5,20
               L 20,20
               Q 25,20 25,25
               L 25,35
               Q 25,40 30,40
               L 45,40
               Q 50,40 50,45
               L 50,50
              Q 50,55 45,55
               L 35,55
              Q 30,55 30,60
               L 30,70
              Q 30,75 35,75
               L 55,75
               Q 60,75 60,80
               L 60,85
               Q 60,90 65,90
               L 80,90
               Q 85,90 85,95
               L 85,100
               L 100,100
               L 100,0 Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}