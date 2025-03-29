import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./styles.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCountries } from "./redux/slices/countrySlice";
import Footer from "./components/Footer";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries()); // Fetch countries on mount
  }, [dispatch]);
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
