// Card.js
import React from "react";
import { Link } from "react-router-dom";
import card from "../img/next.png";

const Card = ({ news }) => {
    const { id, title, details, imageUrl } = news;

  return (
    <div className="card one" data-aos="fade-up" data-aos-duration="1000">
      <img src={imageUrl} className="cardoneImg" alt="" data-aos="fade-up" data-aos-duration="1100" />
      <div className="cardbgone"></div>
      <div className="cardContent">
        <h2>{title}</h2>
        <p>{details}</p>
        <Link to={`/details/${id}`}> {/* Pass the news item ID as a URL parameter */}
          <div className="cardBtn">
            <span className="detailsText">дэлгэрэнгүй</span>
            <img src={card} alt="" className="cardIcon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
