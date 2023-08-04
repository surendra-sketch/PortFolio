import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Hero,
  Footer,
  About,
  Contact,
  Project,
  Resume,
  AWS,
} from "./components";

import "./App.css";

function App() {
  return (
    <>
      <main>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Hero />} exact />
              <Route path="/about" element={<About />} exact />
              <Route path="/contact" element={<Contact />} exact />
              <Route path="/projects" element={<Project />} exact />
              <Route path="/resume" element={<Resume />} exact />
              <Route path="/certificates" element={<AWS />} exact />
            </Routes>
          </div>
          <Footer />
        </Router>
      </main>
    </>
  );
}

export default App;
