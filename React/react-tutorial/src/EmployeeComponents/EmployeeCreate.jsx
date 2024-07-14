import React, { useState, useEffect } from 'react';

export default function EmployeeCreate() {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const createEmployee = { name, salary, email, role };
        fetch(`https://employee-api-using-nodejs.onrender.com/employee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(createEmployee),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Employee created successfully:', data);
            window.location.href = '/';
        })
        .catch(error => console.error('Error creating employee:', error));
    };

    return (
        <div>
            <h1>Create Employee</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="salary">Salary:</label>
                    <input type="text" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="role">Role:</label>
                    <input type="text" id="role" value={role} onChange={(e) => setRole(e.target.value)} required />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}
