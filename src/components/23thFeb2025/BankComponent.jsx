import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { depositAction, withdrawAction } from '../../redux/BankSlice';
import "bootstrap/dist/css/bootstrap.min.css";

export const BankComponent = () => {
    const [depAmount, setDepAmount] = useState(0);
    const [withDrawAmount, setWithDrawAmount] = useState(0);
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const balance = useSelector((state)=> state.bank.balance);

    const depositHandler = () => {
        setError("");
        dispatch(depositAction(parseInt(depAmount)));
    };
    
    const withdrawHandler = () => {
        if (parseInt(withDrawAmount) > balance) {
            setError("Insufficient Balance");
        } else {
            setError("");
            dispatch(withdrawAction(parseInt(withDrawAmount)));
        }
    };

    return (
        <div className="container mt-5 w-25">
            <h2>Bank Account</h2>
            <div className="mb-3 d-flex align-items-center">
                <input
                    type="number"
                    className="form-control me-2"
                    onChange={(e) => setDepAmount(e.target.value)}
                    placeholder="Enter Deposit amount"
                />
                <button className="btn btn-primary" onClick={depositHandler}>Deposit</button>
            </div>
            <div className="mb-3 d-flex align-items-center">
                <input
                    type="number"
                    className="form-control me-2"
                    onChange={(e) => setWithDrawAmount(e.target.value)}
                    placeholder="Enter WithDraw amount"
                />
                <button className="btn btn-danger" onClick={withdrawHandler}>Withdraw</button>
            </div>
            {
                error && <div className="text-danger">{error}</div>
            }
        </div>
    );
};
