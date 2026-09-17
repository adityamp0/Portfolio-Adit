import { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function ContactForm({ t }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(t.subject + ' ' + formData.name);
    const body = encodeURIComponent(formData.message + '\n\n' + formData.name + ' <' + formData.email + '>');
    window.location.href = 'mailto:ampaditya55@gmail.com?subject=' + subject + '&body=' + body;
  };
  return <section className="section contact-section">
    <SectionHeader number="06" title={t.title} subtitle={t.subtitle} />
    <h2 className="contact-statement">{t.statement}<br /><span>{t.talk}</span></h2>
    <div className="contact-layout">
      <div className="contact-details">
        <a className="contact-email" href="mailto:ampaditya55@gmail.com">ampaditya55@gmail.com<ArrowUpRight size={20} /></a>
        <p>{t.intro}</p><div className="social-links">
          <a href="https://github.com/adityamp0" target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={14} /></a>
          <a href="https://linkedin.com/in/adityamaulanapamungkas" target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={14} /></a>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-pair">
          <div className="form-field"><label htmlFor="contact-name">{t.name}</label><input id="contact-name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required /></div>
          <div className="form-field"><label htmlFor="contact-email">{t.email}</label><input id="contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required /></div>
        </div>
        <div className="form-field"><label htmlFor="contact-message">{t.message}</label><textarea id="contact-message" name="message" rows="4" value={formData.message} onChange={handleChange} required /></div>
        <div className="form-bottom"><button type="submit" className="text-link">{t.send}<ArrowRight size={17} /></button><p>{t.note}</p></div>
      </form>
    </div>
  </section>;
}
