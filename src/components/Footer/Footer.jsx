import React, { useEffect } from "react";

import {
  MdEmail,
  MdLocalPhone,
  MdMessage,
  MdOutlineFacebook,
} from "react-icons/md";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  // SiTwitter,
  SiWhatsapp,
  // SiYoutube,
} from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    console.log("");
  }, []);

  return (
    <>
      <div className="footer">
        <footer>
          <div className="footer-item">
            <ul className="footer-links">
              <h3>Social links</h3>
              {/* <hr /> */}
              <li>
                <a
                  target="_/blank"
                  href="https://github.com/surendra-sketch"
                  className="footer-link"
                >
                  <SiGithub />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  target="_/blank"
                  className="footer-link"
                  href="http://www.linkedin.com/in/surendra-singh-573791168/"
                >
                  <SiLinkedin /> LinkedIn
                </a>
              </li>
              {/* <li>
                <a target="_/blank" href="##" className="footer-link">
                  <SiTwitter /> Twittter
                </a>
              </li> */}
              <li>
                <a
                  target="_/blank"
                  href=" https://www.facebook.com/profile.php?id=100082797541283&mibextid=ZbWKwL"
                  className="footer-link"
                >
                  <MdOutlineFacebook /> FaceBook
                </a>
              </li>
              <li>
                <a
                  target="_/blank"
                  href="https://www.instagram.com/misbegottenspeaks22/"
                  className="footer-link"
                >
                  <SiInstagram /> Instagram
                </a>
              </li>
              {/* <li>
                <a target="_/blank" href="##" className="footer-link">
                  <SiYoutube /> YouTube
                </a>
              </li> */}
            </ul>
            <hr className="vertical" />
            <ul className="footer-links">
              <h3>Contact Me</h3>
              {/* <hr /> */}
              <li>
                <a target="_/blank" href="/contact" className="footer-link">
                  <MdEmail /> Mail us
                </a>
              </li>
              <li>
                <a target="_/blank" href="/contact" className="footer-link">
                  <MdLocalPhone /> Call us
                </a>
              </li>
              <li>
                <a
                  target="_/blank"
                  href="https://wa.me/918953107593"
                  className="footer-link"
                >
                  <SiWhatsapp /> Whatsapp
                </a>
              </li>
              <li>
                <a target="_/blank" href="##" className="footer-link">
                  <MdMessage /> Message
                </a>
              </li>
            </ul>
            <hr className="vertical" />
            <ul className="footer-links">
              <h3>Pojects</h3>
              {/* <hr /> */}
              <li>
                <a href="/antenna" className="footer-link">
                  MicroStrip anttena
                </a>
              </li>
              <li>
                <a href="##" className="footer-link">
                  ToDo App
                </a>
              </li>
              <li>
                <a target="_/blank" href="##" className="footer-link">
                  REST API
                </a>
              </li>
              <li>
                <a
                  target="_/blank"
                  href="https://surendrajiportfolioforgethired.netlify.app/"
                  className="footer-link"
                >
                  PortFolio Web
                </a>
              </li>
              <li>
                <a
                  target="_/blank"
                  href="https://github.com/surendra-sketch/atm1/blob/main/ATMwithReg.cpp"
                  className="footer-link"
                >
                  ATM App
                </a>
              </li>
              <li>
                <a target="_/blank" href="##" className="footer-link">
                  Websites
                </a>
              </li>
            </ul>
            <hr className="vertical" />
            <ul className="footer-links">
              <h3>Certificates</h3>
              {/* <hr /> */}
              <li>
                <a
                  target="_/blank"
                  href="https://www.udemy.com/certificate/UC-8dfb5ac0-e271-4129-b6b2-4fc07020fd32/"
                  className="footer-link"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  target="_/blank"
                  href="https://www.udemy.com/certificate/UC-1323bf5d-0d4a-4a81-a6af-653e44f0ac4f/"
                  className="footer-link"
                >
                  React JS
                </a>
              </li>
              <li>
                <a
                  target="_/blank"
                  href="/certificates"
                  className="footer-link"
                >
                  AWS
                </a>
              </li>
              <li>
                <a
                  target="_/blank"
                  href="https://learning.tcsionhub.in/iDH/India/Products_detail/1372196"
                  className="footer-link"
                >
                  Soft_skills
                </a>
              </li>
            </ul>
            <hr className="vertical" />
          </div>
        </footer>
        <div className="footer-bottom">
          {/* <h1>footer bottom</h1> */}
          <div className="ceneter-text-footer">
            <p> &copy; 2023 all rights reserved </p>
            <br />
            <h6> This website created by Surendra Singh</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
