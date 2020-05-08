import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const searching = [
    { status: "idle", data: null },
    { status: "searching...", data: null },
    { status: "done", data: null },
  ];

  const [searchState, set_searchState] = useState(searching[0]);
  console.log("whats the state? (1)", searchState);

  const search = async () => {
    // setting state to searching
    set_searchState(searching[1]);
    console.log("whats the state now? (2)", searchState);

    console.log("Searching for movies matching query:", searchText);
    const queryParam = encodeURIComponent(searchText);
    const data = await axios.get(
      `https://omdbapi.com/?apikey=5ffaab21&s=${queryParam}`
    );

    console.log("Success!", data.data.Search);

    set_searchState({ ...searching[2], data: data.data.Search });
  };
  console.log("final state: (3)", searchState);

  let displayMovies;
  if (searchState.status === "searching...") {
    displayMovies = "searching...";
  } else if (searchState.status === "done") {
    displayMovies = searchState.data.map((movie) => {
      return (
        <div className="movie" key={movie.imdbID}>
          <Link to={`/DiscoverMoviesPage/${movie.imdbID}`}>
            <h2>{movie.Title}</h2>
          </Link>
          <p> Year of release: {movie.Year}</p>
          <img className="movie_img" alt="movieposter" src={movie.Poster} />
        </div>
      );
    });
  }

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <p>{displayMovies}</p>
    </div>
  );
}
