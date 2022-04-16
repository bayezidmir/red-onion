import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="brand">
        <p>Red Onion</p>
      </div>
      <div className="menu">
        <Link to="/break-fast"></Link>
        <Link to="/cart">Cart</Link>
        <Link to="/">Log In</Link>
      </div>
    </nav>
  );
};

export default Header;
