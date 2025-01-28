import React from 'react';
import './pages.css';

const Gallery = () => {
  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Gallery</h1>
            <p>Explore stunning visuals from our adventures and experiences.</p>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="image-grid-section">
        <h2>Our Adventures in Pictures</h2>
        <div className="image-grid">
          <img src="https://via.placeholder.com/300" alt="Hells Gate National Park" />
          <img src="https://via.placeholder.com/300" alt="Mount Longonot" />
          <img src="https://via.placeholder.com/300" alt="Mount Suswa" />
          <img src="https://via.placeholder.com/300" alt="Lake Magadi" />
          <img src="https://via.placeholder.com/300" alt="White-Water Rafting" />
          <img src="https://via.placeholder.com/300" alt="Skydiving in Diani" />
        </div>
      </section>
    </div>
  );
};

export default Gallery;