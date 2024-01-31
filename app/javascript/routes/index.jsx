import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home/index";
import Login from "../components/Login/index";
import Signup from "../components/Signup/index"

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);
