import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = ({ t }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For a static site, we can use mailto or a service like Formspree
    const mailtoLink = `mailto:ampaditya55@gmail.com?subject=Transmission from ${formData.name}&body=${formData.message} (From: ${formData.email})`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section container">
      <div className="section-header">
        <span className="section-number">06</span>
        <div>
          <h2 className="section-title">{t.title}</h2>
          <span className="section-subtitle"><span className="typing-reveal">{t.subtitle}</span></span>
        </div>
      </div>

      <div style={{ maxWidth: '800px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="form-group">
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.name}</label>
            <input 
              type="text" 
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '1rem',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--standard-radius)',
                color: 'var(--text-main)',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--sky-neon)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.email}</label>
            <input 
              type="email" 
              name="email"
              placeholder="hello@world.com"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '1rem',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--standard-radius)',
                color: 'var(--text-main)',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--sky-neon)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.message}</label>
            <textarea 
              name="message"
              placeholder="..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                padding: '1rem',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--standard-radius)',
                color: 'var(--text-main)',
                outline: 'none',
                resize: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--sky-neon)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn-primary" 
            disabled={status === 'sending'}
            style={{ 
              padding: '1rem 2rem', 
              borderRadius: '8px', 
              background: status === 'sending' ? 'rgba(0, 243, 255, 0.1)' : 'transparent', 
              color: 'var(--sky-neon)', 
              fontWeight: '800', 
              border: '2px solid var(--sky-neon)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '0.75rem', 
              width: '100%', 
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(5px)',
              cursor: 'pointer',
              boxShadow: status === 'sending' ? '0 0 20px var(--sky-neon)' : 'none'
            }}
          >
            {status === 'sending' ? t.sending : t.send} <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
