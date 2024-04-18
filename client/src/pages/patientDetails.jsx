
//patientDetails.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/patientDetails.css'

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

    const formatDate=(birthdate)=>{
        const date=new Date(birthdate);
        return date.toISOString().split('T')[0];



    }

    return (
        <div className="details">
            <form onSubmit={handleSearch}>
                <div className='search'>
                    <input type="text" placeholder="Enter Birth Certificate ID to searh the patient" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button type="submit">Search</button>
                </div>
            </form>

            {error && <p className="error-message">{error}</p>}

            {patientDetails && (
                <>
                    <h1>Patient Details</h1>
                    <table >
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
                            <tr>
                                <td>Registered Hospital:</td>
                                <td>{patientDetails.registeredHospital}</td>
                            </tr>
                            <tr>
                                <td>Past diseases</td>
                                <td>{patientDetails.pastDiseases}</td>
                            </tr>
                            <tr>
                                <td>Allergies</td>
                                <td>{patientDetails.allergies}</td>
                            </tr>
                            <tr>
                                <td>Medications</td>
                                <td>{patientDetails.medications}</td>
                            </tr>
                            <tr>
                                <td>Past surgery</td>
                                <td>{patientDetails.surgery}</td>
                            </tr>
                        </tbody>
                        
                    </table>
                    <h1>Immunization records</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>Completed vaccine</td>
                                <td>{patientDetails.vaccinename}</td>
                            </tr>
                            <tr>
                                <td>Date of administration</td>
                                <td>{formatDate(patientDetails.vaccinedate)}</td>
                            </tr>
                            <tr>
                                <td>age</td>
                                <td>{patientDetails.age}</td>
                            </tr>
                            <tr>
                                <td>Upcoming vaccine name</td>
                                <td>{patientDetails.upcomingVaccine}</td>
                            </tr>
                            <tr>
                                <td>Upcoming vaccine date</td>
                                <td>{formatDate(patientDetails.upcomingvaccinedate)}</td>
                            </tr>






                        </tbody>
                    </table>

                    <Link to={`/addetails/${patientDetails.birthCertificateId}`}><u>Enter medical information for the patient</u></Link>
                </>
            )}
        </div>
    );
}
