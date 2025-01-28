import React from 'react';
import './Themes.css';

const MultidayTour = () => {
  return (
    <div className="theme-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Multiday Tour</h1>
            <p>Embark on an extended adventure across Kenya’s most iconic destinations.</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="description-section">
        <h2>About Multiday Tours</h2>
        <p>
          Our multiday tours offer a comprehensive way to explore Kenya’s diverse landscapes, cultures, and wildlife. From safaris to cultural tours, we’ve got you covered.
        </p>
      </section>

      {/* Experiences Grid */}
      <section className="experiences-section">
        <h2>Featured Multiday Tours</h2>
        <div className="experiences-grid">
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Safari Adventure" />
            <h3>Safari Adventure</h3>
            <p>Experience Kenya’s wildlife on a multiday safari tour.</p>
          </div>
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Cultural Tour" />
            <h3>Cultural Tour</h3>
            <p>Immerse yourself in Kenya’s rich cultural heritage.</p>
          </div>
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Coastal Escape" />
            <h3>Coastal Escape</h3>
            <p>Explore Kenya’s beautiful coastline and islands.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultidayTour;