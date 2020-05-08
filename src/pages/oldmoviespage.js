import React, { useState } from "react";
import Timeout from "await-timeout";
import axios from "axios";
import Movies from "../components/Movies";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const searching = [
    { status: "idle" },
    { status: "searching..." },
    { status: "done", data: "some data" },
  ];

  const [searchState, set_searchState] = useState(searching[0]);
  console.log("whats the state?", searchState);

  const search = async () => {
    // setting state to searching
    set_searchState(searching[1]);
    console.log("whats the state now?", searchState);

    console.log("Searching for movies matching query:", searchText);
    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    // // Option A: use the browser-native fetch function
    // const data = await fetch(
    //   `https://omdbapi.com/?apikey=b3d9013d&s=${queryParam}`
    // ).then((r) => r.json());

    // Option B: use the `axios` library like we did on Tuesday
    const data = await axios.get(
      `https://omdbapi.com/?apikey=5ffaab21&s=${queryParam}`
    );

    console.log("Success!", data.data.Search);

    // const searchResult = { ...searching[2], data: data.data.Search };
    // console.log("lets see if it worked:", searchResult);

    // setting state to done...how to add data in?
    set_searchState({ ...searching[2], data: data.data.Search });
    console.log("final state:", searchState);
  };

  function displayMovies() {
    searchState.map((status) => {
      if (status === true) {
        return <Movies status={status.status} data={status.data} />;
      }
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
