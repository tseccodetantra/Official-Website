function Footer() {
  return (
    <footer>

      <div className="footer-container">

        {/* LEFT SECTION - BRANDING */}
        <div className="footer-brand">

          <div className="footer-logo">

            <div className="footer-logo-icon">CT</div>

            <div className="footer-logo-text">CodeTantra</div>

          </div>

          <p className="footer-description">
            Empowering tomorrow's innovators through code,
            creativity, and collaboration 💻✨
          </p>

          <div className="footer-social">

            <a 
              href="https://instagram.com/codetantra" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              📷
            </a>

            <a 
              href="https://linkedin.com/company/codetantra" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              💼
            </a>

            <a 
              href="https://github.com/codetantra" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              🐙
            </a>

            <a 
              href="mailto:codetantra@tsec.edu"
              className="social-icon"
              aria-label="Email"
            >
              ✉️
            </a>

          </div>

        </div>

        {/* CENTER SECTION - QUICK LINKS */}
        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul className="footer-links">

            <li><a href="#home">🏠 Home</a></li>

            <li><a href="#about">ℹ️ About Us</a></li>

            <li><a href="#events">🎪 Events</a></li>

            <li><a href="#nfc">🚀 Need For Code 4.0</a></li>

            <li><a href="#contact">📞 Contact</a></li>

          </ul>

        </div>

        {/* RIGHT SECTION - CONTACT */}
        <div className="footer-contact">

          <h3>Get In Touch</h3>

          <p>🏫 Thadomal Shahani Engineering College</p>

          <p>🤖 AI & Data Science Department</p>

          <p>📍 Mumbai, Maharashtra</p>

          <a
            href="mailto:codetantra@tsec.edu"
            className="footer-email"
          >
            📧 codetantra@tsec.edu
          </a>

        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">

        <p>© 2026 TSEC CodeTantra. All rights reserved.</p>

        <p style={{ marginTop: "0.5rem" }}>
          Made with <span className="footer-heart">♥</span> by CodeTantra Team
        </p>

      </div>

    </footer>
  );
}

export default Footer;
