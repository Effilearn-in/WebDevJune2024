import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function EmployeeUpdate() {
    const { id } = useParams();
    const [employee, setEmployee] = useState({});
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        fetch(`https://employee-api-using-nodejs.onrender.com/employee/${id}`)
            .then(response => response.json())
            .then(data => {
                setEmployee(data);
                setName(data.name);
                setSalary(data.salary);
                setEmail(data.email);
                setRole(data.role);
            })
            .catch(error => console.error('Error fetching employee:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedEmployee = { ...employee, name, salary, email, role };
        fetch(`https://employee-api-using-nodejs.onrender.com/employee/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEmployee),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Employee updated successfully:', data);
            window.location.href = '/';
        })
        .catch(error => console.error('Error updating employee:', error));
    };

    return (
        <div>
            <h1>Update Employee</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="salary">Salary:</label>
                    <input type="text" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Department:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="role">Role:</label>
                    <input type="text" id="role" value={role} onChange={(e) => setRole(e.target.value)} />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
