// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/about";
import WhyUs from "./Pages/WhyUs";
import Services from "./Pages/services";

function App() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<WhyUs/>} path="/whyus" />
          <Route element={<Services/>} path="/services" />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
