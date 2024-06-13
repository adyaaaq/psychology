import React from "react";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h4>Хөгжлийн сэтгэл судлал</h4>
      </div>
      <div className="links">
        <a href="#" className="mainlink">
          Нүүр хуудас
        </a>
        <a href="#">Мэдээ</a>
        <a href="/quiz">Тест</a>
        <a href="#">Шинэ номнууд</a>
        <a href="#">Туршилтууд</a>
      </div>
    </div>
  );
};

export default NavBar;
