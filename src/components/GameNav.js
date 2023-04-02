import React from "react";

function GameNav({ undoMove, resetChessBoard }) {
  return (
    <div className="flex flex-col px-12 py-6">
      <div className="flex justify-between">
        <button>Main Menu</button>
        <button onClick={resetChessBoard}>Restart</button>
      </div>
      <div>
        <button onClick={undoMove}> &#10550; Undo</button>
      </div>
    </div>
  );
}

export default GameNav;
