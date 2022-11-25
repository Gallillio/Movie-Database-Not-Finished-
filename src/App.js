import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Watchlist from './pages/Watchlist';



function App() {
  return (
    <div className='backgroundColor'>
      {/* Paths to all the pages in our website */}
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Watchlist" element={<Watchlist/>} />      
          </Routes>
      </Router>
    </div>
    
  );
}

export default App;
