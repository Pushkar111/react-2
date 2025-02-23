import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuthentication } from "../../hooks/useAuthentication";

export const NavbarCustomHook = () => {

    const {logout} = useAuthentication();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/dashboard" className="navbar-brand">
                Dashboard
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/home" className="nav-link">
                            Home <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/features" className="nav-link">
                            Features
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pricing" className="nav-link">
                            Pricing
                        </Link>
                    </li>
                    <li className="nav-item">
                        <button onClick={logout} className="nav-link">
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
