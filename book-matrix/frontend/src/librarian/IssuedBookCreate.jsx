import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const IssuedBookCreate = () => {
  const [issuedBook, setIssuedBook] = useState({
    studentId: '',
    studentName: '',
    bookId: '',
    bookName: '',
    issuedDate: '',
    returnDate: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setIssuedBook({ ...issuedBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/issuedBook/issue-book', issuedBook);
      navigate('/librarian-panel');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Issue Book</h2>
      <input type="text" name="studentId" placeholder="Student ID" onChange={handleChange} />
      <input type="text" name="studentName" placeholder="Student Name" onChange={handleChange} />
      <input type="text" name="bookId" placeholder="Book ID" onChange={handleChange} />
      <input type="text" name="bookName" placeholder="Book Name" onChange={handleChange} />
      <input type="date" name="issuedDate" placeholder="Issued Date" onChange={handleChange} />
      <input type="date" name="returnDate" placeholder="Return Date" onChange={handleChange} />
      <button type="submit">Issue</button>
    </form>
  );
};

export default IssuedBookCreate;
