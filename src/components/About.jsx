import React from 'react';
import { GraduationCap, MapPin, Target, Sparkles, Terminal } from 'lucide-react';

const About = ({ t }) => {
  const [funFact, setFunFact] = React.useState('');
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const facts = [
    "I believe every dataset has a unique story; I'm just the neural translator.",
    "My coffee intake has a 0.98 correlation with my model's validation accuracy.",
    "Successfully trained my first Perceptron, and it felt like witnessing fire for the first time.",
    "Started a project at 10 PM. Suddenly it was 4 AM, and the model finally converged.",
    "I once debugged a script for 2 hours only to realize I was editing the wrong file.",
    "My favorite workout? Back-propagation by hand (just kidding, I love Adam optimizer).",
    "ML Engineer by day, aspiring digital architect by night."
  ];

  const generateFact = () => {
    setIsGenerating(true);
    setFunFact('');
    
    // Cyber delay simulation
    setTimeout(() => {
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      setFunFact(randomFact);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <section id="home" className="section container">
      <div className="section-header">
        <span className="section-number">01</span>
        <div>
          <h2 className="section-title">{t.title}</h2>
          <span className="section-subtitle"><span className="typing-reveal">{t.subtitle}</span></span>
        </div>
      </div>

      <div className="about-content reveal" style={{ 
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.2fr) 0.8fr', 
        gap: isMobile ? '2.5rem' : '6rem', 
        alignItems: 'flex-start' 
      }}>
        {/* Bio Text */}
        <div className="bio-content">
          <p style={{ 
            fontSize: '1.25rem', 
            lineHeight: '1.8', 
            color: 'var(--text-main)', 
            marginBottom: '2rem',
            fontWeight: '300',
            letterSpacing: '-0.01em'
          }}>
            {t.bio1}
          </p>
          <p style={{ 
            fontSize: '1rem', 
            lineHeight: '1.7', 
            color: 'var(--text-muted)', 
            marginBottom: '1.5rem',
            maxWidth: '600px'
          }}>
            {t.bio2}
          </p>
          <p style={{ 
            fontSize: '1rem', 
            lineHeight: '1.7', 
            color: 'var(--text-muted)',
            maxWidth: '600px',
            marginBottom: '2.5rem'
          }}>
            {t.bio3}
          </p>

          {/* AI Fun Fact Generator */}
          <div className="ai-generator" style={{
            background: 'rgba(0, 243, 255, 0.03)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Terminal size={18} color="var(--sky-neon)" />
                <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', color: 'var(--text-main)' }}>{t.aiEngine}</span>
              </div>
              <button 
                onClick={generateFact}
                className="btn-primary"
                disabled={isGenerating}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.7rem',
                  borderRadius: '6px',
                  background: isGenerating ? 'transparent' : 'var(--sky-neon)',
                  color: isGenerating ? 'var(--sky-neon)' : '#000',
                  border: '1px solid var(--sky-neon)'
                }}
              >
                {isGenerating ? t.analyzing : t.generateFact}
              </button>
            </div>
            
            <div style={{ 
              minHeight: '3rem', 
              display: 'flex', 
              alignItems: 'center',
              color: 'var(--sky-neon)',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              lineHeight: '1.4'
            }}>
              {isGenerating ? (
                <span className="cursor-blink">_</span>
              ) : (
                funFact && <span>{'> '} {funFact}</span>
              )}
              {!funFact && !isGenerating && <span style={{ color: 'var(--text-muted)', opacity: 0.5 }}>{t.clickToReveal}</span>}
            </div>
            
            {/* Scannline Effect */}
            {isGenerating && <div className="scanline" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '2px',
              background: 'var(--sky-neon)',
              opacity: 0.3,
              boxShadow: '0 0 10px var(--sky-neon)',
              animation: 'scan-move 0.8s linear infinite'
            }} />}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="about-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1rem' }}>
          {[
            { icon: <GraduationCap size={20} />, label: 'Education', value: 'Computer Science Student' },
            { icon: <MapPin size={20} />, label: 'Location', value: 'Indonesia' },
            { icon: <Target size={20} />, label: 'Interest', value: 'Machine Learning' },
            { icon: <Sparkles size={20} />, label: 'Passion', value: 'AI & Data Science' }
          ].map((stat, i) => (
            <div key={i} className="stat-card" style={{ 
              padding: '1.25rem', 
              background: 'var(--card-bg)', 
              borderRadius: '8px', 
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '8px', 
                background: 'rgba(0, 243, 255, 0.05)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--accent-color)',
                boxShadow: 'inset 0 0 10px rgba(0, 243, 255, 0.05)'
              }}>
                {stat.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '0.75rem', fontWeight: '400', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>{stat.label}</h4>
                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)' }}>{stat.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
