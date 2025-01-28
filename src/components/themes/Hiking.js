import React from 'react';
import './Themes.css';

const Hiking = () => {
  return (
    <div className="theme-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Hiking</h1>
            <p>Explore Kenya’s stunning landscapes on foot.</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="description-section">
        <h2>About Hiking Adventures</h2>
        <p>
          Discover the beauty of Kenya’s mountains, forests, and valleys with our guided hiking tours. Whether you’re a beginner or an experienced hiker, we have trails for everyone.
        </p>
      </section>

      {/* Experiences Grid */}
      <section className="experiences-section">
        <h2>Featured Hiking Experiences</h2>
        <div className="experiences-grid">
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Mount Kenya" />
            <h3>Mount Kenya</h3>
            <p>Conquer Africa’s second-highest peak and enjoy breathtaking views.</p>
          </div>
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Mount Longonot" />
            <h3>Mount Longonot</h3>
            <p>Hike through the volcanic crater and enjoy panoramic views of the Rift Valley.</p>
          </div>
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Aberdare Ranges" />
            <h3>Aberdare Ranges</h3>
            <p>Explore lush forests, waterfalls, and wildlife in the Aberdare National Park.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hiking;