import React, {useState, useEffect} from 'react'
import MovieCard from '../components/movies/MovieCard'
import Typography from '@material-ui/core/Typography'

interface MovieProps {
    movieList: any
}



const MovieView = (props: MovieProps) => {
    const [movie, setMovie] = useState(false) 

    useEffect(() => {
        if(props.movieList.response) {
           if(props.movieList.response.Search) {
               setMovie(true)
           }
        }
    }, [props.movieList])

    console.log(props.movieList)

    return (
        <>
            {(movie &&  props.movieList.response.Search.map((movie: any) => {
                return (
                    <MovieCard title={movie.Title} year={movie.Year} key={movie.imdbID} poster={movie.Poster}/>
                )
            })) || <Typography variant='h5'>Please Search A Movie</Typography>} 
        </>
    )
}



export default MovieView