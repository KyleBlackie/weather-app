import React from "react";
import SearchBar from "./SearchBar";
import "../styling/Header.css";

export function Header({ setCity }) {
  return (
    <div className="header">
      <h1>Your Weather Forecast</h1>
      <SearchBar setCity={setCity} />
    </div>
  );
}

export default Header;
