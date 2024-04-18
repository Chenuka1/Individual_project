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
          
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/addpatients">Add patients</Link>
          </li>
          <li>
            <Link to="/details">Patient details</Link>
          </li>
          <li>
            <Link>Staff support</Link>
          </li>
          <li>
            <Link>Our services</Link>
          </li>
          
            
            
          
        </ul>
        <img src={image1} alt="Profile" className="profile-image" />
        
      </nav>
      
    </div>
  );
};

export default Navbar;
