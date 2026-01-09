import React, { useState } from 'react';

const Signup = ({ onSignup, users = [] }) => {
  const [username, setUsername] = useState('');
  const [interest, setInterest] = useState('');
  const [error, setError] = useState('');

  const allowedInterests = [
    "Java", "Python", "C", "VLSI", "Embedded",
    "MERN", "MEAN", "HTML", "CSS", "JavaScript"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[A-Za-z]{3,}$/.test(username)) {
      setError("Username must contain at least 3 letters only");
      return;
    }

    if (!allowedInterests.includes(interest)) {
      setError("Please select a valid interest");
      return;
    }

    // Check for duplicate username
    if (users.some(u => u.username === username)) {
      setError("Username already exists. Please choose another.");
      return;
    }

    setError('');
    onSignup({ username, interest }); // Pass data to App
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Interest:
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          required
        >
          <option value="">--Select--</option>
          {allowedInterests.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </label>
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
