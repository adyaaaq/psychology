import React from "react";
import Card from "../components/NewsCard"
import newsItems from "../assets/json"; 
import booksData from "../assets/books"; 
import BookCard from "./BookCard";

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
        {newsItems.map((news) => (
          <Card key={news.id} news={news} />
        ))}
      </div>
      <div className="infoCards">
        {booksData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
