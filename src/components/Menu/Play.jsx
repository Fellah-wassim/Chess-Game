import React from "react";
import { Link } from "react-router-dom";
import gameStartAudio from "../../assets/audio/game-start.mp3";

function Play() {
  const playStartGameAudio = function () {
    const audio = new Audio(gameStartAudio);
    audio.play();
  };

  return (
    <ul className="menu w-[100%] sm:w-[80%] list-none text-2xl">
      <Link to="/2player/withoutTime">
        <li>
          <button onClick={playStartGameAudio}>
            <p>2 Player No Time</p>
          </button>
        </li>
      </Link>
      <Link to="/2player/tenMinute">
        <li>
          <button onClick={playStartGameAudio}>
            <p>2 Player 10 min</p>
          </button>
        </li>
      </Link>
      <Link to="/">
        <li>
          <p>1P VS Bot (Not Yet)</p>
        </li>
      </Link>
    </ul>
  );
}

export default Play;
