import React, { useState, useEffect } from "react";
import MoviesCard from "./MoviesCard";
import "../movies.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [moviesIsReady, setMoviesIsReady] = useState(false);

  const toArr = (obj) => {
    const arr = [];
    for (const m in obj) {
      arr.push(obj[m]);
    }
    return arr;
  };

  const getAllMovies = () => {
    fetch("https://studio-ghibli-films-api.herokuapp.com/api/")
      .then((res) => res.json())
      .then((res) => {
        setMovies(toArr(res));
      });
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    setMoviesIsReady(movies ? true : false);
    console.log(movies);
  }, [movies]);

  return (
    // добавить лоадер
    <div className="movies">
      {moviesIsReady && movies.map((m) => <MoviesCard movie={m} />)}
    </div>
  );
}
