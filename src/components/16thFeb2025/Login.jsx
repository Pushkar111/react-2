import React, { useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuthentication(); // Custom Hook
    const navigate = useNavigate();

    const handleLogin = () => {
      if (username === "admin") { 
        const userData = { username };
        login(userData); // login() is a function from useAuthentication.js
        navigate("/dashboard");
      } else {
        setError("Invalid username");
      }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Login</h2>
            <div className="form-group">
                <input type="text" name="username" className="form-control" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            {error && <div className="text-danger mt-2">{error}</div>}
            <button className="btn btn-primary mt-3" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};
