import React from "react";
import { getDirectionFromDegree, convertToKPH, convertToMPH } from "./Helpers";

import "../styling/MiscWeatherInfo.css" 

export function MainWeatherInfo(props) {
  return (
    <div className="MiscWeatherInfo"> 
      <h1>Humidity: {props.miscData.humidity}% </h1>
      <h1>
  Wind: {Math.round((props.unit === 'm' ? convertToKPH(props.miscData.windSpeed) : convertToMPH(props.miscData.windSpeed)) * 10) / 10}{props.unit === 'm' ? `km/h`: `mi/h`}{" "}
        {getDirectionFromDegree(props.miscData.windDeg)}
      </h1>
    </div>
  );
}

export default MainWeatherInfo;
