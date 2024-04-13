import React, { useState } from 'react';

export default function Vaccine() {
    // State to track whether the popup is open or not
    const [showPopup, setShowPopup] = useState(false);

    // Function to handle button click and toggle the popup
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <h1>View Immunization records of the patients</h1>

            <table>
                <thead>
                    <tr>
                        <th>Patient name</th>
                        <th>Completed vaccines and doses</th>
                        <th>Vaccination date</th>
                        <th>Upcoming vaccinations and doses</th>
                        <th>Upcoming vaccination date</th>
                        <th></th>
                    </tr>
                </thead>
                {/* Table body content goes here */}
            </table>

            

           <a href="/entervaccine">Enter new records</a>

        </div>
    );
}
