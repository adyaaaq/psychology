import React, { useEffect } from "react";
import "./ResultPage.css";
import "aos/dist/aos.css";
import AOS from "aos";

export default function ResultPage({ score }) {
  // Initialize AOS and reset animation on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="result-wrapper" data-aos="fade-right">
      <h1 className="result">Tаны авсан оноо: {score}</h1>
      <button
        className="return-button"
        onClick={() => window.location.reload()}
      >
        Буцах
      </button>
    </div>
  );
}
