import React, { createContext, useContext, useState, useMemo } from 'react';
// Import translation resources. These JSON files live alongside this context
// and are loaded statically at build time. Each language has its own folder
// containing one file per page plus a layout file for shared strings.
import fiHome from './translations/fi/home.json';
import fiInWork from './translations/fi/inWork.json';
import fiReferences from './translations/fi/references.json';
import fiContact from './translations/fi/contact.json';
import fiLayout from './translations/fi/layout.json';

import etHome from './translations/et/home.json';
import etContact from './translations/et/contact.json';
import etLayout from './translations/et/layout.json';

// Consolidate all translations into a nested object keyed by language.
const translations = {
  fi: {
    home: fiHome,
    inWork: fiInWork,
    references: fiReferences,
    contact: fiContact,
    layout: fiLayout,
  },
  et: {
    home: etHome,
    contact: etContact,
    layout: etLayout,
  },
};

// Create the context. It stores the current language and exposes a
// translation function for retrieving strings. See useTranslation below.
const TranslationContext = createContext({
  language: 'fi',
  setLanguage: () => {},
});

/**
 * TranslationProvider wraps the application and provides language state.
 * It reads the initial language from the current URL segment (/fi or /et) and
 * stores it in state. Changing the language will also update the pathname.
 */
export function TranslationProvider({ children }) {
  // Derive initial language from the URL. If no lang code is found, default
  // to 'fi'. This allows bookmarking pages directly in a given language.
  const pathLang = window.location.pathname.split('/')[1];
  const initialLang = ['fi', 'et'].includes(pathLang) ? pathLang : 'fi';
  const [language, setLanguage] = useState(initialLang);

  // When the language changes, update the URL path prefix. This ensures that
  // navigation remains consistent with the selected language. Only replace
  // the language segment; the remainder of the path stays intact.
  const changeLanguage = (lang) => {
    if (lang === language) return;
    const parts = window.location.pathname.split('/');
    parts[1] = lang;
    const newPath = parts.join('/') || `/${lang}`;
    window.history.pushState({}, '', newPath);
    setLanguage(lang);
  };

  const value = useMemo(() => ({ language, changeLanguage }), [language]);

  return (
    <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
  );
}

/**
 * Custom hook to access translation strings. Pass the page key (e.g.
 * 'home', 'references', 'contact', 'layout') and receive a function that
 * returns the translation for a given key. If the key is missing, the
 * function returns the key itself to aid debugging.
 */
export function useTranslation(page) {
  const { language } = useContext(TranslationContext);
  return (key) => {
    const pageTranslations = translations[language]?.[page] || {};
    return pageTranslations[key] ?? key;
  };
}

/**
 * Hook to get and set the current language. Components such as the
 * language switcher can call setLanguage to toggle between Finnish and
 * Estonian. The returned language value is always one of the supported
 * language codes.
 */
export function useLanguage() {
  const { language, changeLanguage } = useContext(TranslationContext);
  return { language, changeLanguage };
}