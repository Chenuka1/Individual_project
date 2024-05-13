import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import image from '../assets/logo.jpg';
import image1 from '../assets/profile.jpg';

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <img src={image} alt="Logo" className="logo" />
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/addpatients">Add Patients</Link></li>
          <li><Link to="/details">patient details</Link></li>
          <li><Link to="/services">services</Link></li>   
          <li><Link to="/dashboard">Admin dashboard</Link></li>
          <li><Link to="/milestone">Growth</Link></li>
        </ul>
        <div className="profile-dropdown">
          <img
            src={image1}
            alt="Profile"
            className="profile-image"
            onClick={toggleDropdown}
          />
          <i className={`fas fa-caret-${isDropdownOpen ? 'up' : 'down'}`} onClick={toggleDropdown}></i>
          {isDropdownOpen && (
            <ul className="dropdown-menu show-dropdown" onMouseLeave={closeDropdown}>
              <li onClick={handleLogout}>Logout</li>
              <li><Link to="">Sign In</Link></li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
