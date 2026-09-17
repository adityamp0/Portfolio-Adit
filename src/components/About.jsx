import SectionHeader from './SectionHeader';
export default function About({ t }) {
  const info = [[t.stats.loc, 'Indonesia'], [t.stats.edu, t.education], [t.stats.interest, 'Machine Learning'], [t.stats.passion, 'AI & Data Science']];
  return <section className="section about-section" aria-labelledby="about-title">
    <SectionHeader number="01.1" title={t.title} subtitle={t.subtitle} as="h2" />
    <div className="about-layout">
      <div className="prose"><p className="intro-text" id="about-title">{t.bio1}</p><p>{t.bio2}</p><p>{t.bio3}</p></div>
      <dl className="profile-directory">{info.map(([label, value]) => <div key={label}><dt className="eyebrow">{label}</dt><dd>{value}</dd></div>)}</dl>
    </div>
  </section>;
}
