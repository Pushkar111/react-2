import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

export const ProductComponent = () => {

    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Product 1</h2>
                            <p className="card-text">Description of Product 1</p>
                            <p className="card-text">Price: $1000</p>
                            <button className="btn btn-primary" onClick={() => {dispatch(addToCart({id: 101, name: "Product 1", price: 1000}))}}>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Product 2</h2>
                            <p className="card-text">Description of Product 2</p>
                            <p className="card-text">Price: $2000</p>
                            <button className="btn btn-primary" onClick={() => {dispatch(addToCart({id: 102, name: "Product 2", price: 2000}))}}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
