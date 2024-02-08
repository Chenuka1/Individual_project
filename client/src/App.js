import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUsers from './pages/addUsers';
import HomePage from './pages/homePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<AddUsers/>} />
          
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
