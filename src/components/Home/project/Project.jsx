import React from "react";
// import Roll from "react-reveal/Roll";
import "./project.css";
import ProjectData from "./ProjectData";

const Project = () => {
  const data = ProjectData;

  return (
    <section className="projcss">
      <div className="project-heading">
        <h1> Projects</h1>
      </div>
      <br />
      <section className="note">
        <b style={{ color: "red", margin: "20px auto" }}>
          Note : Some of these projects are still going on...
        </b>
      </section>
      <div className="projects sec">
        {data.map((project) => {
          const link = project.url;

          return (
            <section key={project.id} className="project four">
              {/* <Roll> */}
              {/* <Roll right> */}
              <div className="project-content">
                <h1 className="proname">{project.projectname}</h1>
                <br />
                <p>
                  <b>Description :</b> {project.description}
                  <br />
                  <br />
                </p>

                <a target="_/blank" href={link} className="projectlink">
                  Go To Project
                </a>
              </div>
              {/* </Roll> */}
              {/* </Roll> */}
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
