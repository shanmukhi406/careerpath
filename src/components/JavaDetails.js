import React, { useState } from 'react';

const JavaDetails = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>Java Career Path</h1>
        <p>Master the language that powers the enterprise world.</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>$105k+</h3>
          <p>Avg. Salary</p>
        </div>
        <div className="stat-card">
          <h3>300k+</h3>
          <p>Job Openings</p>
        </div>
        <div className="stat-card">
          <h3>High</h3>
          <p>Demand</p>
        </div>
      </div>

      <h2>Learning Roadmap</h2>
      <div className="roadmap-container">
        <div className="roadmap-step">
          <h4>Phase 1: The Foundation</h4>
          <p>Syntax, Loops, OOPs Concepts (Polymorphism, Inheritance), Collections Framework.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 2: Advanced Java</h4>
          <p>Multithreading, Streams API, JDBC, File Handling, Maven/Gradle.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 3: Frameworks</h4>
          <p>Spring Boot, Hibernate, Microservices Architecture, RESTful APIs.</p>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
        {[
          { q: "Is Java hard to learn?", a: "Java has a steep learning curve compared to Python but is very structured, making it great for understanding core CS concepts." },
          { q: "What is Java used for?", a: "Enterprise web apps, Android apps (native), Big Data (Hadoop), and banking systems." },
          { q: "Do I need math for Java?", a: "Basic logic is required. You don't need advanced calculus unless you are doing specific data science work." }
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
        <li><a href="https://www.youtube.com/user/javaboynavin" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>▶ Telusko - Java for Beginners</a></li>
        <li><a href="https://docs.oracle.com/en/java/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>📖 Oracle Official Docs</a></li>
        <li><a href="https://spring.io/guides" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>🌱 Spring Boot Guides</a></li>
      </ul>
    </div>
  );
};

export default JavaDetails;
