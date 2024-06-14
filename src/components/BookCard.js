// BookCard.js
import React from "react";

const BookCard = ({ book }) => {
  const { id, title, author, imageUrl , year} = book;

  return (
    <div className="book-card" data-aos="fade-up" data-aos-duration="1000">
      <img src={imageUrl} className="book-card-img" alt={title} data-aos="fade-up" data-aos-duration="1100" />
      <div className="book-card-content">
        <h2>{title}</h2>
        <div className="book-card-content-bottom">
            <p>{author}</p>
            <p>{year}</p>
        </div>

          
          {/* <div className="book-card-btn">
            <span className="details-text">Details</span>
          </div> */}
      </div>
    </div>
  );
};

export default BookCard;
