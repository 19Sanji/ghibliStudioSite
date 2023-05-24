import React, { useState, useEffect } from "react";
import "../aboutJH.css";
import JH from "../images/JH.jpg";

export default function AboutJH({ JHRef }) {
  const [thisComponentPosition, setThisComponentScrollPosition] = useState();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHiden, setIsHiden] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    JHRef && setThisComponentScrollPosition(JHRef.current.offsetTop);
    return () => {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > thisComponentPosition - 10) setIsHiden(false);
  }, [scrollPosition, thisComponentPosition]);

  const handleScroll = (e) => {
    setScrollPosition(window.scrollY);
  };
  return (
    <div className="aboutJH" ref={JHRef}>
      <div className="JH_img">
        <img src={JH} />
      </div>
      <div className={`JH_text ${isHiden ? "animated" : ""}`}>
        <p>
          Дзё Хисаиси – ветеран японского минимализма, один из самых
          продуктивных и влиятельных композиторов Японии. Как и многим его
          соотечественникам, маэстро близок взгляд на музыку как форму
          прикладного искусства. На протяжении своей долгой карьеры он много
          работал над саундтреками для кино, аниме, компьютерных игр,
          телевидения и рекламы. Самые известные работы – к культовым фильмам
          Такеши Китано и мультфильмам Хаяо Миядзаки. Хисаиси-композитор всегда
          был сторонником минимализма, лишь изредка позволяя себе заходить на
          территорию нью-эйджа и мелодичной неоклассики.
        </p>
        <p className={`${isHiden ? "animated" : ""}`}></p>
      </div>
    </div>
  );
}
