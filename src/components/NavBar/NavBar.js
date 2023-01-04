import React from 'react';
//importing Link from react-router-dom to navigate to different end points.
import {NavLink} from "react-router-dom";

import './NavBar.css';
import SearchBar2 from '../SearchBar2/SearchBar2'
import logo from './logo.png';
import watchlistIcon from './watchlist icon.png';


function NavBar() {
    // //in future we will use this to make sure user is logged in to go to Watchlist
    // const [goToWatchlist, setGoToWatchlist] = React.useState(false);

    // //if goToWatchList == True         //FOR THIS TO WORK NEED TO MAKE THE WATCHLIST BUTTON ONCLICK SETGOTOWATCHLIST(TRUE)
    // if(goToWatchlist){
    //     return <Navigate to="/Watchlist" />;
    // }
    return(
        <nav>
            <div className='navbar'>
                <NavLink exact to="/" activeStyle={{color: "red"}} ><div><img src={logo} width='150em' className='logo' alt='Logo'/></div></NavLink>
                <span> {<SearchBar2/>} </span>

                <NavLink to="/Watchlist" style={({ isActive }) => 
                      (isActive ? {backgroundColor: 'rgb(69, 68, 68)',borderRadius: '7px'} : {color: ''})}>    
                <div className='watchlist'><span className="material-symbols-outlined">library_add</span>Watchlist</div></NavLink>

                <NavLink to="/CreateMovie" style={({ isActive }) =>
                (isActive ? {backgroundColor: 'rgb(69, 68, 68)',borderRadius: '7px'} : {color: ''})}>
                <div className='login'>Create Movie</div></NavLink>

                <NavLink to="/Login" style={({ isActive }) => 
                      (isActive ? {backgroundColor: 'rgb(69, 68, 68)',borderRadius: '7px'} : {color: ''})}>
                        <div className='login'>Login</div></NavLink>

                <NavLink to="/Register"style={({ isActive }) => 
                      (isActive ? {backgroundColor: 'rgb(69, 68, 68)',borderRadius: '7px'} : {color: ''})}><div className='login'>Register</div></NavLink>
            </div>
        </nav>
        
    )
}
export default NavBar