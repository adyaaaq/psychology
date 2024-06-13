import React from "react";
// import "./Cards.css";
import { Link } from "react-router-dom";
import movie from "../img/movie.png";
import card from "../img/next.png";

const Card = () => {
  return (
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
                <Link to="/details">
                    <div className="cardBtn">
                        <span className="detailsText">дэлгэрэнгүй</span>
                        <img src={card} alt="" className="cardIcon" />
                    </div>
                </Link> {/* Link to the details page */}
            </a>
          </div>
        </div>
  );
};

export default Card;
