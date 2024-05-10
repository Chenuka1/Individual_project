import React from "react";
import { Link } from "react-router-dom";
import "../css/adminnavbar.css"; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar1">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/patientlist" className="nav-link">Patients</Link>
        </li>
        <li className="nav-item">
          <Link to="/addstaff" className="nav-link">Medical Staff</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
