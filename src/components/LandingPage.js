import React from "react";
import bg from "../img/bg.png";
const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landingText" data-aos="fade-up" data-aos-duration="1000">
        <h1>
          Stay In.
          <span style={{ color: "#0ab75b", fontSize: "4vw" }}>
            {" "}
            Stay Safe.
          </span>{" "}
        </h1>
        <h3>
          Lets all work together to put an end to this pandemic. <br /> Help
          stop the spread.
        </h3>
        <div className="btn">
          <a href="#">Learn More</a>
        </div>
      </div>
      <div
        className="landingImage"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
