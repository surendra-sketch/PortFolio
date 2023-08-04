import React from "react";
import { Link } from "react-router-dom";
// import Typical from "react-typical";
// import Typical from "typical";
import "./Home.css";
import Skills from "./Skills";
import { MdMarkEmailRead, MdSaveAlt } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="home">
        {/* <marquee behavior="fast" direction="left">
          hello there
        </marquee> */}
        <div className="home-contact">
          <div className="profile-pic">
            <img src="/images/profile.jpg" alt="" />
          </div>
          <div className="profile-text">
            {/* <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Hello There ! 😀",
                  3000,
                  "I'm Surendra Singh 😎",
                  3000,
                  "A job Seeker  😉",
                  3000,
                  "Web Developer Developer 🤩",
                  3000,
                ]}
                wrapper="p"
              />
            </h1> */}
            <div>
              {/* <marquee behavior="default" direction="left">
                hello baby how are you
              </marquee> */}
              <h4>Hello There ! </h4>
              <p>my name is </p>
            </div>
            <h1 className="name">Surendra Singh</h1>
            <div>
              <p>
                I am a fullstack web developer having the knowledge with modern
                technologies and Looking for the below posts
              </p>
              <br />

              <span>Software Developer / </span>
              <span>Web Developer</span>
            </div>
          </div>
          <br />
          <div className="resumee">
            <button type="button">
              <span>
                <MdMarkEmailRead />
              </span>
              <Link to="/contact"> Contact Me</Link>
            </button>
            <button type="button">
              <span>
                <MdSaveAlt />
              </span>
              <a
                href="/images/SurendraResume.pdf"
                download="/images/SurendraResume.pdf"
              >
                Get Resume
              </a>
            </button>
          </div>
        </div>
        <div className="home-content">
          <br />
          <hr />
          <Skills />
          <br />
        </div>
      </div>
    </>
  );
};

export default Home;
