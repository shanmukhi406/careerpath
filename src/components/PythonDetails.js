import React, { useState } from 'react';

const PythonDetails = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>Python Career Path</h1>
        <p>The language of AI, Data Science, and Web Development.</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>$110k+</h3>
          <p>Avg. Salary</p>
        </div>
        <div className="stat-card">
          <h3>Top 1</h3>
          <p>Popularity</p>
        </div>
        <div className="stat-card">
          <h3>Versatile</h3>
          <p>Usage</p>
        </div>
      </div>

      <h2>Learning Roadmap</h2>
      <div className="roadmap-container">
        <div className="roadmap-step">
          <h4>Phase 1: Basics & Scripting</h4>
          <p>Variables, Data Types, Control Flow, Functions, File I/O.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 2: Data Structures & OOP</h4>
          <p>Lists, Dictionaries, Classes, Inheritance, Decorators, Generators.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 3: Specialization</h4>
          <p><b>Web:</b> Django/Flask OR <b>Data:</b> NumPy, Pandas, Scikit-Learn.</p>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
        {[
          { q: "Is Python good for beginners?", a: "Yes! Python typically has English-like syntax, making it the easiest major language to learn." },
          { q: "Can I build games with Python?", a: "Yes, using libraries like PyGame, though C++ or C# are preferred for high-end engines." },
          { q: "What is the future of Python?", a: "With the boom in AI and Machine Learning, Python's relevance is skyrocketing." }
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
        <li><a href="https://docs.python.org/3/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>🐍 Python Official Docs</a></li>
        <li><a href="https://www.kaggle.com/learn" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>📊 Kaggle Learn (Data Science)</a></li>
        <li><a href="https://realpython.com/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>📝 Real Python Tutorials</a></li>
      </ul>
    </div>
  );
};

export default PythonDetails;
