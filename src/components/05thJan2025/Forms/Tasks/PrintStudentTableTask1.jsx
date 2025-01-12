import React from "react";
import "../../../../assets/css/05thJan2025/Tasks/PrintStudentTableTask1.css";
import { useNavigate } from "react-router-dom";

export const PrintStudentTableTask1 = ({studentData}) => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 style={{ fontSize: "2rem" }}>Student Data Dashboard</h1>
            {
                studentData.length > 0 && (
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    {
                                        Object.keys(studentData[0]).map((key) => (
                                            <th key={key}>{key}</th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    studentData.map((student, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {
                                                Object.values(student).map((value, colIndex) => (
                                                    <td key={colIndex}>
                                                        {Array.isArray(value) ? value.join(", ") : value}
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="button-container">
                            <button type="submit" onClick={() => navigate("/formtask1")}>
                                Add More Students
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};
