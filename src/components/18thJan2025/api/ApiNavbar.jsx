import React from "react";
import { Link } from "react-router-dom";

export const ApiNavbar = () => {
    return (
        <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Link to="/">
                    <button className="btn btn-danger">Back to Home</button>
                </Link>
            </div>
            <h1 className="display-4 mb-4">Tasks</h1>
            <ul className="list-unstyled">
                {/* API CRUD Operations */}
                <li className="mb-4">
                    <Link to="/allUsers" className="text-primary">
                        1. Api Demo 1 [Get All Users]
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/addUsers" className="text-primary">
                        2. Api Demo 2 [Add Users]
                    </Link>
                </li>
                
                {/* 1st Feb useMemo */}
                <li className="mb-4">
                    <Link to="/useMemoDemo1" className="text-primary">
                        <b>1. UseMemoDemo1 Example [Filtering Fruits items]</b>
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/useMemoFilterLargeList" className="text-primary">
                        <b>2. UseMemo Example [Filtering LargeList]</b>
                    </Link>
                </li>

                {/* 1st Feb useEffect */}
                <li className="mb-4">
                    <Link to="/useEffectDemo" className="text-primary">
                        <b>1. UseEffect Example [Dummp Json API Fetch Data]</b>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
