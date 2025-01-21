import React from 'react';
import './Button.css';

function Button({ text, onClick, styleClass }) {
  return (
    <button className={`button ${styleClass}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
