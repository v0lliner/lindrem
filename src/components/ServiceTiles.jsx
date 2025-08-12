import React from 'react';
import { useTranslation } from '../i18nContext';

/**
 * ServiceTiles renders a grid of cards for each service offered by Lindrem.
 * Service definitions live in the home translation file as an array of
 * objects with title, description and slug. If services are missing, the
 * component silently returns null.
 */
export default function ServiceTiles() {
  const t = useTranslation('home');
  const services = t('services');
  // If the translation for services is not an array, do not render.
  if (!Array.isArray(services)) return null;
  return (
    <section>
      <div className="container">
        <h2 className="section-title">{t('servicesTitle')}</h2>
        <div className="cards-grid">
          {services.map((service) => (
            <div key={service.slug} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}