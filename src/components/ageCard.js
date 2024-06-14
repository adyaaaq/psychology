// Card.js
import React from "react";

import { Link } from "react-router-dom";
const AgeCard = ({ ageCard }) => {
  const { id, title, details, imageUrl } = ageCard;
  return (
    <Link to={`/details/${id}`}>
      {" "}
      {/* Pass the news item ID as a URL parameter */}
      <div className="ageCard" data-aos="fade-up" data-aos-duration="1000">
        <img src={imageUrl} className="ageCard-img" alt="" />
        <div className="ageCard-line"></div>
        <span className="ageCard-text">{title} нас</span>
      </div>
    </Link>
  );
};

export default AgeCard;
