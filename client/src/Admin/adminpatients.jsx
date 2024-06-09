import React, { useState, useEffect } from 'react';
import './css/patientlist.css'; // Import the CSS file
import Navbar from './component/adminnavbar';
import { useNavigate } from 'react-router-dom';

const Adminpatient = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/admin/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSendEmail = (user) => {
    // Redirect to email form page with user's email as state
    navigate(`/email`, { state: { recipient: user.email } });
  };

  return (
    <div>
      <Navbar />
      <div className="patient-list-container">
        <h2>Health care providers in the system</h2>
        <table className="patient-table">
          <thead>
            <tr>
              
              <th>Full Name</th>
              <th>Position</th>
              <th>Email</th>
              <th>Send email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.identity}>
                
                <td>{user.fullName}</td>
                <td>{user.position}</td>              
                <td>{user.email}</td>
                <td>
                  <button className="send-button"onClick={() => handleSendEmail(user)}>
                    Send email
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminpatient;
