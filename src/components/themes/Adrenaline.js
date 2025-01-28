import React from 'react';
import './Themes.css';

const Adrenaline = () => {
  return (
    <div className="theme-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Adrenaline</h1>
            <p>Get your heart racing with thrilling adventures!</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="description-section">
        <h2>About Adrenaline Adventures</h2>
        <p>
          For thrill-seekers and adventure lovers, our adrenaline-packed experiences offer the ultimate rush. From bungee jumping to skydiving, we’ve got something to get your heart pumping.
        </p>
      </section>

      {/* Experiences Grid */}
      <section className="experiences-section">
        <h2>Featured Adrenaline Experiences</h2>
        <div className="experiences-grid">
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Bungee Jumping" />
            <h3>Bungee Jumping</h3>
            <p>Take the leap and experience the thrill of free-falling from great heights.</p>
          </div>
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Skydiving" />
            <h3>Skydiving</h3>
            <p>Soar through the skies and enjoy breathtaking views from above.</p>
          </div>
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="White-Water Rafting" />
            <h3>White-Water Rafting</h3>
            <p>Navigate through roaring rapids for an exhilarating water adventure.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Adrenaline;