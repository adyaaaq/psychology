import React from "react";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h4>Health.Co.</h4>
      </div>
      <div className="links">
        <a href="#" className="mainlink">
          Corona Updates
        </a>
        <a href="#">Help</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default NavBar;
