// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Donate from "./Pages/Donate";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="overall-wrapper">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/donate" element={<Donate />} />
          {/* Define more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
