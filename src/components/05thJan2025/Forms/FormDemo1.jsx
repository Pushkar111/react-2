import React, { useState } from "react";
import "../../../assets/css/05thJan2025/FormDemo1.css";
import { useForm } from "react-hook-form";

export const FormDemo1 = () => {
    const { register, handleSubmit } = useForm();
    const [userData, setuserData] = useState({});
    const [isSubmitDisplay, setisSubmitDisplay] = useState(false);

    const submitHandler = (data) => {
        /*
        print like object

        data : {
            key1: value1,
            key2: value2
        }
        */

        console.log(data);
        setuserData(data);
        setisSubmitDisplay(true);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(submitHandler)} className="form">
                <fieldset>
                    <legend>FORM DEMO 1</legend>
                    <div className="form-group">
                        <label htmlFor="name">NAME:</label>
                        <input type="text" name="name" placeholder="Enter the Name" {...register("name")} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">AGE:</label>
                        <input type="number" name="age" placeholder="Enter the Age" {...register("age")} />
                    </div>
                    <div className="form-group radio-group">
                        <label htmlFor="gender">GENDER:</label>
                        <div>
                            MALE: <input type="radio" name="gender" value="male" {...register("gender")} />
                            FEMALE: <input type="radio" name="gender" value="female" {...register("gender")} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">COUNTRY:</label>
                        <select name="country" {...register("country")}>
                            <option value="india">INDIA</option>
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="color">COLOR:</label>
                        <input type="color" name="color" {...register("color")} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="submit-button" />
                    </div>
                </fieldset>
            </form>

            {
                isSubmitDisplay && (
                    <div className="form-data" style={{ color: userData.color }}>
                        <h2>FORM DATA</h2>
                        <p>NAME: {userData.name}</p>
                        <p>AGE: {userData.age}</p>
                        <p>GENDER: {userData.gender}</p>
                        <p>COUNTRY: {userData.country}</p>
                        <p>COLOR: {userData.color}</p>
                    </div>
                )
            }
        </div>
    );
};
