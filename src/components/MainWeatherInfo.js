import React from "react";
import {convertToCelcius} from "./Helpers";


export function MainWeatherInfo(mainData, unit) {
  console.log(mainData);
  return (
    <div>
      <h1>{mainData.city}, {mainData.country}</h1>
      <h1>{Math.round(convertToCelcius(mainData.temp)*10)/10}°</h1>
      <h1>{mainData.weather}</h1>
    </div>
  );
}

export default MainWeatherInfo;
