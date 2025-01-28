import React from 'react';
import './pages.css'; // Reuse the same CSS file

const Experiences = () => {
  return (
    <div className="home">
      {/* Hero Section with Image and Text */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Discover Exciting Experiences!</h1>
            <p>
              From adrenaline-pumping adventures to serene cultural tours, we offer experiences that will leave you with unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Experiences Section */}
      <section className="featured-destinations">
        <h2>Our Featured Experiences</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src="https://via.placeholder.com/300x200" alt="Adrenaline" />
            <h3>Adrenaline</h3>
            <p>Get your heart racing with thrilling activities like bungee jumping, zip-lining, and more.</p>
          </div>
          <div className="destination-card">
            <img src="https://via.placeholder.com/300x200" alt="Hiking" />
            <h3>Hiking</h3>
            <p>Explore Kenya’s stunning landscapes with guided hikes through mountains, forests, and valleys.</p>
          </div>
          <div className="destination-card">
            <img src="https://via.placeholder.com/300x200" alt="On the Water" />
            <h3>On the Water</h3>
            <p>Enjoy water-based adventures like kayaking, snorkeling, and boat tours.</p>
          </div>
          <div className="destination-card">
            <img src="https://via.placeholder.com/300x200" alt="Multiday Tour" />
            <h3>Multiday Tour</h3>
            <p>Embark on a multiday adventure across Kenya’s most iconic destinations.</p>
          </div>
        </div>
      </section>

      {/* Favorite Experiences Section */}
      <section className="favorite-destinations">
        <h2>Favorite Experiences</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src="https://via.placeholder.com/300x200" alt="Adrenaline" />
            <h3>Adrenaline</h3>
            <p>Get your heart racing with thrilling activities like bungee jumping, zip-lining, and more.</p>
          </div>
          <div className="destination-card">
            <img src="https://via.placeholder.com/300x200" alt="Hiking" />
            <h3>Hiking</h3>
            <p>Explore Kenya’s stunning landscapes with guided hikes through mountains, forests, and valleys.</p>
          </div>
          <div className="destination-card">
            <img src="https://via.placeholder.com/300x200" alt="On the Water" />
            <h3>On the Water</h3>
            <p>Enjoy water-based adventures like kayaking, snorkeling, and boat tours.</p>
          </div>
          <div className="destination-card">
            <img src="https://via.placeholder.com/300x200" alt="Multiday Tour" />
            <h3>Multiday Tour</h3>
            <p>Embark on a multiday adventure across Kenya’s most iconic destinations.</p>
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

export default Experiences;