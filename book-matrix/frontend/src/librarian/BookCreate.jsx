import React, { useState } from 'react';
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

      if (response.ok) {
        navigate('/librarian-panel');
      } else {
        console.error('Error creating book:', await response.json());
      }
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Book Name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            placeholder="Author"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="publisher" className="form-label">Publisher</label>
          <input
            type="text"
            className="form-control"
            id="publisher"
            name="publisher"
            placeholder="Publisher"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            placeholder="Quantity"
            min="1"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select
            className="form-select"
            id="category"
            name="category"
            onChange={handleChange}
          >
            <option value="FYIT">FYIT</option>
            <option value="SYIT">SYIT</option>
            <option value="TYIT">TYIT</option>
            <option value="FYCS">FYCS</option>
            <option value="SYCS">SYCS</option>
            <option value="TYCS">TYCS</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
