// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Donate from "./Pages/Donate";
import Project1 from "./Pages/Project1";
import Project2 from "./Pages/Project2";
import Project3 from "./Pages/Project3";
import "./App.css";
import ScrollToTop from "./Pages/ScrollToTop";
import Projects from "./Pages/Projects";
import AboutusLayout from "./Pages/AboutusLayout";
import JoinusLayout from "./Pages/JoinusLayout";
import TransferBancar from "./Pages/TransferBancar";
import PersoanaFizica from "./Pages/PersoanaFizica";
import PersoanaJuridica from "./Pages/PersoanaJuridica";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="overall-wrapper">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutus" element={<AboutusLayout />} />
          <Route path="/joinus" element={<JoinusLayout />} />
          <Route path="/contact" element={<AboutusLayout />} />
          <Route path="/activitati" element={<Projects />} />
          <Route path="/transfer-bancar" element={<TransferBancar />} />
          <Route path="/persoana-fizica" element={<PersoanaFizica />} />
          <Route path="/persoana-juridica" element={<PersoanaJuridica />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
