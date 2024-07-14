import React, { useState, useEffect } from 'react';

export default function DepartmentCreate() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const createDepartment = { name, description};
        fetch(`https://employee-api-using-nodejs.onrender.com/department`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(createDepartment),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Department created successfully:', data);
            window.location.href = '/department';
        })
        .catch(error => console.error('Error creating department:', error));
    };

    return (
        <div>
            <h1>Create Department</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}
