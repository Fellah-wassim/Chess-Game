import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import logo from "../assets/mainMenu/logo.jpg";
import instagramIcon from "../assets/mainMenu/ig.svg";
import fbIcon from "../assets/mainMenu/fb.svg";
import linkedinIcon from "../assets/mainMenu/li.svg";
import githubIcon from "../assets/mainMenu/gh.svg";
import principalMusic from "../assets/mainMenu/principalSound.wav";
import volumeOff from "../assets/mainMenu/volume-off.svg";
import volumeOn from "../assets/mainMenu/volume-on.svg";

const MainMenu = () => {
  const [backgroundMusic, setBackgroundMusic] = useState(
    new Audio(principalMusic)
  );

  const startBackgroundMusic = function () {
    if (backgroundMusic.paused) backgroundMusic.play();
  };

  const pauseBackgroundMusic = function () {
    if (!backgroundMusic.paused) backgroundMusic.pause();
  };

  const [volume, setVolume] = useState(0);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    backgroundMusic.volume = newVolume;
    startBackgroundMusic();
  };
  return (
    <div className="main-menu-container h-[100%] flex justify-center items-center text-bold bg-secondBlack text-black  text-xl">
      <div className="flex flex-col gap-8 items-center w-[90%] md:w-[50%] h-[80%] bg-lightenBrown border-2 border-black rounded-md p-6">
        <div className="w-[100px] rounded-[50%] overflow-hidden border-2 border-black">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="text-3xl text-black font-serif">Welcome</h1>
        <ul className="menu list-none">
          <Link to="/2player">
            <li>
              <button className="">Play</button>
            </li>
          </Link>
          <Link to="/">
            <li onClick={startBackgroundMusic}>
              <button>Settings</button>
            </li>
          </Link>
          <Link to="/">
            <li onClick={pauseBackgroundMusic}>Help</li>
          </Link>
          <Link to="/">
            <li>Contact</li>
          </Link>
        </ul>
        <div className="flex">
          <img
            src={volume ? volumeOn : volumeOff}
            alt="volume icon"
            className="w-[30px]"
          />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>

        <div className="flex gap-2">
          <a href="https://github.com/Fellah-wassim" target="blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://www.linkedin.com/in/wassim-fellah-921a5921a/">
            <img src={instagramIcon} alt="instagram Icon" />
          </a>
          <a href="#">
            <img src={fbIcon} alt="facebook icon" />
          </a>
          <a href="https://www.linkedin.com/in/wassim-fellah-921a5921a/">
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
