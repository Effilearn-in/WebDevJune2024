import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserInfo = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }
            try {
                const response = await fetch('http://localhost:4000/user/user-info', {
                    method: 'GET',
                    headers: {
                        'x-auth-token': token,
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Something went wrong');
                }

                const resData = await response.json();
                setUserInfo(resData);
                localStorage.setItem('username', resData.username);
                localStorage.setItem('email', resData.email);
            } catch (err) {
                console.error(err.message);
                navigate('/login');
            }
        };
        fetchUserInfo();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        navigate('/login');
    };

    return (
        <div>
            <h1>Welcome Home!</h1>
            {userInfo ? (
                <div>
                    <p>Username: {userInfo.username}</p>
                    <p>Email: {userInfo.email}</p>
                </div>
            ) : (
                <p>Loading user information...</p>
            )}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;
