import React, { useState, useEffect } from "react";
import "./QuizPage.css"; // Import custom CSS
import NavBar from "../components/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";

const QuizPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [key, setKey] = useState(0); // Add key state

  useEffect(() => {
    AOS.refresh();
  }, [selectedCategory]);

  const categories = ["Category 1", "Category 2", "Category 3"]; // Example categories

  const quizzes = {
    "Category 1": ["Quiz 1", "Quiz 2", "Quiz 3"],
    "Category 2": ["Quiz 4", "Quiz 5", "Quiz 6"],
    "Category 3": ["Quiz 7", "Quiz 8", "Quiz 9"],
  }; // Example quizzes

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setKey((prevKey) => prevKey + 1); // Update key to trigger re-render
  };

  return (
    <>
      <NavBar />
      <div className="quizpageContainer">
        <div className="quizpageNavbar">
          <h1>Quiz</h1>
        </div>
        <div className="quizpageContent">
          <div
            className="categoryContainer"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2>Categories</h2>
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
          <div
            className="quizContainer"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2>Quizzes</h2>
            {selectedCategory ? (
              <ul
                className="quizList"
                data-aos="fade-up"
                data-aos-duration="1000"
                key={key}
              >
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
