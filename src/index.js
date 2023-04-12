import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import OneVsOne from "./components/OneVsOne";
import "./index.css";
import MainMenu from "./components/MainMenu";
import HowToPlay from "./components/HowToPlay";
import OneVsOneTimer from "./components/OneVsOneTimer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/2player/withoutTime" element={<OneVsOne />} />
        <Route path="/2player/tenMinute" element={<OneVsOneTimer />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);
