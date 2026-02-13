import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram />, url: 'https://www.instagram.com/tseccodetantra/?hl=en', label: 'Instagram' },
    { icon: <Linkedin />, url: 'https://in.linkedin.com/company/tsec-codetantra', label: 'LinkedIn' },
    { icon: <Github />, url: 'https://github.com/tseccodetantra', label: 'GitHub' },
    { icon: <Mail />, url: '#', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Need For Code', href: '/NFC-4.0/' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="CodeTantra Logo" className="footer-logo-icon" />
              <span className="footer-logo-text">CodeTantra</span>
            </div>
            <p className="footer-tagline">
              Empowering tomorrow's innovators through code, creativity, and collaboration
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Get In Touch</h4>
            <div className="contact-info">
              <p>Thadomal Shahani Engineering College</p>
              <p>AI & Data Science Department</p>
              <p>Mumbai, Maharashtra</p>
              <a href="mailto:codetantra@tsec.edu" className="contact-email">
                codetantra@tsec.edu
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} TSEC CodeTantra. All rights reserved.</p>
            <p className="made-with">
              Made with <span className="heart">♥</span> by CodeTantra Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
