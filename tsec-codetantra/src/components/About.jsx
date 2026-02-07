import React, { useEffect, useRef, useState } from 'react';
import { Brain, Code, Users, Target } from 'lucide-react';
import './About.css';

const About = () => {
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

  const features = [
    {
      icon: <Brain />,
      title: 'AI & Data Science',
      description: 'Leveraging cutting-edge artificial intelligence and data science technologies to empower students'
    },
    {
      icon: <Code />,
      title: 'Programming Excellence',
      description: 'Building strong foundations in programming through hands-on workshops and practical projects'
    },
    {
      icon: <Users />,
      title: 'Community Driven',
      description: 'Fostering a collaborative environment where students learn, grow, and succeed together'
    },
    {
      icon: <Target />,
      title: 'Industry Ready',
      description: 'Preparing students for real-world challenges through competitive events and hackathons'
    }
  ];

  return (
    <section className={`about ${isVisible ? 'visible' : ''}`} id="about" ref={sectionRef}>
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About CodeTantra</h2>
        </div>

        <div className="about-content">
          <div className="about-main-card">
            <div className="about-text">
              <h3 className="about-heading">Empowering Tomorrow's Innovators</h3>
              <p className="about-description">
                TSEC CodeTantra is the premier technical committee of the Artificial Intelligence 
                and Data Science Department at Thadomal Shahani Engineering College. We are dedicated 
                to cultivating programming excellence and fostering innovation among students.
              </p>
              <p className="about-description">
                Through meticulously crafted workshops, competitive hackathons, and engaging technical 
                events, we provide students with the skills and confidence needed to excel in the 
                ever-evolving world of technology. Our mission is to create a vibrant community of 
                passionate developers and problem solvers.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🚀</div>
                  <span>Innovation First</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">💡</div>
                  <span>Hands-on Learning</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🏆</div>
                  <span>Competitive Spirit</span>
                </div>
              </div>
            </div>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
