import React from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/AboutPage"
              activeStyle={{ fontWeight: "bold", color: "pink" }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/"
              activeStyle={{ fontWeight: "bold", color: "pink" }}
            >
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/DiscoverMoviesPage"
              activeStyle={{ fontWeight: "bold", color: "pink" }}
            >
              Discover Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
