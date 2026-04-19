import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import SelectedWorks from './components/SelectedWorks';
import Certificates from './components/Certificates';
import TechnicalRepertoire from './components/TechnicalRepertoire';
import AcademicJourney from './components/AcademicJourney';
import ContactForm from './components/ContactForm';
import './index.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);
    
    // Add listeners to detect hover on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .work-card, .cert-card, .repertoire-category');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <div 
      className={`cursor-crosshair ${isHovering ? 'hovering' : ''}`} 
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="ch-line-h" />
      <div className="ch-line-v" />
      <div className="ch-circle" />
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('#home');
  const mainRef = useRef(null);

  // Reset scroll to top when section changes (targeting the main scroll container)
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [activeSection]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const renderSection = () => {
    switch (activeSection) {
      case '#home': return <About />;
      case '#journey': return <AcademicJourney />;
      case '#work': return <SelectedWorks />;
      case '#certifications': return <Certificates />;
      case '#skills': return <TechnicalRepertoire />;
      case '#contact': return <ContactForm />;
      default: return <About />;
    }
  };

  const getAccentColor = (section) => {
    switch (section) {
      case '#home': return 'var(--about-accent)';
      case '#journey': return 'var(--journey-accent)';
      case '#work': return 'var(--work-accent)';
      case '#certifications': return 'var(--cert-accent)';
      case '#skills': return 'var(--skill-accent)';
      case '#contact': return 'var(--contact-accent)';
      default: return 'var(--about-accent)';
    }
  };

  return (
    <div className="app-container" data-theme={theme}>
      <CustomCursor />
      <Sidebar 
        toggleTheme={toggleTheme} 
        theme={theme} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <main className="main-content-tabbed" ref={mainRef}>
        <div 
          key={activeSection} 
          className="section-transition-wrapper"
          style={{ '--accent-glow-color': getAccentColor(activeSection) }}
        >
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

export default App;
