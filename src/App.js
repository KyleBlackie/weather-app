import React from "react";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import "./styling/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherCard />
    </div>
  );
}

export default App;
