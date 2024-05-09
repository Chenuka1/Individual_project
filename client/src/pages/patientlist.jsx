// PatientList.js

import React, { useState, useEffect } from 'react';


const PatientList = ({ authToken }) => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/patients/assign', {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                });
                setPatients(response.data);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
    }, [authToken]);

    return (
        <div>
            <h2>Assigned Patients</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Condition</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient => (
                        <tr key={patient._id}>
                            <td>{patient.name}</td>
                            <td>{patient.age}</td>
                            <td>{patient.condition}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientList;


