import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from '../components/NavBar/NavBar';
import MovieListClient from '../components/MovieList/MovieListClient'


function Home() {
    return (
        <div>
            <NavBar/>
            <MovieListClient/>
        </div>
      
    );
  }
  
  export default Home;