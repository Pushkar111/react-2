import React from "react";
import { Link } from "react-router-dom";

export const Tasks = () => {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <Link to="/" className="text-blue-500 hover:underline">
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                        Back to Home
                    </button>
                </Link>
            </div>
            <h1 className="text-3xl font-bold mb-4">Tasks</h1>
            <ul>
                <li className="mb-4">
                    <Link to="/formtask1" className="text-blue-500 hover:underline">1. create form student data handler</Link>
                </li>
                <li className="mb-4">
                    <Link to="/formtask2" className="text-blue-500 hover:underline">2. create form MCQ paper handler</Link>
                </li>
                <li className="mb-4">
                    <Link to="/formvalidationdemo1" className="text-blue-500 hover:underline">3. 11thJan2025 FormValidationDemo1</Link>
                </li>
                <li className="mb-4">
                    <Link to="/formvalidationdemo2" className="text-blue-500 hover:underline">4. 11thJan2025 FormValidationDemo2</Link>
                </li>
            </ul>
        </div>
    );
};
