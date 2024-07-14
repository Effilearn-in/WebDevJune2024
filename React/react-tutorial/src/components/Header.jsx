import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary text-light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/department">Department</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/counter">Counter</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/show-hide">Show Hide</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/listofdata">List Of Data</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/country-guide-app">Country Guide App</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/github">GitHub Project</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/qrcode">QR Code Generator</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}