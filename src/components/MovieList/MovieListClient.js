import { useEffect, useState } from "react"

import './MovieList.css';

// components
import MovieDetailsClient from "./MovieDetailsClient"
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
                <MovieDetailsClient movie={movie} key={movie._id}/>
                ))}
            </div>
        </div>
    );
}

export default MovieList;