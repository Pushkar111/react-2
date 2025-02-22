import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";

export const ListProducts = () => {
    const { products , productDispatcher} = useContext(ProductContext);

    return (
        <div>
            <h1>ListProducts</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Image</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>
                                <img src={product.image} alt={product.title} style={{ width: "50px" }} />
                            </td>
                            <td className="d-flex justify-content-around align-items-center gap-3">
                                <button className="btn btn-primary" onClick={()=>{productDispatcher("EDIT_PRODUCT", product)}}>Edit</button>
                                <button className="btn btn-danger" onClick={()=>{productDispatcher("DELETE_PRODUCT", product)}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
