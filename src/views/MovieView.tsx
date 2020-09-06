import React, {useState, useEffect} from 'react'
import MovieCard from '../components/movies/MovieCard'
import Typography from '@material-ui/core/Typography'

interface MovieProps {
    movieList: any,
    nominate: Function,
    nominatedList: any
}



const MovieView = (props: MovieProps) => {
    const [isLoading, setIsLoading] = useState(false) 
    const [movies, setMovies] = useState([])


    useEffect(() => {
        if(props.movieList.response) {
           if(props.movieList.response.Search) {
               setIsLoading(true)
               setMovies(props.movieList.response.Search)
           }
        }
    }, [props.movieList])

    return (
        <>
            {(isLoading &&  movies.map((movie: any) => {
                return (
                    <MovieCard 
                        title={movie.Title} 
                        year={movie.Year} 
                        key={movie.imdbID} 
                        poster={movie.Poster}
                        nominate={props.nominate}
                        />
                )
            }))} 
            {/* || <Typography variant='h5'>Please Search A Movie</Typography>}  */}
        </>
    )
}



export default MovieView