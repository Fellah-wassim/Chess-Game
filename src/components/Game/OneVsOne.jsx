import React, { useState, useRef, useEffect } from "react";
import "../../index.css";
import Chessboard from "chessboardjsx";
import { Chess } from "chess.js";
import GameNav from "./GameNav";
import moveAudio from "../../assets/audio/move.mp3";
import checkAudio from "../../assets/audio/check.mp3";
import checkmateAudio from "../../assets/audio/checkmate.mp3";
import stalemateAudio from "../../assets/audio/stalemate.mp3";
import captureAudio from "../../assets/audio/capture.mp3";
import castlingAudio from "../../assets/audio/castling.mp3";

const OneVsOne = () => {
  useEffect(() => {
    document.title = "One Vs One | Online Chess with React";
  }, []);
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
    if (game.current.isGameOver()) {
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
      playMoveAudio(move);
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

  const playMoveAudio = (move) => {
    let audio = new Audio(moveAudio);
    if (game.current?.isGameOver()) {
      if (game.current?.isDraw()) audio = new Audio(stalemateAudio);
      audio = new Audio(checkmateAudio);
    }
    if (game.current.isCheck()) audio = new Audio(checkAudio);
    if (move.san.includes("x")) audio = new Audio(captureAudio);
    if (move.san.includes("O-O")) audio = new Audio(castlingAudio);
    audio.play();
  };

  return (
    <div className="min-h-[100vh] bg-secondBlack">
      <GameNav
        undoMove={undoMove}
        resetChessBoard={resetChessBoard}
        status={status}
        check={game.current?.isCheck()}
        game={game}
      />
      <div className="chessboard-container flex items-center justify-center mt-[18px] sm:mt-0 sm:my-0 mx-auto w-fit">
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
