import React from 'react';

const worksData = [
  {
    id: 1,
    title: 'Brazilian E-Commerce Analysis',
    category: 'Data Analysis',
    description: 'End-to-end analysis on Olist dataset to uncover sales performance, seasonality, and product trends.',
    tags: 'Python • Pandas',
    highlights: [
      'RFM Customer Segmentation analysis',
      'Geospatial analysis of orders and revenue',
      'Interactive Streamlit dashboard'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/adityamp0/Project-Data-Analis-Submission'
  },
  {
    id: 2,
    title: 'Dog & Cat Classification',
    category: 'Machine Learning',
    description: 'Image classification project using computer vision techniques to distinguish between cats and dogs.',
    tags: 'TensorFlow • CNN',
    highlights: [
      'CNN Architecture with Keras',
      'Image augmentation for better accuracy',
      'Real-time inference testing'
    ],
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/adityamp0/Klasifikasi-Gambar'
  },
  {
    id: 3,
    title: 'RFM Segmentation Dashboard',
    category: 'Data Science',
    description: 'Interactive dashboard for analyzing customer behavior using Recency, Frequency, and Monetary metrics.',
    tags: 'Scikit-Learn • Streamlit',
    highlights: [
      'K-Means clustering implementation',
      'Customer lifetime value prediction',
      'Interactive visualization widgets'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/adityamp0/visualisasi-dashboard'
  },
  {
    id: 4,
    title: 'Duolingo Sentiment Analysis',
    category: 'NLP',
    description: 'Analyzing user sentiments from Duolingo feedback using Natural Language Processing and WordCloud.',
    tags: 'Python • NLP',
    highlights: [
      'Sentiment polarity classification',
      'Keyword extraction and WordCloud visualization',
      'Data crawling and preprocessing'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/adityamp0/Project-Analisis-Sentimen'
  }
];

const SelectedWorks = ({ t }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="work" className="section container">
      <div className="section-header">
        <span className="section-number">03</span>
        <div>
          <h2 className="section-title">{t.title}</h2>
          <span className="section-subtitle"><span className="typing-reveal">{t.subtitle}</span></span>
        </div>
      </div>

      <div className="works-grid">
        {worksData.map((work) => (
          <div className="work-card reveal" key={work.id}>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <div className="work-image">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  loading="lazy" 
                  decoding="async"
                />
              </div>
            </a>
            <div className="work-meta" style={{ flexDirection: isMobile ? 'column-reverse' : 'row', gap: '1rem', alignItems: 'flex-start', justifyContent: 'space-between', display: 'flex' }}>
              <div style={{ flex: 1 }}>
                <h3 className="work-title" style={{ fontSize: isMobile ? '1.25rem' : '1.5rem' }}>{work.title}</h3>
                <p className="work-description" style={{ fontSize: isMobile ? '0.85rem' : '0.95rem' }}>{work.description}</p>
                
                <ul className="work-details">
                  {work.highlights.map((highlight, idx) => (
                    <li key={idx} style={{ fontSize: isMobile ? '0.75rem' : '0.8rem' }}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <span className="work-tags" style={{ alignSelf: 'flex-start', whiteSpace: 'nowrap' }}>{work.category}</span>
            </div>
            <a href={work.link} target="_blank" rel="noopener noreferrer" className="cert-link" style={{ marginTop: '1rem' }}>
              View Case Study <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;
