import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css'; // Separate CSS file for About Us page

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>About Offbeat Experiences</h1>
            <p>Discover the story behind our passion for adventure and travel.</p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At Offbeat Experiences, our mission is to create unforgettable travel adventures that inspire
            exploration, foster cultural understanding, and promote sustainable tourism. We believe in
            connecting people with nature, wildlife, and diverse cultures to create meaningful experiences.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            We envision a world where travel is not just about visiting new places but about transforming
            lives. Through our carefully curated experiences, we aim to empower travelers to discover
            themselves while making a positive impact on the communities and environments they visit.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Head of Operations</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Mike Johnson</h3>
            <p>Lead Guide</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 4" />
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