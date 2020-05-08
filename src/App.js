import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact
          path="/DiscoverMoviesPage"
          component={DiscoverMoviesPage}
        />
        <Route path="/AboutPage" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/DiscoverMoviesPage/:imdb_id" component={MoviePage} />
      </Switch>
    </div>
  );
}

export default App;
