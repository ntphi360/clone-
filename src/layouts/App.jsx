import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import ShowDetail from "../pages/Home/show";
import Home from "../pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<ShowDetail />} />
      </Routes>
    </Router>
  );
};

export default App;