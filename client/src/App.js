import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addpatients from './pages/addPatients';
import HomePage from './pages/homePage'; 
import Navbar from './components/navbar';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Medicalhistory from './pages/medicalHistory';
import Footer from './components/footer';




function App() {
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
          <Route path="/medicalhistory"   element={<Medicalhistory/>}/>



        </Routes>
        <br></br>
        <Footer/>
        
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
