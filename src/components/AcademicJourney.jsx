import SectionHeader from './SectionHeader';
export default function AcademicJourney({ t }) {
  const journeys = [
    {
      institution: 'Universitas Gunadarma',
      degree: 'Informatics Engineering',
      duration: '2022 — Present',
      description: 'Currently pursuing a Bachelor\'s degree in Informatics Engineering, focusing on core software engineering principles and computational logic.',
      logo: 'https://icon2.cleanpng.com/20180508/svq/avsmons28.webp'
    },
    {
      institution: 'Asah led by Dicoding',
      degree: 'Machine Learning Cohort',
      duration: '2025',
      description: 'Gained practical experience in developing machine learning models and applying MLOps fundamentals, including reproducible experiments, structured pipelines, and basic deployment workflows.',
      logo: 'https://assets.cdn.dicoding.com/original/jobs/dos:lowongan_dicoding_dicoding_indonesia_030122135437.png'
    }
  ];


  return <section className="section">
    <SectionHeader number="02" title={t.title} subtitle={t.subtitle} />
    <div className="journey-list">{journeys.map((item, index) => <article className="journey-row" key={item.institution}>
      <p className="eyebrow journey-date">{item.duration}</p>
      <div><span className="eyebrow">{index === 0 ? t.education : t.training}</span>
        <h2>{item.institution}</h2><p className="journey-degree">{item.degree}</p>
        <p className="prose">{item.description}</p>
        {index === 1 && <ul className="inline-tags">{['MLOps', 'Pipelines', 'Deployment', 'PyTorch'].map(tag => <li key={tag}>{tag}</li>)}</ul>}
      </div>
    </article>)}</div>
  </section>;
}
