import React, { useState } from 'react';

const EmbeddedDetails = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>Embedded Systems Career Path</h1>
        <p>Where software meets hardware. Power the IoT revolution.</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>$100k+</h3>
          <p>Avg. Salary</p>
        </div>
        <div className="stat-card">
          <h3>Smart</h3>
          <p>Devices</p>
        </div>
        <div className="stat-card">
          <h3>IoT</h3>
          <p>Future</p>
        </div>
      </div>

      <h2>Learning Roadmap</h2>
      <div className="roadmap-container">
        <div className="roadmap-step">
          <h4>Phase 1: C Programming & Electronics</h4>
          <p>Bit manipulation, Pointers, Microprocessor architecture (8085/8086).</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 2: Microcontrollers</h4>
          <p>Arduino, 8051, AVR, ARM Cortex, GPIO, interrupts, timers.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 3: RTOS & Protocols</h4>
          <p>FreeRTOS, I2C, SPI, UART, CAN, IoT protocols (MQTT).</p>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
        {[
          { q: "Is Embedded Systems hard?", a: "It requires understanding both hardware and software, which can be challenging but exciting." },
          { q: "Can I use Python for Embedded?", a: "Yes, MicroPython is popular, but C/C++ remains the industry standard for low-level control." },
          { q: "What is an RTOS?", a: "A Real-Time Operating System ensures that tasks are processed within strict time constraints." }
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
        <li><a href="https://www.embedded.com/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>📡 Embedded.com</a></li>
        <li><a href="https://www.arduino.cc/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>🤖 Arduino Home</a></li>
      </ul>
    </div>
  );
};

export default EmbeddedDetails;
