import React from "react";
import { useForm } from "react-hook-form";

export const FormValidationDemo2 = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    console.log(errors);

    const submitHandler = (data) => {
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

        age: {
            required: "Age is required",
            min: {
                value: 18,
                message: "Age must be at least 18",
            },
            max: {
                value: 99,
                message: "Age must be less than 99",
            },
        },

        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
            }, 
            maxLength: {
                value: 20,
                message: "Password must be less than 20 characters",
            },
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">FormValidationDemo2</h1>

            <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
                {/* Username */}
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input type="text" placeholder="Enter Username" {...register("username", validationSchema.username)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    {<span className="mt-2 text-sm text-red-600">{errors.username?.message}</span>}
                    {/* {errors.username && <span className="mt-2 text-sm text-red-600">{errors.username.message}</span>} */}
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">Password</label>
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
                    {<span className="mt-2 text-sm text-red-600">{errors.password?.message}</span>}
                    {/* {errors.password && <span className="mt-2 text-sm text-red-600">{errors.password.message}</span>} */}
                </div>                               

                {/* Age */}
                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <input type="number" placeholder="Enter Age" {...register("age", validationSchema.age)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    {<span className="mt-2 text-sm text-red-600">{errors.age?.message}</span>}
                    {/* {errors.age && <span className="mt-2 text-sm text-red-600">{errors.age.message}</span>} */}
                </div>

                
                {/* Submit */}
                <input type="submit" value="Submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"/>
            </form>
        </div>
    );
};
