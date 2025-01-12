import React, { useState } from "react";
import "./App.css";

// import { NetflixNavbar } from "./components/21thDec2024/Netflix/NetflixNavbar";
// import { Route, Routes } from "react-router-dom";
// import { NetflixDashboard } from "./components/21thDec2024/Netflix/NetflixDashboard";
// import { NetflixHome } from "./components/21thDec2024/Netflix/NetflixHome";
// import { NetflixMovies } from "./components/21thDec2024/Netflix/NetflixMovies";
// import { Error404 } from "./components/21thDec2024/Netflix/Error404";
// import { NetflixAbout } from "./components/21thDec2024/Netflix/NetflixAbout";
// import { NetflixContact } from "./components/21thDec2024/Netflix/NetflixContact";
// import { PlayMovies } from "./components/21thDec2024/Netflix/PlayMovies";
// import { FormDemo1 } from "./components/05thJan2025/Forms/FormDemo1";

import { FormTask1 } from "./components/05thJan2025/Forms/Tasks/FormTask1";
import { FormTask2 } from "./components/05thJan2025/Forms/Tasks/FormTask2";
import { Route,  Routes } from "react-router-dom";
import { PrintStudentTableTask1 } from "./components/05thJan2025/Forms/Tasks/PrintStudentTableTask1";
import { PrintQuestionsTableTask2 } from "./components/05thJan2025/Forms/Tasks/PrintQuestionsTableTask2";
import { Tasks } from "./components/05thJan2025/Forms/Tasks/Tasks";
import { FormValidationDemo1 } from "./components/11thJan2025/FormValidation/FormValidationDemo1";
import { FormValidationDemo2 } from "./components/11thJan2025/FormValidation/FormValidationDemo2";
import { YoutubeForm } from "./components/11thJan2025/FormValidation/Tasks/YoutubeForm";
import { InputDemo1 } from "./components/11thJan2025/FormValidation/InputDemo1";

function App() {
    // return (
    //     <div className="App">
    //         {/* 21st December Netflix react-router-dom */}
    //         <NetflixNavbar></NetflixNavbar>
    //         <Routes>
    //             <Route path="/" element={<NetflixDashboard />}></Route>
    //             <Route path="/dashboard" element={<NetflixDashboard />}></Route>

    //             {/* 22nd December nested routing */}
    //             <Route path="/dashboard/about" element={<NetflixAbout />}></Route>
    //             <Route path="/dashboard/contact" element={<NetflixContact />}></Route>
    //             <Route path="/home" element={<NetflixHome />}></Route>
    //             <Route path="/movies" element={<NetflixMovies />}></Route>
    //             <Route path="/movies/play/:id/:name" element={<PlayMovies />}></Route>

    //             {/* indicate first Home page  */}
    //             {/* indicate error page */}
    //             <Route path="/*" element={<Error404 />}></Route>


    //             {/* 05th January 2025 Form Handling using react-hook-form */}
    //             <Route path="/formdemo1" element={<FormDemo1/>}></Route>
    //         </Routes>
    //     </div>
    // );



    // Form Tasks 05thJan2025
    const [studentData, setStudentData] = useState([]);
    const [questions, setQuestions] = useState([]);

    return(
        <div className="App">
            <Tasks></Tasks>
            <Routes>
                <Route path="/formtask1"  element={<FormTask1 studentData={studentData} setStudentData={setStudentData}/>}></Route>
                <Route path="/showData" element={<PrintStudentTableTask1 studentData={studentData}/>}></Route>
            
                <Route path="/formtask2"  element={<FormTask2 questions={questions} setQuestions={setQuestions} />}></Route>
                <Route path="/showQuestions" element={<PrintQuestionsTableTask2 questions={questions} />}></Route>

                {/* 11th January Form Validation  */}
                <Route path="/formvalidationdemo1" element={<FormValidationDemo1/>}></Route>
                <Route path="/formvalidationdemo2" element={<FormValidationDemo2/>}></Route>

                {/* 12th January Input Demo without using useForm [for 1 or 2 inputs] */}
                <Route path="/inputdemo1" element={<InputDemo1/>}></Route>
            </Routes>

            {/* <YoutubeForm></YoutubeForm> */}
        </div>
    );
}

export default App;
