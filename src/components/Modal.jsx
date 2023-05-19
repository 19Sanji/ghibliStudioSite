import React, { useState, useEffect, useRef } from "react";
import ModalPage from "./ModalPage";
import "../modal.css";
import closeIcon from "../images/close.png"

export default function Modal({ modalState, setIsModalOpen}) {
  const [tabState, setTabState] = useState("ABOUT");

  const aboutHandler = () => {
    setTabState("ABOUT");
  };

  const detailsHandler = () => {
    setTabState("DETAILS");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="modal">
      <div className="modalToolbar">
        <div className="tabs">
          <div className="tab" onClick={aboutHandler}>
            О фильме
          </div>
          <div className="tab" onClick={detailsHandler}>
            Детали
          </div>
        </div>
        <div className="close" onClick={closeModal}>
          <img src={closeIcon}/>
        </div>
      </div>

      <ModalPage tabState={tabState} modalState={modalState}/>
    </div>
  );
}
