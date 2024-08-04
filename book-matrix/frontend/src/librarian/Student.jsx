import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await fetch('http://localhost:4000/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          }
        });

        const data = await response.json();
        console.log("data ", data);

        // Ensure data is an array
        if (Array.isArray(data)) {
          setStudents(data);
        } else {
          console.error('Expected data to be an array:', data);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, [navigate]);

  const filteredStudents = Array.isArray(students) ? students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  ) : [];

  return (
    <div>
      <h2>Students</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredStudents.map(student => (
          <li key={student._id}>{student._id} :- {student.name} - {student.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Student;
