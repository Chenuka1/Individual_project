import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import image from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul>
          <li>
            <img src={image} alt="Logo" className="logo" />
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/register">Add patients</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/medicalhistory">Medical details</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
