// Details.js
import React from "react";
import { useParams } from "react-router-dom";
import newsItems from "../assets/json"; // Import the news data

const Details = () => {
  const { id } = useParams(); // Retrieve the news item ID from URL parameters

  // Find the news item with the matching ID
  const selectedNewsItem = newsItems.find((item) => item.id === parseInt(id));

  return (
    <div>
      <h2>Details Page</h2>
      {selectedNewsItem && (
        <div>
          <h2>{selectedNewsItem.title}</h2>
          <img src={selectedNewsItem.imageUrl} alt={selectedNewsItem.title} />
          <p>{selectedNewsItem.details}</p>
        </div>
      )}
    </div>
  );
};

export default Details;
