import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage, useTranslation } from '../i18nContext';
import logo from '../assets/logo.png';

/**
 * Header contains the site logo, primary navigation and language switcher.
 * Navigation items are built dynamically based on available translation keys
 * for the current language. Missing keys (e.g. in Estonian there is no
 * references page) are omitted from the menu.
 */
export default function Header() {
  const { language } = useLanguage();
  const t = useTranslation('layout');

  // Helper to determine if a translated string exists. The translation
  // function returns the key itself if it is missing.
  const hasLabel = (key) => t(key) !== key;

  const navItems = [];
  if (hasLabel('navHome')) {
    navItems.push({ label: t('navHome'), path: `/${language}` });
  }
  if (hasLabel('navInWork')) {
    navItems.push({
      label: t('navInWork'),
      path: language === 'fi' ? `/${language}/tyomaat-kaynnissa` : `/${language}/hetkel-toos`,
    });
  }
  if (hasLabel('navReferences')) {
    navItems.push({
      label: t('navReferences'),
      path: language === 'fi' ? `/${language}/referenssit` : `/${language}/tehtud-tood`,
    });
  }
  if (hasLabel('navContact')) {
    navItems.push({
      label: t('navContact'),
      path: language === 'fi' ? `/${language}/yhteys` : `/${language}/kontakt`,
    });
  }

  return (
    <header>
      <div className="inner">
        <Link to={`/${language}`} className="logo" style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
          <img src={logo} alt="Lindrem logo" style={{ height: '60px', width: 'auto', margin: 0 }} />
        </Link>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}