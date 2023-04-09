import React, { useState, useRef, useEffect } from "react";
import "../index.css";
import Chessboard from "chessboardjsx";
import { Chess } from "chess.js";
import GameNavTimer from "./GameNavTimer";

const OneVsOneTimer = () => {
  const [fen, setFen] = useState("start");
  const [squareStyle, setSquareStyle] = useState({});
  const [status, setStatus] = React.useState("White Move");
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [gameOverByTimeout, setGameOverByTimeout] = useState(false);
  const [whitePlayerTime, setWhitePlayerTime] = useState(10 * 60);
  const [blackPlayerTime, setBlackPlayerTime] = useState(10 * 60);
  const [whiteTimeIsRunning, setWhiteTimeIsRunning] = useState(false);
  const [blackTimeIsRunning, setBlackTimeIsRunning] = useState(false);
  const [isWhiteTimeout, setIsWhiteTimeout] = useState(false);
  const [isBlackTimeout, setIsBlackTimeout] = useState(false);

  const Wminutes = Math.floor(whitePlayerTime / 60);
  const Wseconds = whitePlayerTime % 60;
  const Bminutes = Math.floor(blackPlayerTime / 60);
  const Bseconds = blackPlayerTime % 60;

  let game = useRef(null);

  useEffect(() => {
    game.current = new Chess();
  }, []);

  useEffect(() => {
    let intervalId;
    if (whiteTimeIsRunning) {
      if (whitePlayerTime === 0) setIsWhiteTimeout(true);
      if (isWhiteTimeout) {
        setGameOverByTimeout(true);
        setStatus("Black Wins By Timeout");
        setWhiteTimeIsRunning(false);
        setBlackTimeIsRunning(false);
        return;
      }
      intervalId = setInterval(() => {
        setWhitePlayerTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (blackTimeIsRunning) {
      if (blackPlayerTime === 0) setIsBlackTimeout(true);
      if (isBlackTimeout) {
        setGameOverByTimeout(true);
        setStatus("White Wins By Timeout");
        setWhiteTimeIsRunning(false);
        setBlackTimeIsRunning(false);
        return;
      }
      intervalId = setInterval(() => {
        setBlackPlayerTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [
    whiteTimeIsRunning,
    blackTimeIsRunning,
    isWhiteTimeout,
    isBlackTimeout,
    whitePlayerTime,
    blackPlayerTime,
  ]);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resetTimes = () => {
    setWhitePlayerTime(10 * 60);
    setBlackPlayerTime(10 * 60);
    setWhiteTimeIsRunning(false);
    setBlackTimeIsRunning(false);
    setIsWhiteTimeout(false);
    setIsBlackTimeout(false);
    setGameOverByTimeout(false);
  };
  const pauseWhiteTime = () => {
    setWhiteTimeIsRunning(false);
  };
  const playWhiteTime = () => {
    setWhiteTimeIsRunning(true);
  };
  const playBlackTime = () => {
    setBlackTimeIsRunning(true);
  };
  const pauseBlackTime = () => {
    setBlackTimeIsRunning(false);
  };

  const changeStatus = function () {
    if (game.current.isGameOver()) {
      setWhiteTimeIsRunning(false);
      setBlackTimeIsRunning(false);
      if (game.current.isDraw()) {
        if (game.current.isStalemate()) setStatus("Draw By Stalemate");
        if (game.current.isInsufficientMaterial())
          setStatus("Draw By Insufficient Material");
        if (game.current.isThreefoldRepetition())
          setStatus("Draw By Repetition");
        return;
      }
      const winnerAnnounce =
        game.current.turn() === "b" ? "White Wins" : "Black Wins";
      setStatus(winnerAnnounce + " By Checkmate");
    } else {
      game.current.isCheck()
        ? setStatus("Check")
        : setStatus(game.current.turn() === "b" ? "Black Move" : "White Move");
    }
  };

  const resetChessBoard = () => {
    game.current.reset();
    setFen(game.current.fen());
    setSquareStyle({});
    changeStatus();
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    try {
      let move = game.current.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });
      if (move === null) return;
      if (game.current.history.length === 1) setBlackTimeIsRunning(true);
      if (game.current.turn() === "b") {
        pauseWhiteTime();
        playBlackTime();
      } else {
        pauseBlackTime();
        playWhiteTime();
      }
      setFen(game.current.fen());
      setSquareStyle({
        [move.from]: { backgroundColor: "#FFFF8A" },
        [move.to]: { backgroundColor: "#FFFF5C" },
      });
      changeStatus();
    } catch (e) {}
  };

  const undoMove = () => {
    game.current.undo();
    setFen(game.current.fen());
    setSquareStyle({});
    changeStatus();
  };

  const onSquareRightClick = (square) => {
    setSquareStyle({ [square]: { backgroundColor: "red" } });
  };

  return (
    <div className="h-[100vh] bg-secondBlack relative">
      <GameNavTimer
        undoMove={undoMove}
        resetChessBoard={resetChessBoard}
        status={status}
        check={game.current?.isCheck()}
        game={game}
        resetTimes={resetTimes}
        gameOverByTimeout={gameOverByTimeout}
      />
      <div className=" chessboard-container flex items-center justify-center my-0 mx-auto w-fit">
        <div className="flex flex-col gap-1 font-bold text-xl">
          <div
            className={`${
              Bminutes < 1 ? "bg-darkenRed text-white" : "bg-white"
            }  p-2 py-1 w-[20%] self-start text-center border-2 rounded-lg`}
          >
            {`${Bminutes.toString().padStart(2, "0")} : 
            ${Bseconds.toString().padStart(2, "0")}`}
          </div>
          <Chessboard
            width={screenSize.width <= 580 ? screenSize.width - 20 : 500}
            position={fen}
            onDrop={onDrop}
            squareStyles={squareStyle}
            onSquareRightClick={onSquareRightClick}
            onSquareClick={() => setSquareStyle({})}
          />
          <div
            className={`${
              Wminutes < 1 ? "bg-darkenRed text-white" : "bg-white"
            }  p-2 py-1 w-[20%] self-end text-center border-2 rounded-lg`}
          >
            {`${Wminutes.toString().padStart(2, "0")} : 
            ${Wseconds.toString().padStart(2, "0")}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneVsOneTimer;
