import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">offbeat experiences</div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/experiences">Experiences</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/themes">Themes</Link></li>
        </ul>
      </nav>
      <button className="schedule-button">Schedule a Meeting</button>
    </header>
  );
}

export default Header;
