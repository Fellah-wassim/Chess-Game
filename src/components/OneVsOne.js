import React, { useState, useRef, useEffect } from "react";
import "../index.css";
import Chessboard from "chessboardjsx";
import { Chess } from "chess.js";
import GameNav from "./GameNav";

const OneVsOne = () => {
  const [fen, setFen] = useState("start");
  const [squareStyle, setSquareStyle] = useState({});
  const [status, setStatus] = React.useState("White Move");
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  const changeStatus = function () {
    if (game.current.isGameOver())
      setStatus(game.current.turn() === "b" ? "White Wins" : "Black Wins");
    else if (game.current.isDraw()) setStatus("Draw");
    else if (game.current.isCheck()) setStatus("Check");
    else setStatus(game.current.turn() === "b" ? "Black Move" : "White Move");
  };
  let game = useRef(null);

  useEffect(() => {
    game.current = new Chess();
  }, []);

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
    <div>
      <GameNav
        undoMove={undoMove}
        resetChessBoard={resetChessBoard}
        status={status}
      />
      <div className="flex flex-col justify-center items-center w-full">
        <Chessboard
          width={screenSize.width <= 580 ? screenSize.width - 20 : 550}
          position={fen}
          onDrop={onDrop}
          squareStyles={squareStyle}
          onSquareRightClick={onSquareRightClick}
          onSquareClick={() => setSquareStyle({})}
        />
      </div>
    </div>
  );
};

export default OneVsOne;
