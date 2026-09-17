import { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';

const mobileQuery = '(max-width: 1024px)';
const subscribeMobile = (callback) => {
  const media = window.matchMedia(mobileQuery);
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
};
const getMobile = () => window.matchMedia(mobileQuery).matches;

export default function Sidebar({ theme, toggleTheme, activeSection, setActiveSection, lang, toggleLang, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useSyncExternalStore(subscribeMobile, getMobile, () => false);
  const railRef = useRef(null);
  const menuRef = useRef(null);
  const items = [['home', t.home], ['journey', t.journey], ['work', t.work],
    ['certifications', t.certs], ['skills', t.skills], ['contact', t.contact]];

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    railRef.current?.querySelector('a')?.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuRef.current?.focus();
      }
      if (event.key === 'Tab') {
        const elements = [...railRef.current.querySelectorAll('a, button'), menuRef.current];
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first.focus();
        }
      }
    };
    const media = window.matchMedia('(min-width: 1025px)');
    const onResize = () => { if (media.matches) setIsOpen(false); };
    document.addEventListener('keydown', onKey);
    media.addEventListener('change', onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      media.removeEventListener('change', onResize);
    };
  }, [isOpen]);

  return (
    <>
      <header className="mobile-header">
        <span className="wordmark">AMP<span className="accent">.</span></span>
        <button ref={menuRef} className="menu-button" aria-expanded={isOpen} aria-controls="site-sidebar"
          onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? t.close : t.menu}>
          {isOpen ? t.close : t.menu}{isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>
      <div className={'sidebar-overlay' + (isOpen ? ' open' : '')} aria-hidden="true" onClick={() => { setIsOpen(false); menuRef.current?.focus(); }} />
      <aside id="site-sidebar" ref={railRef} className={'sidebar' + (isOpen ? ' open' : '')} aria-label={t.navigation} inert={isMobile && !isOpen} aria-hidden={isMobile && !isOpen ? true : undefined}>
        <div className="rail-identity">
          <span className="wordmark rail-mark">AMP<span className="accent">.</span></span>
          <p className="profile-name">Aditya Maulana<br />Pamungkas</p>
          <p className="profile-role">Machine Learning Engineer</p>
          <p className="profile-note">Frontend / Software</p>
        </div>
        <nav aria-label={t.navigation}>
          {items.map(([id, label], index) => (
            <a key={id} href={'#' + id} className={'side-link' + (activeSection === '#' + id ? ' active' : '')}
              aria-current={activeSection === '#' + id ? 'page' : undefined}
              onClick={(event) => { event.preventDefault(); setIsOpen(false); setActiveSection('#' + id); }}>
              <span className="nav-number">{String(index + 1).padStart(2, '0')}</span>
              <span>{label}</span><span className="nav-indicator" aria-hidden="true">&#8226;</span>
            </a>
          ))}
        </nav>
        <div className="rail-bottom">
          <div className="social-links">
            <a href="https://github.com/adityamp0" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} /></a>
            <a href="https://linkedin.com/in/adityamaulanapamungkas" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
          </div>
          <div className="rail-controls">
            <button onClick={toggleTheme} aria-label={theme === 'dark' ? t.light : t.dark}>
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}{theme === 'dark' ? t.dark : t.light}
            </button>
            <button onClick={toggleLang} aria-label={t.language}>{lang.toUpperCase()} <span aria-hidden="true">/ {lang === 'en' ? 'ID' : 'EN'}</span></button>
          </div>
          <p className="rail-colophon">&copy; {new Date().getFullYear()} / AMP</p>
        </div>
      </aside>
    </>
  );
}
