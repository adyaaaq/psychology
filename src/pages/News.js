import React from "react";
import BookCard from "../components/BookCard";
import booksData from "../assets/books";
import Navbar from "../components/NavBar";
import ageCategories from "../assets/ages";
import AgeCard from "../components/ageCard";

export default function News() {
  return (
    <div>
      {/* <h1>
      Шинэхэн номнууд
    </h1> */}

<div className="infoCards">
      {ageCategories.map((ageCategory) => (
        <AgeCard key={ageCategory.id} ageCard={ageCategory} />))}
    </div>
        
    </div>
  );
}
