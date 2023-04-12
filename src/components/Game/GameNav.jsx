import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import undoIcon from "../../assets/nav/undo.svg";
import helpIcon from "../../assets/nav/help.svg";
import checkIcon from "../../assets/nav/check.svg";
import moveIcon from "../../assets/nav/move.svg";
import checkmateIcon from "../../assets/nav/checkmate.svg";
import drawIcon from "../../assets/nav/draw.svg";

function GameNav(props) {
  const restartClicked = () => {
    props.resetChessBoard();
    console.log("props.withTimer", props.withTimer);
    if (props.withTimer) props.resetTimes();
  };

  const StatusStyle = () => {
    if (props.game.current?.isGameOver()) return "bg-darkenRed text-white";
    if (props.gameOverByTimeout) return "bg-darkenRed text-white";
    if (props.check) return "bg-darkenRed text-white";
    return "bg-white text-secondBlack";
  };

  return (
    <div className="text-bold text-secondBlack text-xl">
      <div className="flex flex-col bg-secondWhite text-lg sm:text-xl text-white px-2 py-4 sm:px-12 sm:py-6">
        <div className="flex justify-between items-center">
          <Link to="/">
            <button className="nav-btn flex items-center justify-center gap-2 bg-secondBlack p-2 px-4 rounded-md hover:bg-lightenBrown hover:text-secondBlack duration-300 border-2 border-secondBlack">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="back"
                className="w-[25px]"
              >
                <path d="M19,5H9.83a3,3,0,0,0-2.12.88L2.29,11.29a1,1,0,0,0,0,1.42l5.42,5.41A3,3,0,0,0,9.83,19H19a3,3,0,0,0,3-3V8A3,3,0,0,0,19,5Zm1,11a1,1,0,0,1-1,1H9.83a1.05,1.05,0,0,1-.71-.29L4.41,12,9.12,7.29A1.05,1.05,0,0,1,9.83,7H19a1,1,0,0,1,1,1ZM16.71,9.29a1,1,0,0,0-1.42,0L14,10.59l-1.29-1.3a1,1,0,0,0-1.42,1.42L12.59,12l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L14,13.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L15.41,12l1.3-1.29A1,1,0,0,0,16.71,9.29Z"></path>
              </svg>
              <p>Main Menu</p>
            </button>
          </Link>

          <h1
            className={`${StatusStyle()} w-[60%] sm:w-[35%] flex justify-center items-center text-center gap-2 text-2xl p-1 px-3  rounded-md border-2 border-secondBlack left-1/2 translate-x-[-50%] absolute bottom-5 sm:static sm:translate-x-0 sm:p-2 sm:px-6`}
          >
            {props.game.current?.isGameOver() ? (
              props.game.current.isDraw() ? (
                <img src={drawIcon} alt="draw icon" className="w-[35px]" />
              ) : (
                <img
                  src={checkmateIcon}
                  alt="checkmate icon"
                  className="w-[35px]"
                />
              )
            ) : props.check ? (
              <img src={checkIcon} alt="check icon" className="w-[35px]" />
            ) : (
              <img src={moveIcon} alt="move icon" className="w-[35px]" />
            )}
            <p>{props.status.toUpperCase()}</p>
          </h1>

          <button
            onClick={restartClicked}
            className="nav-btn flex items-center justify-center gap-2 bg-secondBlack p-2 px-4 rounded-md hover:bg-lightenBrown hover:text-secondBlack duration-300 border-2 border-secondBlack"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="sync"
              className="w-[25px]"
            >
              <path d="M19.9 11c-.6 0-1 .4-1 1 0 3.9-3.1 7-7 7h-.7c-.2 0-.3 0-.5-.1-.2 0-.3-.1-.5-.1-.1 0-.2-.1-.3-.1-.7-.2-1.4-.6-2-1-.1-.1-.2-.1-.2-.2-.1-.1-.2-.2-.3-.2-.2-.1-.4-.3-.5-.4l-.2-.2 1.8-.3c.5-.1.9-.6.8-1.2-.1-.5-.6-.9-1.2-.8l-3.3.6-.8.2c-.3 0-.5.2-.6.4s-.2.5-.2.7l.8 4.2c.1.5.5.8 1 .8h.2c.5-.1.9-.6.8-1.2l-.3-1.7c.2.2.5.4.7.6h.1c.1.1.2.2.3.2.2.2.4.3.7.4.2.4.5.5.8.7h.1c.1.1.3.1.5.2.4.1.8.2 1.1.3.2 0 .4.1.6.1h1.2c5 0 9-4 9-9 .1-.5-.4-.9-.9-.9zM4 13c.6 0 1-.4 1-1 0-3.9 3.1-7 7-7h.7c.2 0 .3 0 .5.1.2 0 .3.1.5.1.1 0 .2.1.3.1.7.2 1.4.5 2 1 .1.1.2.1.3.2.1.1.2.1.3.2.1.1.2.3.4.4l.2.2-1.8.3c-.5.1-.9.6-.8 1.2.1.5.5.8 1 .8h.2l4.2-.8c.5-.1.9-.6.8-1.2L20 3.5c-.1-.5-.6-.9-1.2-.8-.5.1-.9.6-.8 1.2l.3 1.7c-.2-.2-.5-.5-.7-.6h-.1c-.1-.1-.2-.2-.3-.2-.2-.2-.4-.3-.7-.5-.3-.2-.6-.3-.9-.5h-.1c-.1-.1-.3-.1-.5-.2-.4-.1-.8-.2-1.1-.3-.2 0-.4-.1-.6-.1h-1.2c-5 0-9 4-9 9-.1.4.3.8.9.8z"></path>
            </svg>
            <p>Restart</p>
          </button>
        </div>
      </div>
      <div className="flex justify-between  px-4 py-6 sm:px-16 sm:py-4">
        <button className="flex items-center gap-2" onClick={props.undoMove}>
          <img src={undoIcon} alt="undo icon" className="w-[20px] " />
          <p className="text-white">Undo Move</p>
        </button>

        <Link to="/how-to-play">
          <img src={helpIcon} alt="help icon" className="w-[30px]" />
        </Link>
      </div>
    </div>
  );
}

export default GameNav;
