import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Make navbar sticky on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="logo">Offbeat Experiences</div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/experiences">Experiences</Link></li>

          {/* Destinations Dropdown */}
          <li className="dropdown">
            <span>Destinations</span>
            <ul className="dropdown-content">
              <li><Link to="/nairobi">Nairobi</Link></li>
              <li><Link to="/nakuru">Nakuru</Link></li>
              <li><Link to="/kajiado">Kajiado</Link></li>
              <li><Link to="/mombasa">Mombasa</Link></li>
            </ul>
          </li>

          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/blog">Blog</Link></li>

          {/* Themes Dropdown */}
          <li className="dropdown">
            <span>Themes</span>
            <ul className="dropdown-content">
              <li><Link to="/adrenaline">Adrenaline</Link></li>
              <li><Link to="/hiking">Hiking</Link></li>
              <li><Link to="/on-the-water">On the Water</Link></li>
              <li><Link to="/multiday-tour">Multiday Tour</Link></li>
              <li><Link to="/educational">Educational</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      <button className="schedule-button">Schedule a Meeting</button>
    </header>
  );
};

export default Header;