import React, { useState } from "react";
import styles from '../styles/midwifeSignup.module.css';



export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here


  };

  return (
    <div>
      <br></br>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h1>Create midwife accounts</h1>

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

        <input type="submit" value="Sign Up" />
        <input type="reset" value="Clear" />
      </form>
    </div>
  );
}
