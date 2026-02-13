import {
  Rocket,
  Brain,
  Laptop,
  Users,
  Target,
  Zap,
  Lightbulb,
  Handshake
} from "lucide-react";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* TITLE */}
        <h2 className="section-title floating-title">About CodeTantra</h2>

        <div className="section-underline"></div>

        {/* MAIN CONTENT */}
        <div className="about-content">

          {/* HEADING */}
          <h3 className="about-heading comic-heading sparkle-text">
            <span className="rocket-icon">
              <Rocket size={36} />
            </span>

            Where Code Meets Creativity!
          </h3>

          <p className="about-text">
            TSEC CodeTantra is the official technical committee of the
            Artificial Intelligence and Data Science Department at
            Thadomal Shahani Engineering College.
          </p>

          <p className="about-text">
            The committee functions under the guidance of our respected
            Head of Department, <strong>Dr. Madhuri Ma’am</strong>, who
            continuously inspires innovation and excellence.
          </p>

          <p className="about-text">
            Through hackathons, workshops, coding competitions, and
            mentorship programs, we empower students with real-world
            exposure and technical confidence.
          </p>

          <p className="about-text">
            At CodeTantra, we don’t just teach coding — we build leaders,
            innovators, and digital superheroes for tomorrow.
          </p>

          {/* BADGES */}
          <div className="about-features">

            <div className="feature-badge">
              <Zap size={18} /> Learn by Doing
            </div>

            <div className="feature-badge pink">
              <Lightbulb size={18} /> Think Big
            </div>

            <div className="feature-badge blue">
              <Target size={18} /> Build Smart
            </div>

            <div className="feature-badge">
              <Handshake size={18} /> Grow Together
            </div>

          </div>
        </div>


        {/* FOCUS CARDS */}
        <div className="focus-grid">

          <div className="focus-card">

            <div className="focus-icon">
              <Brain size={48} />
            </div>

            <h3 className="focus-title">AI & Data Science</h3>

            <p className="focus-description">
              Master modern AI tools, machine learning models, and
              data-driven solutions to solve real-world problems.
            </p>

          </div>


          <div className="focus-card">

            <div className="focus-icon">
              <Laptop size={48} />
            </div>

            <h3 className="focus-title">Programming Excellence</h3>

            <p className="focus-description">
              Build strong coding foundations through projects,
              challenges, hands-on workshops, and competitive practice.
            </p>

          </div>


          <div className="focus-card">

            <div className="focus-icon">
              <Users size={48} />
            </div>

            <h3 className="focus-title">Community Driven</h3>

            <p className="focus-description">
              Learn, collaborate, mentor, and grow together in a friendly,
              inclusive, and supportive environment.
            </p>

          </div>


          <div className="focus-card highlight">

            <div className="focus-icon">
              <Target size={48} />
            </div>

            <h3 className="focus-title">Industry Ready</h3>

            <p className="focus-description">
              Get prepared for internships, placements, startups, and
              professional careers with real-world exposure.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
