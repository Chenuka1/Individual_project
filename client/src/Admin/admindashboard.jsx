import React from "react";
import MedicalStaff from "./addmedicalstaff";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className>
      <MedicalStaff />
    </div>
  );
}

export default AdminDashboard;
