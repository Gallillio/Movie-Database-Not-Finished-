import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './globle.css';
import NavBar from './components/NavBar/NavBar';
import LoginProcess from './components/Login/LoginProcess';



function App() {

  return (
    <div className='backgroundColor'>
      {/* <Router>
          <Routes>
              <Route exact path="/" element={<NavBar/>} />
              <Route path="/Login" element={<Login/>} />   
              <Route path="/about" component={About} />
              <Route path="/contactus" component={ContactUs} />
              <Navigate to="/" />
          </Routes>
      </Router> */}

      <NavBar/>
      <LoginProcess/>
    </div>
    
  );
}

export default App;
