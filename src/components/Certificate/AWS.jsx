import React from "react";
import Bounce from "react-reveal/Bounce";

import "./AWS.css";
const AWS = () => {
  return (
    <main className="certificates">
      <Bounce>
        <section className="aws">
          <h1>AWS certifictaes is on the way......</h1>
        </section>
      </Bounce>
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
    </main>
  );
};

export default AWS;
