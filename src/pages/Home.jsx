import React from 'react';
import HeroSection from '../components/HeroSection';
import { useTranslation } from '../i18nContext';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18nContext';

export default function Home() {
  const t = useTranslation('home');
  const { language } = useLanguage();
  const services = t('services');
  const contactPath = language === 'fi' ? `/${language}/yhteys` : `/${language}/kontakt`;
  
  return (
    <>
      <HeroSection />
      
      {/* Clean Company Section */}
      <section className="clean-company-section">
        <div className="container">
          <div className="company-grid">
            {/* Stats Column */}
            <div className="stats-column">
              <div className="stat-item">
                <div className="stat-number">1993</div>
                <div className="stat-label">Perustettu</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">Työntekijää</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10M€</div>
                <div className="stat-label">Liikevaihto</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Maata</div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="content-column">
              <div className="section-header">
                <h2 className="clean-title">{t('companyTitle')}</h2>
                <div className="title-accent"></div>
              </div>
              
              <div className="content-flow">
                <p className="lead-paragraph">{t('companyParagraph1')}</p>
                <p>{t('companyParagraph2')}</p>
                <p>{t('companyParagraph3')}</p>
                <p>{t('companyParagraph4')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Clean Services Section */}
      <section className="clean-services-section">
        <div className="container">
          <div className="services-header">
            <h2 className="clean-title">{t('servicesTitle')}</h2>
            <div className="title-accent" style={{ margin: '1rem auto 0' }}></div>
          </div>
          
          {Array.isArray(services) && (
            <div className="services-list">
              {services.map((service, index) => (
                <div key={service.slug} className="service-item">
                  <div className="service-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                  <div className="service-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Clean CTA Section */}
      <section className="clean-cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2 className="cta-title">{t('ctaTitle')}</h2>
              <p className="cta-description">{t('ctaDescription')}</p>
            </div>
            <div className="cta-action">
              <Link to={contactPath} className="premium-button">
                <span className="button-text">{useTranslation('layout')('contactButton')}</span>
                <div className="button-shine"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}