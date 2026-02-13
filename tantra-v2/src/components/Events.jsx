import { useState } from "react";
function Events() {
  const [activeCard, setActiveCard] = useState(null);

  const handleToggle = (card) => {
    setActiveCard((prev) => (prev === card ? null : card));
  };

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
          <div
            className={`event-card ${activeCard === "hackathon" ? "open" : ""}`}
          >
            <div
              className="event-click-area"
              onClick={() => handleToggle("hackathon")}
            >
              <div className="event-caption">EPISODE 1</div>

              <div className="event-icon-wrapper">
                <div className="event-icon">🏆</div>
              </div>

              <h3 className="event-title">Hackathons</h3>
              <p className="event-subtitle">NEED FOR CODE SERIES</p>

              <p className="event-description">
                Our flagship hackathon series where students collaborate,
                innovate, and build real-world solutions.
              </p>
            </div>

            <div className="gallery-wrapper">
              <div className="polaroid-gallery">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    className="polaroid"
                    key={num}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={`https://picsum.photos/300/200?random=${num}`}
                      alt="event"
                    />
                    <p>
                      {[
                        "Opening Ceremony",
                        "Midnight Coding",
                        "Team Strategy",
                        "Prize Distribution",
                      ][num - 1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WORKSHOPS */}
          <div
            className={`event-card ${activeCard === "workshop" ? "open" : ""}`}
          >
            <div
              className="event-click-area"
              onClick={() => handleToggle("workshop")}
            >
              <div className="event-caption">EPISODE 2</div>

              <div className="event-icon-wrapper">
                <div className="event-icon">💡</div>
              </div>

              <h3 className="event-title">Workshops</h3>
              <p className="event-subtitle">SKILL DEVELOPMENT</p>

              <p className="event-description">
                Hands-on workshops covering ML, Web Dev, Cloud & more from certified practioners to help develop skills.
              </p>
            </div>

            <div className="gallery-wrapper">
              <div className="polaroid-gallery">
                {[5, 6, 7, 8].map((num) => (
                  <div
                    className="polaroid"
                    key={num}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={`https://picsum.photos/300/200?random=${num}`}
                      alt="event"
                    />
                    <p>
                      {[
                        "Live Coding",
                        "Interactive Q&A",
                        "Hands-on Practice",
                        "Certification Moment",
                      ][num - 5]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Events;
