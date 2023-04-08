import React, { useState, useEffect } from "react";
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
import strategyPic from "../assets/mainMenu/strategy.png";

const MainMenu = () => {
  const [backgroundMusic] = useState(new Audio(principalMusic));

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
  const backgroundsURL = [
    "https://images.pexels.com/photos/163427/chess-figure-game-play-163427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6114987/pexels-photo-6114987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10626015/pexels-photo-10626015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/277092/pexels-photo-277092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1576849/pexels-photo-1576849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/129742/pexels-photo-129742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
    "https://images.pexels.com/photos/6114992/pexels-photo-6114992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6792174/pexels-photo-6792174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [currentBackgroundURL, setCurrentBackgroundURL] = useState(
    backgroundsURL[0]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeBackgroundImage();
    }, 5000);
    return () => clearInterval(intervalId);
  });

  const changeBackgroundImage = () => {
    const currentIndex = backgroundsURL.indexOf(currentBackgroundURL);
    const nextIndex = (currentIndex + 1) % backgroundsURL.length;
    const img = new Image();
    img.setAttribute("src", backgroundsURL[nextIndex]);
    img.onload = () => setCurrentBackgroundURL(backgroundsURL[nextIndex]);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${currentBackgroundURL}})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: "background 2s",
      }}
      className="main-menu-container h-[100vh] flex justify-center items-center text-bold bg-secondBlack text-white  text-xl"
    >
      <div className="absolute left-0 top-0"></div>
      <div className="relative flex flex-col gap-6 items-center overflow-hidden w-[90%] md:w-[50%] min-h-[80%] bg-secondWhite border-2 border-black rounded-md p-6">
        <div className="w-[100px] min-h-[100px] rounded-[50%] overflow-hidden border-2 border-secondBlack">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="text-4xl font-serif text-black text-bold">WELCOME</h1>
        <ul className="menu list-none text-2xl">
          <Link to="/2player">
            <li>
              <button className="">
                <p>Play Chess</p>
              </button>
            </li>
          </Link>
          <Link to="/how-to-play">
            <li>
              <button>
                <p>Learn To Play</p>
              </button>
            </li>
          </Link>
          <Link to="/">
            <li onClick={pauseBackgroundMusic}>
              <p>More Games</p>
            </li>
          </Link>
          <Link to="/">
            <li>
              <p>Contact Me</p>
            </li>
          </Link>
        </ul>
        <div className="flex gap-2">
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
};

export default MainMenu;
