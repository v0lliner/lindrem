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
      
      {/* Neural Network Company Section */}
      <section className="neural-company-section">
        <div className="neural-background">
          <div className="neural-nodes">
            <div className="node node-1"></div>
            <div className="node node-2"></div>
            <div className="node node-3"></div>
            <div className="node node-4"></div>
            <div className="node node-5"></div>
            <div className="connection connection-1"></div>
            <div className="connection connection-2"></div>
            <div className="connection connection-3"></div>
          </div>
        </div>
        
        <div className="container">
          <div className="neural-content">
            {/* Orbital Stats Ring */}
            <div className="orbital-stats">
              <div className="central-hub">
                <div className="hub-year">1993</div>
                <div className="hub-label">Perustettu</div>
              </div>
              <div className="orbit orbit-1">
                <div className="stat-satellite">
                  <div className="stat-value">30+</div>
                  <div className="stat-label">Työntekijää</div>
                </div>
              </div>
              <div className="orbit orbit-2">
                <div className="stat-satellite">
                  <div className="stat-value">10M€</div>
                  <div className="stat-label">Liikevaihto</div>
                </div>
              </div>
              <div className="orbit orbit-3">
                <div className="stat-satellite">
                  <div className="stat-value">15+</div>
                  <div className="stat-label">Maata</div>
                </div>
              </div>
            </div>
            
            {/* Magnetic Text Blocks */}
            <div className="magnetic-content">
              <div className="magnetic-title-block">
                <h2 className="neural-title">{t('companyTitle')}</h2>
              </div>
              
              <div className="text-constellation">
                <div className="text-block magnetic-block-1">
                  <div className="block-content">
                    <p className="neural-lead">{t('companyParagraph1')}</p>
                  </div>
                  <div className="block-glow"></div>
                </div>
                
                <div className="text-block magnetic-block-2">
                  <div className="block-content">
                    <p>{t('companyParagraph2')}</p>
                  </div>
                  <div className="block-glow"></div>
                </div>
                
                <div className="text-block magnetic-block-3">
                  <div className="block-content">
                    <p>{t('companyParagraph3')}</p>
                  </div>
                  <div className="block-glow"></div>
                </div>
                
                <div className="text-block magnetic-block-4">
                  <div className="block-content">
                    <p>{t('companyParagraph4')}</p>
                  </div>
                  <div className="block-glow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Holographic Services Grid */}
      <section className="holographic-services">
        <div className="container">
          <div className="services-universe">
            <div className="universe-header">
              <h2 className="holographic-title">{t('servicesTitle')}</h2>
              <div className="title-particles">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
              </div>
            </div>
            
            {Array.isArray(services) && (
              <div className="holographic-grid">
                {services.map((service, index) => (
                  <div key={service.slug} className={`holo-card holo-card-${index + 1}`}>
                    <div className="holo-surface">
                      <div className="holo-content">
                        <div className="service-index">
                          <span className="index-number">{String(index + 1).padStart(2, '0')}</span>
                          <div className="index-trail"></div>
                        </div>
                        <h3 className="holo-title">{service.title}</h3>
                        <p className="holo-description">{service.description}</p>
                      </div>
                      <div className="holo-reflection"></div>
                      <div className="holo-edges">
                        <div className="edge edge-top"></div>
                        <div className="edge edge-right"></div>
                        <div className="edge edge-bottom"></div>
                        <div className="edge edge-left"></div>
                      </div>
                    </div>
                    <div className="holo-shadow"></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Quantum CTA Portal */}
      <section className="quantum-cta">
        <div className="quantum-field">
          <div className="quantum-particles">
            <div className="quantum-dot dot-1"></div>
            <div className="quantum-dot dot-2"></div>
            <div className="quantum-dot dot-3"></div>
            <div className="quantum-dot dot-4"></div>
            <div className="quantum-dot dot-5"></div>
          </div>
          <div className="quantum-waves">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
          </div>
        </div>
        
        <div className="container">
          <div className="quantum-portal">
            <div className="portal-content">
              <div className="cta-text-field">
                <h2 className="quantum-title">{t('ctaTitle')}</h2>
                <p className="quantum-subtitle">{t('ctaDescription')}</p>
              </div>
              
              <div className="portal-gateway">
                <Link to={contactPath} className="quantum-button">
                  <div className="button-core">
                    <span className="button-text">{useTranslation('layout')('contactButton')}</span>
                    <div className="button-energy"></div>
                  </div>
                  <div className="button-rings">
                    <div className="ring ring-1"></div>
                    <div className="ring ring-2"></div>
                    <div className="ring ring-3"></div>
                  </div>
                  <div className="button-particles">
                    <div className="btn-particle p-1"></div>
                    <div className="btn-particle p-2"></div>
                    <div className="btn-particle p-3"></div>
                    <div className="btn-particle p-4"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}