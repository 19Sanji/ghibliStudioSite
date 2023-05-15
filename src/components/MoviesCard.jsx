import React from "react";
import "../movies.css";

export default function MoviesCard({
  movie,
  setModalState,
  setIsModalOpen,
  isModalOpen,
}) {
  const onDoubleClick = () => {
    setModalState(movie);
    setIsModalOpen(true);
    //  setIsModalOpen(!isModalOpen);

    // console.log(movie);
    // alert(movie.title);
  };
  return (
    <div className="moviesCard" onDoubleClick={onDoubleClick}>
      {/* <img src={movie.poster} /> */}
      <div className="movieInfo">
        <img src={movie.poster} />
        <h2>{movie.title}</h2>
        {/* <span>{movie.synopsis}</span> */}
      </div>
    </div>
  );
}
