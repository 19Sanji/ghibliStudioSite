import React, { useState, useEffect } from "react";
import Player from "../components/Player";
import playIcon from "../images/play.png";

export default function ModalPage({
  tabState,
  modalState,
  moviesRef,
  modalPageRef,
}) {
  const [videoId, setVideoId] = useState("HTlKoYCD96I");

  const API_KEY = "AIzaSyDG8aRWtO6fjGiXPYbzdQtmsZz1CwmXB1Y";
  // const API_KEY =  "AIzaSyD1RRnAFoKB_8QytVAsaAzEil52m7mj33c";
  // const API_KEY =  "AIzaSyDhn2-ckX4VT9h7AoXLiwcUzdzbPGr01bU";
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
    console.log(modalState);
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
        <div className="tabContent">
          <div className="modalPageText">
            <div className="moviesTitle">{modalState.title}</div>
            <div className="moviesTexts">
              <div className="moviesText colorWhite">
                {/* <span>Режиссер: </span> */}
                {modalState.director}
              </div>
              <div className="moviesText colorWhite">
                {/* <span>Жанр: </span> */}
                {modalState.genre}
              </div>
              <div className="moviesText colorWhite">
                {/* <span>Рейтинг: </span> */}
                {modalState.rating}
              </div>
              <div className="moviesText colorWhite">
                {modalState.runtimeMinutes} <span> мин</span>
              </div>
            </div>
            <div className="tabContentColumn_synopsis">
              {modalState.synopsis}
            </div>
            {/* <div className="trailerBtn">
              <img src={playIcon} /> ТРЕЙЛЕР
            </div> */}
          </div>
          <Player url={`https://www.youtube.com/embed/${videoId}`} />
        </div>
      ) : (
        <div className="tabContent">
          <div className="tabContentColumn tabContentColumn_first">
            <div className="tabContentColumn_Row_first">
              <div className="tabContentColumn_title colorWhite">
                {modalState.title}
              </div>
              <div className="tabContentColumn_synopsis">
                {modalState.synopsis}
              </div>
            </div>
            <div className="tabContentColumn_Row_second">
              <div className="tabContentColumn_director">
                <span className="colorWhite">Режиссер: </span>
                {modalState.director}
              </div>
              <div className="tabContentColumn_music">
                <span className="colorWhite">Музыкальный режиссер: </span>
                {modalState.music}
              </div>
              <div className="tabContentColumn_awards">
                {modalState.awards.length > 1 ? (
                  <span className="colorWhite">Награды: </span>
                ) : null}
                {modalState.awards.map((e) => (
                  <div className="tabContentColumn_row">{e}</div>
                ))}
              </div>
              <div className="tabContentColumn_hepburn">
                <span className="colorWhite">Оригинальное название: </span>
                {modalState.hepburn}
              </div>
            </div>
          </div>
          <div className="tabContentColumn tabContentColumn_second ">
            <div className="tabContentColumn_character">
              {modalState.character.length > 1 && (
                <table>
                  <tr>
                    <td>
                      <span className="colorWhite">Персонаж</span>
                    </td>
                    <td>
                      <span className="colorWhite">Актер дубляжа</span>
                    </td>
                  </tr>
                  {modalState.character.map((e) => (
                    <tr>
                      <td className="tabContentColumn_row">{e.name}</td>
                      <td className="tabContentColumn_row">{e.originalCast}</td>
                    </tr>
                  ))}
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
