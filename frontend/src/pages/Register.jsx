import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:8080/api/register', credentials);
      setSuccess('Registration successful! You can now login.');
      setError('');
    } catch (err) {
      setError('Registration failed. Try again.');
      setSuccess('');
    }
  };

  return (
    <div className="register-page">
      <h3>Register</h3>
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
      <button onClick={handleRegister} className="bg-green-500 text-white p-2 rounded">
        Register
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
};

export default Register;