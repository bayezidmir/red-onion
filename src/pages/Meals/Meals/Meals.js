import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Meals.module.css";

const Meals = () => {
  return (
    <div>
      <div>
        <Link to="/breakfast">Breakfast</Link>
        <Link to="/lunch">Luch</Link>
        <Link to="/dinner">Dinner</Link>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Meals;
