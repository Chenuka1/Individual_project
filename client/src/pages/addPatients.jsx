// addPatients.jsx
import React, { useState } from "react";
import '../styles/addPatients.css'


function Addpatients() {
  const [formData, setFormData] = useState({
    birthCertificateId: "",
    fullName: "",
    birthdate: "",
    gender: "",
    parentsName: "",
    contactNumber: "",
    registeredHospital: ""
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    // Validate birthCertificateId
    if (!formData.birthCertificateId.trim()) {
      errors.birthCertificateId = "Birth certificate ID is required";
    }

    if (!formData.fullName.trim()) {
      errors.firstName = "Fullname is required";
    }

    

    // Validate birthdate
    if (!formData.birthdate) {
      errors.birthdate = "Birthdate is required";
    }
    // Validate gender
    if (!formData.gender) {
      errors.gender = "Gender is required";
    }

    // Validate parentsName
    if (!formData.parentsName.trim()) {
      errors.parentsName = "Parents or guardians name is required";
    }

    if (!formData.contactNumber || formData.contactNumber.length < 10) {
      errors.contactNumber =
        "Contact number should have at least 10 digits";
    }

    // Validate contactNumber
    if (!formData.contactNumber) {
      errors.contactNumber = "Contact number is required";
    }

    // Validate registeredHospital
    if (!formData.registeredHospital) {
      errors.registeredHospital = "Registered hospital is required";
    }

    // Update the state with the errors
    setFormErrors(errors);

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Assuming you have a function to post data to your server
    try {
      const response = await fetch(
        "http://localhost:4000/api/patients/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        console.log("User created successfully");
        alert("User created successfully");
        // You can reset the form or perform other actions after successful submission
        setFormData({
          birthCertificateId: "",
          fullName: "",
          birthdate: "",
          gender: "",
          parentsName: "",
          contactNumber: "",
          registeredHospital: ""
        });
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error);
    }
  };

  return (
    <div className="form">
      <h1>Add new patients</h1>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="birthCertificateId">Enter birth certificate ID</label>
        <input
          type="text"
          placeholder="Birth certificate id"
          name="birthCertificateId"
          value={formData.birthCertificateId}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="fullName">Enter the full name</label>
        <input
          type="text"
          placeholder="Enter full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="birthdate">Enter the birthdate</label>
        <input
          type="date"
          placeholder="Enter birthdate"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="gender">Enter gender</label>
        <label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
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
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <br />
        <label htmlFor="parentsName">Enter parents or guardians name</label>
        <input
          type="text"
          placeholder="Enter parents name"
          name="parentsName"
          value={formData.parentsName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="contactNumber">
          Enter parents/Guardian phone number
        </label>
        <input
          type="number"
          placeholder="Contact number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="registeredHospital">Select registered hospital</label>
        <select
          name="registeredHospital"
          value={formData.registeredHospital}
          onChange={handleChange}
        >
          <option>Banadaragama hospital</option>
          <option>Asiri hospital</option>
        </select>
        <br />

        <input type="submit" value="Submit" />
        <input type="reset" value="Cancel" />
        {/* Display errors */}
      {Object.keys(formErrors).length > 0 && (
        <div className="error-container">
          {Object.values(formErrors).map((error, index) => (
            <div key={index} className="error">
              {error}
            </div>
          ))}
        </div>
      )}
      </form>
    </div>
  );
}

export default Addpatients;
