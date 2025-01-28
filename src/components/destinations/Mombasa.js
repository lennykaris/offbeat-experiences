import React from 'react';
import './Destination.css';

const Mombasa = () => {
  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Mombasa</h1>
            <p>Relax on the beautiful beaches and explore the rich history of Mombasa.</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="city-description">
        <p>
          Mombasa, Kenya's coastal gem, is known for its pristine beaches, rich history, and vibrant culture. From Fort Jesus to the Old Town, Mombasa offers a unique blend of relaxation and exploration.
        </p>
      </section>

      {/* Explore Mombasa Section */}
      <section className="explore-section">
        <h2 className="section-title">Explore Mombasa</h2>
        <div className="places-grid">
          {/* Place 1 */}
          <div className="place-card">
            <img src="https://via.placeholder.com/300x200" alt="Fort Jesus" />
            <h3>Fort Jesus</h3>
            <p>
              Explore this UNESCO World Heritage Site and learn about Mombasa's colonial history.
            </p>
          </div>

          {/* Place 2 */}
          <div className="place-card">
            <img src="https://via.placeholder.com/300x200" alt="Old Town" />
            <h3>Old Town</h3>
            <p>
              Wander through the narrow streets of Old Town and admire its Swahili architecture.
            </p>
          </div>

          {/* Place 3 */}
          <div className="place-card">
            <img src="https://via.placeholder.com/300x200" alt="Diani Beach" />
            <h3>Diani Beach</h3>
            <p>
              Relax on the white sandy beaches and enjoy the crystal-clear waters of Diani Beach.
            </p>
          </div>

          {/* Add 3 more places similarly */}
        </div>
      </section>

      {/* Experiences Section */}
      <section className="experiences-section">
        <h2 className="section-title">Experiences in Mombasa</h2>
        <div className="experiences-grid">
          {/* Experience 1 */}
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Beach Relaxation" />
            <h3>Beach Relaxation</h3>
            <p>
              Unwind on the beautiful beaches of Mombasa and enjoy the tropical vibes.
            </p>
            <p className="price-tag">Free</p>
          </div>

          {/* Experience 2 */}
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Snorkeling" />
            <h3>Snorkeling</h3>
            <p>
              Explore the vibrant coral reefs and marine life in the Indian Ocean.
            </p>
            <p className="price-tag">$50 per person</p>
          </div>

          {/* Experience 3 */}
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Historical Tour" />
            <h3>Historical Tour</h3>
            <p>
              Discover the rich history of Mombasa with a guided tour of Fort Jesus and Old Town.
            </p>
            <p className="price-tag">$40 per person</p>
          </div>

          {/* Add more experiences similarly */}
        </div>
      </section>
    </div>
  );
};

export default Mombasa;