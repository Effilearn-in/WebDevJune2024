import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';  // Make sure you have jwt-decode installed

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (data.message === "Invalid Username") {
        alert(data.message);
        return;
      } else if (data.message === "Invalid Password") {
        alert(data.message);
        return;
      }

      const user = jwtDecode(data.token);

      localStorage.setItem('token', data.token);
      localStorage.setItem('username', user.username);
      localStorage.setItem('userType', user.userType);

      if (user.userType === 'Student') {
        navigate('/student-panel');
      } else {
        navigate('/librarian-panel');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="row g-3">
        <h2 className="mb-4">Login</h2>
        <div className="col-md-6">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="form-control"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
