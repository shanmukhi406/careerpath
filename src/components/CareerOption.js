import React from 'react';
import { Link } from 'react-router-dom';
import './CareerOption.css';

const CareerOption = ({ name, imgSrc, path, isFavorite, onToggleFavorite }) => {
  return (
    <div className="career-option">
      <div className="favorite-icon" onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggleFavorite(name);
      }}>
        {isFavorite ? <span style={{ fontSize: '1.5rem' }}>❤️</span> : <span style={{ fontSize: '1.5rem', opacity: 0.7 }}>🤍</span>}
      </div>
      {/* Link styled as card */}
      <Link to={path} className="career-link">
        <img src={imgSrc} alt={name} className="career-image" />
        <h3 className="career-name">{name}</h3>
      </Link>
    </div>
  );
};

export default CareerOption;
