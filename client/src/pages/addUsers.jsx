// addUsers.jsx
import React, { useState } from "react";
import '../styles/addUsers.css';

function AddUsers() {

  const [formData, setFormData] = useState({
    birthCertificateId: "",
    firstName: "",
    lastName: "",
    birthdate: "",
    gender: "",
    parentsName: "",
    contactNumber: "",
    registeredHospital: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Assuming you have a function to post data to your server
    try {
      const response = await fetch('http://localhost:4000/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User created successfully');
        alert("user created sucessfully");
        // You can reset the form or perform other actions after successful submission
        setFormData({
          birthCertificateId: "",
          firstName: "",
          lastName: "",
          birthdate: "",
          gender: "",
          parentsName: "",
          contactNumber: "",
          registeredHospital: ""
        });
      } else {
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  return (
    <div className="form">
      <h1>Add new users</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="birthCertificateId">Enter birth certificate ID</label>
        <input
          type="text"
          placeholder="Birth certificate id"
          name="birthCertificateId"
          value={formData.birthCertificateId}
          onChange={handleChange}
        /><br></br>
        <label htmlFor="firstName">Enter the first name</label>
        <input
          type="text"
          placeholder="Enter first name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        /><br></br>
        <label htmlFor="lastName">Enter the last name</label>
        <input
          type="text"
          placeholder="Enter last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        /><br></br>
        <label htmlFor="birthdate">Enter the birthdate</label>
        <input
          type="date"
          placeholder="Enter birthdate"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
        /><br></br>
        <label htmlFor="gender">Enter gender</label>
        <label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
        <br></br>
        <label htmlFor="parentsName">Enter parents or guardians name</label>
        <input
          type="text"
          placeholder="Enter parents name"
          name="parentsName"
          value={formData.parentsName}
          onChange={handleChange}
        /><br></br>
        <label htmlFor="contactNumber">Enter parents/Guardian phone number</label>
        <input
          type="number"
          placeholder="Contact number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
        /><br></br>
        <label htmlFor="registeredHospital">Select registered hospital</label>
        <select
          name="registeredHospital"
          value={formData.registeredHospital}
          onChange={handleChange}
        >
          <option>Banadaragama hospital</option>
          <option>Asiri hospital</option>
        </select><br></br>

        <input type="submit" value="Submit"  />
        <input type="reset" value="Cancel" />
      </form>
    </div>
  );
}

export default AddUsers;
