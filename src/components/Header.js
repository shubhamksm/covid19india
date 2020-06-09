import React from "react";

import logo from "../images/logo.png";

const Header = () => {
  return (
    <header>
      <h1>COVID19</h1>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <h1>INDIA</h1>
    </header>
  );
};

export default Header;
