import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { TranslationProvider } from './i18nContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import InWork from './pages/InWork';
import References from './pages/References';
import Contact from './pages/Contact';

// Import global styles. These rules apply across the entire application.
import './styles.css';

/**
 * Wrapper component to extract the language parameter from the route and
 * render the appropriate page component. Without this indirection,
 * react-router would re-mount the page when switching languages which
 * resets scroll position and state unnecessarily.
 */
function LangRoutes() {
  const { lang } = useParams();
  return (
    <Routes>
      {/* Home or About page */}
      <Route index element={<Home />} />
      {/* In work page (Finnish only) */}
      <Route path={lang === 'fi' ? 'tyomaat-kaynnissa' : 'hetkel-toos'} element={<InWork />} />
      {/* References page (Finnish only) */}
      <Route path={lang === 'fi' ? 'referenssit' : 'tehtud-tood'} element={<References />} />
      {/* Contact page */}
      <Route path={lang === 'fi' ? 'yhteys' : 'kontakt'} element={<Contact />} />
      {/* Catch-all within language scope */}
      <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
    </Routes>
  );
}

/**
 * App is the root component. It wraps the router with the translation
 * provider and displays the header, main content and footer.
 */
export default function App() {
  return (
    <TranslationProvider>
      <BrowserRouter>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/:lang/*" element={<LangRoutes />} />
            {/* Redirect unknown routes to Finnish home */}
            <Route path="*" element={<Navigate to="/fi" replace />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TranslationProvider>
  );
}