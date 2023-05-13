import React from "react";
import "../aboutStudio.css";
import logo from "../images/studio-ghibli-logo.svg";

export default function AboutStudio() {
  return (
    <div className="aboutSudio">
      <div className="text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae et
        esse tenetur incidunt harum eaque veritatis facilis voluptatibus ipsa
        odio, blanditiis ut, magni id quam ipsam atque reprehenderit nesciunt
        qui!
      </div>
      <div className="logo">
        <img src={logo} />
      </div>
    </div>
  );
}