import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdHome, MdEmojiEvents, MdMenuOpen, MdClose } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
import { GoPerson } from "react-icons/go";
import { IoIosDocument } from "react-icons/io";

import { BsFillTelephoneFill } from "react-icons/bs";
import { TbFileCertificate } from "react-icons/tb";

import "./Navbar.css";

// var navbar = document.querySelector(".navbar");
// var sticky = navbar.offsetTop;

// function mynav() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// window.onscroll = function () {
//   mynav();
// };

// window.addEventListener("scroll", nav());

// function nav() {

//   var navbar = document.querySelector(".navbar");
//   var sticky = navbar.offsetTop;

//   function mynav() {
//     if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky");
//     } else {
//       navbar.classList.remove("sticky");
//     }
//   }
// }

// window.onscroll = function () {
//   var navbar = document.querySelector(".navbar");
//   var sticky = navbar.offsetTop;

//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// };

const Navbar = () => {
  const [menuicon, setMenuIcon] = useState(<MdMenuOpen />);
  const [menu, setMenu] = useState(".show");

  const handleMenu = () => {
    if (menu === ".show") {
      document.querySelector(".nav-links").style.left = "0px";
      setMenu(".nav-links");
      setMenuIcon(<MdClose />);
    } else {
      setMenu(".show");
      setMenuIcon(<MdMenuOpen />);

      document.querySelector(".nav-links").style.left = "-420px";
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
        <div className="mobile-view">
          <ul className="nav-links">
            <li className="nav-link">
              <Link onClick={handleMenu} className="link-nav" to="/">
                <span>
                  <MdHome /> Home
                </span>
              </Link>
            </li>
            <li className="nav-link">
              <Link onClick={handleMenu} className="link-nav" to="/about">
                <span>
                  <GoPerson /> About
                </span>
              </Link>
            </li>
            <li className="nav-link">
              <Link onClick={handleMenu} className="link-nav" to="/contact">
                <span>
                  <BsFillTelephoneFill /> Contact
                </span>
              </Link>
            </li>
            <li className="nav-link">
              <Link onClick={handleMenu} className="link-nav" to="/projects">
                <span>
                  <MdEmojiEvents /> Projects
                </span>
              </Link>
            </li>
            <li className="nav-link">
              <Link onClick={handleMenu} className="link-nav" to="/resume">
                <span>
                  <IoIosDocument /> Resume
                </span>
              </Link>
            </li>
            <li className="nav-link">
              <Link
                onClick={handleMenu}
                className="link-nav"
                to="/certificates"
              >
                <span>
                  <TbFileCertificate /> Certificates
                </span>
              </Link>
            </li>
          </ul>

          <div className="menu-btn">
            <div onClick={handleMenu}>{menuicon}</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
