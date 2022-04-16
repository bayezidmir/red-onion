import logo from "./logo.svg";
import "./App.css";
import Footer from "./pages/shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import BreakFast from "../src/pages/Meals/BreakFast/BreakFast";
import Meals from "./pages/Meals/Meals/Meals";
import Lunch from "../src/pages/Meals/Lunch/Lunch";
import Dinner from "../src/pages/Meals/Dinner/Dinner";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals:" element={<Meals />}>
          <Route path="breakfast" element={<BreakFast />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="dinner" element={<Dinner />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
