import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BookUpdate = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
        }

        const response = await fetch(`http://localhost:4000/book/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          }
        });

        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      }

      const response = await fetch(`http://localhost:4000/book/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify(book)
      });

      navigate('/librarian-panel');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Book</h2>
      <input type="text" name="name" value={book.name || ''} onChange={handleChange} />
      <input type="text" name="author" value={book.author || ''} onChange={handleChange} />
      <input type="text" name="publisher" value={book.publisher || ''} onChange={handleChange} />
      <input type="text" name="image" value={book.image || ''} onChange={handleChange} />
      <input type="number" name="quantity" value={book.quantity || ''} onChange={handleChange} />
      <select name="category" value={book.category || ''} onChange={handleChange}>
        <option value="FYIT">FYIT</option>
        <option value="SYIT">SYIT</option>
        <option value="TYIT">TYIT</option>
        <option value="FYCS">FYCS</option>
        <option value="SYCS">SYCS</option>
        <option value="TYCS">TYCS</option>
      </select>
      <button type="submit">Update</button>
    </form>
  );
};

export default BookUpdate;
