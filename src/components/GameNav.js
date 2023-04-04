import React from "react";
import "../index.css";

function GameNav({ undoMove, resetChessBoard, status }) {
  return (
    <div className="flex flex-col px-6 py-3 sm:px-12 sm:py-6">
      <div className="flex justify-between">
        <button>Main Menu</button>
        <h1>{status}</h1>
        <h2>Info</h2>
      </div>
      <div className="flex justify-between">
        <button onClick={undoMove}> &#10550; Undo</button>
        <button onClick={resetChessBoard}>Restart</button>
      </div>
    </div>
  );
}

export default GameNav;
