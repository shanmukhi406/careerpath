import React, { useState } from 'react';

const JavascriptDetails = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>JavaScript Career Path</h1>
        <p>The logic of the web. Essential for full-stack and frontend.</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>$112k+</h3>
          <p>Avg. Salary</p>
        </div>
        <div className="stat-card">
          <h3>#1</h3>
          <p>Most Used</p>
        </div>
        <div className="stat-card">
          <h3>Huge</h3>
          <p>Ecosystem</p>
        </div>
      </div>

      <h2>Learning Roadmap</h2>
      <div className="roadmap-container">
        <div className="roadmap-step">
          <h4>Phase 1: Core JS</h4>
          <p>Variables, Functions, Arrays, Objects, Loops, DOM Manipulation.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 2: Modern JS (ES6+)</h4>
          <p>Arrow Functions, Destructuring, Promises, Async/Await, Modules.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 3: Ecosystem</h4>
          <p>APIs (Fetch/Axios), Frameworks (React, Vue, Node.js), Testing.</p>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
        {[
          { q: "Is JavaScript related to Java?", a: "No! 'Java is to JavaScript as Car is to Carpet'. They are very different languages." },
          { q: "How long does it take to learn?", a: "You can learn basics in a month, but mastering the ecosystem takes years of practice." },
          { q: "What frameworks should I learn?", a: "React is currently the most popular, followed by Angular and Vue." }
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
        <li><a href="https://javascript.info/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>📘 The Modern JavaScript Tutorial</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>🦊 MDN JS Docs</a></li>
      </ul>
    </div>
  );
};

export default JavascriptDetails;
