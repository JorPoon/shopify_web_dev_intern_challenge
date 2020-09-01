import React, {useState} from 'react';
import NavBar from './components/nav/NavBar'
import SearchBar from './components/search/SearchBar'
import useFetch from './components/customHooks/useFetch'

function App() {
  const [data, setData] = useState<string>('')

  const search = (searchValue:string) => {
    setData(searchValue)
  }

  const movieData = useFetch(`http://www.omdbapi.com/?t=${data}&apikey=4f660c34`)

  
  return (
    <div className="App">
      <NavBar/>
      {/* Grid Container */}
      {/* Grid Item */}
      <SearchBar search={search}/>
      {/* Grid Item */}
      {/* Grid Item */}
      {/* MovieList */}
      {/* Grid Item */}
      {/* Grid Item */}
      {/* NominationList */}
      {/* Grid Item */}
      {/* Grid Container */}
      
    </div>
  );
}

export default App;
