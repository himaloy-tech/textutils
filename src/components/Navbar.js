import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
    const location = useLocation();
    const activeClass = (route) => { return location.pathname === route ? "active" : "" };
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="../favicon.ico" alt="logo" className="d-inline-block align-text-top" style={{ marginRight: '10px', width: '33px' }} />
                    {props.title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${activeClass('/')}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${activeClass('/about')}`} aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="form-switch" style={{marginRigth: '5px'}}>
                        <input className="form-check-input" type="checkbox" id="switch" onClick={props.toggleMode} />
                        <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="switch">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
