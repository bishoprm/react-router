import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          path="/pages/DiscoverMoviesPage"
          component={DiscoverMoviesPage}
        />
        <Route path="/pages/AboutPage" component={AboutPage} />
        <Route path="/pages/HomePage" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
