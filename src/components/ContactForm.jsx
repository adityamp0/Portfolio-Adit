import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
          <h2 className="section-title">Get In Touch</h2>
          <span className="section-subtitle">Initiate Conversation Sequence</span>
        </div>
      </div>

      <div style={{ maxWidth: '800px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="form-group">
            <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Caller ID</label>
            <input 
              type="text" 
              name="name"
              placeholder="YOUR NAME"
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
            <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Return Signal</label>
            <input 
              type="email" 
              name="email"
              placeholder="YOUR@EMAIL.COM"
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
            <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Transmission Encrypted</label>
            <textarea 
              name="message"
              placeholder="DESCRIBE YOUR PROJECT OR INQUIRY..."
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

          <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            Execute Transmission <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
