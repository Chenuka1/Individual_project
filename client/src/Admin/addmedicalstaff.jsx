//addmedicalstaff.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/medicalstaff.css';
import Navbar from "./component/adminnavbar";

export default function MedicalStaff() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        contact: "",
        hospital: "",
        position: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if required fields are empty
        if (
            !formData.fullName ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword ||
            !formData.contact ||
            !formData.hospital ||
            !formData.position
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        // Validation for email format (optional)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validation for password and confirm password match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            // Get token from localStorage
            const token = localStorage.getItem('token');

            const response = await fetch('http://localhost:4000/api/medicalstaff/staff', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Include token in the request headers
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('User entered successfully!');
                setFormData({
                    Identity:"",
                    fullName: "",
                    email: "",
                    password: "",
                    contact: "",
                    hospital: "",
                    position: ""
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
        <div className="">
            <Navbar/>
            
            <div className="medical-staff-container">
            <h1>Enter Medical Staff</h1>
            <form onSubmit={handleSubmit} className="medical-staff-form">
                <table>
                    <tbody>
                    <tr>
                            <td>Identity</td>
                            <td>
                                <input
                                    type="text"
                                    id="identity"
                                    name="identity"
                                    placeholder="Enter identity"
                                    value={formData.identity}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Full Name</td>
                            <td>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Enter Full Name"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Email Address</td>
                            <td>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Email Address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Confirm Password</td>
                            <td>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Contact Information</td>
                            <td>
                                <input
                                    type="text"
                                    id="contact"
                                    name="contact"
                                    placeholder="Enter Contact Information"
                                    value={formData.contact}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Select Your Hospital</td>
                            <td>
                                <select
                                    name="hospital"
                                    value={formData.hospital}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Hospital</option>
                                    <option value="Hospital 1">Hospital 1</option>
                                    <option value="Hospital 2">Hospital 2</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Select Your Position</td>
                            <td>
                                <select
                                    name="position"
                                    value={formData.position}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Position</option>
                                    <option value="Doctor">Doctor</option>
                                    <option value="Nurse">Nurse</option>
                                    <option value="Midwife">Midwife</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
            </div>
        </div>
    );
}
