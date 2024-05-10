import React, { useState, useEffect } from 'react';
import './css/patientlist.css'; // Import the CSS file
import Navbar from './component/adminnavbar';

const Adminpatient = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/admin/patients');
        if (!response.ok) {
          throw new Error('Failed to fetch patients');
        }
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
        <Navbar/>
        <div className="patient-list-container">
        
      <h2>Patient List</h2>
      <table className="patient-table"> {/* Apply table class */}
        <thead>
          <tr>
            <th>Birthcertificate id</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email</th>
            
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient._id}>
               <td>{patient.birthCertificateId}</td> 
              <td>{patient.fullName}</td>
              <td>{patient.username}</td>
              <td>{patient.email}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Adminpatient;
