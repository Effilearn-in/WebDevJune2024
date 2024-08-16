import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    userType: ''
  });
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await fetch(`http://localhost:4000/user/${localStorage.getItem("username")}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          }
        });

        const data = await response.json();

        if (data.message === 'No token, authorization denied' || data.message === 'Token is not valid') {
          alert(data.message);
          navigate('/login');
        } else {
          setUser(data);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await fetch('http://localhost:4000/user/edit-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify(user)
      });

      const data = await response.json();
      if (data.message === 'Profile updated successfully') {
        alert(data.message);
        setEditing(false);
        navigate('/profile');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={user.name}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={user.username}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">User Type</label>
          <input
            type="text"
            name="userType"
            className="form-control"
            value={user.userType}
            onChange={handleChange}
            disabled
          />
        </div>
        {editing ? (
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Save Changes</button>
            <button type="button" className="btn btn-secondary ms-2" onClick={() => setEditing(false)}>Cancel</button>
          </div>
        ) : (
          <button type="button" className="btn btn-primary" onClick={() => setEditing(true)}>Edit Profile</button>
        )}
      </form>
    </div>
  );
};

export default Profile;
