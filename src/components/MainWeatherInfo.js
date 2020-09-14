import React from "react";
import { convertToCelcius, pickFAIcon } from "./Helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function MainWeatherInfo(mainData, unit) {
  return (
    <div>
      <h1>
        {mainData.city}, {mainData.country}
      </h1>
      <h1 style={{ fontSize: "50px" }}>
        {Math.round(convertToCelcius(mainData.temp) * 10) / 10}°
      </h1>
      <h4>
        Feels like {Math.round(convertToCelcius(mainData.feelsLike) * 10) / 10}°
        <br />
        {Math.round(convertToCelcius(mainData.tempMin))} /{" "}
        {Math.round(convertToCelcius(mainData.tempMax))}
      </h4>
      <h1>{mainData.weather}</h1>
      <FontAwesomeIcon
        icon={pickFAIcon(mainData.id)}
        size="lg"
        style={{ fontSize: "15vh" }}
      />
    </div>
  );
}

export default MainWeatherInfo;
