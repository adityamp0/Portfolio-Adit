import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import Sidebar from './components/Sidebar';
import { translations } from './utils/translations';

const About = lazy(() => import('./components/About'));
const SelectedWorks = lazy(() => import('./components/SelectedWorks'));
const Certificates = lazy(() => import('./components/Certificates'));
const TechnicalRepertoire = lazy(() => import('./components/TechnicalRepertoire'));
const AcademicJourney = lazy(() => import('./components/AcademicJourney'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Hero = lazy(() => import('./components/Hero'));

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('#home');
  const [lang, setLang] = useState('en');
  const [playHeroIntro, setPlayHeroIntro] = useState(true);
  const mainRef = useRef(null);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = lang;
  }, [theme, lang]);

  const navigate = (section) => {
    if (section !== '#home') setPlayHeroIntro(false);
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'instant' });
    mainRef.current?.focus({ preventScroll: true });
  };

  const sections = {
    '#home': <><Hero playIntro={playHeroIntro} t={t.hero} setActiveSection={navigate} /><About t={t.about} /></>,
    '#journey': <AcademicJourney t={t.journey} />,
    '#work': <SelectedWorks t={t.work} />,
    '#certifications': <Certificates t={t.certs} />,
    '#skills': <TechnicalRepertoire t={t.skills} />,
    '#contact': <ContactForm t={t.contact} />,
  };

  return (
    <div className="app-container">
      <a className="skip-link" href="#main-content">{t.ui.skip}</a>
      <Sidebar theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        activeSection={activeSection} setActiveSection={navigate}
        lang={lang} toggleLang={() => setLang(lang === 'en' ? 'id' : 'en')} t={t.nav} />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        <div className="page-masthead"><span>{t.ui.portfolio}</span><span>ML / SOFTWARE</span></div>
        <div key={activeSection}>
          <Suspense fallback={<p className="loading-state" role="status">{t.ui.loading}</p>}>
            <div className="page-transition">{sections[activeSection]}</div>
          </Suspense>
        </div>
        <footer className="page-footer"><span>Aditya Maulana Pamungkas</span><span>{t.ui.footer}</span></footer>
      </main>
    </div>
  );
}
