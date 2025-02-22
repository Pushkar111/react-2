import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import { AddProduct } from "./AddProduct";
import { ListProducts } from "./ListProducts";

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);


    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log(response.data);
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const productDispatcher = (choice, payload) => {
        switch(choice){
            case "ADD_PRODUCT":
                setProducts([...products, payload]);
                break;

            case "DELETE_PRODUCT" :
                setProducts(products.filter((product) => product.id !== payload.id));
                break;

            case "EDIT_PRODUCT":
                setEditProduct(payload);
                break;

            case "UPDATE_PRODUCT":
                setProducts(products.map((product) => (product.id === payload.id ? payload : product)));
                setEditProduct(null);
                break;

            default:
                break;
        }
    }


    return (
        <div>
            <h1>Products</h1>
            <ProductContext.Provider value={{products, setProducts, productDispatcher, editProduct}}>
                <AddProduct/>
                <ListProducts/>
            </ProductContext.Provider>

            
        </div>
    );
};
