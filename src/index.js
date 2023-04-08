import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import OneVsOne from "./components/OneVsOne";
import "./index.css";
import MainMenu from "./components/MainMenu";
import HowToPlay from "./components/HowToPlay";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route
          path="/2player"
          element={
            <div className="bg-secondBlack h-fit">
              <OneVsOne />
            </div>
          }
        />
        <Route path="/how-to-play" element={<HowToPlay />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);
