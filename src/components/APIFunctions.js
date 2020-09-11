import { useState, useEffect } from "react";

export const FetchAPIData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if url is empty
    if (!url) return null;

    const getData = async () => {
      setIsLoading(true);
      try {
        //fetch data asynchronously
        let response = await fetch(url, { mode: "cors" });
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [url]);

  return {
    data,
    isLoading,
  };
};

export const getWeatherData = (query) => {
  // Unfortunately, since this project is done without a backend there is no way to properly protect the api key
  // If this were a full stack app I would've done this logic on the backend so that the api key would be safe
  const API_KEY = "9cbaa4d848fd26272a434bb68609eace";
  const url =
    query &&
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;

  // fetch data using constructed url  
  const {data, isLoading} = FetchAPIData(url);

  if(data !== null) {
    // grab needed data ...
    const mainData = {
        city: data.name,
        country: data.sys.country,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
    };

    const miscData = {
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        visibility: data.visibility,
        windDeg: data.wind.deg,
        windSpeed: data.wind.speed,
    };

    return {mainData, miscData, isLoading};

  }

  return {isLoading};
};
