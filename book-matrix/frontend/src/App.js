import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Book from './student/Book';
import LBook from './librarian/Book';
import BookCreate from './librarian/BookCreate';
import BookUpdate from './librarian/BookUpdate';
import Student from './librarian/Student';
import StudentCreate from './librarian/StudentCreate';
import StudentUpdate from './librarian/StudentUpdate';
import IssuedBook from './librarian/IssuedBook';
import IssuedBookCreate from './librarian/IssuedBookCreate';
import IssuedBookUpdate from './librarian/IssuedBookUpdate';
import Navbar from './Navbar';
import Profile from './Profile';
import { ContactUs } from './student/ContactUs';

const App = () => (
  <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      {/* Student Panel Routes */}
      <Route path="/student-panel" element={<Book />} />
      <Route path="/student-panel/contact-us" element={<ContactUs></ContactUs>} />
      {/* Librarian Panel Routes */}
      <Route path="/librarian-panel" element={<LBook />} />
      <Route path="/librarian-panel/book-create" element={<BookCreate />} />
      <Route path="/librarian-panel/book-update/:id" element={<BookUpdate />} />
      <Route path="/librarian-panel/student" element={<Student />} />
      <Route path="/librarian-panel/student-create" element={<StudentCreate />} />
      <Route path="/librarian-panel/student-update/:id" element={<StudentUpdate />} />
      <Route path="/librarian-panel/issued-book" element={<IssuedBook />} />
      <Route path="/librarian-panel/issued-book-create" element={<IssuedBookCreate />} />
      <Route path="/librarian-panel/issued-book-update/:id" element={<IssuedBookUpdate />} />
    </Routes>
  </Router>
);

export default App;
