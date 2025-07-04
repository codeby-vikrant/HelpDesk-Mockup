import React, { useState } from "react";
import "../styles/navbar.css";
import { FaBell } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [switchValue, setSwitchValue] = useState("bm");

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Helpdesk</h2>
      </div>
      <div className="navbar-right">
        <div className="switch-box">
          <button
            className={
              switchValue === "bm" ? "switch-btn active" : "switch-btn"
            }
            onClick={() => setSwitchValue("bm")}
          >
            BM
          </button>
          <button
            className={
              switchValue === "bi" ? "switch-btn active" : "switch-btn"
            }
            onClick={() => setSwitchValue("bi")}
          >
            BI
          </button>
        </div>
        <span className="icon notification" title="Notifications">
          <FaBell />
        </span>
        <span className="icon profile" title="Profile">
          <IoPerson />
        </span>
        <Link to="/" className="icon-logout-link">
          <span className="icon logout" title="Logout">
            <MdLogout />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
