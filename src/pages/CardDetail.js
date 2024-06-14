// Details.js
import React from "react";
import { useParams } from "react-router-dom";
import ageCategories from "../assets/ages"; // Import the news data

const Details = () => {
  const { id } = useParams(); // Retrieve the news item ID from URL parameters

  // Find the news item with the matching ID
  const selectedNewsItem = ageCategories.find((item) => item.id === parseInt(id));

  const paragraphs = selectedNewsItem.details.split("##");


  return (
    <div className="details-body">
      
      {selectedNewsItem && (
       
        <div className="details-head"> 
           <img className="details-img" src={selectedNewsItem.imageUrl} alt={selectedNewsItem.title} />
           <h3>{selectedNewsItem.title} насны хүмүүсийн сэтгэл зүй ямар байдаг вэ?</h3>
        </div>
      )}
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="details-p">{paragraph.trim()}</p>
        ))}

    </div>

  );
};

export default Details;
