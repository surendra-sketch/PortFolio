import React from "react";
import Fade from "react-reveal/Fade";
import Project from "./project/Project";
import About from "./About";
import Home from "./Home";

import "./Hero.css";
const Hero = () => {
  return (
    <>
      <article>
        <Fade left>
          <section className="home">
            <Home />
          </section>
        </Fade>
        <div className="hero">
          <Fade right>
            <section className="about">
              <About />
            </section>
          </Fade>

          <Fade left>
            <section className="projects">
              <Project />
            </section>
          </Fade>
        </div>
      </article>
    </>
  );
};

export default Hero;
