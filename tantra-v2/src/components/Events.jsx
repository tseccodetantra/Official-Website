import { useState } from "react";

// ✅ Import Hackathon Images
import hackathon1 from "../assets/hackathon1.jpg";
import hackathon2 from "../assets/hackathon2.jpg";
import hackathon3 from "../assets/hackathon3.jpg";
import hackathon4 from "../assets/hackathon4.jpg";

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

          {/* ================= HACKATHON ================= */}
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
                Our Flagship Hackathon Series-
                Need For Code is a high-impact hackathon where students
                collaborate, innovate, and build real-world solutions.
                Participants tackle industry-relevant challenges, develop
                functional prototypes, and gain hands-on experience with
                modern technologies — all in an intense, fast-paced environment.
                <br /><br />
                More than just coding, it’s about teamwork, creativity, and
                turning ideas into reality.
              </p>
            </div>

            <div className="gallery-wrapper">
              <div className="polaroid-gallery">
                {[hackathon1, hackathon2, hackathon3, hackathon4].map(
                  (img, index) => (
                    <div
                      className="polaroid"
                      key={index}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img src={img} alt={`Hackathon ${index + 1}`} />
                      <p>
                        {[
                          // "Opening Ceremony",
                          // "Midnight Coding",
                          // "Team Collaboration",
                          // "Prize Distribution",
                        ][index]}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* ================= WORKSHOPS ================= */}
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
                Through immersive technical events, we bridge the gap between
                theory and real-world application. Students engage in hands-on
                challenges, collaborate with peers, and learn from experienced
                mentors in a fast-paced, practical environment.
                <br /><br />
                More than just learning, it’s about building skills, gaining
                confidence, and turning knowledge into real impact. Where
                curiosity evolves into capability and ideas grow into tangible
                outcomes.
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
                      alt="Workshop event"
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
