import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceTiles from '../components/ServiceTiles';
import { useTranslation } from '../i18nContext';

/**
 * Home page (Finnish) or About page (Estonian). Displays the hero
 * section, company information and services. The translation files
 * determine the copy shown on this page. For Estonian the nav label
 * 'Meist' points here.
 */
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18nContext';

export default function Home() {
  const t = useTranslation('home');
  const { language } = useLanguage();
  const contactPath = language === 'fi' ? `/${language}/yhteys` : `/${language}/kontakt`;
  return (
    <>
      <HeroSection />
      <section>
        <div className="container">
          <h2 className="section-title">{t('companyTitle')}</h2>
          <div className="two-column">
            <div>
              <p>{t('companyParagraph1')}</p>
              <p>{t('companyParagraph2')}</p>
            </div>
            <div>
              <p>{t('companyParagraph3')}</p>
              <p>{t('companyParagraph4')}</p>
            </div>
          </div>
        </div>
      </section>
      <ServiceTiles />
      {/* Call to action section */}
      <section>
        <div className="container">
          <div className="cta">
            <h2>{t('ctaTitle')}</h2>
            <p>{t('ctaDescription')}</p>
            <Link
              to={contactPath}
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                backgroundColor: '#fff',
                color: 'var(--primary-color)',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background-color 0.3s, color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--light-primary)';
                e.target.style.color = 'var(--primary-color)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#fff';
                e.target.style.color = 'var(--primary-color)';
              }}
            >
              {useTranslation('layout')('contactButton')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}