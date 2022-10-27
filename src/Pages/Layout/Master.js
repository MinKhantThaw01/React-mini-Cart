import React from 'react';
import { Link } from 'react-router-dom';


export default function Master(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        React
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page">
                                    <Link to="/" className='text-decoration-none text-warning'>Home</Link>
                                </a>
                            </li>
                            <li className="nav-item d-flex ">
                                <a className="nav-link">

                                    <Link to="/cart" className='text-decoration-none text-warning'><i class="bi bi-cart2"></i></Link>
                                </a>
                                <span class="badge rounded-circle text-bg-danger w-25 h-50 d-flex align-items-center justify-content-center">{props.cart.length}</span>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav >

            <div className="container">
                {props.children}
            </div>
        </div >

    )
}
