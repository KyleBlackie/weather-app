import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "../styling/Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Your Weather Forecast</h1>
        <SearchBar />
      </div>
    );
  }
}

export default Header;
