import React, { useState } from 'react';

const AuthForm = ({ onAuthSuccess }) => {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (name.length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(interest)) {
      setError("Interest should contain only letters");
      return;
    }

    setError('');
    onAuthSuccess({ name, interest });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Interest:
        <input
          type="text"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          required
        />
      </label>
      <br />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Sign In</button>
    </form>
  );
};

export default AuthForm;
