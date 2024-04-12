import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import image from '../assets/logo.jpg';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    navigate('/'); // Redirect to the login page
  };

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
            <Link to="/details">Patient details</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
