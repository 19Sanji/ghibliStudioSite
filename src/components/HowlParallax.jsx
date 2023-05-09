import React, { useState, useEffect } from "react";
import bg from "../images/parallax/Howl.jpg";
import castel from "../images/parallax/castel.png";
import ground from "../images/parallax/ground.png";
import pers from "../images/parallax/pers.png";
import "../parallax.css";

export default function HowlParallax() {
  const [mousePositionX, setMousePositionX] = useState();
  const [mousePositionY, setMousePositionY] = useState();

  const forPers = 2;
  const forGround = 3;
  const forCastel = 3;

  const parallaxHendler = (e) => {
    setMousePositionX((e.clientX - window.innerWidth / 2) / 100);
    setMousePositionY((e.clientY - window.innerHeight / 2) / 100);
  };

  const mouseLeaveHandler = () => {
    setMousePositionX(0);
    setMousePositionY(0);
  };

  return (
    <div
      className="parallax"
      onMouseMove={parallaxHendler}
      onMouseLeave={mouseLeaveHandler}
    >
      <img
        className="parallax_bg"
        src={bg}
        style={{
          transform: `translate(${-mousePositionX * 2}px,${
            -mousePositionY * 1.5
          }px)`,
        }}
      />

      <img
        className="parallax_ground"
        src={ground}
        style={{
          transform: `translate(${-mousePositionX * forGround}px,${
            -mousePositionY * forGround
          }px)`,
        }}
      />
      <img
        className="parallax_castel"
        src={castel}
        style={{
          transform: `translate(${-mousePositionX * forCastel}px,${
            -mousePositionY * forCastel
          }px)`,
        }}
      />
      <img
        className="parallax_pers"
        src={pers}
        style={{
          transform: `translate(${-mousePositionX * forPers}px,${
            -mousePositionY * forPers
          }px)`,
        }}
      />
      <div className="title">
        <h1>GHIBLI STUDIO</h1>
      </div>
    </div>
  );
}
