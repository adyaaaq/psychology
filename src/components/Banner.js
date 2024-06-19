import React from "react";
import AndroidPNG from "../img/AndroidPNG.png";
import iosPNG from "../img/iosPNG.png";
import MobileApp from "../img/MobileApp.png";
const Banner = () => {
  return (
    <div className="Big-container">
    <div className="banner-container">
    <div className="banner">
      <div
        className="bannerText"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1>
          Холбогдрх <br />{" "}
          <span
            style={{ fontSize: "1.6vw", fontWeight: "normal" }}
            className="bannerInnerText"
          >
            бла бла
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
    </div>
    </div>
  );
};

export default Banner;
