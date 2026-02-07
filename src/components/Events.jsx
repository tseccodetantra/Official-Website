import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Lightbulb, Zap } from 'lucide-react';
import './Events.css';

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const events = [
    {
      icon: <Trophy />,
      title: 'Hackathons',
      subtitle: 'Need For Code Series',
      description: 'Our flagship hackathon series where students collaborate, innovate, and build groundbreaking solutions to real-world problems. Experience intense coding marathons, mentorship from industry experts, and exciting prizes.',
      highlights: ['24-48 Hour Sprints', 'Industry Mentors', 'Cash Prizes', 'Networking Opportunities'],
      color: 'purple',
      link: '/NFC-4.0/'
    },
    {
      icon: <Lightbulb />,
      title: 'Workshops',
      subtitle: 'Skill Development',
      description: 'Hands-on technical workshops covering cutting-edge technologies like Machine Learning, Web Development, Cloud Computing, and more. Learn from experienced professionals and gain practical skills.',
      highlights: ['Expert Speakers', 'Live Coding Sessions', 'Certificates', 'Project-Based Learning'],
      color: 'cyan'
    },
    {
      icon: <Zap />,
      title: 'Competitions',
      subtitle: 'Coding Challenges',
      description: 'Regular competitive programming contests, algorithm challenges, and coding competitions to sharpen your problem-solving skills and prepare for technical interviews.',
      highlights: ['Weekly Contests', 'DSA Practice', 'Leaderboards', 'Interview Prep'],
      color: 'pink'
    }
  ];

  return (
    <section className={`events ${isVisible ? 'visible' : ''}`} id="events" ref={sectionRef}>
      <div className="events-container">
        <div className="section-header">
          <h2 className="section-title">Our Events</h2>
          <p className="section-subtitle">
            Transforming learning into experience through immersive technical events
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div 
              key={index} 
              className={`event-card event-${event.color}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="event-header">
                <div className="event-icon-wrapper">
                  <div className="event-icon">
                    {event.icon}
                  </div>
                </div>
                <div className="event-title-group">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-subtitle">{event.subtitle}</p>
                </div>
              </div>

              <p className="event-description">{event.description}</p>

              <div className="event-highlights">
                {event.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-badge">
                    <span className="highlight-dot"></span>
                    {highlight}
                  </div>
                ))}
              </div>

              {event.link && (
                <a href={event.link} className="event-link">
                  Explore Now →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="events-cta">
          <h3 className="cta-title">Ready to Join the Revolution?</h3>
          <p className="cta-description">
            Become part of TSEC CodeTantra and embark on a journey of innovation, learning, and growth
          </p>
          <a href="/NFC-4.0/" className="glow-button">
            Register for Need For Code 4.0
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
