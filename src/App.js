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

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/details" element={<Details />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
