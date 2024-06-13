import React from "react";
import Quiz from "react-quiz-component";

const quiz = {
  quizTitle: "React Quiz",
  quizSynopsis: "This is a simple quiz to test your React knowledge.",
  questions: [
    {
      question: "What is React?",
      questionType: "text",
      answers: [
        "A library for managing user interfaces",
        "A database",
        "A server-side framework",
        "A language",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer:
        "Correct! React is a library for managing user interfaces.",
      messageForIncorrectAnswer:
        "Incorrect. React is a library for managing user interfaces.",
      point: "20",
    },
    // Add more questions here
  ],
};
const QuizPage = () => {
  return (
    <div>
      <h1>Quiz Time!</h1>
      <Quiz quiz={quiz} shuffle={true} />
    </div>
  );
};

export default QuizPage;
