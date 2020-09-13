import React from "react";
import Footer from "./components/Footer";
import WeatherCard from "./components/WeatherCard";
import "./styling/App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard />
      <Footer />
    </div>
  );
}

export default App;
