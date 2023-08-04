import React, { useState } from "react";

// import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  // const bColor = () => {
  //   const bc = document.querySelector(".div1");
  //   if (bc.style.backgroundColor === "#89ff00") {
  //     bc.style.backgroundColor = "#890000";
  //     console.log("h99l1");
  //   } else {
  //     bc.style.backgroundColor = "#89ff00";
  //     console.log("h99l2");
  //   }
  //   setTimeout(() => {
  //     if (bc.style.backgroundColor === "#89ff00") {
  //       bc.style.backgroundColor = "#890000";
  //       console.log("h99l");
  //     } else {
  //       console.log("hell");
  //       bc.style.backgroundColor = "#890000";
  //     }
  //   }, 1000);
  // };

  const [title, setTitle] = useState(" ");
  const [firstname, setFirstName] = useState(" ");
  const [middlename, setMiddleName] = useState(" ");
  const [lastname, setLastName] = useState(" ");
  const [mail, setMail] = useState(" ");
  const [message, setMessage] = useState(" ");

  // let handleText = (event) => {
  //   console.log(event.target.value);
  //   const newValue = event.target.value;
  //   setTitle(newValue);
  // };

  const handFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handMiddleName = (event) => {
    setMiddleName(event.target.value);
  };
  const handLastName = (event) => {
    setLastName(event.target.value);
  };
  const handMail = (event) => {
    setMail(event.target.value);
  };
  const handMessage = (event) => {
    setMessage(event.target.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
    setTitle("Message has Sent");

    const formData = {
      firstname: firstname,
      middlename: middlename,
      lastname: lastname,
      mail: mail,
      message: message,
    };
    console.log(formData);
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setMail("");
    setMessage("");
    setTitle(" ");
  };
  return (
    <>
      <div className="contact">
        <div className=" div-layout div1">
          {/* <h1 style={{ color: "red" }}>
            Note : sorry form services unable do email or call us . <br />
          </h1> */}

          <h1 style={{ color: "red" }}>
            Form service is unable do email or call <br />
            which is given below/right
          </h1>
          <br />
          <div className="contact-form">
            <form onSubmit={handleForm} className="contact-form-inside">
              <h2>{title}</h2>
              <div className="input-field">
                <label htmlFor="firstname">First Name :</label>
                <input
                  onChange={handFirstName}
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="First Name........"
                  required
                  value={firstname}
                />
              </div>
              <div className="input-field">
                <label htmlFor="middlname">Middle Name :</label>
                <input
                  onChange={handMiddleName}
                  id="middlname"
                  name="middlname"
                  type="text"
                  placeholder="Middle Name........"
                  value={middlename}
                />
              </div>
              <div className="input-field">
                <label htmlFor="lastname">Last Name :</label>
                <input
                  onChange={handLastName}
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Last Name........"
                  required
                  value={lastname}
                />
              </div>
              <div className="input-field">
                <label htmlFor="email">Email :</label>
                <input
                  onChange={handMail}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email........"
                  required
                  value={mail}
                />
              </div>

              <div className="input-field">
                {/* <label htmlFor="msg">Message :</label>
                <input
                  onChange={handMessage}
                  id="msg"
                  type="textarea"
                  name="msg"
                  placeholder="Your Message........"
                  required
                /> */}
                <label htmlFor="msg">Message :</label>
                <textarea
                  onChange={handMessage}
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="10"
                  placeholder="Your message......"
                  value={message}
                ></textarea>
              </div>

              <br />
              <button type="submit">Send Message</button>
              {/* <button type="reset">Reset</button> */}
              <br />
            </form>
          </div>
        </div>
        <div className=" div-layout div2">
          <div className="showdata-mobile">
            <h2>Email Address :</h2>
            <h3>
              <a href="mailto:surendraji252525@gmail.com">
                surendraji252525@gmail.com
              </a>
            </h3>
          </div>
          <div className="showdata-mobile">
            <h2>Mobile Number :</h2>

            <h3>
              <a href="tel:8953107593"> 8953107593 </a>
            </h3>
          </div>
        </div>
        <div id="conn" className=" div-layout div3">
          <h1 style={{ color: "#f00" }}>
            <span>Mobile No.</span> 8953107593
          </h1>
        </div>
      </div>
    </>
  );
};

export default Contact;
