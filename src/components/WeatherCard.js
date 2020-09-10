import React from "react";
import MainWeatherInfo from "./MainWeatherInfo";
import RetrievalDate from "./RetrievalDate";   

//import "../styling/WeatherCard.css";

export function WeatherCard() {
    return (
      <div>
        <MainWeatherInfo />

        <RetrievalDate />
      </div>
    );
}

export default WeatherCard;
