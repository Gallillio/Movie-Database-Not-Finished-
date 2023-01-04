import { useState } from 'react'
import './MovieList.css';
const MovieForm = () => {
    const [title, setTitle] = useState('')
    const [IMDB_Rating, setIMDB_Rating] = useState('')
    const [MPAA_rating, setMPAA_rating] = useState('')
    const [production_budget, setProduction_budget] = useState('')
    const [release_date, setRelease_date] = useState('')
    const [poster, setPoster] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
  
    const handleSubmit = async (e) => {
      //doesnt refresh the page
      e.preventDefault()
  
      const movie = {title, IMDB_Rating, MPAA_rating,production_budget,release_date, poster}
      
      const response = await fetch('/api/movies', {
          method: 'POST',
          //changes the movie to json
          body: JSON.stringify(movie),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      const json = await response.json()
      //if response is not okay return json error from movieController if okay then add new movie
      if (!response.ok) {
        setError(json.error)
        
      }
      if (response.ok) {
        //set everthing back to empty string so when we add another movie
        setError(null)
        setTitle('')
        setIMDB_Rating('')
        setMPAA_rating('')
        setProduction_budget('')
        setRelease_date('')
        setPoster('')
        setEmptyFields([])
        console.log('new movie added:', json)
        setTimeout("location.reload(true);", 0);
      }
    }
  
  return (
    // create Movie
    <form onSubmit={handleSubmit}> 
        <div className='createMovieMargin'>
            <h3><u>Add a New movie</u></h3>

            <span>Movie Title:</span>
            <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)} 
                value={title}
            />

            <span>IMDB_Rating:</span>
            <input 
                type="number" 
                onChange={(e) => setIMDB_Rating(e.target.value)} 
                value={IMDB_Rating}
            />

            <span>MPAA_rating:</span>
            <input 
                type="text" 
                onChange={(e) => setMPAA_rating(e.target.value)} 
                value={MPAA_rating} 
            />

            <span>Production_budget:</span>
            <input 
                type="number" 
                onChange={(e) => setProduction_budget(e.target.value)} 
                value={production_budget} 
            />

            <span>Release_date:</span>
            <input 
                type="date" 
                onChange={(e) => setRelease_date(e.target.value)} 
                value={release_date} 
            />

            Poster:
            <input 
                type="file" 
                onChange={(e) => setPoster(e.target.value)} 
                value={poster} 
            />

            <button>Add movie</button>
            {error && <div className="error">{error}</div>}
        </div>
      
    </form>
  )
}

export default MovieForm