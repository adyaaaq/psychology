import React from "react";
import doctor from "../img/doctor-woman-400px.png";
const AboutSection = () => {
  return (
    <div className="Big-container">
    <div className="about">
      <div className="aboutText" data-aos="fade-up" data-aos-duration="1000">
        <h1>
          Хөгжлийн сэтгэл судлал <br />{" "}
          <span style={{ color: "#2f8be0", fontSize: "90%" }}>гэж юу вэ?</span>{" "}
        </h1>
        <img src={doctor} alt="" />
      </div>
      <div className="aboutList" data-aos="fade-left" data-aos-duration="1000">
        <ol>
          <li>
            <span>01</span>
            <p>bla bla</p>
          </li>
          <li>
            <span>02</span>
            <p>bla bla</p>
          </li>
          <li>
            <span>03</span>
            <p>bla bla</p>
          </li>
          <li>
            <span>04</span>
            <p>bla bla</p>
          </li>
        </ol>
      </div>
    </div>
    </div>
  );
};

export default AboutSection;
