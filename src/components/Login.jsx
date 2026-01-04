import React, { useState } from "react";

const Login = ({ onLogin, users }) => {
  const [username, setUsername] = useState("");
  const [interest, setInterest] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === username && u.interest === interest);
    if (user) {
      setError("");
      onLogin(user);
    } else {
      setError("Invalid username or interest. Please sign up first.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h3>Login</h3>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </label>
      <br />
      <label>
        Interest:
        <input type="text" value={interest} onChange={(e) => setInterest(e.target.value)} required />
      </label>
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
