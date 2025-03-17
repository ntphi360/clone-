import { useState, useEffect } from "react";
import React from "react";
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../component/Navbar/navbar";
import Home from "../pages/Home/index";

const App = () => {


  return (
    <div className="max-w-full">
      <div className="container mx-auto">
        <Navbar/>
        <Home />
      
      </div>
    </div>
  );
};

export default App;
