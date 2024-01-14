import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaSmile } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavOptions = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="sidebar-container">
      <div className="large-sidebar">
        <CiCalendar className="calendar-icon" />
        <ul className="menu-list">
          <li className="menu-item">Booking Types</li>
          <li className="menu-item">Date Polls</li>
          <li className="menu-item">My Bookings</li>
          <li className="menu-item">My Contact</li>
        </ul>
        <div className="upgrade-section">
          <h4 className="upgrade-title">Upgrade $29 lifetime access!</h4>
          <FaSmile className="smile-icon" />
          <p className="user-info">User</p>
          <span className="earning-section">
            <p>Earning:</p>

            <p className="earning-amount">$0.00</p>
          </span>
          <FiMenu onClick={handleNavOptions} className="menu-icon" />
        </div>
      </div>
      <div>
        <ul className={showNav ? "small-menu" : "nodisplay"}>
          <div className="options">
            <li>
              <Link to={""}>
                Settings
                <br />
                Integration
              </Link>
            </li>
            <li>
              <Link to={""}>Pricing</Link>
            </li>
            <li>
              <Link to={""}>Roadmap</Link>
            </li>
            <li>
              <Link to={"/"}>logout</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
