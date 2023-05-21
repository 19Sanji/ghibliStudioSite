import React, { useState, useEffect } from "react";
import Player from "../components/Player";

export default function ModalPage({ tabState, modalState }) {
  const [videoId, setVideoId] = useState("");

  const API_KEY = "AIzaSyDG8aRWtO6fjGiXPYbzdQtmsZz1CwmXB1Y";
  const searchWord = `${modalState.title}-trailer`;
  const query = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchWord}&key=${API_KEY}`;
  let xhr = new XMLHttpRequest();

  useEffect(() => {
    xhr.open("GET", query);
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = function () {
      if (xhr.status != 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
      } else {
        setVideoId(xhr.response.items[0].id.videoId);
      }
    };

    // xhr.onprogress = function (event) {
    //   if (event.lengthComputable) {
    //     alert(`Получено ${event.loaded} из ${event.total} байт`);
    //   } else {
    //     alert(`Получено ${event.loaded} байт`);
    //   }
    // };

    xhr.onerror = function () {
      alert("Запрос не удался");
    };
  }, [modalState]);

  return (
    <div className="modalPageContent">
      {tabState === "ABOUT" ? (
        <>
          <div className="">{modalState.title}</div>
          <Player url={`https://www.youtube.com/embed/${videoId}`} />
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
