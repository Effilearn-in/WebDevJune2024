import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookCreate = () => {
  const [book, setBook] = useState({
    name: '',
    author: '',
    publisher: '',
    image: '',
    quantity: 1,
    category: 'FYIT'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await fetch('http://localhost:4000/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify(book)
      });

      navigate('/librarian-panel');
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Book</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="author" placeholder="Author" onChange={handleChange} />
      <input type="text" name="publisher" placeholder="Publisher" onChange={handleChange} />
      <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
      <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} />
      <select name="category" onChange={handleChange}>
        <option value="FYIT">FYIT</option>
        <option value="SYIT">SYIT</option>
        <option value="TYIT">TYIT</option>
        <option value="FYCS">FYCS</option>
        <option value="SYCS">SYCS</option>
        <option value="TYCS">TYCS</option>
      </select>
      <button type="submit">Create</button>
    </form>
  );
};

export default BookCreate;
