import React from 'react';
import './Themes.css';

const OnTheWater = () => {
  return (
    <div className="theme-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>On the Water</h1>
            <p>Enjoy water-based adventures in Kenya’s beautiful lakes and oceans.</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="description-section">
        <h2>About Water Adventures</h2>
        <p>
          From kayaking to snorkeling, our water-based adventures offer a unique way to explore Kenya’s lakes, rivers, and oceans. Dive in and make a splash!
        </p>
      </section>

      {/* Experiences Grid */}
      <section className="experiences-section">
        <h2>Featured Water Experiences</h2>
        <div className="experiences-grid">
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Kayaking" />
            <h3>Kayaking</h3>
            <p>Paddle through serene waters and enjoy the tranquility of nature.</p>
          </div>
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Snorkeling" />
            <h3>Snorkeling</h3>
            <p>Discover the vibrant underwater world of Kenya’s coral reefs.</p>
          </div>
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Boat Tours" />
            <h3>Boat Tours</h3>
            <p>Relax and enjoy scenic boat tours on Kenya’s lakes and oceans.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnTheWater;