import { ArrowRight, ArrowUpRight } from 'lucide-react';
export default function Hero({ t, setActiveSection, playIntro }) {
  return <section className="hero" aria-labelledby="hero-name">
    <div className="hero-kicker"><span className="eyebrow">{t.kicker}</span><span className="eyebrow">01 / INDEX</span></div>
    <h1 id="hero-name" className={'hero-name' + (playIntro ? ' hero-intro' : '')}><span className="name-mask"><span className="name-line">ADITYA</span></span><span className="name-mask"><span className="name-line">MAULANA</span></span><span className="name-mask"><span className="name-line">PAMUNGKAS<span className="name-period">.</span></span></span></h1>
    <div className="hero-bottom">
      <div className="hero-detail"><span className="small-marker" /><p>Machine Learning Engineer<br /><span>{t.location}</span></p></div>
      <div className="hero-summary"><p>{t.description}</p>
        <div className="hero-actions">
          <button className="text-link" onClick={() => setActiveSection('#work')}>{t.btnWork}<ArrowRight size={17} /></button>
          <button className="text-link secondary-link" onClick={() => setActiveSection('#contact')}>{t.btnContact}<ArrowRight size={17} /></button>
          <a className="text-link secondary-link" href="https://drive.google.com/file/d/1PONf-BSoVahvDugw-eLvLhLmR4Wf-9_S/view?usp=sharing" target="_blank" rel="noopener noreferrer">{t.btnCv}<ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  </section>;
}
