// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Addpatients from './pages/addPatients';
import HomePage from './pages/homePage'; 
import Navbar from './components/navbar';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Addetails from './pages/enterDetails';
import Footer from './components/footer';
import Logout from './pages/logout';
import Details from './pages/patientDetails';
import Vaccine from './pages/vaccineDetails';
import AdminDashboard from './Admin/admindashboard';
import Services from './pages/services';
import Staff from './pages/staff';
import PatientList from './pages/patientlist';
import UpdateUpcomingVaccines from './components/updatevaccine';
import MedicalStaff from "./Admin/addmedicalstaff";
import Adminpatient from "./Admin/adminpatients";

function App() {
  return (
    <Router>
      <Structure />
    </Router>
  );
}

function Structure() {
  // Custom hook to get the current location
  const location = useLocation();

  // Function to check if the current route is the Signin page
  const isSigninPage = location.pathname === '/';

  return (
    <div className="App">
      {!isSigninPage && <Navbar />}
      
      
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/addpatients" element={<Addpatients />} /> 
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addetails/:birthId" element={<Addetails />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/details" element={<Details />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/vaccine/:birthId" element={<UpdateUpcomingVaccines />} />
        <Route path="/addstaff" element={<MedicalStaff />} />
        <Route path="/patientlist" element={<Adminpatient />} />
        <Route/>
      </Routes>
      <br></br>
      <br></br>
      {!isSigninPage && <Footer />}
    </div>
  );
}

export default App;
