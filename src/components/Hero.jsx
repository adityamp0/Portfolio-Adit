import React, { useState, useEffect } from 'react';

const Hero = ({ mousePos, isProductivity, t, lang, setActiveSection }) => {
  const [text, setText] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const fullText = "Machine Learning Engineer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [lang]); // Re-start on lang change

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
  }, []);

  // Parallax calculations
  const x = mousePos?.x || 0;
  const y = mousePos?.y || 0;
  const moveX = (isMobile || isProductivity) ? 0 : (x - window.innerWidth / 2) / 40;
  const moveY = (isMobile || isProductivity) ? 0 : (y - window.innerHeight / 2) / 40;

  return (
    <section id="hero-parallax" className="container" style={{ 
      minHeight: isMobile ? '70vh' : '85vh', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'visible'
    }}>
      {/* Parallax Floating Elements - Light fallback */}
      {!isMobile && !isProductivity && (
        <>
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, var(--sky-neon) 0%, transparent 70%)',
            filter: 'blur(60px)',
            opacity: '0.15',
            transform: `translate(${moveX * -1.5}px, ${moveY * -1.5}px)`,
            pointerEvents: 'none',
            zIndex: -1
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '15%',
            left: '5%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(0, 123, 255, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            opacity: '0.1',
            transform: `translate(${moveX * 1.2}px, ${moveY * 1.2}px)`,
            pointerEvents: 'none',
            zIndex: -1
          }} />
        </>
      )}

      <div className="hero" style={{ 
        width: '100%', 
        maxWidth: '900px',
        transform: (isMobile || isProductivity) ? 'none' : `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`,
        transition: 'transform 0.1s ease-out'
      }}>
        <h1 className="hero-title" style={{ 
          fontSize: isMobile ? '3rem' : 'clamp(3rem, 8vw, 6rem)', 
          fontWeight: '800', 
          letterSpacing: '-0.04em', 
          lineHeight: isMobile ? '1.1' : '0.95', 
          marginBottom: '2rem',
          textShadow: (isMobile || isProductivity) ? 'none' : `0 0 20px rgba(0, 243, 255, ${Math.abs(moveX/100) + 0.1})`,
          textAlign: isMobile ? 'center' : 'left'
        }}>
          {t.title}<br />
          <span className="highlight" style={{ 
            color: 'var(--sky-neon)', 
            opacity: '1',
            textShadow: isProductivity ? 'none' : (isMobile ? '0 0 15px var(--sky-neon)' : '0 0 30px var(--sky-neon)')
          }}>{t.highlight}</span>
        </h1>
        <p className="hero-description" style={{ 
          fontSize: isMobile ? '1.1rem' : '1.25rem', 
          maxWidth: '650px', 
          lineHeight: '1.7', 
          color: 'var(--text-muted)', 
          fontWeight: '500',
          transform: (isMobile || isProductivity) ? 'none' : `translate(${moveX * 0.2}px, ${moveY * 0.2}px)`,
          textAlign: isMobile ? 'center' : 'left',
          margin: isMobile ? '0 auto' : '0'
        }}>
          {t.description} <b style={{ color: 'var(--text-main)', fontWeight: '700' }}>Aditya Maulana</b> — architecting systems as a <span style={{ color: 'var(--sky-neon)', fontWeight: '600', textShadow: isProductivity ? 'none' : '0 0 10px rgba(0,243,255,0.3)' }}>{text}</span><span className="cursor-blink">|</span>
        </p>
        <div className="hero-actions" style={{ 
          marginTop: '4rem', 
          display: 'flex', 
          gap: '1.25rem',
          transform: (isMobile || isProductivity) ? 'none' : `translate(${moveX * 0.1}px, ${moveY * 0.1}px)`,
          justifyContent: isMobile ? 'center' : 'flex-start'
        }}>
          <button 
            onClick={() => setActiveSection('#work')}
            className="btn-primary" 
            style={{ 
              padding: '1rem 2.5rem', 
              borderRadius: isProductivity ? '4px' : '12px',
              background: 'var(--sky-neon)',
              color: '#000',
              fontWeight: '700',
              boxShadow: isProductivity ? 'none' : '0 0 20px rgba(0, 243, 255, 0.3)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {t.btnWork}
          </button>
          <button 
            onClick={() => setActiveSection('#contact')}
            className="btn-primary" 
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--border-color)', 
              boxShadow: 'none',
              padding: '1rem 2.5rem',
              borderRadius: isProductivity ? '4px' : '12px',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {t.btnContact}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
