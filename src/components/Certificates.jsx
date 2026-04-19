import React, { useState } from 'react';
import { Trophy, Award, Brain, BarChart3, Bot, Laptop, Code, Binary, FileCode, ChevronRight, Folder, FolderOpen, Laptop2 } from 'lucide-react';

const certsData = [
  {
    id: 1,
    category: 'Machine Learning',
    title: 'Best Capstone Project',
    provider: 'Achievement Award',
    description: 'Customer Segmentation for Personalized Retail Marketing',
    date: '2025',
    link: 'https://drive.google.com/file/d/1uwveUSy8ICzpNHjnpr4LWnA2ExVqVRPl/view?usp=drive_link',
    icon: <Trophy size={20} />,
    featured: true
  },
  {
    id: 2,
    category: 'Machine Learning',
    title: 'Building Machine Learning Systems',
    provider: 'Dicoding Indonesia',
    description: 'Advanced development cycle from data collection to model deployment.',
    date: 'Dec 2025',
    link: 'https://drive.google.com/file/d/15eoF5bH0X5lgUcHMBRYm-AEeIGdDRenT/view?usp=drive_link',
    icon: <Binary size={20} />
  },
  {
    id: 3,
    category: 'Machine Learning',
    title: 'Fundamental Deep Learning',
    provider: 'Dicoding Indonesia',
    description: 'Neural Networks implementation using modern frameworks.',
    date: 'Nov 2025',
    link: 'https://drive.google.com/file/d/1_CR3CjoHetCRgWBmmUHEicEqa7XG-FdA/view?usp=drive_link',
    icon: <Brain size={20} />
  },
  {
    id: 4,
    category: 'Machine Learning',
    title: 'Machine Learning for Beginners',
    provider: 'Dicoding Indonesia',
    description: 'Supervised and unsupervised techniques for classification.',
    date: 'Sep 2025',
    link: 'https://drive.google.com/file/d/1BZdCcKxnM9YCR-AJ5p_cqLJZyEMo8g6h/view?usp=drive_link',
    icon: <Bot size={20} />
  },
  {
    id: 5,
    category: 'Machine Learning',
    title: 'AI Basics',
    provider: 'Dicoding Indonesia',
    description: 'Introduction to Artificial Intelligence concepts and industry roles.',
    date: 'Aug 2025',
    link: 'https://drive.google.com/file/d/1znGLddVsS_4iTmos5EMUwFlg4vuXLuUn/view?usp=drive_link',
    icon: <Award size={20} />
  },
  {
    id: 6,
    category: 'Programming Language',
    title: 'Starting Programming with Python',
    provider: 'Dicoding Indonesia',
    description: 'Python programming basics from data types to advanced functionality.',
    date: 'Sep 2025',
    link: 'https://drive.google.com/file/d/1qEQEeWH6bRiPmvvbQ4A4o3NHTicJJllG/view?usp=drive_link',
    icon: <FileCode size={20} />
  },
  {
    id: 7,
    category: 'Programming Language',
    title: 'Introduction to Programming Logic',
    provider: 'Dicoding Indonesia',
    description: 'Flow of logical thinking and basic algorithms for problem solving.',
    date: 'Aug 2025',
    link: 'https://drive.google.com/file/d/1n4ZD8sMqMbeV7Y0ckUYIKXQUz_Ghinoa/view?usp=drive_link',
    icon: <Code size={20} />
  },
  {
    id: 8,
    category: 'Web Developer',
    title: 'Git Basics with GitHub',
    provider: 'Dicoding Indonesia',
    description: 'Mastering version control and development collaboration.',
    date: 'Aug 2025',
    link: 'https://drive.google.com/file/d/1qWLKHoKHjvi6ASiycTWRf3F-1ChhxRG2/view?usp=drive_link',
    icon: <FileCode size={20} />
  },
  {
    id: 9,
    category: 'Web Developer',
    title: 'Starting Software Programming Basics',
    provider: 'Dicoding Indonesia',
    description: 'Foundations in development from systems to coding methodologies.',
    date: 'Aug 2025',
    link: 'https://drive.google.com/file/d/1_yFY9085Khlbc_pKa5TG40GeADGY_rBA/view?usp=drive_link',
    icon: <Laptop size={20} />
  },
  {
    id: 10,
    category: 'Machine Learning',
    title: 'Data Analysis Fundamentals',
    provider: 'Dicoding Indonesia',
    description: 'Python-based EDA, cleaning, and visualization techniques.',
    date: 'Oct 2025',
    link: 'https://drive.google.com/file/d/1uB2aIBkliHsRRFI-GYrcYAZ2tHuVtqAn/view?usp=drive_link',
    icon: <BarChart3 size={20} />
  },
  {
    id: 11,
    category: 'Web Developer',
    title: 'Intro to Software Engineering',
    provider: 'RevoU',
    description: 'HTML, Tailwind CSS, Javascript',
    date: 'Feb 2026',
    link: 'https://drive.google.com/file/d/1vUjvPha54st81HkVpVLSWdsFkzNxVEXX/view',
    icon: <Laptop2 size={20} />
  }
];

const categories = ['Machine Learning', 'Web Developer', 'Programming Language'];

const Certificates = () => {
  const [activeTab, setActiveTab] = useState('Machine Learning');

  const filteredCerts = certsData.filter(cert => cert.category === activeTab);

  return (
    <section id="certifications" className="section container">
      <div className="section-header">
        <span className="section-number">04</span>
        <div>
          <h2 className="section-title">Professional Credentials</h2>
          <span className="section-subtitle">Validated Milestones of Growth</span>
        </div>
      </div>

      <div className="folder-container">
        {/* Folder Tabs */}
        <div className="folder-tabs" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '-1px', position: 'relative', zIndex: 5 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`folder-tab ${activeTab === cat ? 'active' : ''}`}
              style={{
                padding: '0.75rem 1.5rem',
                border: '1px solid var(--border-color)',
                borderBottom: activeTab === cat ? '1px solid var(--bg-color)' : '1px solid var(--border-color)',
                background: activeTab === cat ? 'var(--bg-color)' : 'rgba(255,255,255,0.03)',
                borderRadius: '12px 12px 0 0',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease',
                color: activeTab === cat ? 'var(--accent-color)' : 'var(--text-muted)'
              }}
            >
              {activeTab === cat ? <FolderOpen size={16} /> : <Folder size={16} />}
              {cat}
            </button>
          ))}
        </div>

        {/* Folder Content */}
        <div className="folder-content" style={{
          background: '#050505',
          border: '1px solid var(--border-color)',
          borderRadius: '0 12px 12px 12px',
          padding: '2.5rem',
          boxShadow: '0 0 30px rgba(0, 243, 255, 0.05)',
          minHeight: '400px'
        }}>
          <div className="certs-grid">
            {filteredCerts.map((cert) => (
              <div className={`cert-card ${cert.featured ? 'featured' : ''}`} key={cert.id} style={{ height: '100%' }}>
                <div className="cert-header">
                  <div className="cert-icon-wrapper">
                    {cert.icon}
                  </div>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <div className="cert-content">
                  <span className="cert-provider">{cert.provider}</span>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-desc">{cert.description}</p>
                </div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View Credential <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
