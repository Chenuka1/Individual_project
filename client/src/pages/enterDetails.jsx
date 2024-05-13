import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/enterdetails.css';
import { useNavigate } from 'react-router-dom';

export default function Addetails() {
    const { birthId } = useParams(); // Assuming birthId is part of the URL params
    const navigate = useNavigate();
    const [medicalHistory, setMedicalHistory] = useState({
        pastDiseases: '',
        allergies: '',
        appointmentDate: '',
        medications: '',
        blood:'',
        surgery: '',
        
    });

    const fetchMedicalHistory = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/patients/${birthId}/medical-history`);
            if (!response.ok) {
                throw new Error('Failed to fetch medical history');
            }
            const data = await response.json();
            // Update medicalHistory state with fetched data
            setMedicalHistory(data);
        } catch (error) {
            console.error('Error fetching medical history:', error);
        }
    };

    useEffect(() => {
        // Fetch existing medical history of the patient using their birth certificate ID
        fetchMedicalHistory();
    }, [birthId]);


    const formatDate = (dateString) => {
        if (!dateString) return ''; // Return empty string if date is null or undefined
        try {
            const date = new Date(dateString);
            return date.toISOString().split('T')[0];
        } catch (error) {
            console.error('Error formatting date:', error);
            return 'Invalid Date';
        }
    };

    

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Check if the input is a date field
        if (name === 'appointmentDate' || name === 'vaccinedate' || name === 'upcomingvaccinedate') {
            // Format the date to "yyyy-MM-dd"
            const formattedDate = new Date(value).toISOString().split('T')[0];
            setMedicalHistory({
                ...medicalHistory,
                [name]: formattedDate,
            });
        } else {
            setMedicalHistory({
                ...medicalHistory,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/api/patients/${birthId}/medical-history`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(medicalHistory),
            });
            if (!response.ok) {
                throw new Error('Failed to update medical history');
            }
            console.log('patient details updated successfully');
            alert('Medical history updated successfully');
           

            // Optionally, redirect the user to another page or show a success message
        } catch (error) {
            console.error('Error updating medical history:', error);
            // Handle error - show error message or retry logic
        }
    };

    

    return (
        <div className="addpatient">
            <div className="medical-history-container">
                <div className="medical-history">
                    <h1>Update Medical History</h1>
                    <form onSubmit={handleSubmit} className="shadow-box">
                        <label htmlFor="pastDisease">Past Diseases:</label>
                        <input type="text" name="pastDiseases" value={medicalHistory.pastDiseases} onChange={handleChange} />
                        <label htmlFor="allergies">Allergies:</label>
                        <input type="text" name="allergies" value={medicalHistory.allergies} onChange={handleChange} />
                        <label htmlFor="blood group">Blood group</label>
                        <input type="text" name="blood" value={medicalHistory.blood} onChange={handleChange}/>
                        <label htmlFor="appointmentDate">Appointment Date:</label>
                        <input type="date" name="appointmentDate" value={medicalHistory.appointmentDate} onChange={handleChange} />
                        <label htmlFor="medications">Medications:</label>
                        <input type="text" name="medications" value={medicalHistory.medications} onChange={handleChange} />
                        <label htmlFor="surgery">Surgery information:</label>
                        <input type="text" name="surgery" value={medicalHistory.surgery} onChange={handleChange} />
                        <label htmlFor="weight">weight:</label>
                        <input type="float" name="weight" value={medicalHistory.weight} onChange={handleChange} /><br></br>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="vaccine-history-container">
                <div className="vaccine-history">
                    <h1>Update personal details history</h1>
                    <form onSubmit={handleSubmit} className="shadow-box1">
                        <label htmlFor="birthdate">Birthdate:</label>
                        <input type="date" name="birthdate" onChange={handleChange} value={formatDate(medicalHistory.birthdate)} />

                        <label htmlFor="birthdate">Birthdate:</label>
                        <input type="text" name="fullName" onChange={handleChange} value={medicalHistory.fullName} />

                        <label htmlFor="gender">Gender:</label>
                        <select  onChange={handleChange}>
                            
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>

                        <label htmlFor="Parent">Parent/Guardiant</label>
                        <input type="text" name="parentsName" onChange={handleChange} value={medicalHistory.parentsName} />

                        <label htmlFor="Contact">Contact number</label>
                        <input type="text" name="contactNumber" onChange={handleChange} value={medicalHistory.contactNumber} />

                        <label htmlFor="Contact">Patient address</label>
                        <input type="text" name="address" onChange={handleChange} value={medicalHistory.address} />


                        
                        

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}