import React, { useState } from 'react';

function Milestone() {
    const [date, setDate] = useState('');
    const [physicalMilestone, setPhysicalMilestone] = useState('');
    const [cognitiveMilestone, setCognitiveMilestone] = useState('');
    const [socialMilestone, setSocialMilestone] = useState('');
    const [milestones, setMilestones] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add the new milestone to the list
        setMilestones([...milestones, { date, physicalMilestone, cognitiveMilestone, socialMilestone }]);
        // Clear the form fields after submission
        setDate('');
        setPhysicalMilestone('');
        setCognitiveMilestone('');
        setSocialMilestone('');
    };

    return (
        <div>
            <h2>Baby Milestones Tracker</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date:</label>
                <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    required 
                /><br />

                <label htmlFor="physicalMilestone">Physical Milestone:</label>
                <textarea 
                    id="physicalMilestone" 
                    name="physicalMilestone" 
                    rows="4" 
                    value={physicalMilestone} 
                    onChange={(e) => setPhysicalMilestone(e.target.value)} 
                    required 
                ></textarea><br />

                <label htmlFor="cognitiveMilestone">Cognitive Milestone:</label>
                <textarea 
                    id="cognitiveMilestone" 
                    name="cognitiveMilestone" 
                    rows="4" 
                    value={cognitiveMilestone} 
                    onChange={(e) => setCognitiveMilestone(e.target.value)} 
                    required 
                ></textarea><br />

                <label htmlFor="socialMilestone">Social Milestone:</label>
                <textarea 
                    id="socialMilestone" 
                    name="socialMilestone" 
                    rows="4" 
                    value={socialMilestone} 
                    onChange={(e) => setSocialMilestone(e.target.value)} 
                    required 
                ></textarea><br />

                <input type="submit" value="Submit" />
            </form>

            <div>
                {/* Display the list of milestones */}
                <h3>Milestones</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Physical Milestone</th>
                            <th>Cognitive Milestone</th>
                            <th>Social Milestone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {milestones.map((item, index) => (
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.physicalMilestone}</td>
                                <td>{item.cognitiveMilestone}</td>
                                <td>{item.socialMilestone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Milestone;
