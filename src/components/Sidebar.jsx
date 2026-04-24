import React, { useState } from 'react';
import {
  Home,
  Folder,
  User,
  Award,
  BarChart3,
  Mail,
  CheckCircle2,
  Send,
  Menu,
  X
} from 'lucide-react';

const Sidebar = ({ toggleTheme, theme, activeSection, setActiveSection, isProductivity, toggleProductivity, lang, toggleLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { name: t.home, icon: <Home size={18} />, link: '#home' },
    { name: t.journey, icon: <Award size={18} />, link: '#journey' },
    { name: t.work, icon: <Folder size={18} />, link: '#work' },
    { name: t.certs, icon: <Award size={18} />, link: '#certifications' },
    { name: t.skills, icon: <BarChart3 size={18} />, link: '#skills' },
    { name: t.contact, icon: <Mail size={18} />, link: '#contact' },
  ];

  const handleNavClick = (link) => {
    setActiveSection(link);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button 
        className="mobile-toggle" 
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-profile" style={{ padding: '0.5rem 0 3rem', textAlign: 'left' }}>
          <div className="profile-img" style={{
            width: '60px',
            height: '60px',
            marginBottom: '1.5rem',
            border: '1px solid var(--border-color)',
            padding: '3px',
            background: 'var(--card-bg)',
            borderRadius: '50%',
            overflow: 'hidden'
          }}>
            <img 
              src="https://avatars.githubusercontent.com/u/100006466?v=4" 
              alt="Aditya Maulana" 
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
              loading="lazy"
              decoding="async"
            />
          </div>

          <h2 className="profile-name" style={{ fontSize: '1.1rem', fontWeight: '700', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Aditya Maulana <CheckCircle2 size={14} fill="var(--sky-neon)" color="var(--bg-color)" />
          </h2>
          <p className="profile-handle" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '400', marginTop: '0.2rem' }}>Machine Learning Engineer</p>
        </div>

        <nav className="sidebar-nav" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className={`side-link ${activeSection === item.link ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault(); // Prevent scroll jump
                handleNavClick(item.link);
              }}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-footer" style={{ marginTop: 'auto', paddingTop: '3rem' }}>
          <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '2rem' }}>
            {[
              { link: 'https://github.com/adityamp0', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> },
              { link: 'https://linkedin.com/in/adityamaulanapamungkas', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
              { link: 'mailto:ampaditya55@gmail.com', icon: <Mail size={20} /> }
            ].map((soc, i) => (
              <a key={i} href={soc.link} target="_blank" rel="noopener noreferrer" style={{
                color: 'var(--text-muted)',
                transition: 'color 0.3s ease'
              }}
                onMouseOver={(e) => { e.currentTarget.style.color = 'var(--sky-neon)'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                {soc.icon}
              </a>
            ))}
          </div>

          <div className="sidebar-footer-row" style={{ 
            marginBottom: '1rem', 
            gap: '0.5rem', 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flex: '1 1 auto' }}>
              {/* Language Toggle */}
              <div 
                onClick={toggleLang}
                style={{ 
                  cursor: 'pointer', 
                  fontSize: '0.7rem', 
                  fontWeight: '800', 
                  color: 'var(--text-main)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.2s ease'
                }}
                title="Change Language"
              >
                {lang === 'en' ? 'EN' : 'ID'}
              </div>

              {/* Theme Toggle */}
              <div 
                className="theme-toggle-minimal" 
                onClick={toggleTheme} 
                style={{ 
                  width: '40px', 
                  height: '28px',
                  background: 'var(--border-color)',
                  borderRadius: '14px',
                  position: 'relative',
                  cursor: 'pointer'
                }}
              >
                <div className="mini-knob" style={{
                  width: '22px',
                  height: '22px',
                  top: '3px',
                  left: theme === 'dark' ? '3px' : '15px'
                }}>
                  {theme === 'dark' ? '☀️' : '🌙'}
                </div>
              </div>
            </div>

            {/* Productivity Mode Toggle - Full width on very small screens */}
            <div 
              className={`theme-toggle-minimal ${isProductivity ? 'active' : ''}`} 
              onClick={toggleProductivity}
              title="Productivity Mode"
              style={{ 
                flex: '1 1 100%', 
                marginTop: '0.5rem',
                minHeight: '34px', 
                background: isProductivity ? 'var(--sky-neon)' : 'rgba(255, 255, 255, 0.03)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: '8px', 
                color: isProductivity ? '#000' : 'var(--text-muted)', 
                fontSize: '0.7rem', 
                fontWeight: '700',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease'
              }}
            >
              {isProductivity ? 'MINIMAL' : 'NEON INTERFACE'}
            </div>
          </div>

          <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', opacity: '0.5' }}>
            © {currentYear} — ADITYA M.
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
