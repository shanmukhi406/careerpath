import React, { useState } from 'react';

const CSSDetails = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>CSS Career Path</h1>
        <p>Style the web. Make it beautiful and responsive.</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Required</h3>
          <p>For Frontend</p>
        </div>
        <div className="stat-card">
          <h3>Creative</h3>
          <p>Focus</p>
        </div>
        <div className="stat-card">
          <h3>Visual</h3>
          <p>Impact</p>
        </div>
      </div>

      <h2>Learning Roadmap</h2>
      <div className="roadmap-container">
        <div className="roadmap-step">
          <h4>Phase 1: Basics</h4>
          <p>Selectors, Colors, Fonts, Box Model (Margin/Padding), Borders.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 2: Layouts</h4>
          <p>Flexbox, Grid System, Positioning, Responsive Design (Media Queries).</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 3: Advanced CSS</h4>
          <p>Animations (Keyframes), Transitions, Variables, Frameworks (Tailwind, Bootstrap), Preprocessors (SASS).</p>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
        {[
          { q: "Can I get a job with just HTML/CSS?", a: "It's difficult. Most roles require JavaScript, but you can find work converting designs to code." },
          { q: "Why is CSS so hard?", a: "CSS can be tricky because of global scope and specificity rules. Modern tools like Flexbox make it easier." },
          { q: "Should I learn Bootstrap first?", a: "No. Learn raw CSS first so you understand how frameworks work under the hood." }
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
        <li><a href="https://css-tricks.com/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>✨ CSS-Tricks</a></li>
        <li><a href="https://flexboxfroggy.com/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>🐸 Flexbox Froggy (Game)</a></li>
      </ul>
    </div>
  );
};

export default CSSDetails;
