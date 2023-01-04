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
import Register from './pages/Register';
import CreateMovie from './pages/CreateMovie';
import EditMovie from './pages/EditMovie';



function App() {
  return (
    <div className='backgroundColor '>
      {/* Paths to all the pages in our website */}
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Watchlist" element={<Watchlist/>} />
              <Route path="/Register" element={<Register/>} />   
              <Route path="/CreateMovie" element={<CreateMovie/>} />
              <Route path="/EditMovie/:id" element={<EditMovie/>} />   
          </Routes>
      </Router>
    </div>
    
  );
}

export default App;
