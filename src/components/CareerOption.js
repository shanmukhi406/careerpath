// src/components/CareerOption.js

import React from 'react';
import { Link } from 'react-router-dom';

const CareerOption = ({ name, imgSrc, details }) => {
  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      <Link to={name === 'Java' ? '/java-details' 
       : name === 'Python' ? '/python-details'
        : name === 'Embedded' ? '/embedded-details'
         : name === 'HTML' ? '/html-details'
          : name === 'CSS' ? '/css-details'
           : name === 'JavaScript' ? '/javascript-details'
           :name === 'MERN' ? '/mern-details'  // MERN routing
            :name === 'MEAN' ? '/mean-details' // MEAN routing
            :name === 'VLSI' ? '/vlsi-details'
            :name === 'C' ? '/cpp-details' 

        : `/career/${name.toLowerCase()}`}>
        <img src={imgSrc} alt={name} style={{ width: '100px', height: '100px', margin: '10px' }} />
      </Link>
      
      <h4>{name}</h4>
      <p style={{ margin: '5px 0' }}>{details}</p>
    </div>
  );
};

export default CareerOption;
