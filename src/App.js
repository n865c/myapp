import SearchIcon from './search.svg';
import React, { useEffect, useState } from "react";
import Moviecard from './MovieCard';
import "./App.css";
const API_URL = "https://www.omdbapi.com/?apikey=fe57538";
const App = () => {
  const [movies,setMovies]=useState([]);
  const [search,setSearch]=useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieHub</h1>
      <div className="search">
        <input
          placeholder="Search for movie"
          value={search}

          onChange={(e) => {setSearch(e.target.value);
          }}
        />
      
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(search)} />
        </div>
        <div className='container'>
       
          {movies.map((movie)=>(
            <Moviecard movie={movie}/>
          ))}
         </div>
        
    </div>
  );
};
export default App;
