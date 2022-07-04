/** eslint-disable **/
import React from "react";
import Homepages from "./pages/Homepages";
import PostViewpages from "./pages/PostViewpages";
import { Routes, Route } from "react-router-dom";
import "./global.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/postviewpages/:id" element={<PostViewpages />} />
      </Routes>
    </>
  );
}

export default App;
