import React from "react";
import { MovieCard } from "./MovieCard";
import { useLocation } from "react-router-dom";

export const MoviesHome = () => {
    const location = useLocation();
    const movies = location.state?.movies || [];

    return (
        <div className="flex justify-center items-center bg-gray-900 text-white p-4 shadow-lg min-h-screen">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
};
