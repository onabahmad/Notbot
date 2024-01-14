import React, { useState } from "react";
import "./login.css";

import { CiCalendar } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const Navigate = useNavigate();

  const handleRegister = () => {
    Navigate("/signup");
  };

  const handleLogin = () => {
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (
      storedUserDetails &&
      username === storedUserDetails.email &&
      password === storedUserDetails.password
    ) {
      alert("Login successful!");
      setLoggedIn(true);

      const defaultBookings = [
        {
          title: "Default Booking 1",
          url: "https://example.com/booking1",
          isActive: true,
          duration: 30,
          description: "This is the default booking card.",
        },
        {
          title: "Default Booking 2",
          url: "https://example.com/booking2",
          isActive: false,
          duration: 45,
          description: "This is the default booking card.",
        },
      ];

      localStorage.setItem("bookingData", JSON.stringify(defaultBookings));

      Navigate("/Home");
    } else {
      alert("Invalid email or password. Please Register first.");
    }
  };
  const handleGooglelogin = () => {
    alert(
      "For Login with Google, we will need a backend or integration with Firebase."
    );
  };

  return (
    <div className="login">
      <div className="heading">
        <CiCalendar className="heading-logo" />
        TidyCal
      </div>
      <div className="login-container">
        <div className="login-heading-container">
          <h2 className="login-heading">Login</h2>
        </div>

        <form className="login-form">
          <label className="form-label">
            Your email:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Your password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </label>

          <div className="remember-me">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>

          <button type="button" onClick={handleLogin} className="login-button">
            Login
            <MdArrowRightAlt />
          </button>
          <div className="horizontal-line">
            <hr />
            or <hr />
          </div>
          <button onClick={handleGooglelogin} className="google-login-button">
            <div className="google-login-button-container">
              <FcGoogle className="google-logo" />
              Login with Google
            </div>
          </button>
          <div className="register">
            <p>Forget your password?</p>
            <p onClick={handleRegister}>Not registered?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
