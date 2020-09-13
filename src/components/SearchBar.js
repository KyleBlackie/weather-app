import React, { useState } from "react";
import "../styling/SearchBar.css";

export function SearchBar({setCity}) {
    const [inputCity, setInputCity] = useState('');

    return (
      <form className="searchInputs"
      onSubmit={(e) => {
        // Update city info when user presses search button
        e.preventDefault();
        setCity(inputCity);
      }}>
        <input type="text" id="searchInput" placeholder="City Name..." onChange={(e) => setInputCity(e.target.value)}></input>
        <button type="button">Search</button>
      </form>
    );
}

export default SearchBar;
