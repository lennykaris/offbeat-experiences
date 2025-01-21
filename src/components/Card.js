import React from 'react';
import './Card.css';

function Card({ title, description, image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
