import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import { useForm } from "react-hook-form";

export const AddProduct = () => {
    const { editProduct, productDispatcher } = useContext(ProductContext);
    const [product, setProduct] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
    });

    useEffect(() => {
        if (editProduct) {
            setProduct(editProduct);
        } else {
            setProduct({
                id: "",
                title: "",
                price: "",
                description: "",
                category: "",
                image: "",
            });
        }
    }, [editProduct]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.log(errors);

    const validationSchema = {
        title: {
            required: "Title is required",
            minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
            },
            maxLength: {
                value: 20,
                message: "Title must be less than 20 characters",
            },
        },

        price: {
            required: "Price is required",
            min: {
                value: 1,
                message: "Price must be at least 1",
            },
            max: {
                value: 1000,
                message: "Price must be less than 1000",
            },
        },

        description: {
            required: "Description is required",
            minLength: {
                value: 10,
                message: "Description must be at least 10 characters",
            },
            maxLength: {
                value: 100,
                message: "Description must be less than 100 characters",
            },
        },

        category: {
            required: "Category is required",
            minLength: {
                value: 3,
                message: "Category must be at least 3 characters",
            },
            maxLength: {
                value: 20,
                message: "Category must be less than 20 characters",
            },
        },

        image: {
            required: "Image is required",
            pattern: {
                value: /\.(jpeg|jpg|png)$/,
                message: "Invalid Image",
            },
        },
    };

    const handleChange = (e) => {
        if (e.target.name === "image") {
            setProduct({...product, [e.target.name]: URL.createObjectURL(e.target.files[0])});
        } else {
            setProduct({...product, [e.target.name]: e.target.value});
        }
    };

    const submitHandler = (data) => {
        console.log(data);
        if (editProduct) {
            productDispatcher("UPDATE_PRODUCT", data);
        } else {
            productDispatcher("ADD_PRODUCT", { ...data, id: Math.floor(Math.random() * 1000) });
        }
        setProduct({
            id: "",
            title: "",
            price: "",
            description: "",
            category: "",
            image: "",
        });
    };

    return (
      <div className="container mt-5">
        <h2 className="mb-4">{editProduct ? "Edit Product" : "Add Product"}</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={product.title}
              placeholder="Title"
              onChange={handleChange}
              {...register("title", validationSchema.title)}
            />
            {errors.title && <div className="text-danger">{errors.title.message}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              value={product.price}
              placeholder="Price"
              onChange={handleChange}
              {...register("price", validationSchema.price)}
            />
            {errors.price && <div className="text-danger">{errors.price.message}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={product.description}
              placeholder="Description"
              onChange={handleChange}
              {...register("description", validationSchema.description)}
            />
            {errors.description && <div className="text-danger">{errors.description.message}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={product.category}
              placeholder="Category"
              onChange={handleChange}
              {...register("category", validationSchema.category)}
            />
            {errors.category && <div className="text-danger">{errors.category.message}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              value={product.image}
              placeholder="Image"
              onChange={handleChange}
              {...register("image", validationSchema.image)}
            />
            {errors.image && <div className="text-danger">{errors.image.message}</div>}
          </div>
          <button type="submit" className="btn btn-primary">{editProduct ? "Update" : "Add"}</button>
        </form>
      </div>
    );
};
