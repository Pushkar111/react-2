import React from 'react';
import { useSelector } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";

export const BalanceComponent = () => {
    const balance = useSelector((state) => state.bank.balance);

    return (
        <div className="container mt-5">
            <h2>Current Balance</h2>
            <div className="alert alert-info">
                Balance: ${balance}
            </div>
        </div>
    );
};