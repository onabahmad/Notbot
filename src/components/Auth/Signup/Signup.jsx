import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { MdArrowRightAlt } from "react-icons/md";

const Signup = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    localStorage.setItem("userDetails", JSON.stringify(formData));

    alert("Signup Successful Now Please Login ");
    Navigate("/");
  };

  const handleAlreadyRegister = () => {
    Navigate("/");
  };

  const handleGooglelogin = () => {
    alert(
      "For Google Signup, we will need a backend or integration with Firebase."
    );
  };

  return (
    <div className="login">
      <div className="heading">
        <CiCalendar className="heading-logo" />
        TidyCal
      </div>
      <div className="login-heading-container signup">
        <h2 className="login-heading signup-heading">
          Cool! Let's get you registered
        </h2>
      </div>
      <div className="login-container">
        <form className="login-form">
          <label className="form-label">
            Your name:
            <input
              type="text"
              className="form-input"
              name="name"
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label className="form-label">
            Your email:
            <input
              type="text"
              className="form-input"
              name="email"
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label className="form-label">
            Your password:
            <input
              type="password"
              className="form-input"
              name="password"
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label className="form-label">
            Confirm your password:
            <input
              type="password"
              className="form-input"
              name="confirmPassword"
              onChange={handleInputChange}
            />
          </label>
          {passwordMatchError && (
            <p className="error-message">Password does't match.</p>
          )}
          <br />

          <button
            type="button"
            className="login-button"
            onClick={handleRegister}
          >
            Register
            <MdArrowRightAlt />
          </button>
          <div className="horizontal-line">
            <hr />
            or <hr />
          </div>
          <button onClick={handleGooglelogin} className="google-login-button">
            <div className="google-login-button-container">
              <FcGoogle className="google-logo" />
              Register with Google
            </div>
          </button>
        </form>
      </div>
      <div className="register signup_register">
        <p onClick={handleAlreadyRegister}>Already registered?</p>
      </div>
    </div>
  );
};

export default Signup;
