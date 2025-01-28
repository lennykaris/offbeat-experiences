import React from "react";
import "./Destination.css";

const Nairobi = () => {
  return (
    <div className="destination-page">
      {/* Large Image Section */}
      <div className="hero-section">
        <img
          src="https://via.placeholder.com/1200x400" // Replace with your image
          alt="Nairobi"
          className="hero-image"
        />
      </div>

      {/* Paragraph About the City */}
      <div className="city-description">
        <p>
          Nairobi, the capital city of Kenya, is a vibrant hub of culture, history, and modernity. Known as the "Green City in the Sun," Nairobi offers a unique blend of urban life and natural beauty. From its bustling markets to its serene parks, there's something for everyone in this dynamic city.
        </p>
      </div>

      {/* Explore Nairobi Section */}
      <div className="explore-section">
        <h2 className="section-title">Explore Nairobi</h2>
        <div className="places-grid">
          {/* Place 1 */}
          <div className="place-card">
            <img
              src="https://via.placeholder.com/300x200" // Replace with your image
              alt="Nairobi National Park"
              className="place-image"
            />
            <h3>Nairobi National Park</h3>
            <p>
              Just a short drive from the city center, Nairobi National Park is home to lions, giraffes, and rhinos. It's the only national park in the world located within a capital city.
            </p>
          </div>

          {/* Place 2 */}
          <div className="place-card">
            <img
              src="https://via.placeholder.com/300x200" // Replace with your image
              alt="David Sheldrick Wildlife Trust"
              className="place-image"
            />
            <h3>David Sheldrick Wildlife Trust</h3>
            <p>
              Visit this elephant orphanage to see baby elephants being cared for and learn about conservation efforts in Kenya.
            </p>
          </div>

          {/* Place 3 */}
          <div className="place-card">
            <img
              src="https://via.placeholder.com/300x200" // Replace with your image
              alt="Karen Blixen Museum"
              className="place-image"
            />
            <h3>Karen Blixen Museum</h3>
            <p>
              Step back in time at the former home of the famous author of "Out of Africa." The museum offers a glimpse into colonial Kenya.
            </p>
          </div>

          {/* Add 3 more places similarly */}
        </div>
      </div>

      {/* Experiences Section */}
      <div className="experiences-section">
        <h2 className="section-title">Experiences in Nairobi</h2>
        <div className="experiences-grid">
          {/* Experience 1 */}
          <div className="experience-card">
            <img
              src="https://via.placeholder.com/300x200" // Replace with your image
              alt="Hot Air Balloon Ride"
              className="experience-image"
            />
            <h3>Hot Air Balloon Ride</h3>
            <p>
              Soar above the city and enjoy breathtaking views of Nairobi's skyline and surrounding landscapes.
            </p>
            <p className="price-tag">$150 per person</p>
          </div>

          {/* Experience 2 */}
          <div className="experience-card">
            <img
              src="https://via.placeholder.com/300x200" // Replace with your image
              alt="Maasai Market Shopping"
              className="experience-image"
            />
            <h3>Maasai Market Shopping</h3>
            <p>
              Explore the vibrant Maasai Market for handmade crafts, jewelry, and souvenirs.
            </p>
            <p className="price-tag">Free Entry</p>
          </div>

          {/* Experience 3 */}
          <div className="experience-card">
            <img
              src="https://via.placeholder.com/300x200" // Replace with your image
              alt="Nairobi Nightlife Tour"
              className="experience-image"
            />
            <h3>Nairobi Nightlife Tour</h3>
            <p>
              Experience Nairobi's vibrant nightlife with a guided tour of the best bars and clubs.
            </p>
            <p className="price-tag">$50 per person</p>
          </div>

          {/* Add more experiences similarly */}
        </div>
      </div>
    </div>
  );
};

export default Nairobi;