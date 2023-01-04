import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from '../components/NavBar/NavBar';
import RegisterProcess from '../components/Register/RegisterProcess'; 

function Register() {
  return (
    <div className='backgroundColor'>
      <NavBar/>
      <RegisterProcess/>
    </div>
    
  );
}
  
  export default Register;