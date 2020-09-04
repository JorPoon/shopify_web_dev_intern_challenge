import React, {useState} from 'react';

//Custom Components
import NavBar from './components/nav/NavBar'
import SearchBar from './components/search/SearchBar'
import useFetch from './components/customHooks/useFetch'

//Material UI
import Grid from '@material-ui/core/Grid';
import MovieCard from './components/movies/MovieCard';

//Style
import useAppStyle from './styles/AppStyle.jsx'

function App() {
  const [data, setData] = useState<string>('')

  const search = (searchValue:string) => {
    setData(searchValue)
  }

  const movieData = useFetch(`http://www.omdbapi.com/?t=${data}&apikey=4f660c34`)

  const classes = useAppStyle()
  
  return (
    <div className='App'>
      <NavBar/>
      <Grid container alignItems='center' justify='center' spacing={3}>
        <Grid item xs={12} className={classes.text}>
          <SearchBar search={search}/>
        </Grid>
        <Grid item xs={6} >
          <MovieCard title='hello' year={1992}/>
        </Grid>
        <Grid item xs={6}>
          <MovieCard title='world' year={1992}/>
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
