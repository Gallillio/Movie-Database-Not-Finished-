import React from 'react';
import { useState } from 'react';
import './LoginProcess.css';
// Font Icon
import './fonts/material-icon/css/material-design-iconic-font.min.css';

import laptopGuyImg from './signin-image.png';


function LoginProcess() {
    
    //const is short for contant, which indicates the variable's value won't change
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    // Create Submit button Handler
    // Asynchronous request run in parallel with any task running
    const handleSubmit = async (event) => {
        
    event.preventDefault();
    try {
        let res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: name,
            pass: password
        }),
        });
        //HTML Successful login 2XX
        if (res.status === 200) {
        //window.location.href = 'https://w3schools.com/';
        alert("You have successfully logged in!");
        } else {
        alert("Some error occured");
        }
    } 
    // Error Handler
    catch (err) {
        console.log(err);
    }
    //Empty input cells if there is an error when redirecting
    setName("");
    setPassword("");
    }
    return(
        <div>
            <section className='containerMargin'>
                <div className='container'>
                    <div className='signin-content'>
                        <div className='laptopMan'>
                            <figure><img src={laptopGuyImg} alt="guy on laptop"/></figure>
                        </div>
                    </div>
                    <div className='signin-form'>
                        <h1 class="form-title">Sign up</h1>
                        <form onSubmit={handleSubmit} className='register-form'>
                            <div className='form-group'>
                                <label for="name"></label>
                                <input
                                type="text"
                                name="name"
                                placeholder='Your Name'
                                className='inputStyle'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label for="password"></label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Password'
                                    className='inputStyle'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Login"/>
                            </div>
                        </form>
                        <div class="">
                            <span class="social-label">Or login with</span>
                            <ul class="socials">
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}





export default LoginProcess