import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const PasswordValidationForm = () => {
    const {register, handleSubmit, formState: {errors}, watch} = useForm();
    const [formData, setFormData] = useState({});
    const [isSubmitted, setisSubmitted] = useState(false);
    const password = watch("password", "");

    console.log(errors);

    const submitHandler = (data) => {
        console.log(data);
        setFormData(data);
        setisSubmitted(true);
    }

    const validationSchema = {
        email: {
            required: "Email is required",
            pattern: {
                value: /^[a-z0-9]+@[a-z.]+\.[a-z]{2,4}$/,
                message: "Invalid email format"
            }
        }, 

        password: {
            required: "Password is required",
            validate: {
                uppercase: (fieldValue) => {
                    return /[A-Z]/.test(fieldValue) || "Password must contain at least one uppercase letter";
                },
                lowercase: (fieldValue) => {
                    return /[a-z]/.test(fieldValue) || "Password must contain at least one lowercase letter";
                },
                number: (fieldValue) => {
                    return /[0-9]/.test(fieldValue) || "Password must contain at least one number";
                },
                specialChar: (fieldValue) => {
                    return /[!@#$%^&*(),.?":{}|<>]/.test(fieldValue) || "Password must contain at least one special character";
                },
                length: (fieldValue) => {
                    return fieldValue.length >= 8 || "Password must be at least 8 characters";
                }
            }
        }
    }
    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">PasswordValidationForm</h1>

            <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="text" placeholder="Enter Email" {...register("email", validationSchema.email)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    {<span className="text-red-600 text-sm">{errors.email?.message}</span>}
                </div>
                
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                        <input id="password" type="password" placeholder="Enter Password" {...register("password", validationSchema.password)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" 
                            onClick={() => {
                                    const passwordInput = document.getElementById('password');
                                    if (passwordInput.type === 'password') {
                                        passwordInput.type = 'text';
                                    } else {
                                        passwordInput.type = 'password';
                                    }
                                }}>
                            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </span>
                    </div>
                    {<span className="text-red-600 text-sm">{errors.password?.message}</span>}
                </div>

                <div  className="space-y-1">
                    <p className={/[A-Z]/.test(password) ? "text-green-600" : "text-red-600"}>at least one uppercase letter</p>
                    <p className={/[a-z]/.test(password) ? "text-green-600" : "text-red-600"}>at least one lowercase letter</p>
                    <p className={/[0-9]/.test(password) ? "text-green-600" : "text-red-600"}>at least one number</p>
                    <p className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "text-green-600" : "text-red-600"}>at least one special character</p>
                    <p className={password.length >= 8 ? "text-green-600" : "text-red-600"}>at least 8 characters</p>
                </div>

                <input type="submit" value="Submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"/>
            </form>
            
            {
                isSubmitted && (
                    <div className="mt-4 p-4 border border-gray-300 rounded-md">
                        <h1 className="text-xl font-bold mb-2">OUTPUT</h1>
                        <p className="text-sm"><strong>Email:</strong> {formData.email}</p>
                        <p className="text-sm"><strong>Password:</strong> {formData.password}</p>
                    </div>
                )
            }

        </div>
    );
};
