import React from "react";
import { useParams } from "react-router-dom";

export const PlayMovies = () => {
    // useParams() ==> get parameter by parent components
    // useParams() ==> Parts of react-router-dom

    const id = useParams().id;
    const name = useParams().name;

    return (
        <div>
            <p>PlayMovie : {id} → {name}</p>
        </div>
    );
};
