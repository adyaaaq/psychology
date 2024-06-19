import React from "react";
import NavBar from "../components/NavBar";
import LandingPage from "../components/LandingPage";
import AboutSection from "../components/AboutSection";
import InfoSection from "../components/InfoSection";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import "../App.css";
import VerticalTimelineComponent from "../components/timeline";
const Home = () => {
  return (
    <div className="wrapper">
      <LandingPage />
      <VerticalTimelineComponent/>
      <AboutSection />
      <InfoSection />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
