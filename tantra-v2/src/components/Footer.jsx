function Footer() {
  return (
    <footer>

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">

          <div className="footer-logo">

            <div className="footer-logo-icon">CT</div>

            <div className="footer-logo-text">CodeTantra</div>

          </div>

          <p className="footer-description">
            Empowering tomorrow's innovators through code,
            creativity, and collaboration
          </p>

          <div className="footer-social">

            <a href="#" className="social-icon">📷</a>

            <a href="#" className="social-icon">💼</a>

            <a href="#" className="social-icon">🐙</a>

            <a href="#" className="social-icon">✉️</a>

          </div>

        </div>

        {/* CENTER */}
        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul className="footer-links">

            <li><a href="#about">About Us</a></li>

            <li><a href="#events">Events</a></li>

            <li><a href="#">Need For Code</a></li>

            <li><a href="#">Contact</a></li>

          </ul>

        </div>

        {/* RIGHT */}
        <div className="footer-contact">

          <h3>Get In Touch</h3>

          <p>Thadomal Shahani Engineering College</p>

          <p>AI & Data Science Department</p>

          <p>Mumbai, Maharashtra</p>

          <a
            href="mailto:codetantra@tsec.edu"
            className="footer-email"
          >
            codetantra@tsec.edu
          </a>

        </div>

      </div>

      {/* BOTTOM */}
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
