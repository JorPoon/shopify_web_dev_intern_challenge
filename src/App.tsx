import React, {useState, useEffect} from 'react';

//Custom Components
import NavBar from './components/nav/NavBar'
import SearchBar from './components/search/SearchBar'
import useFetch from './components/customHooks/useFetch'
import MovieView from './views/MovieView'

//Material UI
import Grid from '@material-ui/core/Grid';
import MovieCard from './components/movies/MovieCard';

//Style
import useAppStyle from './styles/AppStyle.jsx'

function App() {
  const [data, setData] = useState<string>('')
  const [response, setResponse] = useState<string>('')


  const search = (searchValue:string) => {
    setData(searchValue)
  }

  const movieData = useFetch(`http://www.omdbapi.com/?s=${data}&apikey=4f660c34`)
  
  const classes = useAppStyle()
  
  return (
    <div className='App'>
      <NavBar/>
      <Grid container alignItems='center' justify='center' spacing={3} className={classes.root}>
        <Grid item xs={12} className={classes.text}>
          <SearchBar search={search}/>
        </Grid>
        <Grid container item xs={6} direction='column' spacing={10} alignItems='center' justify='center'  >
          <MovieView movieList={movieData}/>
        </Grid>
        <Grid item xs={6}>
          {/* <MovieCard title='world' year={1992}/> */}
        </Grid>
      {/* Grid Item */}
      {/* MovieList */}
      {/* Grid Item */}
      {/* Grid Item */}
      {/* NominationList */}
      {/* Grid Item */}
      </Grid>
      
    </div>
  );
}

export default App;
