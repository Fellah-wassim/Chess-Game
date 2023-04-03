import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Chessboard from "chessboardjsx";
import { Chess } from "chess.js";
import Check from "./components/Check";
import GameNav from "./components/GameNav";
import "./index.css";

function App() {
  const [fen, setFen] = useState("start");

  let game = useRef(null);

  useEffect(() => {
    game.current = new Chess();
  }, []);

  const resetChessBoard = () => {
    game.current.reset();
    setFen(game.current.fen());
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    try {
      console.log(game);
      game.current.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });
      setFen(game.current.fen());
    } catch (e) {}
  };

  const undoMove = () => {
    game.current.undo();
    setFen(game.current.fen());
  };

  return (
    <div className="app">
      {console.log(game.current)}
      {game.current && game.current.inCheck() ? <Check /> : null}
      {game.current && game.current.isGameOver() ? <div>Game over</div> : null}
      {game.current && game.current.isDraw() ? <div>Draw</div> : null}
      <GameNav undoMove={undoMove} resetChessBoard={resetChessBoard} />
      <div className="flex flex-col justify-center items-center">
        <Chessboard position={fen} sparePieces={true} onDrop={onDrop} />
      </div>
    </div>
  );
}

export default App;
