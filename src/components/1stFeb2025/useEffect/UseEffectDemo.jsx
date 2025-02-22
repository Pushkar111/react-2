import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

export const UseEffectDemo = () => {
    const [users, setUsers] = useState([]); // State to store the list of users
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors

    // useEffect to fetch data when the component mounts 
    useEffect(() => {
        // Define an async function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setUsers(data); // Update the state with the fetched data
            } catch (error) {
                setError(error.message); // Set error state if something goes wrong
            } finally {
                setLoading(false); // Set loading to false after the request completes
            }
        };

        fetchData(); // Call the async function
    }, []); // Empty dependency array means this runs only once on mount

    // Display loading state
    if (loading) {
        return <Spinner animation="border" variant="primary" className="center" />;
    }

    // Display error message if there's an error
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};
