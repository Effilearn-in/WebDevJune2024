import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    userType: 'Student'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (data.message === "Username already exists") {
        alert(data.message);
        return;
      } else if (data.message === "Email already exists") {
        alert(data.message);
        return;
      } else if (data.message === "User registered successfully") {
        navigate('/login');
      }
    } catch (error) {
      console.error("Registration error: ", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="row g-3">
        <h2 className="mb-4">Register</h2>
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <select
            name="userType"
            className="form-select"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="Student">Student</option>
            {/* You can add more options here if needed */}
          </select>
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
