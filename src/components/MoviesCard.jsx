import React from "react";
import "../movies.css";

export default function MoviesCard({ movie, setModalState, setIsModalOpen }) {
  const onDoubleClick = () => {
    setModalState(movie);
    setIsModalOpen(true);
  };
  return (
    <div className="moviesCard" onDoubleClick={onDoubleClick}>
      <div className="movieInfo">
        <img src={movie.poster} />
        <h2>{movie.title}</h2>
      </div>
    </div>
  );
}
