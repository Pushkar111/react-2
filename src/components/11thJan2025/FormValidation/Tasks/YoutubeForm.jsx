import React from "react";
import { useForm } from "react-hook-form";


export const YoutubeForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.log(errors);

    const submitHandler = (data) => {
        alert("Form Submitted Successfully Check Console");
        console.log(data);
    };

    const validationSchema = {
        username: {
            required: "Username is required",
            minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
            },
            maxLength: {
                value: 20,
                message: "Username must be less than 20 characters",
            }, 
        },

        email : {
            required: "Email is required",
            pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^+`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid Email Format",
            },
            validate: {
                notAdmin: (fieldValue) => {
                    return fieldValue === "admin@gmail.com" ? "Enter a different email" : true;
                },
                notSupportedDomain: (fieldValue) => {
                    return !fieldValue.endsWith("gmail.com") ? "Only Gmail is supported" : true;
                }, 
            },
        }, 

        channel: {
            required: "Channel is required",
            minLength: {
                value: 2,
                message: "Channel must be at least 2 characters",
            },
            maxLength: {
                value: 50,
                message: "Channel must be less than 50 characters",
            },
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">YoutubeForm</h1>
                <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
                    <div>
                        <label htmlFor="Username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" placeholder="Enter Username" {...register("username", validationSchema.username)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                        {<p className="text-red-500 text-xs mt-1">{errors.username?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" placeholder="Enter Email" {...register("email", validationSchema.email)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                        {<p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="Channel" className="block text-sm font-medium text-gray-700">Channel</label>
                        <input type="text" placeholder="Enter Channel" {...register("channel", validationSchema.channel)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                        {<p className="text-red-500 text-xs mt-1">{errors.channel?.message}</p>}
                    </div>
                    <div className="flex justify-center">
                        <input type="submit" value="Submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" />
                    </div>
                </form>
            </div>
        </div>
    );
};
