import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentCreate = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    // add other fields as needed
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/student', student);
      navigate('/librarian-panel');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Student</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      {/* Add other fields as needed */}
      <button type="submit">Create</button>
    </form>
  );
};

export default StudentCreate;
