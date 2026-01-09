import React, { useState } from 'react';

const MeanDetails = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>MEAN Stack Career Path</h1>
        <p>MongoDB, Express, Angular, Node.js - Enterprise grade full stack.</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>$115k+</h3>
          <p>Avg. Salary</p>
        </div>
        <div className="stat-card">
          <h3>Robust</h3>
          <p>Framework</p>
        </div>
        <div className="stat-card">
          <h3>Corp</h3>
          <p>Preferred</p>
        </div>
      </div>

      <h2>Learning Roadmap</h2>
      <div className="roadmap-container">
        <div className="roadmap-step">
          <h4>Phase 1: Frontend (Angular)</h4>
          <p>Components, TypeScript, Dependency Injection, RxJS, Routing.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 2: Backend (Node/Express)</h4>
          <p>API development, Middleware, Server-side logic.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 3: Database (MongoDB)</h4>
          <p>Data modeling, NoSQL queries, Performance optimization.</p>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
        {[
          { q: "Is Angular hard to learn?", a: "Angular has a steeper learning curve than React due to its comprehensive nature and TypeScript requirement." },
          { q: "Who uses MEAN?", a: "Many large enterprises and banks prefer Angular for its structure and strict typing." },
          { q: "Should I learn TypeScript first?", a: "Yes, TypeScript is essential for modern Angular development." }
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
        <li><a href="https://angular.io/docs" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>🅰️ Angular Docs</a></li>
        <li><a href="https://www.typescriptlang.org/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>📘 TypeScript Lang</a></li>
      </ul>
    </div>
  );
};

export default MeanDetails;
