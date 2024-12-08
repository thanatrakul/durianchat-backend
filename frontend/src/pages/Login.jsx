import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', credentials);
      localStorage.setItem('token', response.data.token);
      setError('');
      alert('Login successful!');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <h3>Login</h3>
      <input
        type="text"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className="border rounded p-2 mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        className="border rounded p-2 mb-2"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Login;