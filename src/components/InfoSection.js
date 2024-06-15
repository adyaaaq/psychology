import React from "react";
import Card from "../components/NewsCard";
import newsItems from "../assets/json";
import booksData from "../assets/books";
import BookCard from "./BookCard";
import ageCategories from "../assets/ages";
import AgeCard from "../components/ageCard";
const InfoSection = () => {
  return (
    <div className="infoSection">
      <div
        className="infoHeader"
        data-aos="fade-up"
        data-aos-duration="1000"
      ></div>
      <div className="infoCards">
        {ageCategories.map((ageCategory) => (
          <AgeCard key={ageCategory.id} ageCard={ageCategory} />
        ))}
      </div>
      {/* 
      <div className="infoCards">
        {booksData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
        {booksData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div> */}
    </div>
  );
};

export default InfoSection;
