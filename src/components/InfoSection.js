import React from "react";
import movie from "../img/movie.png";
import card from "../img/next.png";
import learn from "../img/learn.png";
import next from "../img/next.png";
import videocall from "../img/videocall.png";
import Card from "../components/NewsCard"
const InfoSection = () => {
  return (
    <div className="infoSection">
      <div className="infoHeader" data-aos="fade-up" data-aos-duration="1000">
        <h1>
          Things you could do during the <br />{" "}
          <span style={{ color: "#e0501b" }}>Coronavirus Quarantine.</span>{" "}
        </h1>
      </div>
      
      <div className="infoCards">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default InfoSection;
