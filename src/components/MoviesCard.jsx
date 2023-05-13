import React from "react";
import "../movies.css";

export default function MoviesCard({ movie }) {
  return (
    <div className="moviesCard">
      <img src={movie.poster} />
      <div className="movieInfo">
        <h2>{movie.title}</h2>
        <span>{movie.synopsis}</span>
      </div>
    </div>
  );
}
