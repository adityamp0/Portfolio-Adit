import { useLayoutEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
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


export default function SelectedWorks({ t }) {
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;
    const items = [...sectionRef.current.querySelectorAll('.work-item')];
    const reveal = (item) => {
      if (!item.classList.contains('work-pending')) return;
      item.classList.remove('work-pending');
      item.classList.add('work-entered');
      observer.unobserve(item);
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target); });
    }, { rootMargin: '100px 0px', threshold: 0 });
    items.forEach(item => { item.classList.add('work-pending'); observer.observe(item); });
    const onFocus = (event) => {
      const item = event.target.closest('.work-item');
      if (item) reveal(item);
    };
    const onMotionChange = () => {
      if (media.matches) {
        observer.disconnect();
        items.forEach(item => item.classList.remove('work-pending', 'work-entered'));
      }
    };
    const section = sectionRef.current;
    section.addEventListener('focusin', onFocus);
    media.addEventListener('change', onMotionChange);
    return () => {
      observer.disconnect();
      section.removeEventListener('focusin', onFocus);
      media.removeEventListener('change', onMotionChange);
      items.forEach(item => item.classList.remove('work-pending', 'work-entered'));
    };
  }, []);
  return <section ref={sectionRef} className="section">
    <SectionHeader number="03" title={t.title} subtitle={t.subtitle} />
    <div className="works-list">{worksData.map((work, index) => <article className={'work-item' + (index === 0 ? ' work-featured' : '')} key={work.id}>
      <div className="work-heading"><span className="eyebrow">{String(index + 1).padStart(2, '0')}</span><h2>{work.title}</h2><span className="eyebrow work-category">{work.category}</span></div>
      <a className="work-image" href={work.link} target="_blank" rel="noopener noreferrer" aria-label={t.repository + ': ' + work.title}>
        <img src={work.image} alt={work.title} loading="lazy" decoding="async" width="800" height="450" />
        <span className="image-caption">{work.category}<ArrowUpRight size={18} /></span>
      </a>
      <div className="work-description"><p>{work.description}</p>
        <ul className="work-highlights">{work.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
        <p className="eyebrow work-stack">{work.tags.replaceAll(String.fromCharCode(7), '/').replaceAll('\u2022', '/')}</p>
        <a className="text-link" href={work.link} target="_blank" rel="noopener noreferrer">{t.repository}<ArrowUpRight size={17} /></a>
      </div>
    </article>)}</div>
  </section>;
}
