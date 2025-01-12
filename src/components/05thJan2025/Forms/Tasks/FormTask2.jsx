import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

/*
	2. create form MCQ paper handler : 

        enter question name : 
        enter Option correct answer:
        
        submit: display question
        

	    hint: take array as useState and push data.
*/

export const FormTask2 = (props) => {
    const { register, handleSubmit } = useForm();
    const { questions, setQuestions } = props;
    const navigate = useNavigate();
    const [options, setOptions] = useState([]);
    const [count, setCount] = useState(0);

    const submitHandler = (data) => {
        console.log(data);

        const queFullData = { 
          ...data, 
          options 
        };

        let newQuestions = [...questions, queFullData];
        setQuestions(newQuestions);

        navigate("/showQuestions");
    };

    const addOptionHandler = () => {
        setOptions([...options, ""]);
        setCount(count + 1);
    };

    const removeOptionHandler = (index) => {
      const newOptions = options.filter((option, i) => i !== index);
      setOptions(newOptions);
      setCount(count - 1);
    };

    const optionChangeHandler = (index, value) => {
        const newOptions = options.map((option, i) => (i === index ? { option: value } : option));
        setOptions(newOptions);
    };

    return (
        <div className="form-container">
            <h1>MCQ Paper Handler</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <input type="text" placeholder="Enter Question Name" {...register("questionName")} />
                <br />

                <div className="options-container">
                    {
                        options.map((opt, index) => (
                          <div key={index} className="option-item">
                              <input type="text" placeholder={`Option ${index + 1}`} value={opt.option} onChange={(e) => optionChangeHandler(index, e.target.value)} />
                              <button type="button" onClick={() => removeOptionHandler(index)}>Remove</button>
                          </div>
                        ))
                    }
                    {
                      count < 4 && <button type="button" onClick={()=>{addOptionHandler()}}>Add Option</button>
                    }

                </div>
                <br />
                
                <input type="text" placeholder="Enter Correct Answer" {...register("correctAnswer")} />
                <br />
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
