import React from 'react';
import './Destination.css';

const Nakuru = () => {
  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Nakuru</h1>
            <p>Discover the stunning landscapes and wildlife of Nakuru.</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="city-description">
        <p>
          Nakuru, located in the Great Rift Valley, is known for its breathtaking landscapes and abundant wildlife. From the famous Lake Nakuru National Park to the Menengai Crater, Nakuru offers a unique blend of natural beauty and adventure.
        </p>
      </section>

      {/* Explore Nakuru Section */}
      <section className="explore-section">
        <h2 className="section-title">Explore Nakuru</h2>
        <div className="places-grid">
          {/* Place 1 */}
          <div className="place-card">
            <img src="https://via.placeholder.com/300x200" alt="Lake Nakuru National Park" />
            <h3>Lake Nakuru National Park</h3>
            <p>
              Famous for its flamingos and rhinos, Lake Nakuru National Park is a must-visit for wildlife enthusiasts.
            </p>
          </div>

          {/* Place 2 */}
          <div className="place-card">
            <img src="https://via.placeholder.com/300x200" alt="Menengai Crater" />
            <h3>Menengai Crater</h3>
            <p>
              Explore one of the largest volcanic craters in the world and enjoy panoramic views of the Rift Valley.
            </p>
          </div>

          {/* Place 3 */}
          <div className="place-card">
            <img src="https://via.placeholder.com/300x200" alt="Hyrax Hill Prehistoric Site" />
            <h3>Hyrax Hill Prehistoric Site</h3>
            <p>
              Discover ancient archaeological findings and learn about the region's prehistoric past.
            </p>
          </div>

          {/* Add 3 more places similarly */}
        </div>
      </section>

      {/* Experiences Section */}
      <section className="experiences-section">
        <h2 className="section-title">Experiences in Nakuru</h2>
        <div className="experiences-grid">
          {/* Experience 1 */}
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Game Drive" />
            <h3>Game Drive</h3>
            <p>
              Embark on a thrilling game drive and spot lions, giraffes, and rhinos in their natural habitat.
            </p>
            <p className="price-tag">$50 per person</p>
          </div>

          {/* Experience 2 */}
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Bird Watching" />
            <h3>Bird Watching</h3>
            <p>
              Witness the spectacular sight of flamingos and other bird species at Lake Nakuru.
            </p>
            <p className="price-tag">$30 per person</p>
          </div>

          {/* Experience 3 */}
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Hiking Menengai Crater" />
            <h3>Hiking Menengai Crater</h3>
            <p>
              Hike to the top of Menengai Crater and enjoy breathtaking views of the surrounding landscape.
            </p>
            <p className="price-tag">$40 per person</p>
          </div>

          {/* Add more experiences similarly */}
        </div>
      </section>
    </div>
  );
};

export default Nakuru; 