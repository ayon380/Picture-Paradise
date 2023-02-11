import React, { useEffect } from "react";
import "./search.css";
import MovieList from "../../components/movielist/MovieList";
const Search = () => {
  const [pmovies, setpmovies] = React.useState("");
  const searchmovie = () => {
    const inputtext = "#" + document.getElementById("inputtext").value;
    setpmovies(inputtext);
    console.log(pmovies);
  };
  useEffect(() => {}, [pmovies]);
  return (
    <div>
      <p id="searchp1">
        Search<i class="fa-solid fa-magnifying-glass" id="searchicon"></i>
      </p>
      <div className="lks">
        <input id="inputtext"></input>
        <button id="searchbutton" onClick={searchmovie}>
          Search
        </button>
      </div>
      {pmovies ? <MovieList tag={pmovies} key={pmovies} /> : null}
    </div>
  );
};

export default Search;
