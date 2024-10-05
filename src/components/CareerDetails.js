// src/components/CareerDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const CareerDetails = () => {
  const { career } = useParams();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>{career}</h2>
      <p>Here is more information about the {career} career path.</p>
      {/* Add more detailed information about the career here */}
      
    </div>
  );
};

export default CareerDetails;
