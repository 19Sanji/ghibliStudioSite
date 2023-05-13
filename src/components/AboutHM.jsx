import React from "react";
import "../aboutStudio.css";
import HM from "../images/HM.jpg";

export default function AboutHM() {
  return (
    <div className="aboutSudio">
      <div className="logo">
        <img src={HM} />
      </div>
      <div className="text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae et
        esse tenetur incidunt harum eaque veritatis facilis voluptatibus ipsa
        odio, blanditiis ut, magni id quam ipsam atque reprehenderit nesciunt
        qui!
      </div>
    </div>
  );
}
