import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

export const ApiDemo2 = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.log(errors);

    const submitHandler = async (data) => {
        console.log(data);

        // const response = await axios.post("https://node5.onrender.com/user/user", data);
        // console.log(response.data);
        
        
        toast.promise(
            axios.post("https://node5.onrender.com/user/user", data),
            {
                pending: "User add pending...",
                success: {
                    render() {
                        return "User added successfully!";
                    },
                },
                error: "User not added!",
            },
            {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                onClose: () => {
                    // Navigate after the toast is closed
                    navigate("/allUsers");
                },
            }
        );
    };

    const validationSchema = {
        name: {
            required: "Name is required",
            minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
            },
            maxLength: {
                value: 20,
                message: "Name must be at most 20 characters",
            },
        },

        email: {
            required: "Email is required",
            pattern: {
                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                message: "Email is not valid",
            },
        },

        age: {
            required: "Age is required",
            min: {
                value: 18,
                message: "Age must be at least 18",
            },
            max: {
                value: 60,
                message: "Age must be at most 60",
            },
        },

        isActive: {
            required: "Active is required",
        },
    };

    return (
        <div class="container p-4 bg-white rounded shadow-lg">
            {/* <!-- Tostify - ToastContainer --> */}
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={true}
                theme="dark"
                transition={Bounce}
            />
            <form onSubmit={handleSubmit(submitHandler)}>
                {/* <!-- name --> */}
                <div class="mb-3">
                    <label for="name" class="form-label">
                        Name :
                    </label>
                    <input type="text" class="form-control" placeholder="Enter Name" {...register("name", validationSchema.name)} />
                    <span class="text-danger">{errors.name?.message}</span>
                </div>
                {/* <!-- email --> */}
                <div class="mb-3">
                    <label for="email" class="form-label">
                        Email :
                    </label>
                    <input type="text" class="form-control" placeholder="Enter Email" {...register("email", validationSchema.email)} />
                    <span class="text-danger">{errors.email?.message}</span>
                </div>
                {/* <!-- age --> */}
                <div class="mb-3">
                    <label for="age" class="form-label">
                        Age :
                    </label>
                    <input type="text" class="form-control" placeholder="Enter Age" {...register("age", validationSchema.age)} />
                    <span class="text-danger">{errors.age?.message}</span>
                </div>
                {/* <!-- isActive --> */}
                <div class="mb-3">
                    <label for="isActive" class="form-label">
                        isActive :
                    </label>
                    <input type="text" class="form-control" placeholder="Enter isActive" {...register("isActive", validationSchema.isActive)} />
                    <span class="text-danger">{errors.isActive?.message}</span>
                </div>
                {/* <!-- Submit --> */}
                <div>
                    <input type="submit" value="Submit" class="btn btn-primary w-100" />
                </div>
            </form>
        </div>
    );
};
