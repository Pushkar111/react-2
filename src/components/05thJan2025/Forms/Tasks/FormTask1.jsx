import React from "react";
import { useForm } from "react-hook-form";
import "../../../../assets/css/05thJan2025/Tasks/FormTask1.css";
import { useNavigate } from "react-router-dom";

// 1. Create form for student Application: min 7 fields should include radio button and checkbox

export const FormTask1 = (props) => {
    const { studentData, setStudentData } = props;
    const { register, handleSubmit , reset} = useForm();
    const navigate = useNavigate();

    const submitHandler = (data) => {
        console.log(data);
        
        const updatedStudentData = [...studentData, data];
        setStudentData(updatedStudentData);

        navigate("/showData"); // Goes to PrintStudentTableTask1.jsx component

        reset();
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-title">Student Form</div>
                <input type="text" placeholder="Enter Student Name" {...register("name")} />
                <br />
                <input type="email" placeholder="Enter Student Email" {...register("email")} />
                <br />
                <input type="number" placeholder="Enter Student Age" {...register("age")} />
                <br />
                <input type="text" placeholder="Enter Student Address" {...register("address")} />
                <br />
                <label>
                    <div className="gender-container">
                        Gender:
                        <input type="radio" value="Male" {...register("gender")} /> Male
                        <input type="radio" value="Female" {...register("gender")} /> Female
                    </div>
                </label>
                <br />
                <label>
                    <div className="courses-container">
                        Courses:
                        <input type="checkbox" value="Physics" {...register("courses")} /> Physics
                        <input type="checkbox" value="Chemistry" {...register("courses")} /> Chemistry
                        <input type="checkbox" value="Maths" {...register("courses")} /> Maths
                    </div>
                </label>
                <br />
                <label>
                    Select Class:
                    <select {...register("class")}>
                        <option value="">Select...</option>
                        <option value="Class 1">Class 1</option>
                        <option value="Class 2">Class 2</option>
                        <option value="Class 3">Class 3</option>
                        <option value="Class 4">Class 4</option>
                        <option value="Class 5">Class 5</option>
                    </select>
                </label>
                <br />
                <label>
                    Additional Info:
                    <textarea placeholder="Enter Student additional information" {...register("additionalInfo")} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
