import React from 'react';
import './Destination.css';

const Kajiado = () => {
  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Kajiado</h1>
            <p>Experience the beauty of Maasai culture and scenic landscapes.</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="city-description">
        <p>
          Kajiado, located in southern Kenya, is known for its rich Maasai culture and stunning landscapes. From the Ngong Hills to the Amboseli National Park, Kajiado offers a unique blend of cultural and natural experiences.
        </p>
      </section>

      {/* Explore Kajiado Section */}
      <section className="explore-section">
        <h2 className="section-title">Explore Kajiado</h2>
        <div className="places-grid">
          {/* Place 1 */}
          <div className="place-card">
            <img src="https://via.placeholder.com/300x200" alt="Ngong Hills" />
            <h3>Ngong Hills</h3>
            <p>
              Hike the iconic Ngong Hills and enjoy panoramic views of the Rift Valley.
            </p>
          </div>

          {/* Place 2 */}
          <div className="place-card">
            <img src="https://via.placeholder.com/300x200" alt="Amboseli National Park" />
            <h3>Amboseli National Park</h3>
            <p>
              Witness elephants and other wildlife against the backdrop of Mount Kilimanjaro.
            </p>
          </div>

          {/* Place 3 */}
          <div className="place-card">
            <img src="https://via.placeholder.com/300x200" alt="Maasai Cultural Village" />
            <h3>Maasai Cultural Village</h3>
            <p>
              Immerse yourself in the traditions and lifestyle of the Maasai people.
            </p>
          </div>

          {/* Add 3 more places similarly */}
        </div>
      </section>

      {/* Experiences Section */}
      <section className="experiences-section">
        <h2 className="section-title">Experiences in Kajiado</h2>
        <div className="experiences-grid">
          {/* Experience 1 */}
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Cultural Tour" />
            <h3>Cultural Tour</h3>
            <p>
              Learn about Maasai traditions, dances, and way of life in a guided cultural tour.
            </p>
            <p className="price-tag">$40 per person</p>
          </div>

          {/* Experience 2 */}
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Safari in Amboseli" />
            <h3>Safari in Amboseli</h3>
            <p>
              Embark on a safari and spot elephants, lions, and other wildlife in Amboseli National Park.
            </p>
            <p className="price-tag">$60 per person</p>
          </div>

          {/* Experience 3 */}
          <div className="experience-card">
            <img src="https://via.placeholder.com/300x200" alt="Hiking Ngong Hills" />
            <h3>Hiking Ngong Hills</h3>
            <p>
              Hike the scenic Ngong Hills and enjoy breathtaking views of the Rift Valley.
            </p>
            <p className="price-tag">$30 per person</p>
          </div>

          {/* Add more experiences similarly */}
        </div>
      </section>
    </div>
  );
};

export default Kajiado;