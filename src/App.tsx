import React, {useState} from 'react';

//Custom Components
import NavBar from './components/nav/NavBar'
import SearchBar from './components/search/SearchBar'
import useFetch from './components/customHooks/useFetch'

//Material UI
import Grid from '@material-ui/core/Grid';

function App() {
  const [data, setData] = useState<string>('')

  const search = (searchValue:string) => {
    setData(searchValue)
  }

  const movieData = useFetch(`http://www.omdbapi.com/?t=${data}&apikey=4f660c34`)

  
  return (
    <div className="App">
      <NavBar/>
      <Grid container>
        <Grid item>
          <SearchBar search={search}/>
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
