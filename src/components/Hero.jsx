import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Machine Learning Engineer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
      <div className="hero" style={{ width: '100%', maxWidth: '900px' }}>
        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: '700', letterSpacing: '-0.04em', lineHeight: '1', marginBottom: '2.5rem' }}>
          Code + Intelligence,<br />
          <span className="highlight" style={{ color: 'var(--sky-neon)', opacity: '0.9' }}>Curated.</span>
        </h1>
        <p className="hero-description" style={{ fontSize: '1.2rem', maxWidth: '650px', lineHeight: '1.6', color: 'var(--text-muted)', fontWeight: '500' }}>
          I'm <b style={{ color: 'var(--text-main)', fontWeight: '700' }}>Aditya Maulana</b> — architecting systems at the intersection of data and design as a <span style={{ color: 'var(--sky-neon)', fontWeight: '600' }}>{text}</span>.
        </p>
        <div style={{ marginTop: '4rem', display: 'flex', gap: '1.25rem' }}>
          <a href="#work" className="btn-primary" style={{ padding: '0.85rem 2rem', borderRadius: '50px' }}>View Selected Work</a>
          <a href="#contact" className="btn-primary" style={{ 
            background: 'transparent', 
            border: '1px solid var(--border-color)', 
            boxShadow: 'none',
            padding: '0.85rem 2rem',
            borderRadius: '50px'
          }}>Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
