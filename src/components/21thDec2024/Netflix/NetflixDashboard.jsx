import React from "react";
import { Link } from "react-router-dom";

export const NetflixDashboard = () => {
    const headingStyle = {
        fontSize: "large",
        fontFamily: "cursive",
        fontWeight: "900",
    };

    return (
        <div>
            <h1 style={{ ...headingStyle }}>NetflixDashboard</h1>
            <ul>
                <li>
                    <Link to="/dashboard/about">Netflix About</Link>
                </li>
                <li>
                    <Link to="about">Netflix About</Link>
                </li>
                <li>
                    <Link to="/dashboard/contact">Netflix Contact</Link>
                </li>
                <li>
                    <Link to="contact">Netflix Contact</Link>
                </li>
            </ul>
        </div>
    );
};
