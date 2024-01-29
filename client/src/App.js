

import { BrowserRouter, Routes, Route } from "react-router-dom";
import patientManagement from "./pages/patientManagement";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<patientManagement/>}/>

        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
