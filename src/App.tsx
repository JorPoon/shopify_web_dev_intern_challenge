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
      <SearchBar search={search}/>
    </div>
  );
}

export default App;
