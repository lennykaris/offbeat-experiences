import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <h1>Adventure awaits at Offbeat Experiences!</h1>
        <p>
          For the best in adventure travel, we've got you covered. From wildlife safaris, guided hikes,
          beach tours, educational adventures, and more—we offer experiences that exceed your expectations.
        </p>
      </section>

      <section className="about-offbeat">
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
      </section>
    </div>
  );
};

export default Home;