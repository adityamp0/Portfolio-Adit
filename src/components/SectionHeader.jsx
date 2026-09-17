import { createElement } from 'react';
export default function SectionHeader({ number, title, subtitle, as: Heading = 'h1' }) {
  return <header className="section-header">
    <span className="eyebrow section-number">{number} /</span>
    <div>{createElement(Heading, null, title)}<p className="section-subtitle">{subtitle}</p></div>
  </header>;
}
