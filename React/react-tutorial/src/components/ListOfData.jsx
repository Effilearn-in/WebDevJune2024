import React from "react";

export default function ListOfData() {
    const employeeList = [
        {
            id: 1,
            name: "Suraj Sahani",
            role: "Full Stack Developer"
        },
        {
            id: 2,
            name: "Amit Sahani",
            role: "Full Stack Developer"
        },
        {
            id: 3,
            name: "Rakesh Sahani",
            role: "Full Stack Developer"
        },
        {
            id: 4,
            name: "Dinesh Sahani",
            role: "Full Stack Developer"
        },
        {
            id: 5,
            name: "Mahesh Sahani",
            role: "Full Stack Developer"
        }
    ];

    return (
        <>
            <h1>Employee List</h1>
            <ul>
                {employeeList && employeeList.map((data) => (
                    <li key={data.id}>{data.name} - {data.role}</li>
                ))}
            </ul>

            <div className="m-5 conatiner">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeList && employeeList.map((data) => (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="container">
                <div className="row">
                    {employeeList && employeeList.map((data)=> (
                        <div class="col card m-2">
                        <div class="card-body">
                          <h5 class="card-title">{data.name}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">{data.role}</h6>
                          <p class="card-text">ID :- {data.id}</p>
                          <a href="#" class="card-link">View</a>
                          <a href="#" class="card-link">Read More...</a>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </>
    );
}