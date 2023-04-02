import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Chessboard from "chessboardjsx";
import { Chess } from "chess.js";
import Check from "./Check";

function App() {
  const [fen, setFen] = useState("start");

  let game = useRef(null);

  useEffect(() => {
    game.current = new Chess();
  }, []);

  const onDrop = ({ sourceSquare, targetSquare }) => {
    try {
      let move = game.current.move({
        from: sourceSquare,
        to: targetSquare,
      });
      //illegal move check
      if (move === null) return;
      //update the board
      setFen(game.current.fen());
    } catch (e) {}
  };

  const undoLastMove = () => {
    game.current.undo();
    setFen(game.current.fen());
  };

  return (
    <div className="app">
      {console.log(game.current)}
      {game.current && game.current.inCheck() ? <Check /> : null}
      {game.current && game.current.isGameOver() ? <div>Game over</div> : null}
      <button onClick={undoLastMove}>Undo</button>
      <Chessboard position={fen} onDrop={onDrop} />
    </div>
  );
}

export default App;
