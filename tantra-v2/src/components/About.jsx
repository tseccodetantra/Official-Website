function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* TITLE */}
        <h2 className="section-title">About CodeTantra</h2>
        <div className="section-underline"></div>

        {/* TEXT BOX */}
        <div className="about-content">

          <h3 className="about-heading">Empowering Tomorrow's Innovators</h3>

          <p className="about-text">
            TSEC CodeTantra is the premier technical committee of the Artificial
            Intelligence and Data Science Department at Thadomal Shahani
            Engineering College.
          </p>

          <p className="about-text">
            Through workshops, hackathons, and technical events, we build
            confident developers and innovators.
          </p>

          <div className="about-features">
            <div className="feature-badge">🚀 Innovation First</div>
            <div className="feature-badge">💡 Hands-on Learning</div>
            <div className="feature-badge">🏆 Competitive Spirit</div>
          </div>

        </div>

        {/* FOCUS CARDS */}
        <div className="focus-grid">

          {/* CARD 1 */}
          <div className="focus-card">

            <div className="focus-icon">🧠</div>

            <h3 className="focus-title">AI & Data Science</h3>

            <p className="focus-description">
              Leveraging cutting-edge artificial intelligence and data science
              technologies to empower students
            </p>

          </div>

          {/* CARD 2 */}
          <div className="focus-card">

            <div className="focus-icon">💻</div>

            <h3 className="focus-title">Programming Excellence</h3>

            <p className="focus-description">
              Building strong foundations in programming through hands-on
              workshops and practical projects
            </p>

          </div>

          {/* CARD 3 */}
          <div className="focus-card">

            <div className="focus-icon">👥</div>

            <h3 className="focus-title">Community Driven</h3>

            <p className="focus-description">
              Fostering a collaborative environment where students learn, grow,
              and succeed together
            </p>

          </div>

          {/* CARD 4 (HIGHLIGHT) */}
          <div className="focus-card highlight">

            <div className="focus-icon">🎯</div>

            <h3 className="focus-title">Industry Ready</h3>

            <p className="focus-description">
              Preparing students for real-world challenges through competitive
              events and hackathons
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
