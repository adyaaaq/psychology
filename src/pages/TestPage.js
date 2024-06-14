import React, { useState, useEffect } from "react";
import "./TestPage.css";
import "aos/dist/aos.css";
import AOS from "aos";

export default function TestPage({ quiz, score, setScore, onFinish }) {
  const [num, setNum] = useState(0);

  const handleAnswer = (points) => {
    setScore(score + points);
    if (num < quiz.questions.length - 1) {
      setNum(num + 1);
    } else {
      onFinish();
    }
  };

  const currentQuestion = quiz.questions[num];

  // Initialize AOS and reset animation on question change
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, [num]);

  return (
    <div className="wrapper">
      <p className="process">
        {num + 1}/{quiz.questions.length}
      </p>
      <h1 className="question" data-aos="fade-right">
        Q: {currentQuestion.ques}
      </h1>
      <div className="answers-container">
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={index}
            className="answer"
            onClick={() => handleAnswer(answer.points)}
            data-aos="fade-right"
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
