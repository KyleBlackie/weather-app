import React from "react";
import { convertToCelcius, pickFAIcon } from "./Helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function MainWeatherInfo(mainData, unit) {
  return (
    <div>
      <h1>
        {mainData.city}, {mainData.country}
      </h1>
      <h1>{Math.round(convertToCelcius(mainData.temp) * 10) / 10}°</h1>
      <h1>{mainData.weather}</h1>
      <FontAwesomeIcon
        icon={pickFAIcon(mainData.id)}
        size="lg"
        style={{ fontSize: "10vw" }}
      />
    </div>
  );
}

export default MainWeatherInfo;
