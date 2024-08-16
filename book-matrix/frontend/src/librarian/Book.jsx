import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
          return;
        }

        const response = await fetch('http://localhost:4000/book', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          }
        });

        const data = await response.json();

        if (data.message === 'No token, authorization denied' || data.message === 'Token is not valid') {
          alert(data.message);
          return;
        }

        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [navigate]);

  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await fetch(`http://localhost:4000/book/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        }
      });

      if (response.ok) {
        setBooks(books.filter(book => book._id !== id));
      } else {
        const errorData = await response.json();
        console.error('Error deleting book:', errorData.message);
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Books</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Link to="/librarian-panel/book-create" className="btn btn-primary mb-3">Create New Book</Link>
      <ul className="list-group">
        {filteredBooks.map(book => (
          <li key={book._id} className="list-group-item d-flex justify-content-between align-items-center">
            {book.name} by {book.author}
            <div>
              <button
                className="btn btn-danger btn-sm me-2"
                onClick={() => handleDelete(book._id)}
              >
                Delete
              </button>
              <Link to={`/librarian-panel/book-update/${book._id}`} className="btn btn-warning btn-sm">
                Update
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
