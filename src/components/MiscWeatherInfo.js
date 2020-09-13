import React from "react";
import { getDirectionFromDegree, convertToKPH } from "./Helpers";

import "../styling/MiscWeatherInfo.css" 

export function MainWeatherInfo(miscData, unit) {
  return (
    <div className="MiscWeatherInfo"> 
      <h1>Humidity: {miscData.humidity}% </h1>
      <h1>
        Wind: {Math.round(convertToKPH(miscData.windSpeed) * 10) / 10}km/h{" "}
        {getDirectionFromDegree(miscData.windDeg)}
      </h1>
      <h1>Pressure: {miscData.pressure}hPA</h1>
    </div>
  );
}

export default MainWeatherInfo;
