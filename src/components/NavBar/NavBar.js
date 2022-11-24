import React, {useState} from 'react';
//importing Link from react-router-dom to navigate to different end points.
import { Link } from "react-router-dom";

import './NavBar.css';
import SearchBar2 from '../SearchBar2/SearchBar2'
import logo from './logo.png';
import watchlistIcon from './watchlist icon.png';



function NavBar() {
    return(
        <nav>
            
            <div className='navbar'>
            <div><img src={logo} width='150em' className='logo' alt='Logo'/></div>
            <span> {<SearchBar2/>} </span>
                
            <div className='watchlist'><img src={watchlistIcon} width='30em'/><b className='watchlistText'>Watchlist</b></div>
            <div className='login'><b>Login</b></div>
            <div className='login'><b>standintext</b></div><div className='login'><b>standin text</b></div>
                
            </div>
        </nav>
        
    )
}





export default NavBar