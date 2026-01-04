import React from 'react';
import { Link } from 'react-router-dom';
import './CareerOption.css';

const CareerOption = ({ name, imgSrc, path }) => {
  return (
    <div className="career-option">
      {/* Link styled as card */}
      <Link to={path} className="career-link">
        <img src={imgSrc} alt={name} className="career-image" />
        <h3 className="career-name">{name}</h3>
      </Link>
    </div>
  );
};

export default CareerOption;
