import React, { useState } from 'react';

const VLSIDetails = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>VLSI Career Path</h1>
        <p>Design the chips that power the digital world.</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>$130k+</h3>
          <p>Avg. Salary</p>
        </div>
        <div className="stat-card">
          <h3>Niche</h3>
          <p>Skillset</p>
        </div>
        <div className="stat-card">
          <h3>High</h3>
          <p>Complexity</p>
        </div>
      </div>

      <h2>Learning Roadmap</h2>
      <div className="roadmap-container">
        <div className="roadmap-step">
          <h4>Phase 1: Digital Electronics</h4>
          <p>Boolean Logic, Gates, Flip-Flops, MUX/DEMUX, State Machines.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 2: HDL (Verilog/VHDL)</h4>
          <p>RTL Coding, Simulation, Synthesis, Testbenches.</p>
        </div>
        <div className="roadmap-step">
          <h4>Phase 3: Physical Design & Verification</h4>
          <p>CMOS Basics, Static Timing Analysis (STA), UVM, SystemVerilog.</p>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
        {[
          { q: "Do I need a Master's degree?", a: "It is often preferred for core design roles due to the depth of knowledge required." },
          { q: "Is VLSI only for Electronics engineers?", a: "Primarily yes (ECE/EEE), but CS students with hardware interest can also join." },
          { q: "What companies hire VLSI engineers?", a: "Intel, NVIDIA, Qualcomm, AMD, Broadcom, and Apple." }
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
        <li><a href="https://www.vlsi-expert.com/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>🔬 VLSI Expert</a></li>
        <li><a href="https://www.nandland.com/" target='_blank' rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none' }}>⚡ Nandland (FPGA/Verilog)</a></li>
      </ul>
    </div>
  );
};

export default VLSIDetails;
