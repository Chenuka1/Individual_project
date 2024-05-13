// Milestone.js
import React, { useState } from 'react';
import '../styles/milestone.css';

function Milestone() {
  const [milestones, setMilestones] = useState({
    rollingOver: false,
    sittingUp: false,
    crawling: false,
    standing: false,
    walking: false,
    smiling: false,
    recognizingFaces: false,
    babbling: false,
    firstWords: false,
    respondingToName: false,
    playingPeekaboo: false,
    showingAffection: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setMilestones({
      ...milestones,
      [name]: checked,
    });
  };

  return (
    <div className="milestone-container">
      <h1>Baby Milestone Tracker</h1>
      <input type="textarea" placeholder="Enter birthcertificate id to update "/>
      <div className="milestone-category">
        <h3 className="milestone-heading">Physical Development:</h3>
        <ul className="milestone-list">
          <li className="milestone-item">
            Rolling Over:
            <label className={milestones.rollingOver ? "achieved-checkbox" : "not-achieved-checkbox"}>
              <input
                type="checkbox"
                name="rollingOver"
                checked={milestones.rollingOver}
                onChange={handleCheckboxChange}
              />
              Achieved
            </label>
            <label className="checkbox-label">Not Yet</label>
          </li>
          <li className="milestone-item">
            Sitting Up:
            <label className={milestones.sittingUp ? "achieved-checkbox" : "not-achieved-checkbox"}>
              <input
                type="checkbox"
                name="sittingUp"
                checked={milestones.sittingUp}
                onChange={handleCheckboxChange}
              />
              Achieved
            </label>
            <label className="checkbox-label">Not Yet</label>
          </li>
        
        </ul>
      </div>
      <div className="milestone-category">
        <h3 className="milestone-heading">Cognitive Development:</h3>
        <ul className="milestone-list">
          <li className="milestone-item">
            Smiling:
            <label className={milestones.smiling ? "achieved-checkbox" : "not-achieved-checkbox"}>
              <input
                type="checkbox"
                name="smiling"
                checked={milestones.smiling}
                onChange={handleCheckboxChange}
              />
              Achieved
            </label>
            <label className="checkbox-label">Not Yet</label>
          </li>
          {/* Repeat for other cognitive milestones */}
        </ul>
      </div>
      <div className="milestone-category">
        <h3 className="milestone-heading">Social and Emotional Development:</h3>
        <ul className="milestone-list">
          <li className="milestone-item">
            Responding to Name:
            <label className={milestones.respondingToName ? "achieved-checkbox" : "not-achieved-checkbox"}>
              <input
                type="checkbox"
                name="respondingToName"
                checked={milestones.respondingToName}
                onChange={handleCheckboxChange}
              />
              Achieved
            </label>
            <label className="checkbox-label">Not Yet</label>
          </li>
          {/* Repeat for other social and emotional milestones */}
        </ul>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Milestone;
