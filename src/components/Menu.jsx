import React, { useState, useEffect } from "react";
import "../index.css";
import homeIcon from '../images/home.png'
import mediaIcon from '../images/media.png'
import youtubeIcon from '../images/youtube.png'
import infoIcon from '../images/info.png'

export default function Menu() {
  return (
    <div className="menu">
      <div className="imgs">
        <img src={homeIcon} />
        <img src={mediaIcon} />
        <img src={youtubeIcon} />
        <img src={infoIcon} />
      </div>
      <div className="links">
        <a href="">IconHome</a>
        <a href="">IconYoutube</a>
        <a href="">IconPhone</a>
        <a href="">IconQuestion</a>
      </div>
    </div>
  );
}
