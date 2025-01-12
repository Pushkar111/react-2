import React from "react";
import "../../../assets/css/NetflixNavbar.css";
import { Link } from "react-router-dom";

export const NetflixNavbar = () => {
    return (
        <div className="nav">
            <Link to="/dashboard">
                <img className="nav_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Logo" />
            </Link>
            <div className="navbar__links">
                <Link to="/home">Home</Link>
                <Link to="/tvshows">TV Shows</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/newpopular">New & Popular</Link>
                <Link to="/mylist">My List</Link>

                {/* 5th January 2025 react-hook-form FormDemo1 */}
                <Link to="/formdemo1">FormDemo1</Link>
            </div>
            <input type="text" className="navbar__search" placeholder="Search" />
            <img className="user" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" />
        </div>
    );
};
