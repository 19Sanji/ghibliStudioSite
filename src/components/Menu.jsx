import React, { useState, useEffect } from "react";
import "../index.css";
import homeIcon from "../images/home.png";
import mediaIcon from "../images/media.png";
import youtubeIcon from "../images/youtube.png";
import infoIcon from "../images/info.png";

export default function Menu({ isInMovies, moviesRef }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setHide(scrollPosition > window.innerHeight ? true : false);
  }, [scrollPosition]);

  const handleScroll = (e) => {
    setScrollPosition(window.scrollY);
  };

  return (
    <div className="menu">
      <div className={!hide && !isInMovies ? "imgs" : "imgs hide"}>
        <img src={homeIcon} />
        <img src={mediaIcon} />
        <img src={youtubeIcon} />
        <img src={infoIcon} />
      </div>
      <div className="links">
        <a
          onClick={() =>
            window.scrollTo({
              behavior: "smooth",
              top: moviesRef.current.offsetTop,
            })
          }
        >
          IconHome
        </a>
        <a href="">IconYoutube</a>
        <a href="">IconPhone</a>
        <a href="">IconQuestion</a>
      </div>
    </div>
  );
}
