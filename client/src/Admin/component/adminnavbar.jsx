import React from "react";
import { Link } from "react-router-dom";
import "../css/adminnavbar.css"; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar1">
      <ul className="nav-menu"> {/* Change class name to nav-menu */}
        <li className="nav-item">
          <Link to="/users" className="nav-link">Healthcare providers</Link>
        </li>
        <li className="nav-item">
          <Link to="/addstaff" className="nav-link">Add users</Link>
        </li>
        <li className="nav-item">
          <Link to="/email" className="nav-link">Send Email</Link> {/* Corrected typo in link text */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
