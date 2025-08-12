import React from 'react';
import { useTranslation, useLanguage } from '../i18nContext';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

/**
 * References page displays a grid of past projects with their titles and
 * descriptions. A call to action invites visitors to make contact for
 * further information. Only available in the Finnish language.
 */
export default function References() {
  const t = useTranslation('references');
  const tLayout = useTranslation('layout');
  const { language } = useLanguage();
  const references = t('references');
  const hasReferences = Array.isArray(references) && references.length > 0;
  const contactPath = language === 'fi' ? `/${language}/yhteys` : `/${language}/kontakt`;
  return (
    <section>
      <div className="container">
        <h2 className="section-title">{t('pageTitle')}</h2>
        <p>{t('intro')}</p>
        {hasReferences ? (
          <div className="cards-grid">
            {references.map((ref, idx) => (
              <ProjectCard key={idx} title={ref.title} description={ref.description} />
            ))}
          </div>
        ) : (
          <p>{t('empty')}</p>
        )}
        {/* Call to action */}
        <div className="cta" style={{ marginTop: '4rem' }}>
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
            {tLayout('contactButton')}
          </Link>
        </div>
      </div>
    </section>
  );
}