import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const userType = localStorage.getItem('userType');
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userType');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Library Management</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {userType === 'Student' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/student-panel">Book List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">{username}</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
            {userType === 'Librarian' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/librarian-panel">Book List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/librarian-panel/book-create">Create Book</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/librarian-panel/student">Student List</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/librarian-panel/student-create">Create Student</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/librarian-panel/issued-book">Issued Books</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/librarian-panel/issued-book-create">Issue Book</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">{username}</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
            {!token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
