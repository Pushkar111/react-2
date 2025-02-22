import axios from "axios";
import React, { useMemo,  useState } from "react";
import { Button, Spinner } from "react-bootstrap";

export const FilteringLargeList = () => {
    const [users, setUsers] = useState([]);
    const [isGetUsers, setIsGetUsers] = useState(false);
    const [loading, setLoading] = useState(false);

    // useMemo Example
    const [query, setQuery] = useState("");


    // get all users on page load
    // useEffect(() => {
    //     getAllUsers();
    // }, []);

    const getAllUsers = async() => {
        setLoading(true);
        try {
            const response = await axios.get("https://randomuser.me/api/?results=500"); // Generate 500 Random users
            console.log(response.data);
            console.log(response.data.results);
    
            setUsers(response.data.results);

            setIsGetUsers(true);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            return user.name.first.toLowerCase().includes(query.toLowerCase());
        });
    }, [query, users]);


    return (
        <div>
            <h1>Demo</h1>
            
            <Button variant='primary' onClick={getAllUsers} >
                {
                    loading ? <Spinner animation="border" variant="light" role="status"/> : "Get All Users" 
                }
            </Button>

            <br />
            <br />

            <input 
                type="search" 
                className="form-control w-50 mb-4 p-2 center mx-auto"
                placeholder="Search users Data by Name..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
            />

            {
                isGetUsers && (
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>DOB</th>
                                <th>AGE</th>
                                <th>GENDER</th>
                                <th>PHONE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredUsers?.map((user) => {
                                    return (
                                        <tr key={user.login.uuid}>
                                            <td>{user.id.name} - {user.id.value}</td>
                                            <td>{user.name.title}. {user.name.first} {user.name.last} </td>
                                            <td>{user.email}</td>
                                            <td>{new Date(user.dob.date).toLocaleDateString()}</td>
                                            <td>{user.dob.age}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                )
            }
{/* 
            {
                isGetUsers && (
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>DOB</th>
                                <th>AGE</th>
                                <th>GENDER</th>
                                <th>PHONE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user) => {
                                    return (
                                        <tr>
                                            <td>{user.id.name} - {user.id.value}</td>
                                            <td>{user.name.title}. {user.name.first} {user.name.last} </td>
                                            <td>{user.email}</td>
                                            <td>{user.dob.date}</td>
                                            <td>{user.dob.age}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                        
                                    );
                                })
                            }
                        </tbody>
                    </table>
                )
            } */}

            
        </div>
    );
};
