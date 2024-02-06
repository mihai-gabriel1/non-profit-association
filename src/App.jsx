// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Donate from "./Pages/Donate";
import Project1 from "./Pages/Project1";
import Project2 from "./Pages/Project2";
import Project3 from "./Pages/Project3";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="overall-wrapper">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
