import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const UserHobbiesForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [formData, setFormData] = useState({});
    const [isSubmitted, setisSubmitted] = useState(false);

    console.log(errors);

    const submitHandler = (data) => {
        console.log(data);
        setFormData(data);  
        setisSubmitted(true);
    }

    const validationSchema = {
        name: {
            required: "Name is required",
            pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Name can only contain letters"
            }
        },

        hobbies: {
            required: "Hobbies is required",
            validate: (fieldValue) => {
                return fieldValue.length >= 3 || "Select at least 3 hobbies";
            }
        }
    }

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4">User Hobbies Form</h1>
            <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
                {/* name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name: </label>
                    <input type="text" {...register("name", validationSchema.name)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    {<span className="mt-2 text-sm text-red-600">{errors.name?.message}</span>}
                </div>

                {/* hobbies */}
                <div>
                    <label htmlFor="hobbies" className="block text-sm font-medium text-gray-700">Hobbies</label>
                    <div className="mt-2 flex justify-between items-center"> 
                        <div className="flex items-center">
                            <input type="checkbox" value="Reading" {...register("hobbies", validationSchema.hobbies)} className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                            <label className="ml-2 block text-sm text-gray-900">Reading</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" value="Dancing" {...register("hobbies", validationSchema.hobbies)} className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                            <label className="ml-2 block text-sm text-gray-900">Dancing</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" value="Singing" {...register("hobbies", validationSchema.hobbies)} className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                            <label className="ml-2 block text-sm text-gray-900">Singing</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" value="Playing" {...register("hobbies", validationSchema.hobbies)} className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                            <label className="ml-2 block text-sm text-gray-900">Playing</label>
                        </div>
                    </div>
                    {<span className="mt-2 text-sm text-red-600">{errors.hobbies?.message}</span>}
                </div>

                {/* submit */}
                <input type="submit" value="Submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
            </form> 

            {/* Display FormData */}
            {
                isSubmitted && (
                    <div className="mt-4 p-4 border border-gray-300 rounded-md">
                        <h1 className="text-xl font-bold mb-2">OUTPUT</h1>
                        <p className="text-sm"><strong>Name:</strong> {formData.name}</p>
                        <p className="text-sm"><strong>Hobbies:</strong> {formData.hobbies.join(", ")}</p>
                    </div>
                )
            }
        </div>
    );
};
