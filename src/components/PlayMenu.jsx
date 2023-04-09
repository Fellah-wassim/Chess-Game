import React from "react";
import { Link } from "react-router-dom";
import strategyPic from "../assets/mainMenu/strategy.png";
import logo from "../assets/mainMenu/logo.jpg";
import instagramIcon from "../assets/mainMenu/ig.svg";
import fbIcon from "../assets/mainMenu/fb.svg";
import linkedinIcon from "../assets/mainMenu/li.svg";
import githubIcon from "../assets/mainMenu/gh.svg";

function PlayMenu() {
  return (
    <div className="main-menu-container h-[100vh] flex justify-center items-center text-bold bg-secondBlack text-white  text-xl">
      <div className="relative flex flex-col gap-6 items-center overflow-hidden w-[90%] md:w-[50%] min-h-[80%] bg-secondWhite border-2 border-black rounded-md p-6">
        <div className="self-start">
          <Link
            to="/"
            className="nav-btn flex items-center justify-center gap-2 bg-secondBlack p-2 px-4 rounded-md hover:bg-lightenBrown hover:text-secondBlack duration-300 border-2 border-secondBlack"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="back"
              className="w-[15px] sm:w-[25px]"
            >
              <path d="M19,5H9.83a3,3,0,0,0-2.12.88L2.29,11.29a1,1,0,0,0,0,1.42l5.42,5.41A3,3,0,0,0,9.83,19H19a3,3,0,0,0,3-3V8A3,3,0,0,0,19,5Zm1,11a1,1,0,0,1-1,1H9.83a1.05,1.05,0,0,1-.71-.29L4.41,12,9.12,7.29A1.05,1.05,0,0,1,9.83,7H19a1,1,0,0,1,1,1ZM16.71,9.29a1,1,0,0,0-1.42,0L14,10.59l-1.29-1.3a1,1,0,0,0-1.42,1.42L12.59,12l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L14,13.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L15.41,12l1.3-1.29A1,1,0,0,0,16.71,9.29Z"></path>
            </svg>
            <p>Back</p>
          </Link>
        </div>
        <div className="w-[100px] min-h-[100px] rounded-[50%] overflow-hidden border-2 border-secondBlack">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="text-4xl font-serif text-black text-bold">PLAY CHESS</h1>
        <ul className="menu list-none text-2xl">
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
              <p>2 Player Add Time</p>
            </li>
          </Link>
        </ul>

        <div className="flex gap-2">
          <a href="https://github.com/Fellah-wassim" target="blank">
            <img
              src={githubIcon}
              alt="github icon"
              className="social-media-icons w-[30px]"
            />
          </a>
          <a href="https://www.linkedin.com/in/wassim-fellah-921a5921a/">
            <img
              src={instagramIcon}
              alt="instagram Icon"
              className="social-media-icons w-[30px]"
            />
          </a>
          <a href="https://www.facebook.com/wassimcraizy.box?mibextid=ZbWKwL">
            <img
              src={fbIcon}
              alt="facebook icon"
              className="social-media-icons w-[30px]"
            />
          </a>
          <a href="https://www.linkedin.com/in/wassim-fellah-921a5921a/">
            <img
              src={linkedinIcon}
              alt="linkedin icon"
              className="social-media-icons w-[30px]"
            />
          </a>
        </div>

        <img
          src={strategyPic}
          alt="strategy png"
          className="absolute right-6 bottom-6 w-[8%]"
        />
        <img
          src={strategyPic}
          alt="strategy png"
          className="absolute left-6 bottom-6 w-[8%] scale-x-[-1]"
        />
      </div>
    </div>
  );
}

export default PlayMenu;
