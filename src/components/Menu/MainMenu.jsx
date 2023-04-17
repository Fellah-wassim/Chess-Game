import React, { useState, useEffect } from "react";
import "../../index.css";
import logo from "../../assets/mainMenu/logo.jpg";
import instagramIcon from "../../assets/mainMenu/ig.svg";
import fbIcon from "../../assets/mainMenu/fb.svg";
import linkedinIcon from "../../assets/mainMenu/li.svg";
import githubIcon from "../../assets/mainMenu/gh.svg";
import principalMusic from "../../assets/mainMenu/principalSound.mp3";
import volumeOff from "../../assets/mainMenu/volume-off.svg";
import volumeOn from "../../assets/mainMenu/volume-on.svg";
import strategyPic from "../../assets/mainMenu/strategy.png";
import Menu from "./Menu.jsx";
import Play from "./Play.jsx";

const MainMenu = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [backgroundMusic] = useState(new Audio(principalMusic));
  const [backgroundMusicRunning, setBackgroundMusicRunning] = useState(false);
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

  useEffect(() => {
    const title = currentPage
      ? "Play Chess | Choose a Game Mode"
      : "Welcome | Online Chess with React";
    document.title = title;
  }, [currentPage]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeBackgroundImage();
    }, 8000);
    return () => clearInterval(intervalId);
  });

  const handleSetCurrentPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [currentBackgroundURL, setCurrentBackgroundURL] = useState(
    backgroundsURL[0]
  );

  const changeBackgroundImage = () => {
    const currentIndex = backgroundsURL.indexOf(currentBackgroundURL);
    const nextIndex = (currentIndex + 1) % backgroundsURL.length;
    const img = new Image();
    img.setAttribute("src", backgroundsURL[nextIndex]);
    img.onload = () => setCurrentBackgroundURL(backgroundsURL[nextIndex]);
  };

  const startBackgroundMusic = function () {
    backgroundMusic.play();
    setBackgroundMusicRunning(true);
  };

  const pauseBackgroundMusic = function () {
    backgroundMusic.pause();
    setBackgroundMusicRunning(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${currentBackgroundURL}})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: "background 3s",
      }}
      className="main-menu-container h-[100vh] flex justify-center items-center text-bold bg-secondBlack text-white  text-xl"
    >
      <div className="relative flex flex-col gap-6 justify-center items-center overflow-hidden w-[90%] md:w-[50%] min-h-[80%] bg-secondWhite border-2 border-black rounded-md p-6">
        {currentPage ? (
          <div
            className="self-start"
            onClick={() => {
              handleSetCurrentPage(0);
            }}
          >
            <button className="nav-btn flex items-center justify-center gap-2 bg-secondBlack p-2 px-4 rounded-md hover:bg-lightenBrown hover:text-secondBlack duration-300 border-2 border-secondBlack">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="back"
                className="w-[25px]"
              >
                <path d="M19,5H9.83a3,3,0,0,0-2.12.88L2.29,11.29a1,1,0,0,0,0,1.42l5.42,5.41A3,3,0,0,0,9.83,19H19a3,3,0,0,0,3-3V8A3,3,0,0,0,19,5Zm1,11a1,1,0,0,1-1,1H9.83a1.05,1.05,0,0,1-.71-.29L4.41,12,9.12,7.29A1.05,1.05,0,0,1,9.83,7H19a1,1,0,0,1,1,1ZM16.71,9.29a1,1,0,0,0-1.42,0L14,10.59l-1.29-1.3a1,1,0,0,0-1.42,1.42L12.59,12l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L14,13.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L15.41,12l1.3-1.29A1,1,0,0,0,16.71,9.29Z"></path>
              </svg>
              <p>Back</p>
            </button>
          </div>
        ) : (
          ""
        )}
        <div className="absolute top-8 right-8">
          {backgroundMusicRunning ? (
            <button onClick={pauseBackgroundMusic}>
              <img src={volumeOn} alt="volume on icon" className="w-[30px]" />
            </button>
          ) : (
            <button onClick={startBackgroundMusic}>
              <img src={volumeOff} alt="volume off icon" className="w-[30px]" />
            </button>
          )}
        </div>
        <div className="w-[100px] min-h-[100px] rounded-[50%] overflow-hidden border-2 border-secondBlack">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="text-4xl font-serif text-black text-bold">
          {currentPage ? "PLAY" : "WELCOME"}
        </h1>
        {currentPage ? (
          <Play />
        ) : (
          <Menu
            handleSetCurrentPage={() => {
              handleSetCurrentPage(1);
            }}
            pauseBackgroundMusic={() => {
              pauseBackgroundMusic();
            }}
          />
        )}

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
