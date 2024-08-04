import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IssuedBook = () => {
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchIssuedBooks = async () => {
      try {
        const { data } = await axios.get('/api/issuedBook');
        setIssuedBooks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIssuedBooks();
  }, []);

  const filteredIssuedBooks = issuedBooks.filter(issuedBook =>
    issuedBook.bookName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Issued Books</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredIssuedBooks.map(issuedBook => (
          <li key={issuedBook._id}>
            {issuedBook.bookName} issued to {issuedBook.studentName} - Status: {issuedBook.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssuedBook;
