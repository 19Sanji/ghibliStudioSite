import React from "react";
import "../index.css";
export default function TrueModal({ setIsTrueModalOpen }) {
  return (
    <div className="trueModal" onClick={() => setIsTrueModalOpen(false)}>
      <div className="trueModalConent">modal</div>
    </div>
  );
}
