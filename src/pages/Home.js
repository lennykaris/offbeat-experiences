import React, { useState, useEffect } from 'react';
import './pages.css'; // Import the new CSS file

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image file names (stored in public/images)
  const images = [
    'Nairobi.jpg',
    'Nakuru.jpg',
    'Kajiado.jpg',
    'Mombasa.jpg',
    'Samburu.jpg',
    'Nyeri.jpg',
  ];

  // Automatically cycle through images every 5 seconds
  useEffect(() => {
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home">
      {/* Hero Section with Slideshow Background */}
      <section className="hero-section">
        <div className="hero-image">
          {/* Use the <img> tag for the slideshow */}
          <img
            src={`/images/${images[currentImageIndex]}`}
            alt={`Slide ${currentImageIndex + 1}`}
            className="active"
            onError={(e) => {
              console.error("Error loading image:", e.target.src);
            }}
          />
          <div className="hero-text">
            <h1>Adventure Awaits at Offbeat Experiences!</h1>
            <div className="search-bar">
              <input type="text" placeholder="Search destinations..." />
              <select>
                <option value="">Select Theme</option>
                <option value="adrenaline">Adrenaline</option>
                <option value="hiking">Hiking</option>
                <option value="on-the-water">On the Water</option>
                <option value="multiday-tour">Multiday Tour</option>
                <option value="educational">Educational</option>
              </select>
              <select>
                <option value="">Select Destination</option>
                <option value="nairobi">Nairobi</option>
                <option value="nakuru">Nakuru</option>
                <option value="kajiado">Kajiado</option>
                <option value="mombasa">Mombasa</option>
              </select>
              <button>Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="featured-destinations">
        <h2>Our Featured Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src="/images/nairobi2.jpg" alt="Nairobi" />
            <h3>Nairobi</h3>
            <p>Explore the vibrant capital city of Kenya, home to Nairobi National Park and rich cultural experiences.</p>
          </div>
          <div className="destination-card">
            <img src="/images/Nakuru2.jpg" alt="Nakuru" />
            <h3>Nakuru</h3>
            <p>Discover the stunning landscapes and wildlife of Lake Nakuru National Park.</p>
          </div>
          <div className="destination-card">
            <img src="/images/Kajiado2.jpg" alt="Kajiado" />
            <h3>Kajiado</h3>
            <p>Experience the beauty of Maasai culture and the scenic views of Kajiado.</p>
          </div>
          <div className="destination-card">
            <img src="/images/Mombasa2.jpg" alt="Mombasa" />
            <h3>Mombasa</h3>
            <p>Relax on the beautiful beaches and explore the rich history of Mombasa.</p>
          </div>
        </div>
      </section>

      {/* About Offbeat Experiences Section */}
      <section className="about-offbeat">
        <div className="about-content">
          <div className="about-image">
            <img src="/images/offbeat.jpg" alt="About Offbeat Experiences" />
          </div>
          <div className="about-text">
            <h2>About Offbeat Experiences</h2>
            <p>
              At Offbeat Experiences, we design travel experiences for true adventurers seeking to learn and
              grow—those who love exploring stunning landscapes, diving into rich cultures, and discovering
              new perspectives. Our adventure tours bring you closer to nature, Kenya’s beautiful cultures,
              and wildlife.
            </p>
            <p>
              To us, travel is more than seeing new places—it’s about discovering oneself while connecting
              deeply with people, nature, and cultures. We are passionate travelers on a mission to create
              unforgettable experiences that blend learning, fun, and adventure for those seeking to expand
              their horizons.
            </p>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
      </section>

      {/* Favorite Destinations Section */}
      <section className="favorite-destinations">
        <h2>Favorite Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src="/images/nairobi2.jpg" alt="Nairobi" />
            <h3>Nairobi</h3>
            <p>Explore the vibrant capital city of Kenya, home to Nairobi National Park and rich cultural experiences.</p>
          </div>
          <div className="destination-card">
            <img src="/images/Nakuru2.jpg" alt="Nakuru" />
            <h3>Nakuru</h3>
            <p>Discover the stunning landscapes and wildlife of Lake Nakuru National Park.</p>
          </div>
          <div className="destination-card">
            <img src="/images/Kajiado2.jpg" alt="Kajiado" />
            <h3>Kajiado</h3>
            <p>Experience the beauty of Maasai culture and the scenic views of Kajiado.</p>
          </div>
          <div className="destination-card">
            <img src="/images/Mombasa2.jpg" alt="Mombasa" />
            <h3>Mombasa</h3>
            <p>Relax on the beautiful beaches and explore the rich history of Mombasa.</p>
          </div>
        </div>
      </section>

      {/* Why Book with Offbeat Experiences Section */}
      <section className="why-book">
        <h2>Why Book with Offbeat Experiences?</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            <h3>Unforgettable Adventures</h3>
            <p>We curate unique experiences that you’ll remember for a lifetime.</p>
          </div>
          <div className="reason-card">
            <h3>Expert Guides</h3>
            <p>Our knowledgeable guides ensure you get the most out of your journey.</p>
          </div>
          <div className="reason-card">
            <h3>Sustainable Travel</h3>
            <p>We prioritize eco-friendly and culturally respectful travel practices.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;