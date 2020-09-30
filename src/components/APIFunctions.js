import { useState, useEffect } from "react";
import { storageAvailable } from "./Helpers";

// uses fetch to request data from OpenWeatherAPI
export const FetchAPIData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorOcurred, setErrorOcurred] = useState(false);
  const [errorMsg, setErrorMsg] = useState("An error ocurred...");

  useEffect(() => {
    // Check if url is empty
    if (!url) return null;

    const getData = async () => {
      setIsLoading(true);
      setErrorOcurred(false);
      try {
        //fetch data asynchronously
        let response = await fetch(url, { mode: "cors" });
        const data = await response.json();
        // check for errors
        if (data.cod !== 200) throw new Error(`${data.cod}: ${data.message}`);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setErrorOcurred(true);
        setErrorMsg(error.message);
        console.log(error);
      }
    };
    getData();
  }, [url, errorMsg]);

  return {
    data,
    isLoading,
    errorOcurred,
    errorMsg,
  };
};

// handles data returned from FetchAPIData
export const GetWeatherData = (query) => {
  // NOTE: Unfortunately, since this project is done without a backend there is no way to properly protect the api key
  //       If this were a full stack app I would have kept the api key secure / hidden on the server side
  const API_KEY = "9cbaa4d848fd26272a434bb68609eace";
  const url =
    query &&
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;

  // fetch data using constructed url
  const { data, isLoading, errorOcurred, errorMsg } = FetchAPIData(url);
  const [mainData, setMainData] = useState(data);
  const [miscData, setMiscData] = useState(data);

  useEffect(() => {
    if (data !== null) {
      // grab needed data ...
      setMainData({
        city: data.name,
        country: data.sys.country,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        id: data.weather[0].id,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
      });

      setMiscData({
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        visibility: data.visibility,
        windDeg: data.wind.deg,
        windSpeed: data.wind.speed,
      });

      // update local storage
      if (storageAvailable("localStorage"))  localStorage.setItem("city", data.name);
    }
  }, [data]);

  return { mainData, miscData, isLoading, errorOcurred, errorMsg };
};
