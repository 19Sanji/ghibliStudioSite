import React from "react";

export default function ModalPage({ tabState, modalState }) {
  console.log(modalState);
  return (
    <div>
      {tabState === "ABOUT" ? (
        <div className="">{modalState.title}</div>
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
