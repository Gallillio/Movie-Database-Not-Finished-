import { useEffect, useState } from "react"

import './MovieList.css';

// components
import MovieDetailsDev from "./MovieDetailsDev"
import MovieForm from "./MovieForm"
function MovieList() {
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('/api/movies')
            const json = await response.json()

            if (response.ok) {
                setMovies(json)
            }
        }
        fetchMovies()
    }, [])

    return (
        <div className="home">
            <div>
                {movies && movies.map(movie => (
                <MovieDetailsDev movie={movie} key={movie._id}/>
                ))}
            </div>
            <MovieForm />
        </div>
    );
}

export default MovieList;