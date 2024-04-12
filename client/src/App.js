import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addpatients from './pages/addPatients';
import HomePage from './pages/homePage'; 
import Navbar from './components/navbar';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Addetails from './pages/enterDetails';
import Footer from './components/footer';
import Logout from './pages/logout';
import Details from './pages/patientDetails';




function Structure() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <br></br>
      
        <Routes>
          
          <Route path="/" element={<Signin/>}/>
          <Route path="/register" element={<Addpatients/>} /> 
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/addetails/:birthId" element={<Addetails/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/details" element={<Details/>}/>



        </Routes>
        <br></br>
        <Footer/>
        
        
        
      </BrowserRouter>
    </div>
  );
}

export default Structure;
