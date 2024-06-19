import React from "react";
import BookCard from "../components/BookCard";
import booksData from "../assets/books";
export default function Books() {
  return (
    <div className="Big-container">
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
