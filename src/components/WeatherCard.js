import React, { Component } from "react";
import MainWeatherInfo from "./MainWeatherInfo";
import RetrievalDate from "./RetrievalDate";

//import "../styling/WeatherCard.css";

export class WeatherCard extends Component {
  render() {
    return (
      <div>
        <MainWeatherInfo />

        <RetrievalDate />
      </div>
    );
  }
}

export default WeatherCard;
