/*
==> Form validation : 
-> What? ==> small library that helps to deal with form in react
-> Why?  ==> 
    • Manage data
    • submit data
    • form validation
    • provide visual feedback
-> React Hook Form makes form validation easy by aligning with the existing HTML standard for form validation.
-> React Hook Form is not rerendering the component on every input change.

-> List of validation rules supported:
    1) required
    2) min
    3) max
    4) minLength
    5) maxLength
    6) pattern
    7) validate
*/

import React from "react";
import { useForm } from "react-hook-form";

export const FormValidationDemo1 = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    console.log(errors);
    
    const submitHandler = (data) => {
        console.log(data);
    };
    
    const validationSchema = {
        email: {
            required: {
                value: true, 
                message: "Email is Required",
            },
            minLength: {
                value: 10,
                message: "Email should have at least 10 characters",
            },
        },
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white ">
            <h1 className="text-2xl font-bold mb-6 text-center">FormValidationDemo1</h1>
            <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
                {/* Name Validation Static Style */}
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Name:</label>
                    <input type="text" placeholder="Enter Name" {...register("name", { required: { value: true, message: "Name is Required" } })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    {<span className="text-red-500 text-sm">{errors.name?.message}</span>}
                    {/* {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>} */}
                </div>

                {/* Email Validation Dynamic Style */}
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" placeholder="Enter Email" {...register("email", validationSchema.email)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    {<span className="text-red-500 text-sm">{errors.email?.message}</span>}
                    {/* {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>} */}
                </div>

                {/* Submit */}
                <input type="submit" value="Submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
            </form>
        </div>
    );
};
