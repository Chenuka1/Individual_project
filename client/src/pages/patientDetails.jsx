import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/patientDetails.css';

export default function PatientDetails() {
    const [searchQuery, setSearchQuery] = useState('');
    const [patientDetails, setPatientDetails] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        // Call backend API to search for patient details using birth certificate ID
        try {
            const response = await fetch(`http://localhost:4000/api/search?id=${searchQuery}`);
            if (!response.ok) {
                throw new Error('Failed to fetch patient details');
            }
            const data = await response.json();
            setPatientDetails(data);
            setError(null); // Reset error state
        } catch (error) {
            console.error('Error searching for patient:', error);
            setError('Patient not found'); // Set error state
            setPatientDetails(null); // Reset patient details
        }
    };

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
    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!patientDetails) return; // Ensure patientDetails is not null
        const patientId = patientDetails.birthCertificateId; // Extract patient ID from patientDetails
    
        try {
            const response = await fetch(`http://localhost:4000/api/patients/patients/${patientId}/upcomingVaccine`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ upcomingVaccine: patientDetails.upcomingVaccine })
                
            });
            if (!response.ok) {
                throw new Error('Failed to update vaccination schedule');
            }
            const updatedData = await response.json();
            setPatientDetails(updatedData);
            setError(null); // Reset error state
        } catch (error) {
            console.error('Error updating vaccination schedule:', error);
            setError('Failed to update vaccination schedule'); // Set error state
        }
        alert("update sucessfully");
    };
    
    const handleVaccineChange = (index, field, value) => {
        const updatedVaccines = [...patientDetails.upcomingVaccine];
        updatedVaccines[index][field] = value;
        setPatientDetails({ ...patientDetails, upcomingVaccine: updatedVaccines });
    };

    return (
        <div className="details">
            <form onSubmit={handleSearch}>
                <div className='search'>
                    <input type="text" placeholder="Enter Birth Certificate ID to search for the patient" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button type="submit">Search</button>
                </div>
            </form>

            {error && <p className="error-message">{error}</p>}

            {patientDetails && (
                <>
                    <h2>Basic deatils</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Birth Certificate ID:</td>
                                <td>{patientDetails.birthCertificateId}</td>
                            </tr>
                            <tr>
                                <td>Full Name:</td>
                                <td>{patientDetails.fullName}</td>
                            </tr>
                            <tr>
                                <td>Birthdate:</td>
                                <td>{formatDate(patientDetails.birthdate)}</td>
                            </tr>
                            <tr>
                                <td>Gender:</td>
                                <td>{patientDetails.gender}</td>
                            </tr>
                            <tr>
                                <td>Parents Name:</td>
                                <td>{patientDetails.parentsName}</td>
                            </tr>
                            <tr>
                                <td>Contact Number:</td>
                                <td>{patientDetails.contactNumber}</td>
                            </tr>
                            
                        </tbody>
                    </table>

                    <h2>Past medical history</h2>
                    <table>
                            <tr>
                                <td>Weight</td>
                                <td>{patientDetails.weight}kg</td>
                            </tr>
                            <tr>
                                <td>Blood group:</td>
                                <td>{patientDetails.blood}</td>
                            </tr>
                            <tr>
                                <td>Registered Hospital:</td>
                                <td>{patientDetails.registeredHospital}</td>
                            </tr>
                            <tr>
                                <td>Past Diseases:</td>
                                <td>{patientDetails.pastDiseases}</td>
                            </tr>
                            <tr>
                                <td>Allergies:</td>
                                <td>{patientDetails.allergies}</td>
                            </tr>
                            <tr>
                                <td>Medications:</td>
                                <td>{patientDetails.medications}</td>
                            </tr>
                            <tr>
                                <td>Past Surgery:</td>
                                <td>{patientDetails.surgery}</td>
                            </tr>
                    </table>
                    <Link style={{ color: 'blue' }} to={`/addetails/${patientDetails.birthCertificateId}`}><u>Enter medical information for the patient</u></Link><br></br>

                    
                    <h2>Vaccination Schedule</h2>
                    {patientDetails.upcomingVaccine && patientDetails.upcomingVaccine.length > 0 ? (
    <table>
        <thead>
            <tr>
                <td><b>Vaccine Name</b></td>
                <td><b>Upcoming Vaccination Date</b></td>
                <td><b>Dose</b></td>
                <td><b>Status</b></td>
            </tr>
        </thead>
        <tbody>
            {patientDetails.upcomingVaccine.map((vaccine, index) => (
                <tr key={index}>
                    <td><input type="text" value={vaccine.vaccine} onChange={(e) => handleVaccineChange(index, 'vaccine', e.target.value)} /></td>
                    <td><input type="date" value={formatDate(vaccine.upcomingVaccinationDate)} onChange={(e) => handleVaccineChange(index, 'upcomingVaccinationDate', e.target.value)} /></td>
                    <td><input type="text" value={vaccine.Dose} onChange={(e) => handleVaccineChange(index, 'Dose', e.target.value)} /></td>
                    <td>
                        <select value={vaccine.status} onChange={(e) => handleVaccineChange(index, 'status', e.target.value)}>
                            {vaccine.status}                       
                            <option value="pending">pending</option>
                            <option value="Completed">Completed</option>
                            
                        </select>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
) : (
    <p>No upcoming vaccinations</p>
)}
                    <button className="btn"onClick={handleUpdate}>Update Vaccination Schedule</button>
                    <br></br>


                    
                    
                    
                </>
            )}
            <div className='emptyspace'></div>
        </div>
    );
}