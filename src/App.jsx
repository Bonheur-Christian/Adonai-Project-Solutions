// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/about";
import WhyUs from "./Pages/WhyUs";
import Services from "./Pages/Services";
import News from "./Pages/News";
import Contacts from "./Pages/Contacts";
import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";

function App() {
  function ProtectedRoute() {
    const code = JSON.parse(localStorage.getItem("code"));
    if (!code) {
      return <Navigate to={"/signin"} />;
    }
    return <Outlet />;
  }
  return (
    <div className="bg-white dark:bg-gray-800">
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<WhyUs />} path="/whyus" />
          <Route element={<Services />} path="/services" />
          <Route element={<News />} path="/news" />
          <Route element={<Contacts />} path="/contacts" />
          <Route element={<Signin />} path="/signin" />
          <Route element={<ProtectedRoute />}>
          <Route element={<Dashboard />} path="/dashboard" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
