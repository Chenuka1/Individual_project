import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addpatients from './pages/addPatients';
import HomePage from './pages/homePage';

import Navbar from './components/navbar';
import Signup from './pages/Signup';
import Signin from './pages/Signin';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <br></br>
      
        <Routes>
          <Route path="/register" element={<Addpatients/>} /> 
          <Route path="/home" element={<HomePage/>}/>
          
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Signin/>}/>
         



        </Routes>
        
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
