import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="bg-white dark:bg-black">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
