import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CareerOption from './components/CareerOption';
import JavaDetails from './components/JavaDetails';
import PythonDetails from './components/PythonDetails';
import CppDetails from './components/CPlusPlusDetails';
import VLSIDetails from './components/VLSIDetails';
import EmbeddedDetails from './components/EmbeddedDetails';
import MernDetails from './components/MERNDetails';
import MeanDetails from './components/MEANDetails'; // Importing the MEAN details component
import HtmlDetails from './components/HTMLDetails';
import CssDetails from './components/CSSDetails';
import JavascriptDetails from './components/JavaScriptDetails';
import javaImg from './images/java.png';
import pythonImg from './images/python.jpeg';
import cppImg from './images/c.jpeg';
import vlsiImg from './images/vlsi.jpeg';
import embeddedImg from './images/embedded.jpeg';
import mernImg from './images/mern.jpeg';
import meanImg from './images/mean.jpeg';
import htmlImg from './images/html.jpeg';
import cssImg from './images/css.jpeg';
import javascriptImg from './images/js.jpeg';
import '../src/App.css';
import Footer from './components/Footer'; 

// Simple form component
const CareerForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onSubmit from parent and pass the data
    onSubmit({ name, interest });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </label>
      <br />
      <label>
        Interest:
        <input 
          type="text" 
          value={interest} 
          onChange={(e) => setInterest(e.target.value)} 
          required 
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
    setFormSubmitted(true);
  };

  return (
    <Router>
      <div>
        
        {/* Display the form if not submitted, otherwise show career options */}
        {!formSubmitted ? (
          <CareerForm onSubmit={handleFormSubmit} />
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <CareerOption name="Java" imgSrc={javaImg} />
            <CareerOption name="Python" imgSrc={pythonImg} />
            <CareerOption name="C" imgSrc={cppImg} />
            <CareerOption name="VLSI" imgSrc={vlsiImg} />
            <CareerOption name="Embedded" imgSrc={embeddedImg} />
            <CareerOption name="MERN" imgSrc={mernImg} />
            <CareerOption name="MEAN" imgSrc={meanImg} /> {/* MEAN option */}
            <CareerOption name="HTML" imgSrc={htmlImg} />
            <CareerOption name="CSS" imgSrc={cssImg} />
            <CareerOption name="JavaScript" imgSrc={javascriptImg} />
          </div>
        )}

        {/* Routes to individual career details */}
        <Routes>
          <Route path="/java-details" element={<JavaDetails />} />
          <Route path="/python-details" element={<PythonDetails />} />
          <Route path="/cpp-details" element={<CppDetails />} />
          <Route path="/vlsi-details" element={<VLSIDetails />} />
          <Route path="/embedded-details" element={<EmbeddedDetails />} />
          <Route path="/mern-details" element={<MernDetails />} />
          <Route path="/mean-details" element={<MeanDetails />} /> {/* MEAN route */}
          <Route path="/html-details" element={<HtmlDetails />} />
          <Route path="/css-details" element={<CssDetails />} />
          <Route path="/javascript-details" element={<JavascriptDetails />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
