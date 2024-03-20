import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addpatients from './pages/addPatients';
import HomePage from './pages/homePage';
import Users from './pages/users';
import Navbar from './components/navbar';
import Signup from './pages/midwifeSignup';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path="/register" element={<Addpatients/>} /> 
          <Route path="/" element={<HomePage/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/signup" element={<Signup/>}/>
         



        </Routes>
        
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
