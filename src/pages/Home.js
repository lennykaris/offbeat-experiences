import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Experience Adventure With Offbeat Experiences</h1>
      <p>
        Unleash your wanderlust with custom-designed trips that bring you closer to nature,
        whether it’s exhilarating hikes or serene road trips. Discover how we create
        unforgettable memories tailored just for you.
      </p>
      {/* Add an image banner here */}
      <div className="home-buttons">
        <button>Start Your Journey</button>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default Home;