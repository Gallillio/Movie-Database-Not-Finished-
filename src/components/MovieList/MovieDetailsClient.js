import './MovieList.css';


const MovieDetails = ({ movie }) => {

  const addWishList = () => {

  }
  return (
    <ul className="movie-details">
      {console.log(movie._id)}
        <li className='posterDetailsFlex'>
          {/* <div><img src={poster} width="190px"/></div> */}
          <div>
            <h4>{movie.title}</h4>
            <p><strong>IMDB Rating: </strong>{movie.IMDB_Rating}</p>
            <p><strong>MPAA rating: </strong>{movie.MPAA_rating}</p>
            <p><strong>Budget: </strong>{movie.production_budget}</p>
            <p>{movie.release_date}</p>
            <span onClick={addWishList} className="material-symbols-outlined">library_add</span>
          </div>
        </li>
    </ul>
  )
}
  
export default MovieDetails