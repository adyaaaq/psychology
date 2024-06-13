import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import AboutSection from "./components/AboutSection";
import InfoSection from "./components/InfoSection";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="wrapper">
      <NavBar />
      <LandingPage />
      <AboutSection />
      <InfoSection />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
