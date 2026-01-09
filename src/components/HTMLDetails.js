import React, { useState } from 'react';

const HTMLDetails = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>HTML Career Path</h1>
        <p>The skeleton of the web. Nothing exists online without it.</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Essential</h3>
          <p>For Web</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>Adoption</p>
        </div>
        <div className="stat-card">
          <h3>Easy</h3>
          <p>To Learn</p>
        </div>
      </div>

      <h2>Learning Roadmap</h2>
      <div className="roadmap-container">
        <div className="roadmap-step">
          <h4>Phase 1: Structure</h4>
          <p>Tags, Elements, Attributes, Lists, Tables, Forms.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 2: Modern HTML5</h4>
          <p>Semantic Elements (header, nav, article), Audio/Video tags, Canvas.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 3: Best Practices</h4>
          <p>SEO Basics, Accessibility (ARIA roles), Meta Tags, Performance Optimization.</p>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
        {[
          { q: "Is HTML a programming language?", a: "No, it is a markup language used to structure content on the web." },
          { q: "Do I need to memorize all tags?", a: "No! Just learn the common ones (div, span, a, img, input). You can look up the rest." },
          { q: "What comes after HTML?", a: "CSS (for styling) and JavaScript (for interactivity) are the immediate next steps." }
        ].map((item, index) => (
          <div className="faq-item" key={index} onClick={() => toggleFaq(index)}>
            <div className="faq-question">
              {item.q}
              <span>{expandedFaq === index ? '−' : '+'}</span>
            </div>
            {expandedFaq === index && <div className="faq-answer">{item.a}</div>}
          </div>
        ))}
      </div>

      <h2>Top Resources</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>🦊 MDN Web Docs (HTML)</a></li>
        <li><a href="https://www.w3schools.com/html/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>🏫 W3Schools HTML Tutorial</a></li>
      </ul>
    </div>
  );
};

export default HTMLDetails;
