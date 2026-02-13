import React, { useEffect, useRef, useState } from 'react';
import './ImageFlow.css';

// Images served from public/images/
const flowingGallery = [
  { id: '25-1', year: '2025-26', image: '/images/25-26_1.jpeg' },
  { id: '25-3', year: '2025-26', image: '/images/25_26_3.jpeg' },
  { id: '24-1', year: '2024-25', image: '/images/24-25.jpeg' },
  { id: '24-2', year: '2024-25', image: '/images/24-25_2.jpeg' },
];

export default function ImageFlow() {
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

  // Triplicate for seamless infinite scroll
  const marqueeList = [...flowingGallery, ...flowingGallery, ...flowingGallery];

  return (
    <section
      className={`gallery ${isVisible ? 'visible' : ''}`}
      id="gallery"
      ref={sectionRef}
    >
      <div className="gallery-container">
        {/* Section Header — same pattern as About & Events */}
        <div className="section-header">
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">
            Relive the best moments from CodeTantra events
          </p>
        </div>

        {/* Feature Image */}
        <div className="gallery-feature">
          <div className="gallery-card gallery-card--feature">
            <img src="/images/25_26_2.jpeg" alt="Feature 25-26" className="gallery-card__image" />
            <div className="gallery-card__overlay">
              <span className="gallery-card__tag">2025-26</span>
              <span className="gallery-card__caption">Featured Moment</span>
            </div>
          </div>
        </div>

        {/* Year Label */}
        <div className="gallery-year-label">
          <span className="gallery-year-badge">2024 – 2026</span>
        </div>

        {/* Flowing Marquee */}
        <div className="gallery-marquee">
          <div className="gallery-marquee__track">
            {marqueeList.map((item, index) => (
              <div key={`${item.id}-${index}`} className="gallery-card gallery-card--standard">
                <img src={item.image} alt="Gallery Item" className="gallery-card__image" />
                <div className="gallery-card__overlay">
                  <span className="gallery-card__tag">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
