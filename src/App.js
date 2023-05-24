import React, { useState, useEffect, useRef } from "react";

import HowlParallax from "./components/HowlParallax";
import Menu from "./components/Menu";
import AboutStudio from "./components/AboutStudio";
import AboutHM from "./components/AboutHM";
import AboutJH from "./components/AboutJH";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import TrueModal from "./components/TrueModal";

function App() {
  const [isInMovies, setIsInMovies] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTrueModalOpen, setIsTrueModalOpen] = useState(false);
  const [modalState, setModalState] = useState();

  const moviesRef = useRef(null);
  const HMRef = useRef(null);
  const JHRef = useRef(null);
  const aboutStudioRef = useRef(null);
  return (
    <div>
      <Menu
        isInMovies={isInMovies}
        moviesRef={moviesRef}
        aboutStudioRef={aboutStudioRef}
        HMRef={HMRef}
        JHRef={JHRef}
        setIsTrueModalOpen={setIsTrueModalOpen}
      />
      <HowlParallax />
      <AboutStudio aboutStudioRef={aboutStudioRef} />
      <Movies
        setIsInMovies={setIsInMovies}
        setModalState={setModalState}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        moviesRef={moviesRef}
      />
      {isModalOpen && (
        <Modal
          modalState={modalState}
          setIsModalOpen={setIsModalOpen}
          moviesRef={moviesRef}
        />
      )}
      <AboutHM HMRef={HMRef} />
      <AboutJH JHRef={JHRef} />
      {/* <Footer /> */}
      {isTrueModalOpen ? (
        <TrueModal setIsTrueModalOpen={setIsTrueModalOpen} />
      ) : null}
    </div>
  );
}

export default App;
