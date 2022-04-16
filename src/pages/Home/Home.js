import React from "react";
import Header from "../shared/Header/Header";
import SearchFood from "../SearchFood/SearchFood";
import Meals from "../Meals/Meals/Meals";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchFood />
      <Meals />
    </div>
  );
};

export default Home;
