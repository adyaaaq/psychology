import React, { useState } from "react";
import "./QuizPage.css"; // Import custom CSS
import NavBar from "../components/NavBar";

const QuizPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ["Ангилал 1", "Ангилал 2", "Ангилал 3"]; // Example categories

  const quizzes = {
    "Ангилал 1": ["Тест 1", "Тест 2", "Тест 3"],
    "Ангилал 2": ["Тест 4", "Тест 5", "Тест 6"],
    "Ангилал 3": ["Тест 7", "Тест 8", "Тест 9"],
  }; // Example quizzes

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {" "}
      <NavBar />
      <div className="quizpageContainer">
        <div className="quizpageNavbar">
          <h1>Тест</h1>
        </div>
        <div className="quizpageContent">
          <div className="categoryContainer">
            <h2>Ангилал</h2>
            <ul className="categoryList">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`categoryItem ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="quizContainer">
            <h2>Quizzes</h2>
            {selectedCategory ? (
              <ul className="quizList">
                {quizzes[selectedCategory].map((quiz, index) => (
                  <li key={index} className="quizItem">
                    {quiz}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Please select a category to view quizzes.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
