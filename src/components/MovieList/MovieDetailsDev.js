import './MovieList.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const MovieDetails = ({ movie }) => {

  const deleteMovie = async () => {
    const response = await fetch('/api/movies/' + movie._id, {
      method: 'DELETE'
    })
    const json = await response.json()
    setTimeout("location.reload(true);", 0);
  }


  return (
    <ul className="movie-details">
      <li>
          <div>
          <h4>{movie.title}</h4>
          <p><strong>IMDB Rating: </strong>{movie.IMDB_Rating}</p>
          <p><strong>MPAA rating: </strong>{movie.MPAA_rating}</p>
          <p><strong>Budget: </strong>{movie.production_budget}</p>
          <p>{movie.release_date}</p>
          <span onClick={deleteMovie} className="material-symbols-outlined">delete</span>
          <span className="material-symbols-outlined"><Link path={"/edit:id"} to={"/edit/" + movie._id}>settings</Link></span>
          </div>
      </li>
    </ul>
  )
}
  
export default MovieDetails