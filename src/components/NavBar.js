import React, { useState } from "react";
import { FaBars, FaArrowLeft } from "react-icons/fa";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    document.querySelector(".menu-icon").classList.toggle("rotate");
  };

  return (
    <div className="nav">
      <div className="logo">
        <h4>Хөгжлийн сэтгэл судлал</h4>
      </div>
      <div className="links">
        <a href="/" className="mainlink">
          Нүүр хуудас
        </a>
        <a href="/news">Насны онцлог</a>
        <a href="/quiz">Тест</a>
        <a href="/books">Шинэ номнууд</a>
        <a href="/">Сэтгэл судлалын онолууд</a>
      </div>
      <div className="menu-icon" onClick={toggleModal}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div
        className={`modal ${showModal ? "show" : "hide"}`}
        onClick={toggleModal}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="back-button" onClick={toggleModal}>
            <FaArrowLeft size={20} style={{ fontWeight: "lighter" }} /> Буцах
          </div>
          <div className="modal-links">
            <a href="/">Нүүр хуудас</a>
            <a href="/news">Насны онцлог</a>
            <a href="/quiz">Тест</a>
            <a href="/books">Шинэ номнууд</a>
            <a href="/">Сэтгэл судлалын онолууд</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
