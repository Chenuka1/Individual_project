import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import image from '../assets/logo.jpg';
import image1 from '../assets/profile.jpg';

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <img src={image} alt="Logo" className="logo" />
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/addpatients">Add patients</Link></li>
          <li><Link to="/details">Patient details</Link></li>
        </ul>
        <div className="profile-dropdown">
          <img
            src={image1}
            alt="Profile"
            className="profile-image"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          <i className={`fas fa-caret-${isDropdownOpen ? 'up' : 'down'}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}></i>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={handleLogout}>Logout</li>
              <li><Link to="">Signin</Link></li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
