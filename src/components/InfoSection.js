import React from "react";
import movie from "../img/movie.png";
import card from "../img/next.png";
import learn from "../img/learn.png";
import next from "../img/next.png";
import videocall from "../img/videocall.png";
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
        <div className="card one" data-aos="fade-up" data-aos-duration="1000">
          <img
            src={movie}
            className="cardoneImg"
            alt=""
            data-aos="fade-up"
            data-aos-duration="1100"
          />
          <div className="cardbgone"></div>
          <div className="cardContent">
            <h2>Binge Watch</h2>
            <p>
              Binge-watch all your favorite TV Shows or Movies during this
              Quarantine!
            </p>
            <a href="#">
              <div className="cardBtn">
                <img src={card} alt="" className="cardIcon" />
              </div>
            </a>
          </div>
        </div>
        <div className="card two" data-aos="fade-up" data-aos-duration="1300">
          <img
            src={learn}
            className="cardtwoImg"
            alt=""
            data-aos="fade-up"
            data-aos-duration="1200"
          />
          <div className="cardbgtwo"></div>
          <div className="cardContent">
            <h2>Learn a New Skill</h2>
            <p>
              Try a new recipe, Write a blog or Learn a new language this
              Quarantine!
            </p>
            <a href="#">
              <div className="cardBtn">
                <img src={next} alt="" className="cardIcon" />
              </div>
            </a>
          </div>
        </div>
        <div className="card three" data-aos="fade-up" data-aos-duration="1600">
          <img
            src={videocall}
            className="cardthreeImg"
            alt=""
            data-aos="fade-up"
            data-aos-duration="1300"
          />
          <div className="cardbgone"></div>
          <div className="cardContent">
            <h2>Video Call</h2>
            <p>
              Have fun video calling your friends or family this Quarantine!
            </p>
            <a href="#">
              <div className="cardBtn">
                <img src={next} alt="" className="cardIcon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
