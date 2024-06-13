import React from "react";
import AndroidPNG from "../img/AndroidPNG.png";
import iosPNG from "../img/iosPNG.png";
import MobileApp from "../img/MobileApp.png";
const Banner = () => {
  return (
    <div className="banner">
      <div
        className="bannerText"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1>
          Download the HealthCare App Today. <br />{" "}
          <span
            style={{ fontSize: "1.6vw", fontWeight: "normal" }}
            className="bannerInnerText"
          >
            Stay Updated and get all your medical needs taken care of!
          </span>{" "}
        </h1>
        <a href="#">
          {" "}
          <img src={AndroidPNG} alt="" />{" "}
        </a>
        <a href="#">
          {" "}
          <img src={iosPNG} alt="" />{" "}
        </a>
      </div>
      <div className="bannerImg" data-aos="fade-up" data-aos-duration="1000">
        <img src={MobileApp} alt="" />
      </div>
    </div>
  );
};

export default Banner;
