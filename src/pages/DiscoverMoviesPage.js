import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const searching = [
    { status: "idle", data: null },
    { status: "searching...", data: null },
    { status: "done", data: null },
  ];
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState(searching[0]);

  const history = useHistory();
  const routeParameters = useParams();

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  useEffect(() => {
    console.log("useEffect!");
    //first check to see if there is a search query in the url, if not return basic discover movies page
    if (routeParameters.searchtext) {
      console.log("input is:", routeParameters.searchtext);
      search(routeParameters.searchtext);
    } else {
      console.log("no input found");
      set_searchState(searching[0]);
    }
  }, [routeParameters]);

  const search = async (input) => {
    console.log("Start searching for:", input);
    set_searchState(searching[1]);
    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(input);

    // Option B: use the `axios` library like we did on Tuesday
    const data = await axios.get(
      `https://omdbapi.com/?apikey=120927c9&s=${queryParam}`
    );
    // data from axios is stored in data but needs to be transformed to an array (list of movies)
    set_searchState({ ...searching[2], data: data.data.Search });
  };

  console.log("searchState is:", searchState);

  let display;
  if (searchState.status === "searching") {
    display = "Searching";
  }
  if (searchState.status === "done") {
    display = searchState.data.map((movie) => {
      return (
        <div className="movie">
          <Link to={`/movie/${movie.imdbID}`}>
            <h4 key={movie.imdbID}>{movie.Title}</h4>
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
        <button onClick={navigateToSearch}>Search</button>
      </p>
      {display}
    </div>
  );
}
