import React, { useState, useEffect, useRef } from "react";

import HowlParallax from "./components/HowlParallax";
import Menu from "./components/Menu";
import AboutStudio from "./components/AboutStudio";
import AboutHM from "./components/AboutHM";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Player from "./components/Player";

function App() {
  const [isInMovies, setIsInMovies] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalState, setModalState] = useState();
  return (
    <div>
      <Menu isInMovies={isInMovies} />
      <HowlParallax />
      {"Тут должен быть переход.Например, под землю"}
      <AboutStudio />
      <AboutHM />
      {/* Добавить карусель фильмов, при наведении на фильм, его карточка увеличивается
      При нажатии появляется новое поле с информацией о фильме, трейлером */}
      <Movies
        setIsInMovies={setIsInMovies}
        setModalState={setModalState}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
      {isModalOpen && (
        <Modal modalState={modalState} setIsModalOpen={setIsModalOpen} />
      )}
      <Player url={"https://www.youtube.com/watch?v=jfKfPfyJRdk"} />
      <Footer />
    </div>
  );
}

export default App;
