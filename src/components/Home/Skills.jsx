import React from "react";
// import Fade from "react-reveal/Fade";
import "./Skills.css";
import { MdPhotoCamera, MdHandyman, MdGrid3X3 } from "react-icons/md";
import { SiCss3, SiGithub, SiHtml5, SiReact } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="test-div-for-js-style">
          <h1 className="skill-header">SKILLS</h1>
        </div>
        <div className="skills-corner">
          <p className="skill-cor-icon">
            <span className="skills-icons">
              <SiHtml5 />
            </span>
            <span> Html</span>
          </p>
          {/* <Fade left> */}
          <div className="div-1" style={{ width: "98%" }}>
            <p>98%</p>
          </div>
          {/* </Fade> */}

          <p className="skill-cor-icon">
            <span className="skills-icons">
              <SiCss3 />
            </span>
            <span> CSS</span>
          </p>
          {/* <Fade right> */}
          <div className="div-1" style={{ width: "97%" }}>
            <p>97%</p>
          </div>
          {/* </Fade> */}
          <p className="skill-cor-icon">
            <span className="skills-icons">
              <MdGrid3X3 />
            </span>
            <span> C / C++</span>
          </p>
          {/* <Fade left> */}
          <div className="div-1" style={{ width: "90%" }}>
            <p>90%</p>
          </div>
          {/* </Fade> */}
          <p className="skill-cor-icon">
            <span className="skills-icons">
              <MdHandyman />
            </span>
            <span> JS</span>
          </p>
          {/* <Fade right> */}
          <div className="div-1" style={{ width: "77%" }}>
            <p>77%</p>
          </div>
          {/* </Fade> */}
          <p className="skill-cor-icon">
            <span className="skills-icons">
              <SiReact />
            </span>
            <span> React JS</span>
          </p>
          {/* <Fade left> */}
          <div className="div-1" style={{ width: "71%" }}>
            <p>71%</p>
          </div>
          {/* </Fade> */}

          <p className="skill-cor-icon">
            <span className="skills-icons">
              <SiGithub />
            </span>
            <span> Git & GitHub</span>
          </p>

          {/* <Fade right> */}
          <div className="div-1" style={{ width: "70%" }}>
            <p>70%</p>
          </div>
          {/* </Fade> */}
          <p className="skill-cor-icon">
            <span className="skills-icons">
              <MdPhotoCamera />
            </span>
            <span> PhotoShop</span>
          </p>
          {/* <Fade left> */}
          <div className="div-1" style={{ width: "60%" }}>
            <p>60%</p>
          </div>
          {/* </Fade> */}
        </div>
      </div>
    </>
  );
};

export default Skills;
