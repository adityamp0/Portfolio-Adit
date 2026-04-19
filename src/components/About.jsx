import React from 'react';
import { GraduationCap, MapPin, Target, Sparkles, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="home" className="section container">
      <div className="section-header">
        <span className="section-number">01</span>
        <div>
          <h2 className="section-title">Professional Profile</h2>
          <span className="section-subtitle">Architecting Intelligent Systems</span>
        </div>
      </div>

      <div className="about-content" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) 0.8fr', gap: '6rem', alignItems: 'flex-start' }}>
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
            I'm <b style={{ fontWeight: '600' }}>Aditya Maulana Pamungkas</b>, a Machine Learning Engineer with a deep passion for 
            building intelligent systems and solving complex problems using data.
          </p>
          <p style={{ 
            fontSize: '1rem', 
            lineHeight: '1.7', 
            color: 'var(--text-muted)', 
            marginBottom: '1.5rem',
            maxWidth: '600px'
          }}>
            I specialize in designing machine learning pipelines and experimenting with deep learning models. 
            My journey is driven by a curiosity about how machines make decisions and a commitment to building models that automate tasks with high efficiency.
          </p>
          <p style={{ 
            fontSize: '1rem', 
            lineHeight: '1.7', 
            color: 'var(--text-muted)',
            maxWidth: '600px'
          }}>
            I also enjoy crafting elegant frontend interfaces that complement AI projects with a clean, 
            intuitive user experience.
          </p>
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
