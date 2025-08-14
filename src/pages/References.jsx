import React from 'react';
import { useTranslation, useLanguage } from '../i18nContext';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

/**
 * References page with premium 2025 design - sophisticated showcase
 * of completed projects with elegant CTA integration
 */
export default function References() {
  const t = useTranslation('references');
  const tLayout = useTranslation('layout');
  const { language } = useLanguage();
  const references = t('references');
  const hasReferences = Array.isArray(references) && references.length > 0;
  const contactPath = language === 'fi' ? `/${language}/yhteys` : `/${language}/kontakt`;
  
  return (
    <>
      {/* Premium Hero Section */}
      <section className="premium-page-hero">
        <div className="container">
          <div className="hero-content-center">
            <div className="hero-badge">
              <span className="badge-text">Portfolio</span>
              <div className="badge-shine"></div>
            </div>
            <h1 className="premium-page-title">{t('pageTitle')}</h1>
            <p className="premium-page-subtitle">{t('intro')}</p>
          </div>
        </div>
      </section>

      {/* Premium Projects Section */}
      <section className="premium-projects-section">
        <div className="container">
          {hasReferences ? (
            <div className="premium-projects-grid">
              {references.map((ref, idx) => (
                <ProjectCard 
                  key={idx} 
                  title={ref.title} 
                  description={ref.description} 
                  meta={ref.meta} 
                  imageUrl={ref.imageUrl}
                  index={idx}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="empty-text">{t('empty')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Clean CTA Section */}
      <section className="clean-cta-section">
        <div className="container">
          <div className="cta-panel">
            <div className="cta-content">
              <div className="cta-text">
                <h2 className="cta-title">{useTranslation('home')('ctaTitle')}</h2>
                <p className="cta-description">{useTranslation('home')('ctaDescription')}</p>
              </div>
              <div className="cta-action">
                <Link to={contactPath} className="premium-button">
                  <span className="button-text">{tLayout('contactButton')}</span>
                  <div className="button-shine"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}