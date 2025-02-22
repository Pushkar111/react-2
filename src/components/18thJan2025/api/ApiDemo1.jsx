import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, OverlayTrigger, Spinner, Tooltip } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ApiDemo1 = () => {
    const [user, setUser] = useState({}); // for single user
    const [users, setUsers] = useState([]); // for all users
    const [isGetUsers, setIsGetUsers] = useState(false);
    const [show, setShow] = useState(false); // for modal
    const [loading, setLoading] = useState(false);

    const getAllUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://node5.onrender.com/user/user");
            console.log(response.data);
            console.log(response.data.data);
            setUsers(response.data.data);
            setIsGetUsers(true);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    // get all users on page load
    useEffect(() => {
        getAllUsers();
    }, []);

    const detaliUser = async (id) => {
        const response = await axios.get(`https://node5.onrender.com/user/user/${id}`);

        setUser(response.data.data);
        setShow(true);
    };

    // delete user
    const deleteUser = async (id) => {
        const response = await axios.delete(`https://node5.onrender.com/user/user/${id}`);
        if (response.status === 204) {
            toast.success("Successfully deleted record!");
        }

        console.log(response.data);
        getAllUsers();
    };

    // for modal
    const handleClose = () => {
        setShow(false);
    };

    return (
        <div className="p-4">
            <ToastContainer />
            <h1 className="text-2xl font-bold mb-4">ApiDemo1</h1>
            {/* <Button
                variant="primary"
                className="mb-4"
                onClick={() => {
                    getAllUsers();
                }}
                disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : "Get All Users"}
            </Button> */}
            {loading ? <Spinner animation="border" size="sm" /> : (
                isGetUsers && (
                    <div className="overflow-x-auto">
                        <table className="table table-bordered table-hover">
                            <thead className="thead-light">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Age</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((user) => {
                                    return (
                                        <tr key={user._id}>
                                            <td>{user._id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.age}</td>
                                            <td className="d-flex justify-content-center gap-2">
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={<Tooltip id="tooltip-top">Detail User</Tooltip>}
                                                >
                                                    <Button
                                                        variant="info"
                                                        className="mr-2"
                                                        onClick={() => {
                                                            detaliUser(user._id);
                                                        }}>
                                                        <div className="flex items-center">
                                                            <AiOutlineInfoCircle /> Details
                                                        </div>
                                                    </Button>                                                
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={<Tooltip id={`tooltip-top`}>Delete User</Tooltip>}
                                                >
                                                    <Button
                                                        variant="danger"
                                                        onClick={() => {
                                                            deleteUser(user._id);
                                                        }}>
                                                        <div className="flex items-center">
                                                            <FaTrash /> Delete
                                                        </div>
                                                    </Button>
                                                </OverlayTrigger>
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={<Tooltip id={`tooltip-top`}>Edit User</Tooltip>}
                                                >
                                                    <Link to={`/allUsers/editUser/${user._id}`} className="btn btn-primary">
                                                        <FaEdit /> Edit
                                                    </Link>
                                                </OverlayTrigger>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
    
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>USER DETALIS</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>USER ID: {user._id}</p>
                                <p>USER NAME: {user.name}</p>
                                <p>USER EMAIL: {user.email}</p>
                                <p>USER AGE: {user.age}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                )
            )}
            
        </div>
    );
};
