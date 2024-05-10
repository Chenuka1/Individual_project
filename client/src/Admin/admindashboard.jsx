// AdminDashboard.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PatientList from "./adminpatients";
import MedicalStaff from "./addmedicalstaff";
import Navbar from "./component/adminnavbar";


function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Navbar/>

      <Routes>
        <Route exact path="/patientlist" element={<PatientList />} />
        <Route path="/staff" element={<MedicalStaff />} />
      </Routes>

      <form>


        <input type="text"/>
      </form>
    </div>
  );
}

export default AdminDashboard;
