import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateVaccineForm = () => {
  const { birthId } = useParams(); // Assuming birthId is part of the URL params
  const [vaccineDetails, setVaccineDetails] = useState([

    
  ]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVaccineDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/vaccine/${birthId}/upcoming-vaccines`);
        if (!response.ok) {
          throw new Error('Failed to fetch vaccine details');
        }
        const data = await response.json();
        setVaccineDetails(data.upcomingVaccine || []); // Ensure vaccineDetails is not undefined
        setError(null); // Clear any previous error
      } catch (error) {
        console.error('Error fetching vaccine details:', error);
        setError('Failed to fetch vaccine details. Please try again.');
      }
    };

    fetchVaccineDetails();
  }, [birthId]);

  const handleChange = (index, field, value) => {
    const updatedVaccineDetails = [...vaccineDetails];
    updatedVaccineDetails[index][field] = value;
    setVaccineDetails(updatedVaccineDetails);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/vaccine/${birthId}/upcoming-vaccines`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ upcomingVaccines: vaccineDetails }),
      });
      if (!response.ok) {
        throw new Error('Failed to update vaccine details');
      }
      console.log('Vaccine details updated successfully');
      setError(null); // Clear any previous error
    } catch (error) {
      console.error('Error updating vaccine details:', error);
      setError('Failed to update vaccine details. Please try again.');
    }
  };

  return (
    <div>
      <h2>Update Vaccine Details</h2>
      <table>
        <thead>
          <tr>
            <th>Vaccine</th>
            <th>Description</th>
            <th>Upcoming Vaccination Date</th>
            <th>Dose</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {vaccineDetails.map((vaccine, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={vaccine.vaccine}
                  onChange={(e) => handleChange(index, 'vaccine', e.target.value)}
                />
              </td>
              <td>
                <textarea
                  value={vaccine.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="date"
                  value={vaccine.upcomingVaccinationDate}
                  onChange={(e) => handleChange(index, 'upcomingVaccinationDate', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={vaccine.Dose}
                  onChange={(e) => handleChange(index, 'Dose', e.target.value)}
                />
              </td>
              <td>
                <select
                  value={vaccine.status}
                  onChange={(e) => handleChange(index, 'status', e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleUpdate}>Update</button>
      {error && <p>{error}</p>} {/* Display error message if error is not null */}
    </div>
  );
};

export default UpdateVaccineForm;
