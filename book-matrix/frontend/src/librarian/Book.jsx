import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Book = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
        }

        const response = await fetch('http://localhost:4000/book', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          }
        });

        const data = await response.json();

        if (data.message === 'No token, authorization denied') {
          alert(data.message);
          return;
        } else if (data.message === 'Token is not valid') {
          alert(data.message);
          return;
        }

        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);


  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
          navigate('/login');
      }

      const response = await fetch(`http://localhost:4000/book/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        }
      });

      setBooks(books.filter(book => book._id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h2>Books</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link to="/librarian-panel/book-create">Create New Book</Link>
      <ul>
        {filteredBooks.map(book => (
          <li key={book._id}>
            {book.name} by {book.author}
            <button onClick={() => handleDelete(book._id)}>Delete</button>
            <Link to={`/librarian-panel/book-update/${book._id}`}>Update</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
