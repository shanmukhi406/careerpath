// src/components/CareerPathApp.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import javaImg from '../images/java.png';
import pythonImg from '../images/python.jpeg';
import javascriptImg from '../images/js.jpeg';
import cppImg from '../images/c++.jpeg';
import vlsiImg from '../images/vlsi.jpeg';
import embeddedImg from '../images/embedded.jpeg';
import mernImg from '../images/mern.jpeg';
import meanImg from '../images/mean.jpeg';
import htmlImg from '../images/html.jpeg';
import cssImg from '../images/css.jpeg';
import CareerOption from './CareerOption';

const CareerPathApp = () => {
  const [showCareerOptions, setShowCareerOptions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCareerOptions(true);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <button
          type="submit"
          style={{
            backgroundColor: '#007BFF',
            color: '#fff',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
            fontSize: '16px',
          }}
        >
          Show Career Options
        </button>
      </form>

      {showCareerOptions && (
        <div>
          <h3 className="centered-heading">Career Path Options:</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <CareerOption name="Java" imgSrc={javaImg} />
            <CareerOption name="Python" imgSrc={pythonImg} />
            <CareerOption name="JavaScript" imgSrc={javascriptImg} />
            <CareerOption name="C++" imgSrc={cppImg} />
            <CareerOption name="VLSI" imgSrc={vlsiImg} />
            <CareerOption name="Embedded Systems" imgSrc={embeddedImg} />
            <CareerOption name="MERN" imgSrc={mernImg} />
            <CareerOption name="MEAN" imgSrc={meanImg} />
            <CareerOption name="HTML" imgSrc={htmlImg} />
            <CareerOption name="CSS" imgSrc={cssImg} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPathApp;
