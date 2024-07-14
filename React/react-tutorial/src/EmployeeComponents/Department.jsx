import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Department() {

    const [departments, setDepartments] = useState(null);

    useEffect(()=>{
        load();
    },[]);

    function load() {
        fetch('https://employee-api-using-nodejs.onrender.com/department')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setDepartments(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    const handleDelete = (_id) => {
        fetch(`https://employee-api-using-nodejs.onrender.com/department/${_id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(() => {
            setDepartments(departments.filter(department => department._id !== _id));
        })
        .catch(error => console.error('Error deleting department:', error));
    };

    return (
        <>
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-bold my-4 text-center">Department List</h1>
                <Link to="/department-create" className="bg-danger bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center">Create</Link>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Delete Operation</th>
                            <th className="px-4 py-2">Update Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments &&
                            departments.map((e, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{e._id}</td>
                                    <td className="border px-4 py-2">{e.name}</td>
                                    <td className="border px-4 py-2">{e.description}</td>
                                    <td className="border px-4 py-2">
                                        <button onClick={() => handleDelete(e._id)} className="bg-danger bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            Delete
                                        </button>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <Link to={`/department-update/${e._id}`} className="bg-primary bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Update</Link>
                                    </td>
                                </tr>
                            ))
                            
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
