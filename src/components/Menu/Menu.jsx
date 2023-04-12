import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <ul className="menu menu w-[100%] sm:w-[80%] list-none text-2xl">
      <li className="cursor-pointer" onClick={props.handleSetCurrentPage}>
        <button>
          <p>Play Chess</p>
        </button>
      </li>

      <Link to="/how-to-play">
        <li onClick={props.pauseBackgroundMusic}>
          <button>
            <p>How To Play</p>
          </button>
        </li>
      </Link>
      <Link to="/">
        <li onClick={props.pauseBackgroundMusic}>
          <p>More Games</p>
        </li>
      </Link>
      <Link to="/" onClick={props.pauseBackgroundMusic}>
        <li>
          <p>Contact Me</p>
        </li>
      </Link>
    </ul>
  );
}

export default Menu;
