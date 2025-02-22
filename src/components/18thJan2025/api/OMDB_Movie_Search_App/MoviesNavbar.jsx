import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const MoviesNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const toggleNavbarHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleMovies = async () => {
    const moviesResponse = await axios.get("https://www.omdbapi.com/?apikey=1e994a5&s=movie&type=movie");

    if (moviesResponse.data.Search && moviesResponse.data.Response === "True") {
      console.log("Movies Option: " , moviesResponse.data.Search); // Array(10)
      navigate("/", { state: { movies: moviesResponse.data.Search } });
    }
  };

  const handleWebSeries = async () => {
    const webSeriesResponse = await axios.get("https://www.omdbapi.com/?apikey=1e994a5&s=webseries&type=series");

    if (webSeriesResponse.data.Search && webSeriesResponse.data.Response === "True") {
      console.log("Web Series Option: " , webSeriesResponse.data.Search); // Array(10)
      navigate("/", { state: { movies: webSeriesResponse.data.Search } });
    }
  };

  const handleOptionChange = (e) => {
    const value = e.target.value;
    if (value === "movies") {
      handleMovies();
    } else if (value === "webseries") {
      handleWebSeries();
    } else {
      navigate("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get(`https://www.omdbapi.com/?apikey=1e994a5&s=${value}`);

    if (response.data.Search && response.data.Response === "True") {
      console.log(response.data.Search); // Array(10)
      navigate("/", { state: { movies: response.data.Search } });
    }
  };

  // Search Movies
  const searchMovies = async (searchValue) => {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=1e994a5&s=${searchValue}`);

    if (response.data.Search && response.data.Response === "True") {
      console.log("Search Movies: ", response.data.Search); // Array(10)
      navigate("/", { state: { movies: response.data.Search } });
    }
  };

  const handleInputChange = (e) => {
    const searchValue = e.target.value;
    setValue(searchValue);
    if (searchValue) {
      searchMovies(searchValue);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50 bg-opacity-90 backdrop-blur-lg border-b border-gray-800 border-opacity-50 transition-all duration-300 ease-in-out">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="flex items-center space-x-2">
            <img className="h-10" src="https://img.icons8.com/?size=100&id=57457&format=png&color=FFFFFF" alt="Logo" />
            <span className="text-xl font-semibold">Movie Finder</span>
          </Link>
          <button
            className="md:hidden text-gray-400 focus:outline-none"
            onClick={() => toggleNavbarHandler()}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className={`transition-all duration-300 ease-in-out flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 ${navbarOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} md:flex md:max-h-full md:opacity-100`}>
          <Link className="hover:text-gray-400 focus:text-gray-200 active:text-gray-500 flex justify-center items-center mb-4 md:mb-0" to="/">Home</Link>
          <Link className="hover:text-gray-400 focus:text-gray-200 active:text-gray-500" to="/favorites">Favorites</Link>
          <div className="relative">
            <select
              className="bg-gray-800 text-white rounded-md py-2 px-4 focus:outline-none"
              onChange={(e) => handleOptionChange(e)}
              defaultValue=""
            >
              <option value="">Pick a type of Movie</option>
              <option value="movies">Movies</option>
              <option value="webseries">Web Series</option>
            </select>
          </div>
        </div>

        {/* Search */}
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <div className="relative mt-4 md:mt-0">
            <input
              type="text"
              onChange={(e) => {handleInputChange(e)}}
              className="text-white border-none outline-none text-base bg-gray-800 px-4 py-2 rounded-lg pl-10 w-full md:w-64 placeholder-gray-500 focus:bg-gray-700 focus:placeholder-gray-400"
              placeholder="Search Your Movie..."
            />
            <svg className="absolute left-0 top-0 mt-3 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </form>
      </div>
    </div>
  );
};