import React from 'react';
import './Themes.css';

const Educational = () => {
  return (
    <div className="theme-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Educational</h1>
            <p>Learn and grow through immersive travel experiences.</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="description-section">
        <h2>About Educational Tours</h2>
        <p>
          Our educational tours are designed to inspire learning and personal growth. From wildlife conservation to cultural immersion, these experiences offer valuable insights and knowledge.
        </p>
      </section>

      {/* Experiences Grid */}
      <section className="experiences-section">
        <h2>Featured Educational Experiences</h2>
        <div className="experiences-grid">
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Wildlife Conservation" />
            <h3>Wildlife Conservation</h3>
            <p>Learn about Kenya’s efforts to protect its wildlife and ecosystems.</p>
          </div>
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Cultural Immersion" />
            <h3>Cultural Immersion</h3>
            <p>Experience the traditions and lifestyles of Kenya’s diverse communities.</p>
          </div>
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Historical Tours" />
            <h3>Historical Tours</h3>
            <p>Explore Kenya’s rich history and heritage through guided tours.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Educational;