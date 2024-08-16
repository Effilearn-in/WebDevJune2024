import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const IssuedBook = () => {
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIssuedBooks = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await fetch('http://localhost:4000/issuedBook', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          }
        });

        const data = await response.json();
        setIssuedBooks(data);
      } catch (error) {
        console.error('Error fetching issued books:', error);
      }
    };

    fetchIssuedBooks();
  }, [navigate]);

  const filteredIssuedBooks = issuedBooks.filter(issuedBook =>
    issuedBook.bookName.toLowerCase().includes(search.toLowerCase())
  );

  const handleReturn = (issuedBookId) => {
    navigate(`/librarian-panel/issued-book-update/${issuedBookId}`);
  };

  return (
    <div className="container mt-5">
      <h2>Issued Books</h2>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Student Name</th>
            <th scope="col">Issue Date</th>
            <th scope="col">Return Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredIssuedBooks.map(issuedBook => (
            <tr key={issuedBook._id}>
              <td>{issuedBook.bookName}</td>
              <td>{issuedBook.studentName}</td>
              <td>{issuedBook.issuedDate}</td>
              <td>{issuedBook.returnDate}</td>
              <td>{issuedBook.status}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleReturn(issuedBook._id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssuedBook;
