import React, { Component } from "react";
import "../styling/SearchBar.css";

export class SearchBar extends Component {
  render() {
    return (
      <div className="searchInputs">
        <input type="text" id="searchInput" placeholder="City Name..."></input>
        <button type="button">Search</button>
      </div>
    );
  }
}

export default SearchBar;
