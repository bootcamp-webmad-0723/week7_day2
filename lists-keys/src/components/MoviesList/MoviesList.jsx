import { useState } from "react"
import { moviesArray } from "../../fakeAPI"
import MovieCard from "../MovieCard/MovieCard"

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesArray)

    const removeMovie = movieId => {
        const updatedMovies = movies.filter(elm => elm._id != movieId)
        setMovies(updatedMovies)
    }

    const addMovie = () => {
        const newMovie = { title: 'Pirañaconda', director: 'Bardem', _id: '8746IKGH', hasOscars: true, IMDBRating: 9 }

        // Saco una copia liviana (los array se pasan por referencia, no por valor!)
        const moviesCopy = [...movies]

        // Manipuilo la copia (unshift NO retorna un nuevo array, muta el original)
        moviesCopy.unshift(newMovie)

        // Actualizo el estado con la copia mutada
        setMovies(moviesCopy)
    }

    return (
        <>
            <button onClick={addMovie}>AÑADIR NUEVA PELI (ojo)</button>
            {
                movies.map(movie => {
                    return (
                        <MovieCard key={movie._id} {...movie} deleteMovie={removeMovie} />
                    )
                })
            }
        </>
    )
}

export default MoviesList