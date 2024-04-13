import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import Entervaccine from './pages/enterVaccine';

function App() {
  return (
    <BrowserRouter>
      <Structure />
    </BrowserRouter>
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
      <br />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Addpatients />} /> 
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addetails/:birthId" element={<Addetails />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/details" element={<Details />} />
        <Route path="/vaccine" element={<Vaccine/>}/>
        <Route path="/entervaccine" element={<Entervaccine/>}/>
      </Routes>
      <br></br>
      {!isSigninPage && <Footer />}
    </div>
  );
}

export default App;
