import React, { useState, useEffect } from "react";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../components/img/logo.png";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  const toggleModal = () => {
    setShowModal(!showModal);
    setShowBackdrop(!showBackdrop);
    document.querySelector(".menu-icon").classList.toggle("rotate");
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="Big-container">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="Хөгжлийн сэтгэл судлал" />
        </div>
        <div className="links">
          <NavLink
            exact
            to="/"
            className={`mainlink ${activeLink === "/" ? "active" : ""}`}
            onClick={() => setActiveLink("/")}
          >
            Нүүр хуудас
          </NavLink>
          <NavLink
            to="/news"
            className={`mainlink ${activeLink === "/news" ? "active" : ""}`}
            onClick={() => setActiveLink("/news")}
          >
            Насны онцлог
          </NavLink>
          <NavLink
            to="/quiz"
            className={`mainlink ${activeLink === "/quiz" ? "active" : ""}`}
            onClick={() => setActiveLink("/quiz")}
          >
            Тест
          </NavLink>
          <NavLink
            to="/books"
            className={`mainlink ${activeLink === "/books" ? "active" : ""}`}
            onClick={() => setActiveLink("/books")}
          >
            Шинэ номнууд
          </NavLink>
          <NavLink
            to="/theories"
            className={`mainlink ${activeLink === "/theories" ? "active" : ""}`}
            onClick={() => setActiveLink("/theories")}
          >
            Сэтгэл судлалын онолууд
          </NavLink>
        </div>
        <div className="menu-icon" onClick={toggleModal}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {showBackdrop && (
          <div className="backdrop show" onClick={toggleModal}></div>
        )}
        <div
          className={`modal ${showModal ? "show" : "hide"}`}
          onClick={toggleModal}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="back-button" onClick={toggleModal}>
              <FaArrowLeft size={20} style={{ fontWeight: "lighter" }} /> Буцах
            </div>
            <div className="modal-links">
              <NavLink
                exact
                to="/"
                className={`mainlink ${activeLink === "/" ? "active" : ""}`}
                onClick={() => setActiveLink("/")}
              >
                Нүүр хуудас
              </NavLink>
              <NavLink
                to="/news"
                className={`mainlink ${activeLink === "/news" ? "active" : ""}`}
                onClick={() => setActiveLink("/news")}
              >
                Насны онцлог
              </NavLink>
              <NavLink
                to="/quiz"
                className={`mainlink ${activeLink === "/quiz" ? "active" : ""}`}
                onClick={() => setActiveLink("/quiz")}
              >
                Тест
              </NavLink>
              <NavLink
                to="/books"
                className={`mainlink ${
                  activeLink === "/books" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/books")}
              >
                Шинэ номнууд
              </NavLink>
              <NavLink
                to="/theories"
                className={`mainlink ${
                  activeLink === "/theories" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/theories")}
              >
                Сэтгэл судлалын онолууд
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
