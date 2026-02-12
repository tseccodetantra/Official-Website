function Events() {
  return (
    <section className="events" id="events">

      <div className="events-container">

        <h2 className="section-title">Our Events</h2>
        <div className="section-underline"></div>

        <p className="events-intro">
          Transforming learning into experience through immersive technical events
        </p>

        <div className="events-grid">

          {/* HACKATHON */}
          <div className="event-card">

            <div className="event-caption">EPISODE 1</div>

            <div className="event-icon-wrapper">
              <div className="event-icon">🏆</div>
            </div>

            <h3 className="event-title">Hackathons</h3>

            <p className="event-subtitle">NEED FOR CODE SERIES</p>

            <p className="event-description">
              Our flagship hackathon series where students collaborate, innovate,
              and build groundbreaking solutions to real-world problems.
              Experience intense coding marathons, mentorship from industry experts,
              and exciting prizes.
            </p>

            <div className="event-features">
              <div className="event-feature">24-48 Hour Sprints</div>
              <div className="event-feature">Industry Mentors</div>
              <div className="event-feature">Cash Prizes</div>
              <div className="event-feature">Networking Opportunities</div>
            </div>

            <a href="#" className="event-cta">EXPLORE NOW</a>
          </div>

          {/* WORKSHOPS */}
          <div className="event-card">

            <div className="event-caption">EPISODE 2</div>

            <div className="event-icon-wrapper">
              <div className="event-icon">💡</div>
            </div>

            <h3 className="event-title">Workshops</h3>

            <p className="event-subtitle">SKILL DEVELOPMENT</p>

            <p className="event-description">
              Hands-on technical workshops covering cutting-edge technologies
              like Machine Learning, Web Development, Cloud Computing, and more.
              Learn from experienced professionals and gain practical skills.
            </p>

            <div className="event-features">
              <div className="event-feature">Expert Speakers</div>
              <div className="event-feature">Live Coding Sessions</div>
              <div className="event-feature">Certificates</div>
              <div className="event-feature">Project-Based Learning</div>
            </div>

            <a href="#" className="event-cta">EXPLORE NOW</a>
          </div>

          {/* COMPETITIONS */}
          <div className="event-card">

            <div className="event-caption">EPISODE 3</div>

            <div className="event-icon-wrapper">
              <div className="event-icon">⚡</div>
            </div>

            <h3 className="event-title">Competitions</h3>

            <p className="event-subtitle">CODING CHALLENGES</p>

            <p className="event-description">
              Regular competitive programming contests, algorithm challenges,
              and coding competitions to sharpen your problem-solving skills
              and prepare for technical interviews.
            </p>

            <div className="event-features">
              <div className="event-feature">Weekly Contests</div>
              <div className="event-feature">DSA Practice</div>
              <div className="event-feature">Leaderboards</div>
              <div className="event-feature">Interview Prep</div>
            </div>

            <a href="#" className="event-cta">EXPLORE NOW</a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Events;
