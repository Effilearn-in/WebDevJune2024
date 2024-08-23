import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Book = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [searchOption, setSearchOption] = useState('name');
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
    book[searchOption].toString().toLowerCase().includes(search.toLowerCase())
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
        <div className="input-group">
          <div className="input-group-prepend">
            <select 
              className="form-select" 
              value={searchOption} 
              onChange={(e) => setSearchOption(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="author">Author</option>
              <option value="quantity">Quantity</option>
              <option value="category">Category</option>
            </select>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder={`Search by ${searchOption}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <Link to="/librarian-panel/book-create" className="btn btn-primary mb-3">Create New Book</Link>
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map(book => (
            <tr key={book._id}>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.quantity}</td>
              <td>{book.category}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </button>
                <Link to={`/librarian-panel/book-update/${book._id}`} className="btn btn-warning btn-sm">
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Book;
