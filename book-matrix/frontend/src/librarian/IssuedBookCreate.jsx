import React, { useState } from 'react';
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
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await fetch('http://localhost:4000/issuedBook/issue-book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify(issuedBook)
      });

      if (response.ok) {
        navigate('/librarian-panel/issued-book');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.message);
      }
    } catch (error) {
      console.error('Error issuing book:', error);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="p-4 border rounded">
        <h2 className="mb-4">Issue Book</h2>
        <div className="mb-3">
          <label htmlFor="studentId" className="form-label">Student ID</label>
          <input type="text" name="studentId" className="form-control" placeholder="Student ID" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">Student Name</label>
          <input type="text" name="studentName" className="form-control" placeholder="Student Name" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="bookId" className="form-label">Book ID</label>
          <input type="text" name="bookId" className="form-control" placeholder="Book ID" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="bookName" className="form-label">Book Name</label>
          <input type="text" name="bookName" className="form-control" placeholder="Book Name" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="issuedDate" className="form-label">Issued Date</label>
          <input type="date" name="issuedDate" className="form-control" placeholder="Issued Date" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="returnDate" className="form-label">Return Date</label>
          <input type="date" name="returnDate" className="form-control" placeholder="Return Date" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Issue</button>
      </form>
    </div>
  );
};

export default IssuedBookCreate;
