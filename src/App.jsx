import React, { useState, useEffect, Suspense, lazy, useMemo, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import { translations } from './utils/translations';
import './index.css';

// Lazy load heavy components for performance
const About = lazy(() => import('./components/About'));
const SelectedWorks = lazy(() => import('./components/SelectedWorks'));
const Certificates = lazy(() => import('./components/Certificates'));
const TechnicalRepertoire = lazy(() => import('./components/TechnicalRepertoire'));
const AcademicJourney = lazy(() => import('./components/AcademicJourney'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Hero = lazy(() => import('./components/Hero'));

const CustomCursor = ({ isProductivity }) => {
  const mousePos = React.useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trailingPos, setTrailingPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
      if (isProductivity) return;
      const newRipple = { x: e.clientX, y: e.clientY, id: Date.now() };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('click', handleClick);
    
    let rafId;
    const updateTrailing = () => {
      if (!isProductivity) {
        setTrailingPos(prev => ({
          x: prev.x + (mousePos.current.x - prev.x) * 0.15,
          y: prev.y + (mousePos.current.y - prev.y) * 0.15
        }));
      }
      rafId = requestAnimationFrame(updateTrailing);
    };
    rafId = requestAnimationFrame(updateTrailing);

    const scanInteractive = () => {
      const elements = document.querySelectorAll('a, button, .work-card, .cert-card, .repertoire-category, .stat-card, .mini-knob, .theme-toggle-minimal');
      elements.forEach(el => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleUnhover);
      });
    };
    
    scanInteractive();
    const observer = new MutationObserver(scanInteractive);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [isProductivity]);

  return (
    <>
      {!isProductivity && ripples.map(ripple => (
        <div key={ripple.id} className="cursor-ripple" style={{ left: ripple.x, top: ripple.y }} />
      ))}
      {!isProductivity && <div className="cursor-trailing" style={{ left: `${trailingPos.x}px`, top: `${trailingPos.y}px` }} />}
      <div 
        className={`cursor-crosshair ${isHovering ? 'hovering' : ''}`} 
        style={{ 
          left: `${cursorPos.x}px`, 
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          '--cursor-color': isProductivity ? 'var(--text-main)' : (isHovering ? '#ff00ff' : 'var(--sky-neon)'),
          mixBlendMode: 'difference'
        }}
      >
        {!isProductivity && <div className="cursor-glow" style={{ background: 'var(--cursor-color)', filter: 'blur(20px)', opacity: isHovering ? 0.4 : 0.2 }} />}
        <div className="ch-dot" style={{ background: 'var(--cursor-color)' }} />
        <div className="ch-line-h" style={{ 
          background: 'var(--cursor-color)', 
          boxShadow: isProductivity ? 'none' : `0 0 10px var(--cursor-color)`,
          width: isHovering ? '30px' : '20px'
        }} />
        <div className="ch-line-v" style={{ 
          background: 'var(--cursor-color)', 
          boxShadow: isProductivity ? 'none' : `0 0 10px var(--cursor-color)`,
          height: isHovering ? '30px' : '20px'
        }} />
      </div>
    </>
  );
};

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('#home');
  const [isProductivity, setIsProductivity] = useState(false);
  const [lang, setLang] = useState('en'); // Default to English
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);

  const t = translations[lang];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    // Intersection Observer for Scroll Reveal
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const scanReveal = () => {
      document.querySelectorAll('.reveal, .section-header').forEach(el => {
        revealObserver.observe(el);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Initial scan + periodic scan for dynamic content
    scanReveal();
    const timer = setInterval(scanReveal, 2000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
      clearInterval(timer);
    };
  }, []);

  // Reset scroll to top when section changes (using reliable window scroll)
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleProductivity = useCallback(() => {
    setIsProductivity(prev => !prev);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'id' : 'en');
  };

  const renderSection = () => {
    switch (activeSection) {
      case '#home': 
        return (
          <>
            <Hero mousePos={mousePos} isProductivity={isProductivity} t={t.hero} lang={lang} setActiveSection={setActiveSection} />
            <About t={t.about} />
          </>
        );
      case '#journey': return <AcademicJourney t={t.journey} />;
      case '#work': return <SelectedWorks t={t.work} />;
      case '#certifications': return <Certificates t={t.certs} />;
      case '#skills': return <TechnicalRepertoire t={t.skills} />;
      case '#contact': return <ContactForm t={t.contact} />;
      default: return <Hero mousePos={mousePos} isProductivity={isProductivity} t={t.hero} />;
    }
  };

  const accentColor = useMemo(() => {
    switch (activeSection) {
      case '#home': return 'var(--about-accent)';
      case '#journey': return 'var(--journey-accent)';
      case '#work': return 'var(--work-accent)';
      case '#certifications': return 'var(--cert-accent)';
      case '#skills': return 'var(--skill-accent)';
      case '#contact': return 'var(--contact-accent)';
      default: return 'var(--about-accent)';
    }
  }, [activeSection]);

  return (
    <div className="app-container" data-theme={theme} data-view={isProductivity ? 'productivity' : 'modern'}>
      {!isProductivity && (
        <div 
          className="bg-grid" 
          style={{ 
            transform: `translate(${mousePos.x / 60}px, ${mousePos.y / 60}px)`,
            opacity: Math.min(0.15, 0.05 + (scrollPos / 2000)),
            filter: `hue-rotate(${scrollPos / 10}deg)`
          }} 
        />
      )}
      <CustomCursor isProductivity={isProductivity} />
      <Sidebar 
        toggleTheme={toggleTheme} 
        theme={theme} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isProductivity={isProductivity}
        toggleProductivity={toggleProductivity}
        lang={lang}
        toggleLang={toggleLang}
        t={t.nav}
      />
      <main className="main-content-tabbed">
        <div 
          key={activeSection} 
          className="section-transition-wrapper"
          style={{ '--accent-glow-color': accentColor }}
        >
          <Suspense fallback={
            <div className="loading-spinner" style={{ 
              height: '50vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--sky-neon)',
              fontFamily: 'monospace'
            }}>
              [ LOADING_SYSTEM_CORE... ]
            </div>
          }>
            {renderSection()}
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
