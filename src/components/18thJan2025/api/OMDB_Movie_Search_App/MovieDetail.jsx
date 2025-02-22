import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const MovieDetail = () => {
    const { imdbID } = useParams(); // useParams() is used to get the dynamic parameter from the URL
    const [movieDetails, setMovieDetails] = useState({});
    const [error, setError] = useState(null);

    const fetchMovieDetails = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=1e994a5&i=${imdbID}`);
            if (response.data.Response === "True") {
                setMovieDetails(response.data);
            } else {
                setError("Movie not found");
            }
        } catch (err) {
            setError("Failed to fetch movie details");
        }
    };

    fetchMovieDetails();

    if (error) {
        return (
            <div className="min-h-screen bg-gray-900 text-white p-8 flex justify-center items-center">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-5xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <img className="w-full md:w-1/3 object-cover" src={movieDetails.Poster} alt={movieDetails.Title} />
                    <div className="p-6 md:w-2/3">
                        <h1 className="text-4xl font-bold mb-4">{movieDetails.Title}</h1>
                        <p className="text-gray-400 mb-4">
                            {movieDetails.Year} | {movieDetails.Genre}
                        </p>
                        <p className="mb-4">{movieDetails.Plot}</p>
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                <h2 className="text-xl font-semibold">Director</h2>
                                <p>{movieDetails.Director}</p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-xl font-semibold">Writer</h2>
                                <p>{movieDetails.Writer}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                <h2 className="text-xl font-semibold">Actors</h2>
                                <p>{movieDetails.Actors}</p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-xl font-semibold">Language</h2>
                                <p>{movieDetails.Language}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                <h2 className="text-xl font-semibold">Awards</h2>
                                <p>{movieDetails.Awards}</p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-xl font-semibold">Box Office</h2>
                                <p>{movieDetails.BoxOffice}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                <h2 className="text-xl font-semibold">IMDB Rating</h2>
                                <p>{movieDetails.imdbRating}</p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-xl font-semibold">IMDB Votes</h2>
                                <p>{movieDetails.imdbVotes}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <h2 className="text-xl font-semibold">IMDB ID</h2>
                                <p>{imdbID}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
