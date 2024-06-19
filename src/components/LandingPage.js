import React from "react";
import bg from "../img/bg.png";
const LandingPage = () => {
  return (

    <div className="Big-container">
    <div className="landing">
      <div className="landingText" data-aos="fade-up" data-aos-duration="1000">
        <h1>
          Мэдлэг.
          <span style={{ color: "#0ab75b", fontSize: "4vw" }}>
            {" "}
            Хөгжил.
          </span>{" "}
        </h1>
        <h3>
          Хөгжлийн сэтгэл судлал нь хүн төрөлхтөн амьдралынхаа туршид <br />
          хэрхэн, яагаад өөрчлөгддөг вэ?
        </h3>
        <div className="btn">
          <a href="#">Дэлгэрэнгүй</a>
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
    </div>
  );
};

export default LandingPage;
