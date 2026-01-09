import React, { useState } from 'react';

const MernDetails = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>MERN Stack Career Path</h1>
        <p>MongoDB, Express, React, Node.js - The modern full stack.</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>$120k+</h3>
          <p>Avg. Salary</p>
        </div>
        <div className="stat-card">
          <h3>Full</h3>
          <p>JS Stack</p>
        </div>
        <div className="stat-card">
          <h3>High</h3>
          <p>Startup Demand</p>
        </div>
      </div>

      <h2>Learning Roadmap</h2>
      <div className="roadmap-container">
        <div className="roadmap-step">
          <h4>Phase 1: Frontend (React)</h4>
          <p>React components, Hooks, State Management (Redux/Context), Routing.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 2: Backend (Node/Express)</h4>
          <p>REST APIs, Middleware, Authentication (JWT), File Uploads.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 3: Database (MongoDB)</h4>
          <p>NoSQL design, Mongoose schemas, Aggregations.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 4: Deployment</h4>
          <p>Heroku/Vercel/Netlify, CI/CD, Docker basics.</p>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
        {[
          { q: "Why is MERN so popular?", a: "It allows developers to use JavaScript for both frontend and backend, unifying development." },
          { q: "Is MERN better than MEAN?", a: "React (MERN) is currently more popular than Angular (MEAN), but both are powerful." },
          { q: "Can I freelance with MERN?", a: "Absolutely. MERN is perfect for building complete web applications for clients." }
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
        <li><a href="https://www.mongodb.com/mern-stack" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>🍃 MongoDB MERN Guide</a></li>
        <li><a href="https://reactjs.org/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>⚛️ React Docs</a></li>
      </ul>
    </div>
  );
};

export default MernDetails;
