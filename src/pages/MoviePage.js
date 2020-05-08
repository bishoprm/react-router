import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage() {
  const route_parameters = useParams();
  const [movieData, set_movieData] = useState([]);

  console.log("render", route_parameters.imdb_id);

  useEffect(() => {
    async function fetchData(imdbID) {
      const res = await axios.get(
        `https://omdbapi.com/?i=${imdbID}&apikey=5ffaab21`
      );

      set_movieData(res.data);
      console.log("data", res.data.Title);
      //   console.log("heres some movies", movieData.Title);
    }
    fetchData(route_parameters.imdb_id);
  }, [route_parameters.imdb_id]);

  return (
    <div>
      imdb ID: {route_parameters.imdb_id}
      <h1>{movieData.Title}</h1>
      <p>
        <img src={movieData.Poster} />
      </p>
      <p>{movieData.Plot}</p>
    </div>
  );
}
