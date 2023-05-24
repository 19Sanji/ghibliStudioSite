import React, { useState, useEffect } from "react";
import "../index.css";
// import homeIcon from "../images/home.png";
// import mediaIcon from "../images/media.png";
// import youtubeIcon from "../images/youtube.png";
// import infoIcon from "../images/info.png";
import infoIcon from "../images/info.png";
import moviesIcon from "../images/Movies.png";
import HMIcon from "../images/HM.png";
import JHIcon from "../images/JH.png";

export default function Menu({
  isInMovies,
  moviesRef,
  HMRef,
  JHRef,
  aboutStudioRef,
  setIsTrueModalOpen,
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setHide(scrollPosition > window.innerHeight - 550 ? true : false);
  }, [scrollPosition]);

  const handleScroll = (e) => {
    setScrollPosition(window.scrollY);
  };

  const scrollToComponent = (ref) => {
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop,
    });
  };

  return (
    <div className="menu">
      <div className={`imgs ${!hide && !isInMovies ? "" : "hide"}`}>
        <img
          className={`${!hide && !isInMovies ? "" : "hide"}`}
          onClick={() => scrollToComponent(aboutStudioRef)}
          src={infoIcon}
        />
        <img
          className={`${!hide && !isInMovies ? "" : "hide"}`}
          onClick={() => scrollToComponent(moviesRef)}
          src={moviesIcon}
        />
        <img
          className={`${!hide && !isInMovies ? "" : "hide"}`}
          onClick={() => scrollToComponent(HMRef)}
          src={HMIcon}
        />
        <img
          className={`${!hide && !isInMovies ? "" : "hide"}`}
          onClick={() => scrollToComponent(JHRef)}
          src={JHIcon}
        />
      </div>
      <div className="links">
        <a onClick={() => scrollToComponent(aboutStudioRef)}>About studio</a>
        <a onClick={() => scrollToComponent(moviesRef)}>Movies</a>
        <a onClick={() => scrollToComponent(HMRef)}>About HM</a>
        <a onClick={() => scrollToComponent(JHRef)}>About JH</a>
        <a onClick={() => setIsTrueModalOpen(true)}>Open True Modal</a>
      </div>
    </div>
  );
}
