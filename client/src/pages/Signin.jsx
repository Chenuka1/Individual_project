import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles/signin.css'

export default function Signin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                
                const { user } = await response.json();
                // Assuming you're receiving user data from the server upon successful login
                if (user) {
                    // Optionally, you can store user data in localStorage
                    localStorage.setItem('user', JSON.stringify(user)); 
                    navigate("/home");
                } else {
                    throw new Error('No user data received');
                }
            } else {
                const errorMessage = await response.text();
                throw new Error(errorMessage || 'Failed to sign in');
            }
        } catch (error) {
            console.error('Error signing in:', error);
            alert('An error occurred while signing in. Please try again.');
        }
    };

    return (
        <div className="sign">
            <form className="signinform" onSubmit={handleSubmit}>
                <h1>Log in</h1>
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

                <input type="submit" value="Sign in" className="signin-input" />
                
            </form>
        </div>
    );
};
