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


// import { FormTask1 } from "./components/05thJan2025/Forms/Tasks/FormTask1";
// import { FormTask2 } from "./components/05thJan2025/Forms/Tasks/FormTask2";
// import { Route,  Routes } from "react-router-dom";
// import { PrintStudentTableTask1 } from "./components/05thJan2025/Forms/Tasks/PrintStudentTableTask1";
// import { PrintQuestionsTableTask2 } from "./components/05thJan2025/Forms/Tasks/PrintQuestionsTableTask2";
// import { Tasks } from "./components/05thJan2025/Forms/Tasks/Tasks";
// import { FormValidationDemo1 } from "./components/11thJan2025/FormValidation/FormValidationDemo1";
// import { FormValidationDemo2 } from "./components/11thJan2025/FormValidation/FormValidationDemo2";
// import { InputDemo1 } from "./components/11thJan2025/FormValidation/InputDemo1";
// import { UserHobbiesForm } from "./components/11thJan2025/FormValidation/Tasks/UserHobbiesForm";
// import { PasswordValidationForm } from "./components/11thJan2025/FormValidation/Tasks/PasswordValidationForm";



// import { MoviesNavbar } from "./components/18thJan2025/api/OMDB_Movie_Search_App/MoviesNavbar";
// import { MoviesHome } from "./components/18thJan2025/api/OMDB_Movie_Search_App/MoviesHome";
// import { MovieDetail } from "./components/18thJan2025/api/OMDB_Movie_Search_App/MovieDetail";


// import { Route, Routes } from "react-router-dom";
// import { ApiDemo1 } from "./components/18thJan2025/api/ApiDemo1";
// import { ApiDemo2 } from "./components/18thJan2025/api/ApiDemo2";
// import { ApiNavbar } from "./components/18thJan2025/api/ApiNavbar";
// import { EditUser } from "./components/18thJan2025/api/EditUser";
// import { FilteringLargeList } from "./components/1stFeb2025/useMemo/FilteringLargeList";
// import { UseMemoDemo1 } from "./components/1stFeb2025/useMemo/UseMemoDemo1";
// import { UseEffectDemo } from "./components/1stFeb2025/useEffect/UseEffectDemo";


// import { ProductNavbar } from "./components/08thFeb2025/context/ProductNavbar";
// import { Products } from "./components/08thFeb2025/context/Products";
// import { ListProducts } from "./components/08thFeb2025/context/ListProducts";


// import { FindBombGame } from "./components/15thFeb2025/FindBombGame";



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

    /* Form Tasks 05thJan2025 */
    // const [studentData, setStudentData] = useState([]);
    // const [questions, setQuestions] = useState([]);

    // return(
    //     <div className="App">
    //         <Tasks></Tasks>
    //         <Routes>
    //             <Route path="/formtask1"  element={<FormTask1 studentData={studentData} setStudentData={setStudentData}/>}></Route>
    //             <Route path="/showData" element={<PrintStudentTableTask1 studentData={studentData}/>}></Route>

    //             <Route path="/formtask2"  element={<FormTask2 questions={questions} setQuestions={setQuestions} />}></Route>
    //             <Route path="/showQuestions" element={<PrintQuestionsTableTask2 questions={questions} />}></Route>

    //             {/* 11th January Form Validation  */}
    //             <Route path="/formvalidationdemo1" element={<FormValidationDemo1/>}></Route>
    //             <Route path="/formvalidationdemo2" element={<FormValidationDemo2/>}></Route>

    //             {/* 12th January Input Demo without using useForm [for 1 or 2 inputs] and 12th January Tasks */}
    //             <Route path="/inputdemo1" element={<InputDemo1/>}></Route>
    //             <Route path="/userhobbiesform" element={<UserHobbiesForm/>}></Route>
    //             <Route path="/passwordvalidationform" element={<PasswordValidationForm/>}></Route>

    //         </Routes>

    //         {/* <YoutubeForm></YoutubeForm> */}
    //     </div>
    // );

    /* API 18th January 2025 */
    // return (
    //     <div className="App">
    //         {/* <MoviesNavbar/>
    //         <Routes>
    //             <Route path="/" element={<MoviesHome/>}></Route>
    //             <Route path="/moviedetail/:imdbID" element={<MovieDetail/>}></Route>
    //         </Routes> */}
    //     </div>
    // );


    // API 25th January 2025
    // return (
    //     <div className="App">
    //         <ApiNavbar/>
    //         <Routes>
    //             {/* API CRUD Operations */}
    //             <Route path="/allUsers" element={<ApiDemo1 />}></Route>
    //             <Route path="/addUsers" element={<ApiDemo2 />}></Route>
    //             <Route path="/allUsers/editUser/:id" element={<EditUser />}></Route>
            
    //             {/* 1st feb UseMemo and UseEffect Real Time Example */}
    //             <Route path="/useMemoDemo1" element={<UseMemoDemo1/>}></Route>
    //             <Route path="/useMemoFilterLargeList" element={<FilteringLargeList/>}></Route>
    //             <Route path="/useEffectDemo" element={<UseEffectDemo/>}></Route>
    //         </Routes>
    //     </div>
    // );


    // 8th February 2025 Context API
    // return (
    //     <div className="App">
    //         <ProductNavbar/>
    //         <Routes>
    //             <Route path="/" element={<Products/>}></Route>
    //             <Route path="/products" element={<Products/>}></Route>
    //             <Route path="/listProduct" element={<ListProducts/>}></Route>
    //         </Routes>
    //     </div>
    // );

    // 15th February 2025 [FindBombGame]
    // return (
    //     <div className="App">
    //         <FindBombGame/>
    //     </div>
    // );

    // 16th February 2025 [Memory Game] 
    return (
        <div className="App">
            {/* Samir sir/mern/react/projects/memory-game */}
        </div>
    );
}

export default App;
