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
      {/* Left Side - Image Background */}
      <div className="hero-left">
        <div className="hero-background-overlay"></div>
      </div>
      
      {/* Custom Path Separator */}
      <div className="hero-separator">
        <svg className="separator-path" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M0,0 C30,20 20,40 50,50 C80,60 70,80 100,100 L100,0 Z" 
            fill="white"
            className="path-shape"
          />
          <path 
            d="M0,0 C30,20 20,40 50,50 C80,60 70,80 100,100 L100,0 Z" 
            fill="none"
            stroke="rgba(0,48,135,0.1)"
            strokeWidth="0.5"
            className="path-outline"
          />
        </svg>
      </div>
      
      {/* Right Side - White Content */}
      <div className="hero-right">
        <div className="hero-content">
          <div className="content-wrapper">
            <h1 className="hero-title">{t('heroTitle')}</h1>
            <p className="hero-subtitle">{t('heroSubtitle')}</p>
            <Link to={contactPath} className="hero-cta-button">
              <span className="button-content">
                <span className="button-text">{tLayout('contactButton')}</span>
                <div className="button-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </span>
              <div className="button-glow"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}