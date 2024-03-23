import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/signup.css';

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    contact: "",
    registeredHospital: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Sign up successful!');
        setFormData({
          fullName: "",
          email: "",
          password: "",
          contact: "",
          registeredHospital: ""
        });
        navigate("/");
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('An error occurred while signing up. Please try again.');
    }
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h2>Create accounts for healthcare providers</h2>

        <div>
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="contact">Contact information</label>
          <input
            type="number"
            id="contact"
            name="contact"
            placeholder="Enter phone number"
            value={formData.contact}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="hospital">Select your hospital</label>
          <select
            name="registeredHospital"
            value={formData.registeredHospital}
            onChange={handleInputChange}
          >
            <option></option>
            <option value="Bandaragama hospital">Bandaragama hospital</option>
            <option value="Asiri hospital">Asiri hospital</option>
            <option value="Nawaloka hospital">Nawaloka hospital</option>
          </select>
        </div>

        <input type="submit" value="Sign Up" />
        <input type="reset" value="Clear" />
      </form>
    </div>
  );
}
