import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const IssuedBookUpdate = () => {
  const { id } = useParams();
  const [issuedBook, setIssuedBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIssuedBook = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await fetch(`http://localhost:4000/issuedBook/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          }
        });

        if (response.ok) {
          const data = await response.json();
          setIssuedBook(data);
        } else {
          console.error('Error fetching issued book:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching issued book:', error);
      }
    };

    fetchIssuedBook();
  }, [id, navigate]);

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

      const response = await fetch(`http://localhost:4000/issuedBook/return-book/${id}`, {
        method: 'PUT',
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
        console.error('Error updating issued book:', errorData.message);
      }
    } catch (error) {
      console.error('Error updating issued book:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Issued Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentId" className="form-label">Student ID</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            className="form-control"
            value={issuedBook.studentId || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">Student Name</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            className="form-control"
            value={issuedBook.studentName || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bookId" className="form-label">Book ID</label>
          <input
            type="text"
            id="bookId"
            name="bookId"
            className="form-control"
            value={issuedBook.bookId || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bookName" className="form-label">Book Name</label>
          <input
            type="text"
            id="bookName"
            name="bookName"
            className="form-control"
            value={issuedBook.bookName || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="issuedDate" className="form-label">Issued Date</label>
          <input
            type="date"
            id="issuedDate"
            name="issuedDate"
            className="form-control"
            value={issuedBook.issuedDate || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="returnDate" className="form-label">Return Date</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            className="form-control"
            value={issuedBook.returnDate || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            id="status"
            name="status"
            className="form-select"
            value={issuedBook.status || ''}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="Returned">Returned</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default IssuedBookUpdate;
