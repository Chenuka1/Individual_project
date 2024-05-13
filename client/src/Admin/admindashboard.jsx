import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import PatientList from "./adminpatients";
import MedicalStaff from "./addmedicalstaff";
import Navbar from "./component/adminnavbar";
import Email from "./adminemail";

function AdminDashboard() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/users"); 
  }, [navigate]);

  return (
    <div className="admin-dashboard">
      <Navbar/>

      <Routes>
        <Route path="/users" element={<PatientList />} />
        <Route path="/staff" element={<MedicalStaff />} />
        <Route path="/email" element={<Email/>}/>
      </Routes>

      <form>
        <input type="text"/>
      </form>
    </div>
  );
}

export default AdminDashboard;
