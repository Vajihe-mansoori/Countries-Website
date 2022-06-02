import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountrieDetail from "./components/CountrieDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CountrieDetail/:name" element={<CountrieDetail />} />
      </Routes>
    </>
  );
}

export default App;
