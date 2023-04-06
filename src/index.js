import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import OneVsOne from "./components/OneVsOne";
import "./index.css";
import MainMenu from "./components/MainMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route
          path="/2player"
          element={
            <div className="bg-secondBlack h-screen">
              <OneVsOne />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);
