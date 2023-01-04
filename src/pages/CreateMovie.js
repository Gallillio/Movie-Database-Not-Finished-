import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from '../components/NavBar/NavBar';
import MovieListDev from '../components/MovieList/MovieListDev'


function Home() {
    return (
        <div>
            <NavBar/>
            <MovieListDev/>
        </div>
      
    );
  }
  
  export default Home;