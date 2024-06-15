import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import News from "./pages/News";
import QuizPage from "./pages/Quiz";
import Books from "./pages/Books";
import Navbar from "./components/NavBar";
import Details from "./pages/CardDetail"; // Import the Details component
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/details/:id" element={<Details />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
