import React, {useState, useEffect} from 'react'
import MovieCard from '../components/movies/MovieCard'

interface MovieProps {
    movieList: any
}



const MovieView = (props: MovieProps) => {
    const [movie, setMovie] = useState(false) 

    useEffect(() => {
        if(props.movieList.response !== undefined) {
            setMovie(true)
        }
    }, [props.movieList])

    console.log(props.movieList)

    return (
        <div>
            {movie && props.movieList.response.Search.map((movie: any) => {
                return (
                    <MovieCard title={movie.Title} year={movie.Year}/>
                )
            })}
        </div>
    )
}



export default MovieView