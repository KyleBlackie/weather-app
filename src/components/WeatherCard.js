import React, { useState } from "react";
import Header from "./Header";
import MainWeatherInfo from "./MainWeatherInfo";
import MiscWeatherInfo from "./MiscWeatherInfo";
import RetrievalDate from "./RetrievalDate";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { GetWeatherData } from "./APIFunctions";

//import "../styling/WeatherCard.css";

export function WeatherCard() {
  // Set state for the selected city name and units being used
  const [city, setCity] = useState("Toronto");
  const [unit, setUnit] = useState("m");

  // Fetch data for selected city
  const {
    mainData,
    miscData,
    isLoading,
    errorOcurred,
    errorMsg,
  } = GetWeatherData(city);

  return (
    <div>
      <Header setCity={setCity} />
      {errorOcurred ? (
        <ErrorMessage errorMessage={errorMsg} />
      ) : isLoading ? (
        <Loading />
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
