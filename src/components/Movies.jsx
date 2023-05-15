import React, { useState, useEffect, useRef } from "react";
import MoviesCard from "./MoviesCard";
import "../movies.css";

export default function Movies({
  setIsInMovies,
  setModalState,
  setIsModalOpen,
  isModalOpen
}) {
  const [movies, setMovies] = useState([]);
  const [moviesIsReady, setMoviesIsReady] = useState(false);
  const [isGrabed, setIsGrabed] = useState(false);
  const [prevPageXPosition, setPrevPageXPosition] = useState(0);
  const [prefScrollLeft, setPrefScrollLeft] = useState(0);

  const sliderRef = useRef();

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

  const mouseMoveHandler = (e) => {
    e.preventDefault();
    if (isGrabed) {
      let positionDiff = e.pageX - prevPageXPosition;

      sliderRef.current.scrollLeft = prefScrollLeft - positionDiff;
      console.log(sliderRef.current.scrollLeft);
    }
  };

  const mouseDownHandler = (e) => {
    setIsGrabed(true);
    setPrevPageXPosition(e.pageX);
    setPrefScrollLeft(sliderRef.current.scrollLeft);
  };

  const mouseUpHandler = (e) => {
    setIsGrabed(false);
  };

  return (
    // добавить лоадер
    <div
      className="movies"
      ref={sliderRef}
      onMouseEnter={() => {
        setIsInMovies(true);
      }}
      onMouseMove={mouseMoveHandler}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onMouseLeave={() => {
        setIsGrabed(false);
        setIsInMovies(false);
      }}
    >
      {moviesIsReady &&
        movies.map((m) => (
          <MoviesCard
            movie={m}
            setModalState={setModalState}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
        ))}
    </div>
  );
}
