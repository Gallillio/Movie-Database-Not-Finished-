import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from '../components/NavBar/NavBar';
import LoginProcess from '../components/Login/LoginProcess';


function Login() {
    return (
      <div className='backgroundColor'>
        <NavBar/>
        <LoginProcess/>
      </div>
      
    );
  }
  
  export default Login;