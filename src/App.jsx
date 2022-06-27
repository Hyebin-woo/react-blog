import React from "react";
import Homepages from "./pages/Homepages";
import { Routes, Route } from "react-router-dom";
import "./global.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepages />} />
      </Routes>
    </>
  );
}

export default App;
