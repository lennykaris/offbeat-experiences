import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css'; // Ensure this file contains the necessary styles

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <img src="/images/hero.jpg" alt="About Offbeat Experiences" />
          <div className="hero-text">
            <h1>About Offbeat Experiences</h1>
            <p>Discover the story behind our passion for adventure and travel.</p>
          </div>
        </div>
      </section>

      {/* About Offbeat Experiences */}
      <section className="about-offbeat">
        <div className="about-content">
          <div className="about-image">
            <img src="/images/offbeat.jpg" alt="About Offbeat Experiences" />
          </div>
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Offbeat Experiences is built for true adventurers who seek more than just sightseeing.
              We believe in deep cultural immersion, nature exploration, and transformative travel.
              Our experiences take you off the beaten path to connect with stunning landscapes, wildlife, and diverse cultures.
            </p>
            <p>
              For us, travel is about personal discovery. Every journey should be an opportunity to grow, connect, 
              and embrace new perspectives. That’s why we design experiences that blend fun, learning, and adventure.
            </p>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to create unforgettable travel experiences that inspire exploration,
            promote cultural understanding, and support sustainable tourism. We aim to connect 
            travelers with nature, wildlife, and local communities.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            We envision a world where travel transforms lives. Through our curated experiences, 
            we empower adventurers to discover themselves while making a positive impact on the 
            communities they visit.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/team1.jpg" alt="John Doe" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/images/team2.jpg" alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>Head of Operations</p>
          </div>
          <div className="team-member">
            <img src="/images/team3.jpg" alt="Mike Johnson" />
            <h3>Mike Johnson</h3>
            <p>Lead Guide</p>
          </div>
          <div className="team-member">
            <img src="/images/team4.jpg" alt="Sarah Lee" />
            <h3>Sarah Lee</h3>
            <p>Marketing Manager</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready for Your Next Adventure?</h2>
        <p>Explore our experiences and start planning your journey today.</p>
        <Link to="/experiences" className="cta-button">Explore Experiences</Link>
      </section>
    </div>
  );
};

export default AboutUs;
