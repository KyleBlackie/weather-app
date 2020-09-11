import React, { useState } from "react";
import MainWeatherInfo from "./MainWeatherInfo";
import MiscWeatherInfo from "./MiscWeatherInfo";
import RetrievalDate from "./RetrievalDate";
import { getWeatherData } from "./APIFunctions";

//import "../styling/WeatherCard.css";

export function WeatherCard() {
  // Set state for the selected city name and units being used

  const [city, setCity] = useState("Toronto");
  const [unit, setUnit] = useState("m");

  // Fetch data for selected city
  const { mainData, miscData, isLoading } = getWeatherData(city);

  // check if finished loading data
  if (!isLoading) {
    console.log(mainData);
    console.log(miscData);
  }
  /*
    mainData {
        city
        country
        weather
        description
        icon
        temp
        feels_like
        temp_min
        temp_max
    },
    miscData {
        humidity,
        pressure,
        visibility,
        wind.deg,
        wind.speed,
    }, isLoading, hasError, errorMessage
  */

  return (
    <div>
      {isLoading ? (
        <RetrievalDate />
      ) : (
        <div>
          <MainWeatherInfo {...mainData} />
          <MiscWeatherInfo {...miscData} />
          <RetrievalDate />
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
