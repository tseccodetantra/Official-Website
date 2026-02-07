import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div 
          className="hero-glow hero-glow-1"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`
          }}
        />
        <div 
          className="hero-glow hero-glow-2"
          style={{
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
          }}
        />
        <div 
          className="hero-glow hero-glow-3"
          style={{
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`
          }}
        />
      </div>

      {/* Floating Logo Elements */}
      <div className="floating-logos">
        <img src="/logo.png" alt="" className="floating-logo floating-logo-1" />
        <img src="/logo.png" alt="" className="floating-logo floating-logo-2" />
        <img src="/logo.png" alt="" className="floating-logo floating-logo-3" />
        <img src="/logo.png" alt="" className="floating-logo floating-logo-4" />
        <img src="/logo.png" alt="" className="floating-logo floating-logo-5" />
        <img src="/logo.png" alt="" className="floating-logo floating-logo-6" />
        <img src="/logo.png" alt="" className="floating-logo floating-logo-7" />
        <img src="/logo.png" alt="" className="floating-logo floating-logo-8" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="badge-icon" />
            <span>TSEC Technical Committee</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line">Welcome to</span>
            <span className="title-main">CodeTantra</span>
            <span className="title-underline"></span>
          </h1>

          <p className="hero-description">
            Empowering students through innovative workshops, competitive hackathons, 
            and programming excellence at Thadomal Shahani Engineering College
          </p>

          <div className="hero-cta">
            <a href="/NFC-4.0/" className="glow-button">
              Explore Need For Code 4.0
            </a>
            <button className="secondary-button" onClick={scrollToAbout}>
              Learn More
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Students Reached</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Events Conducted</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={scrollToAbout}>
          <ChevronDown className="scroll-icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
