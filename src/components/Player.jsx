import React from "react";
import "../index.css";

export default function Player({ url }) {
  return (
    <div className="player">
      <iframe
        width="560"
        height="315"
        src={ url }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
