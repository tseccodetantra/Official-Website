import React from 'react';
import './People.css';

// Import images
import img24_25_1 from '../assets/images/24-25.jpeg';
import img24_25_2 from '../assets/images/24-25_2.jpeg';
import img25_26_1 from '../assets/images/25-26_1.jpeg';
import img25_26_2 from '../assets/images/25_26_2.jpeg';
import img25_26_3 from '../assets/images/25_26_3.jpeg';
import img25_26_4 from '../assets/images/25_26_4.jpg';
import img25_26_5 from '../assets/images/25_26_5.jpg';




// Data for Flowing Carousel (Merged 24-25 and 25-26)
const flowingGallery = [
  { id: '25-1', year: '2025-26', image: img25_26_1 },
  { id: '25-3', year: '2025-26', image: img25_26_3 },
  { id: '24-1', year: '2024-25', image: img24_25_1 },
  { id: '24-2', year: '2024-25', image: img24_25_2 },
  { id: '24-2', year: '2024-25', image: img25_26_4 },
  { id: '24-2', year: '2024-25', image: img25_26_5 },

];

const isLg = window.innerWidth >= 1024
export default function People() {
  
  // Duplicate the combined list for smooth scrolling
  const marqueeList = [...flowingGallery, ...flowingGallery, ...flowingGallery];

  return (
    <div className="gallery-wrapper">
      
      {/* Header */}
      <div className="gallery-header">
        <h1 className="main-title">Our Gallery</h1>
      </div>

      {/* --- SECTION: 25-26 FEATURE + GALLERY --- */}
      <div className="section-container">
        <h2 className="section-heading">2025-26</h2>
        
        {/* 1. Static Feature Image (Bigger Sized) */}
        <div className="static-grid" style={{ marginBottom: '3rem' }}>
          <div className="card-base card-feature">
            <img src={img25_26_2} alt="Feature 25-26" className="card-image" />
            <div className="card-overlay">
              <span className="card-tag">2025-26</span>
              <span className="card-caption" style={{ fontSize: isLg ? '2rem' : '1.25rem' }}>Feature Image</span>
            </div>
          </div>
        </div>

        {/* 2. Flowing Marquee (All other images, tagged) */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {marqueeList.map((item, index) => (
              <div key={`${item.id}-${index}`} className="card-base card-standard">
                <img src={item.image} alt="Gallery Item" className="card-image" />
                <div className="card-overlay">
                  <span className="card-tag">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}