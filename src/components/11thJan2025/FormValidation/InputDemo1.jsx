import React, { useState } from 'react';

export const InputDemo1 = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [isSubmitted, setisSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!name) newErrors.name = "Name is required";
        if (!age) newErrors.age = "Age is required";
        if (!country) newErrors.country = "Country is required";
        if (!city) newErrors.city = "City is required";
        return newErrors;
    };

    const submitHandler = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setisSubmitted(true);
        } else {
            setErrors(validationErrors);
        }
    };

    const countries = [
        {
            name: "India", 
            cities: ["Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore"]
        },
        {
            name: "USA",
            cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]
        },
        {
            name: "UK",
            cities: ["London", "Birmingham", "Glasgow", "Liverpool", "Bristol"]
        },
        {
            name: "Australia",
            cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"]
        }
    ];

    return (
        <div className="p-4">
            <div className="max-w-md mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">InputDemo1</h1>
                
                {/* name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-lg">Name</label>
                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" onChange={(e)=>{setName(e.target.value)}} />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                    <span className="text-sm text-gray-500">{name}</span>
                </div>           

                {/* age */}
                <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 text-lg">Age</label>
                    <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" onChange={(e)=>{setAge(e.target.value)}} />
                    {errors.age && <span className="text-red-500 text-sm">{errors.age}</span>}
                    <span className="text-sm text-gray-500">{age}</span>
                </div>

                {/* country */}
                <div className="mb-4">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 text-lg">Country</label>
                    <select value={country} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" onChange={(e) => {setCountry(e.target.value)}}>
                        <option value="">select country</option>
                        {
                            countries.map((country)=>{
                                return <option key={country.name} value={country.name}>{country.name}</option>
                            })
                        }
                    </select>
                    {errors.country && <span className="text-red-500 text-sm">{errors.country}</span>}
                </div>

                {/* city */}
                {
                    country && (
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 text-lg">City</label>
                            <select value={city} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" onChange={(e)=>{setCity(e.target.value)}}>
                                <option value="">select city</option>
                                {
                                    countries.filter((c)=>c.name === country).map((c)=>{
                                        return c.cities.map((city)=>{
                                            return <option key={city} value={city}>{city}</option>
                                        })
                                    })
                                }
                            </select>
                            {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
                        </div>
                    )
                }

                {/* submit */}
                <div className="mb-4">
                    <button type='submit' className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={()=>{submitHandler()}}>Submit</button>
                </div>

                {
                    isSubmitted && (
                        <div className="mt-4 p-4 border border-gray-300 rounded-md">
                            <h1 className="text-xl font-bold mb-2">OUTPUT</h1>
                            <p className="text-sm"><strong>Name:</strong> {name}</p>
                            <p className="text-sm"><strong>Age:</strong> {age}</p>
                            <p className="text-sm"><strong>Country:</strong> {country}</p>
                            <p className="text-sm"><strong>City:</strong> {city}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
