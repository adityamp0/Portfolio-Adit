import React from 'react';
import { BookOpen, Award, Calendar, ExternalLink } from 'lucide-react';

const AcademicJourney = ({ t }) => {
  const journeys = [
    {
      institution: 'Universitas Gunadarma',
      degree: 'Informatics Engineering',
      duration: '2022 — Present',
      description: 'Currently pursuing a Bachelor\'s degree in Informatics Engineering, focusing on core software engineering principles and computational logic.',
      logo: 'https://icon2.cleanpng.com/20180508/svq/avsmons28.webp',
      color: 'var(--sky-neon)'
    },
    {
      institution: 'Asah led by Dicoding',
      degree: 'Machine Learning Cohort',
      duration: '2025',
      description: 'Gained practical experience in developing machine learning models and applying MLOps fundamentals, including reproducible experiments, structured pipelines, and basic deployment workflows.',
      logo: 'https://assets.cdn.dicoding.com/original/jobs/dos:lowongan_dicoding_dicoding_indonesia_030122135437.png',
      color: '#00ff88'
    }
  ];

  return (
    <section id="journey" className="section container">
      <div className="section-header">
        <span className="section-number">02</span>
        <div>
          <h2 className="section-title">{t.title}</h2>
          <span className="section-subtitle"><span className="typing-reveal">{t.subtitle}</span></span>
        </div>
      </div>

      <div className="journey-timeline">
        {journeys.map((item, index) => (
          <div key={index} className="journey-node reveal">
            <div className="journey-meta">
              <div className="journey-logo-container">
                <img
                  src={item.logo}
                  alt={item.institution}
                  className="journey-logo"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div style="font-size: 10px; font-weight: bold; color: var(--sky-neon)">DEV</div>';
                  }}
                />
              </div>
              <div className="journey-connector" />
            </div>

            <div className="journey-content-card">
              <div className="journey-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Calendar size={14} color="var(--sky-neon)" />
                  <span className="journey-date">{item.duration}</span>
                </div>
                <h3 className="journey-title">{item.institution}</h3>
                <h4 className="journey-degree">{item.degree}</h4>
              </div>

              <p className="journey-description">
                {item.description}
              </p>

              {index === 1 && (
                <div className="journey-tags" style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['MLOps', 'Pipelines', 'Deployment', 'PyTorch'].map(tag => (
                    <span key={tag} className="skill-tag" style={{ fontSize: '0.65rem' }}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicJourney;
