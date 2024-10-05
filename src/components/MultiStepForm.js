// src/components/MultiStepForm.js

import React, { useState } from 'react';
import './Form.css'; // Import the CSS file

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    careerPath: '',
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
      {step === 1 && (
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
      )}

      {step === 2 && (
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      )}

      {step === 3 && (
        <div className="form-group">
          <label htmlFor="careerPath">Choose Career Path:</label>
          <select
            id="careerPath"
            name="careerPath"
            value={formData.careerPath}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="java">Java</option>
            <option value="mern">MERN</option>
            <option value="vlsi">VLSI</option>
          </select>
        </div>
      )}

      <div className="form-group">
        {step > 1 && <button onClick={handlePrev}>Previous</button>}
        {step < 3 && <button onClick={handleNext}>Next</button>}
        {step === 3 && <button className="submit-button">Submit</button>}
      </div>
    </div>
  );
};

export default MultiStepForm;
