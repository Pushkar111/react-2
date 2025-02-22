import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
    return (
        <Link to={`/moviedetail/${movie.imdbID}`} className="relative max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-900 text-white transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img className="w-full h-64 object-cover" src={movie.Poster} alt={movie.Title} />
            <div className="p-4 bg-gray-800 bg-opacity-75 h-32 flex flex-col justify-center items-center text-center">
                <h3 className="text-xl font-semibold mb-2">{movie.Title}</h3>
                <p className="text-gray-400">{movie.Year}</p>
            </div>
            <div className="absolute inset-0 bg-gray-800 bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-semibold mb-2">{movie.Title}</h3>
                <p className="text-gray-400 mb-4">{movie.Year}</p>
                <p className="text-gray-300">{movie.Plot}</p>
            </div>
        </Link>
    );
};
