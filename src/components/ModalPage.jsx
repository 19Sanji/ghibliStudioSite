import React, { useState, useEffect } from "react";
import Player from "../components/Player";

export default function ModalPage({
  tabState,
  modalState,
  moviesRef,
  modalPageRef,
}) {
  const [videoId, setVideoId] = useState("HTlKoYCD96I");

  const API_KEY = "AIzaSyDG8aRWtO6fjGiXPYbzdQtmsZz1CwmXB1Y";
  const searchWord = `${modalState.title}-trailer`;
  const query = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchWord}&key=${API_KEY}`;
  let xhr = new XMLHttpRequest();

  useEffect(() => {
    xhr.open("GET", query);
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = function () {
      if (xhr.status !== 200) {
        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
      } else {
        setVideoId(xhr.response.items[0].id.videoId);
      }
    };

    xhr.onerror = function () {
      console.log("Запрос не удался");
    };
  }, [modalState]);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: modalPageRef.current.offsetTop,
    });
    return () => {
      window.scrollTo({
        behavior: "smooth",
        top: moviesRef.current.offsetTop,
      });
    };
  }, []);

  return (
    <div className="modalPageContent">
      {tabState === "ABOUT" ? (
        <>
          <Player url={`https://www.youtube.com/embed/${videoId}`} />
          <div className="modalPageText">{modalState.title}</div>
        </>
      ) : (
        <div className="">
          {modalState.awards.map((e) => (
            <div>{e}</div>
          ))}
        </div>
      )}
    </div>
  );
}
