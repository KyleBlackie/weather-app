import React, { useState } from "react";
import Header from "./Header";
import MainWeatherInfo from "./MainWeatherInfo";
import MiscWeatherInfo from "./MiscWeatherInfo";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { checkStorage } from "./Helpers";
import { GetWeatherData } from "./APIFunctions";

//import "../styling/WeatherCard.css";

export function WeatherCard() {
  // if local storage is available for the browser then check if previous search data has been recorded
  let search = checkStorage();

  console.log(localStorage.getItem('city'));
  
  // Set state for the selected city name and units being used
  const [city, setCity] = useState(search.city);
  const [unit, setUnit] = useState(search.unit);

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
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
