import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import backIcon from "../assets/nav/back.svg";
import undoIcon from "../assets/nav/undo.svg";
import restartIcon from "../assets/nav/restart.svg";
import helpIcon from "../assets/nav/help.svg";

function GameNav({ undoMove, resetChessBoard, status, check }) {
  return (
    <div className="text-bold text-white text-xl">
      <div className="flex flex-col bg-lightenBrown text-xl px-4 py-2 sm:px-12 sm:py-6">
        <div className="flex justify-between items-center">
          <Link to="/">
            <button className="flex items-center justify-center gap-2 bg-darkenBrown p-2 rounded-md hover:bg-secondBlack duration-150">
              <img src={backIcon} alt="back icon" className="w-[25px]" />
              <p>Main Menu</p>
            </button>
          </Link>

          <h1
            className={`${
              check ? "bg-darkenRed text-white" : "bg-white text-secondBlack "
            } text-3xl p-2 px-6 rounded-md`}
          >
            {status}
          </h1>
          <button
            onClick={resetChessBoard}
            className="flex items-center justify-center gap-2 bg-darkenBrown p-2 rounded-md hover:bg-secondBlack duration-150"
          >
            <img src={restartIcon} alt="restart icon" className="w-[25px]" />
            Restart
          </button>
        </div>
      </div>
      <div className="flex justify-between  px-4 py-2 sm:px-16 sm:py-6">
        <button className="flex items-center gap-2" onClick={undoMove}>
          <img src={undoIcon} alt="undo icon" className="w-[20px]" />
          <p>Undo Move</p>
        </button>

        <img src={helpIcon} alt="help icon" className="w-[30px]" />
      </div>
    </div>
  );
}

export default GameNav;
