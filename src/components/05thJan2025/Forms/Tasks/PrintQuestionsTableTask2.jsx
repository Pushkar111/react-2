import React from "react";
import { useNavigate } from "react-router-dom";

export const PrintQuestionsTableTask2 = ({questions}) => {
    const navigate = useNavigate();

    return (
        <div>
        <h1>MCQ Questions</h1>
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Options</th>
                        <th>Correct Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question, index) => (
                        <tr key={index}>
                            <td>{question.questionName}</td>
                            <td>
                                {question.options.map((option, idx) => (
                                    <div key={idx}>{option.option}</div>
                                ))}
                            </td>
                            <td>{question.correctAnswer}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="button-container">
                    <button type="submit" onClick={() => navigate("/formtask2")}>
                        Add More Questions
                    </button>
            </div>
        </div>
    </div>
    );
};
