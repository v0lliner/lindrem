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
      
      {/* Company Information Section */}
      <section className="company-section">
        <div className="container">
          <div className="company-content">
            <div className="company-header">
              <div className="floating-badge">
                <span>1993</span>
              </div>
              <h2 className="company-title">{t('companyTitle')}</h2>
            </div>
            
            <div className="company-grid">
              <div className="company-text-block primary">
                <div className="text-content">
                  <p className="lead-text">{t('companyParagraph1')}</p>
                  <p>{t('companyParagraph2')}</p>
                </div>
              </div>
              
              <div className="company-stats">
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
              
              <div className="company-text-block secondary">
                <div className="text-content">
                  <p>{t('companyParagraph3')}</p>
                  <p>{t('companyParagraph4')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <h2 className="section-title">{t('servicesTitle')}</h2>
            <div className="services-intro">
              <p>Tarjoamme kattavan valikoiman rakennuspalveluja korkeimmalla laatutasolla</p>
            </div>
          </div>
          
          {Array.isArray(services) && (
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={service.slug} className={`service-card ${index === 0 ? 'featured' : ''}`}>
                  <div className="service-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
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
      
      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>{t('ctaTitle')}</h2>
              <p>{t('ctaDescription')}</p>
            </div>
            <div className="cta-action">
            <Link
              to={contactPath}
              className="cta-button"
            >
                <span>{useTranslation('layout')('contactButton')}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}