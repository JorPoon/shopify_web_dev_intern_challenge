import React, {useState, useEffect} from 'react';

//Custom Components
import NavBar from './components/nav/NavBar'
import SearchBar from './components/search/SearchBar'
import useFetch from './components/customHooks/useFetch'
import MovieView from './views/MovieView'
import NominationView from './views/NominationView'

//Material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'


//Style
import useAppStyle from './styles/AppStyle.jsx'

function App() {
  const [data, setData] = useState<string>('')
  const [nominated, setNominated] = useState<any>([])
  
  const movieData = useFetch(`https://www.omdbapi.com/?s=${data}&apikey=4f660c34`)

  const search = (searchValue:string) => {
    setData(searchValue)
  }
  
  const nominate = (nominateValue:any) => {
    const nominatedArray = [...nominated]
    nominatedArray.push(nominateValue)
    setNominated(nominatedArray)
  }

  const remove = (removeMovie: any) => {
    const removeNominate = nominated.filter((movie: any) => {
      return movie.title !== removeMovie
    })
    setNominated(removeNominate)
  }

  
  
  const classes = useAppStyle()
  
  return (
    <div className='App'> 
      <Grid container alignItems='center' justify='center' spacing={3} className={classes.root}>
        <Grid item xs={12} className={classes.text}>
          <NavBar/>
          <SearchBar search={search}/>
        </Grid>
        <Grid item xs={6} className={classes.text} >
          <Typography variant='h4'>
            Movie List
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.text} >
          <Typography variant='h4'>
            Nominate List
          </Typography>
        </Grid>
      </Grid>
   
      <Grid container alignItems='center' justify='center' spacing={3} className={classes.root}>    
        <Grid container item xs={6} direction='column' alignItems='center' >
          <MovieView movieList={movieData} nominate={nominate} nominatedList={nominated}/>
        </Grid>
        <Grid container item xs={6} direction='column' alignItems='center' className={classes.nom} >
          <NominationView nominated={nominated} remove={remove}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
