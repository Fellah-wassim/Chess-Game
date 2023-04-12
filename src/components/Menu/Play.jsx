import React from "react";
import { Link } from "react-router-dom";

function Play() {
  return (
    <ul className="menu w-[100%] sm:w-[80%] list-none text-2xl">
      <Link to="/2player/withoutTime">
        <li>
          <button className="">
            <p>2 Player No Time</p>
          </button>
        </li>
      </Link>
      <Link to="/2player/tenMinute">
        <li>
          <button>
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
