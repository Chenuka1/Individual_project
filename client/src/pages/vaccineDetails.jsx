import React, { useState } from 'react';

export default function Vaccine() {
    
    return (
        <div>
            <h1>View Immunization records of the patients</h1>

            <table>
                <thead>
                    <tr>
                        <th>Patient name</th>
                        <th>Completed vaccines </th>
                        <th>Vaccination date</th>
                        <th>Upcoming vaccinations </th>
                        <th>Upcoming vaccination date</th>
                        <th></th>
                    </tr>
                </thead>
                
            </table>

            

           <a href="/entervaccine">Enter new records</a>

        </div>
    );
}
