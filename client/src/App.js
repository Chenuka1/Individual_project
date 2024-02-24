import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUsers from './pages/addUsers';
import HomePage from './pages/homePage';
import Users from './pages/users';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/register" element={<AddUsers/>} /> 
          <Route path="/" element={<HomePage/>}/>
          <Route path="/users" element={<Users/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
