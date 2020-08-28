import React from 'react';
import NavBar from './components/nav/NavBar'
import SearchBar from './components/search/SearchBar'
import useFetch from './components/customHooks/useFetch'

function App() {
  const movieData = useFetch("http://www.omdbapi.com/?i=tt3896198&apikey=4f660c34")
  
  return (
    <div className="App">
      <NavBar/>
      <SearchBar/>
    </div>
  );
}

export default App;
