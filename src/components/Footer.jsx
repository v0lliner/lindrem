import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, useTranslation } from '../i18nContext';

/**
 * Footer displays contact information and a call to action. It pulls the
 * address, phone and email from the contact translation file and the
 * copyright line from the layout file. A link leads to the contact page.
 */
export default function Footer() {
  const { language } = useLanguage();
  const tLayout = useTranslation('layout');
  const tContact = useTranslation('contact');
  const contactPath = language === 'fi' ? `/${language}/yhteys` : `/${language}/kontakt`;
  return (
    <footer>
      <div className="inner">
        <h3>AS Lindrem</h3>
        <p>
          {tContact('address')} · {tContact('phone')} ·{' '}
          <a href={`mailto:${tContact('email')}`} style={{ color: '#e4e7ec' }}>
            {tContact('email')}
          </a>
        </p>
        <Link
          to={contactPath}
          style={{ color: '#fff', textDecoration: 'underline', fontWeight: 500 }}
        >
          {tLayout('contactButton')}
        </Link>
        <p style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.8 }}>
          {tLayout('footerText')}
        </p>
      </div>
    </footer>
  );
}