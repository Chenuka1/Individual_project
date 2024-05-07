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
        vaccinename: '',
        vaccinedate: '',
        ageinMonths: '',
        upcomingVaccine: '',
        upcomingvaccinedate: '',
        upcomingvaccinestatus: 'pending'
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
            console.log('Medical history updated successfully');
            alert('Medical history updated successfully');
            navigate('/details');

            // Optionally, redirect the user to another page or show a success message
        } catch (error) {
            console.error('Error updating medical history:', error);
            // Handle error - show error message or retry logic
        }
    };

    const handleSubmit1 = async (e) => {
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
            console.log('Vaccine history updated successfully');
            alert('Vaccine history updated successfully');

            // Optionally, redirect the user to another page or show a success message
        } catch (error) {
            console.error('Error updating medical history:', error);
            // Handle error - show error message or retry logic
        }
    };

    return (
        <div className="container1">
            <div className="medical-history-container">
                <div className="medical-history">
                    <h1>Update Medical History</h1>
                    <form onSubmit={handleSubmit} className="shadow-box">
                        <label htmlFor="pastDiseases">Past Diseases:</label>
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

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="vaccine-history-container">
                <div className="vaccine-history">
                    <h1>Update vaccine history</h1>
                    <form onSubmit={handleSubmit1} className="shadow-box1">
                        <label htmlFor="birthdate">Birthdate:</label>
                        <input type="date" name="birthdate" onChange={handleChange} value={medicalHistory.birthdate} />

                        <label>Vaccine name</label>
                        <input type="text" name="vaccinename" onChange={handleChange} value={medicalHistory.vaccinename} />

                        <label>Date of vaccination</label>
                        <input type="date" name="vaccinedate" onChange={handleChange} value={medicalHistory.vaccinedate} />

                        <label>Upcoming vaccine name</label>
                        <input type="text" name="upcomingVaccine" onChange={handleChange} value={medicalHistory.upcomingVaccine} />

                        <label>Next vaccination date</label>
                        <input type="date" name="upcomingvaccinedate" onChange={handleChange} value={medicalHistory.upcomingvaccinedate} />

                        <label htmlFor="upcomingvaccinestatus">Upcoming Vaccine Status:</label>
                        <select name="upcomingvaccinestatus" value={medicalHistory.upcomingvaccinestatus} onChange={handleChange}>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                        

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
