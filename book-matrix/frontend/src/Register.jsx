import React, { useState } from 'react';
import axios from 'axios';
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
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <select name="userType" onChange={handleChange}>
        <option value="Student">Student</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
