import React, { useState, useEffect } from "react";
import './css/adminemail.css';
import Navbar from "./component/adminnavbar";
import { useLocation } from 'react-router-dom';

const Email = () => {
    const location = useLocation();
    const initialRecipient = location.state?.recipient || '';
    const [recipient, setRecipient] = useState(initialRecipient);
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (location.state?.recipient) {
            setRecipient(location.state.recipient);
        }
    }, [location.state]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:4000/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ recipient, subject, body }),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            alert("Email sent successfully");
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error.message);
        }
    }

    return (
        <div>
            <Navbar />
            <br />
            <div className="container1">
                <h1>Send Email</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="recipient">Recipient:</label>
                        <input
                            type="email"
                            id="recipient"
                            value={recipient}
                            onChange={(event) => setRecipient(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="body">Body:</label>
                        <textarea
                            id="body"
                            value={body}
                            onChange={(event) => setBody(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Email;
