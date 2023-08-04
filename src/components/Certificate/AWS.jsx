import React from "react";
import Bounce from "react-reveal/Bounce";

import "./AWS.css";
const AWS = () => {
  return (
    <main className="certificates">
      <Bounce>
        <section className="react">
          <div className="reac">
            <img src="./images/react.jpg" alt="" />
          </div>
        </section>
      </Bounce>
      <Bounce>
        <section className="webdevlopment">
          <div className="webd">
            <img src="./images/webdelopment.jpg" alt="" />
          </div>
        </section>
      </Bounce>
      <Bounce>
        <section className="aws">
          <h1>
            Frontend development certificate is on the way......
            <br /> <span>By FreeCodeCamp</span>
          </h1>
        </section>
      </Bounce>
    </main>
  );
};

export default AWS;
