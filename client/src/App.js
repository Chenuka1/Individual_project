import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUsers from './pages/addUsers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddUsers/>} />
          {/* Add more Route components for other pages if needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
