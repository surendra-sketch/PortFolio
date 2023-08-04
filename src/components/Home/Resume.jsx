import React from "react";

import "./Resume.css";

const Resume = () => {
  return (
    <>
      <div className="resume">
        <h1>Resume</h1>
        <br />
        <div className="resume-content">
          <header className="resume-header">
            <div className="pic">
              <img src="/images/pro.jpg" alt="" />
            </div>
            <div className="contect-address">
              <h2>Surendra Singh</h2>
              <br />
              <h3>Mobile Number : 8953107593</h3>
              <h3>Email : surendraji252525@gmail.com</h3>
              <br />
              <p>
                Village: Mahamdipur ,
                <br /> Post Ahmadganj,Kaimganj,FBD, <br /> Uttar Pradesh
                (209502)
              </p>
            </div>
          </header>
          <hr />
          <section className="resume-main-cont">
            <div className="objective">
              <h2 className="heading">Career Objective</h2>
              <p>
                To make a good position in a reputed company and work
                enthusiastically in a team which provides steady career growth
                along with job satisfaction, challenges and give value
                contribution in the success and build a challenging career with
                honesty and loyalty by translating my experience knowledge,
                skills and abilities into value for an organization.
              </p>
            </div>
            <hr />
            <div className="objective">
              <h2 className="heading">Personal Statment</h2>
              <p>
                I am highly motivated, professional, conscientious and committed
                team worker who understands the importance of carrying out my
                duties to a very high standard. I will be loyal and honest
                member of your company, and I will always support my work
                colleagues when needed. Being an excellent team worker, I am
                able to use an innovative approach to solving problems when
                required, and will always take great pride in fulfilling my
                responsibilities to a very high standard.
              </p>
            </div>
            <hr />
            <div className="out-edu">
              <h2 className="heading"> Education Details</h2>
              <div className="objective education">
                <div className="education-details">
                  <h3> B. Tech. </h3>
                  <hr />
                  <b>College / University :</b>{" "}
                  <p>M J P Rohilkhand University Bareilly UP</p>
                  <br />
                  <b>Branch : Electronics & Communicaton</b>
                  <p>
                    Passing Year : <b> 2021</b>
                  </p>
                  <p>
                    Percentage : <b>70.50</b>
                  </p>
                </div>
                <div className="education-details">
                  <h3> B.Sc. </h3>
                  <hr />
                  <b>College / University :</b>
                  <p>C S M University Kanpur UP</p>
                  <br />

                  <b>Stream : Science (PCM)</b>

                  <p>
                    Passing Year : <b> 2016</b>
                  </p>
                  <p>
                    Percentage : <b>50.11</b>
                  </p>
                </div>
                <div className="education-details">
                  <h3> Intermediate </h3>
                  <hr />
                  <b>College / University :</b>
                  <p>M B R I C PILKHANA FARRUKHABAD (UP Board)</p>
                  <br />

                  <b>Stream : Science</b>

                  <p>
                    Passing Year : <b> 2013</b>
                  </p>
                  <p>
                    Percentage : <b>72.80</b>
                  </p>
                </div>
                <div className="education-details">
                  <h3> High School </h3>
                  <hr />
                  <b>College / University :</b>
                  <p> CH L S INT COLL NAGLA SAMAL ETAH (UP Board )</p>
                  <br />

                  <b>Stream : Science</b>

                  <p>
                    Passing Year : <b> 2011</b>
                  </p>
                  <p>
                    Percentage : <b>61.17</b>
                  </p>
                </div>
              </div>
              <hr />
            </div>
            <div className="objective">
              <h2 className="heading">Skills</h2>
              <ul>
                <b>
                  <li>C</li>
                  <li>C++</li>
                  <li>Data Structure</li>
                  <li>React JS</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>Window 10</li>
                  <li>Photoshop 0.7</li>
                </b>
              </ul>
            </div>
            <hr />
            <div className="objective">
              <h2 className="heading">Pojects</h2>
              <ul>
                <li>
                  <div>
                    <h4> (1) Microstrip Patch antenna</h4>
                  </div>
                </li>
                <li>
                  <div className="pro">
                    <h4>(2) Console base ATM (Using C++)</h4>
                    <a
                      className="certificatelink cert"
                      href="https://github.com/surendra-sketch/atm1/blob/main/ATMwithReg.cpp"
                    >
                      Vist ATM
                    </a>
                  </div>
                </li>
                <li>
                  <div className="pro">
                    <h4> (3) Portfolio Website</h4>
                    <a
                      className="certificatelink cert"
                      href="https://surendrajiportfolioforgethired.netlify.app/"
                    >
                      Vist Website
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <hr />
            <div className="objective">
              <h2 className="heading">Certificates</h2>
              <ul className="cert">
                <li>
                  <div className="prop">
                    <h4>(1) React JS</h4>
                    <a
                      target="_/blank"
                      className="certificatelink"
                      href="https://www.udemy.com/certificate/UC-1323bf5d-0d4a-4a81-a6af-653e44f0ac4f/"
                    >
                      View Certificate
                    </a>
                  </div>
                </li>
                <li>
                  <div className="prop">
                    <h4>(2) Web Development</h4>
                    <a
                      target="_/blank"
                      className="certificatelink"
                      href="https://www.udemy.com/certificate/UC-8dfb5ac0-e271-4129-b6b2-4fc07020fd32/"
                    >
                      View Certificate
                    </a>
                  </div>
                </li>
                <li>
                  <div className="prop">
                    <h4>(3) Soft skills</h4>
                    <a
                      target="_/blank"
                      className="certificatelink"
                      href="https://www.udemy.com/certificate/UC-8dfb5ac0-e271-4129-b6b2-4fc07020fd32/"
                    >
                      View Certificate
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <hr />
            <div className="objective">
              <h2 className="heading">Acheivments</h2>
              <ul>
                <li>
                  <div>
                    <h4> Up Scholarship</h4>
                  </div>
                </li>
                <li>
                  <div>
                    <h4>Class Toper (12th)</h4>
                  </div>
                </li>
                <li>
                  <div>
                    <h4>Class Toper (10th)</h4>
                  </div>
                </li>
              </ul>
            </div>
            <hr />
            <div className="objective">
              <h2 className="heading">Online Profile</h2>
              <ul>
                <li>
                  <div>
                    <h4>
                      <a
                        className=" cert"
                        href="http://www.linkedin.com/in/surendra-singh-573791168/"
                      >
                        LinkedIn
                      </a>
                    </h4>
                  </div>
                </li>
                <li>
                  <div>
                    <h4>
                      <a
                        className=" cert"
                        href="https://github.com/surendra-sketch"
                      >
                        GitHub
                      </a>
                    </h4>
                  </div>
                </li>
                <li>
                  <div>
                    <h4>
                      <a
                        className=" cert"
                        href="https://www.hackerrank.com/dashboard"
                      >
                        Haker-rank
                      </a>
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
            <hr />
          </section>
        </div>
      </div>
    </>
  );
};

export default Resume;
