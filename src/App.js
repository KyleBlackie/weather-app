import React, { Component } from "react";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import "./styling/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WeatherCard />
      </div>
    );
  }
}

export default App;
