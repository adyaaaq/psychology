import React from "react";
import BookCard from "../components/BookCard";
import booksData from "../assets/books";
import Navbar from "../components/NavBar";
import AgeCard from "../components/ageCard";
import ageCategories from "../assets/ages";
import AccordionUsage from "../components/theories";

export default function Books() {
  return (
    <div>
      {/* <h1>
      Шинэхэн номнууд
    </h1> */}

      <div className="new-books">
        {booksData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
        {booksData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
