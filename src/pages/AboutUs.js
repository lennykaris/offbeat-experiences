import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Offbeat Experiences</h1>
      <p>
        Offbeat Experiences is a travel company offering wildlife safaris, educational experiences, and
        adventure tours. We customize experiences for students, educators, and adventure seekers
        while ensuring each trip is enriching, unforgettable, and safe.
      </p>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Believing in the power of travel to educate and inspire, we aim to help you explore Kenya's
          beauty while learning about its rich culture and diverse ecosystems. Join Offbeat Experiences
          for a journey that connects you deeply with the world.
        </p>
      </section>

      <section className="our-services">
        <h2>Our Services</h2>
        <ul>
          <li><strong>Adventure Tourism:</strong> From mountain treks to beach safaris, we offer adventure tours that get hearts racing.</li>
          <li><strong>Educational Travel Programs:</strong> Tailored for schools, colleges, and educators, blending adventure with learning experiences.</li>
          <li><strong>Wildlife Safaris:</strong> Explore Kenya by taking the known and less trodden path with guided safari tours around the country.</li>
          <li><strong>Eco-Friendly Travel:</strong> Focus on sustainable travel that helps sustain and respect nature and local cultures.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;