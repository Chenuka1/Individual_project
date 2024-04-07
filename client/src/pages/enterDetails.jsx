// Addetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Addetails() {
    const { birthId } = useParams(); // Assuming birthId is part of the URL params
    const [medicalHistory, setMedicalHistory] = useState({
        pastDiseases: '',
        allergies: '',
        appointmentDate: '',
        medications: ''
    });

    useEffect(() => {
        // Fetch existing medical history of the patient using their birth certificate ID
        fetchMedicalHistory();
    }, [birthId]);

    const fetchMedicalHistory = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/patients/${birthId}/medical-history`);
            if (!response.ok) {
                throw new Error('Failed to fetch medical history');
            }
            const data = await response.json();
            setMedicalHistory(data);
        } catch (error) {
            console.error('Error fetching medical history:', error);
        }
    };

    const handleChange = (e) => {
        setMedicalHistory({
            ...medicalHistory,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/api/patients/${birthId}/medical-history`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(medicalHistory)
            });
            if (!response.ok) {
                throw new Error('Failed to update medical history');
            }
            console.log('Medical history updated successfully');
            // Optionally, redirect the user to another page or show a success message
        } catch (error) {
            console.error('Error updating medical history:', error);
            // Handle error - show error message or retry logic
        }
    };

    return (
        <div>
            <h1>Update Medical History</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pastDiseases">Past Diseases:</label>
                <input type="text" name="pastDiseases" value={medicalHistory.pastDiseases} onChange={handleChange} />
                <label htmlFor="allergies">Allergies:</label>
                <input type="text" name="allergies" value={medicalHistory.allergies} onChange={handleChange} />
                <label htmlFor="appointmentDate">Appointment Date:</label>
                <input type="date" name="appointmentDate" value={medicalHistory.appointmentDate} onChange={handleChange} />
                <label htmlFor="medications">Medications:</label>
                <input type="text" name="medications" value={medicalHistory.medications} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
