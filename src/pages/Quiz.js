import React, { useState, useEffect } from "react";
import "./QuizPage.css"; // Import custom CSS
import NavBar from "../components/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import TestPage from "./TestPage";
import ResultPage from "./ResultPage";
import { categories } from "./data";

const QuizPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [key, setKey] = useState(0); // Add key state

  useEffect(() => {
    AOS.refresh();
  }, [selectedCategory, key]); // Update useEffect dependencies

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedQuiz(null);
    setKey((prevKey) => prevKey + 1); // Update key to trigger re-render
  };

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
    setShowResult(false);
    setScore(0);
  };

  const handleFinishQuiz = () => {
    setShowResult(true);
  };

  return (
    <div className="quizpageContainer">
      <NavBar />
      <div className="quizpageNavbar">
        <h1>Quiz</h1>
      </div>
      <div className="quizpageContent">
        <div
          className="categoryContainer"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
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
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        {selectedQuiz && !showResult ? (
          <div className="quizDetailContainer">
            <TestPage
              quiz={selectedQuiz}
              score={score}
              setScore={setScore}
              onFinish={handleFinishQuiz}
            />
          </div>
        ) : showResult ? (
          <div className="quizDetailContainer">
            <ResultPage score={score} />
          </div>
        ) : (
          <div
            className="quizContainer"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2>Тестүүд:</h2>
            {selectedCategory ? (
              <ul
                className="quizList"
                key={key} // Add key to trigger re-render
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {selectedCategory.quizzes.map((quiz, index) => (
                  <li
                    key={index}
                    className="quizItem"
                    onClick={() => handleQuizSelect(quiz)}
                  >
                    {quiz.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Ангилалаа сонгоно уу 😊</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
