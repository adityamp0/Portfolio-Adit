import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const email = "ampaditya55@gmail.com";

  return (
    <footer className="footer-section container" style={{ borderTop: '1px solid var(--border-color)', marginTop: '4rem', paddingTop: '4rem' }}>
      <div className="reveal" style={{ textAlign: 'center' }}>
        <p className="dialogue-text" style={{ fontSize: '0.8rem', opacity: 0.5 }}>End of Transmission.</p>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ADITYA M. PAMUNGKAS. ALL RIGHTS RESERVED.</p>
        <div className="footer-links">
          <span>SECURED_SESSION // 001</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
