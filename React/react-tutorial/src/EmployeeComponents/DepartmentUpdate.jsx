import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DepartmentUpdate() {
    const { id } = useParams();
    const [department, setDepartment] = useState({});
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch(`https://employee-api-using-nodejs.onrender.com/department/${id}`)
            .then(response => response.json())
            .then(data => {
                setDepartment(data);
                setName(data.name);
                setDescription(data.description);
            })
            .catch(error => console.error('Error fetching department:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedDepartment = { ...department, name, description};
        fetch(`https://employee-api-using-nodejs.onrender.com/department/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedDepartment),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Department updated successfully:', data);
            window.location.href = '/department';
        })
        .catch(error => console.error('Error updating department:', error));
    };

    return (
        <div>
            <h1>Update Department</h1>
            <form onSubmit={handleSubmit}>
            <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
