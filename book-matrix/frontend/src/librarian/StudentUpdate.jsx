import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const StudentUpdate = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const { data } = await axios.get(`/api/student/${id}`);
        setStudent(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/student/${id}`, student);
      navigate('/librarian-panel');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Student</h2>
      <input type="text" name="name" value={student.name || ''} onChange={handleChange} />
      <input type="email" name="email" value={student.email || ''} onChange={handleChange} />
      {/* Add other fields as needed */}
      <button type="submit">Update</button>
    </form>
  );
};

export default StudentUpdate;
