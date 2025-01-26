import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="image-grid">
        <img src="https://via.placeholder.com/300" alt="Hells Gate National Park" />
        <img src="https://via.placeholder.com/300" alt="Mount Longonot" />
        <img src="https://via.placeholder.com/300" alt="Mount Suswa" />
        <img src="https://via.placeholder.com/300" alt="Lake Magadi" />
        <img src="https://via.placeholder.com/300" alt="White-Water Rafting" />
        <img src="https://via.placeholder.com/300" alt="Skydiving in Diani" />
      </div>
    </div>
  );
};

export default Gallery;