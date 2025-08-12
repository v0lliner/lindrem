import React from 'react';
import { useLanguage, useTranslation } from '../i18nContext';

/**
 * LanguageSwitcher displays buttons for each supported language. The current
 * language is highlighted. Switching languages updates both the i18n context
 * and the URL prefix. Button labels are taken from the layout translation
 * file so they can be localised.
 */
export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const t = useTranslation('layout');
  const languages = [
    { code: 'fi', label: t('langFi') },
    { code: 'et', label: t('langEt') },
  ];
  return (
    <div className="language-switcher">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={language === code ? 'active' : ''}
        >
          {label}
        </button>
      ))}
    </div>
  );
}