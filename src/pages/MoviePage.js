import React from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const route_parameters = useParams();

  return <div>imdb ID: {route_parameters.imdb_id}</div>;
}
