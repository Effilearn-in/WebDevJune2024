import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const IssuedBookUpdate = () => {
  const { id } = useParams();
  const [issuedBook, setIssuedBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIssuedBook = async () => {
      try {
        const { data } = await axios.get(`/api/issuedBook/${id}`);
        setIssuedBook(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIssuedBook();
  }, [id]);

  const handleChange = (e) => {
    setIssuedBook({ ...issuedBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/issuedBook/${id}`, issuedBook);
      navigate('/librarian-panel');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Issued Book</h2>
      <input type="text" name="studentId" value={issuedBook.studentId || ''} onChange={handleChange} />
      <input type="text" name="studentName" value={issuedBook.studentName || ''} onChange={handleChange} />
      <input type="text" name="bookId" value={issuedBook.bookId || ''} onChange={handleChange} />
      <input type="text" name="bookName" value={issuedBook.bookName || ''} onChange={handleChange} />
      <input type="date" name="issuedDate" value={issuedBook.issuedDate || ''} onChange={handleChange} />
      <input type="date" name="returnDate" value={issuedBook.returnDate || ''} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
};

export default IssuedBookUpdate;
