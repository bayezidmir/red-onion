import React from "react";
import { Link } from "react-router-dom";
import "./Header.module.css";
import logo from "../../../../src/images/logo2.png";

const Header = () => {
  return (
    <nav>
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="menu">
        <Link to="/cart">Cart</Link>
        <Link to="/">Log In</Link>
      </div>
    </nav>
  );
};

export default Header;
