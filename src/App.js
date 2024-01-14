import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login/login";
import Signup from "./components/Auth/Signup/Signup";
import Home from "./components/Home/Home";
import BookingForm from "./components/BookingForm/BookingForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
