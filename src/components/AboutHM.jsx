import React, { useState, useEffect } from "react";
import "../aboutHM.css";
import HM from "../images/HM.jpg";

export default function AboutHM({ HMRef }) {
  const [thisComponentPosition, setThisComponentScrollPosition] = useState();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHiden, setIsHiden] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    HMRef && setThisComponentScrollPosition(HMRef.current.offsetTop);
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
    <div className="aboutHM" ref={HMRef}>
      <div className={`HM_text ${isHiden ? "animated" : ""}`}>
        <p>
          Хая́о Миядза́ки — японский режиссёр-аниматор, продюсер, сценарист,
          писатель и мангака. Он родился в семье владельца авиационной фабрики,
          с детства увлёкся рисованием манги и анимацией. В 1964 году он
          познакомился с Исао Такахатой, совместно с которым впоследствии
          основал анимационную студию Studio Ghibli. На протяжении длительного
          времени они вместе работали над множеством художественных
          произведений.
        </p>
        <p className={`${isHiden ? "animated" : ""}`}>
          Хаяо Миядзаки — обладатель внеконкурсного почётного «Оскара» 2014 года
          со следующей формулировкой заслуг — «за оказание глубокого влияния на
          мировую анимацию, вдохновляя целое поколение художников работать в
          этой области и освещая её безграничный потенциал».{" "}
        </p>
      </div>
      <div className="HM_img">
        <img src={HM} />
      </div>
    </div>
  );
}
