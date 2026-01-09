import React, { useState } from 'react';

const CPlusPlusDetails = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>C++ Career Path</h1>
        <p>Unleash high-performance computing and game development.</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>$108k+</h3>
          <p>Avg. Salary</p>
        </div>
        <div className="stat-card">
          <h3>Critical</h3>
          <p>Systems Prog</p>
        </div>
        <div className="stat-card">
          <h3>Fast</h3>
          <p>Performance</p>
        </div>
      </div>

      <h2>Learning Roadmap</h2>
      <div className="roadmap-container">
        <div className="roadmap-step">
          <h4>Phase 1: Core C++</h4>
          <p>Syntax, Pointers, Memory Management, Functions, Arrays.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 2: OOP & STL</h4>
          <p>Classes, Inheritance, Polymorphism, Standard Template Library (Vectors, Maps).</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 3: Advanced System Design</h4>
          <p>Multithreading, Smart Pointers, Network Programming, Game Engines (Unreal).</p>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
        {[
          { q: "Why is C++ still used?", a: "It offers unparalleled control over hardware and memory, crucial for games, OS, and high-frequency trading." },
          { q: "Is C++ harder than Python?", a: "Yes, manual memory management and complex syntax make it steeper to learn, but very rewarding." },
          { q: "Where is C++ used?", a: "Game Development (Unreal Engine), Operating Systems (Windows, Linux), and Fintech." }
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
        <li><a href="https://isocpp.org/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>🌐 ISO C++ Standard</a></li>
        <li><a href="https://www.learncpp.com/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>📘 LearnCpp.com</a></li>
        <li><a href="https://www.geeksforgeeks.org/c-plus-plus/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>🤓 GeeksforGeeks C++</a></li>
      </ul>
    </div>
  );
};

export default CPlusPlusDetails;
