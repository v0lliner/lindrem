import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, useLanguage } from '../i18nContext';
import ProjectCard from '../components/ProjectCard';

/**
 * InWork page with premium 2025 design - minimalist hero section,
 * elegant project showcase, and sophisticated visual hierarchy
 */
export default function InWork() {
  const t = useTranslation('inWork');
  const projects = t('projects');
  const hasProjects = Array.isArray(projects) && projects.length > 0;
  
  return (
    <>
      {/* Premium Hero Section */}
      <section className="premium-page-hero">
        <div className="container">
          <div className="hero-content-center">
            <div className="hero-badge">
              <span className="badge-text">Käynnissä</span>
              <div className="badge-pulse"></div>
            </div>
            <h1 className="premium-page-title">{t('pageTitle')}</h1>
            <p className="premium-page-subtitle">{t('intro')}</p>
          </div>
        </div>
      </section>

      {/* Premium Projects Section */}
      <section className="premium-projects-section">
        <div className="container">
          {hasProjects ? (
            <div className="premium-projects-grid">
              {projects.map((proj, idx) => (
                <ProjectCard 
                  key={idx} 
                  title={proj.title} 
                  description={proj.description} 
                  meta={proj.meta} 
                  imageUrl={proj.imageUrl}
                  index={idx}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                <Link to={`/${useLanguage().language === 'fi' ? useLanguage().language + '/yhteys' : useLanguage().language + '/kontakt'}`} className="premium-button">
                  <span className="button-text">{useTranslation('layout')('contactButton')}</span>
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