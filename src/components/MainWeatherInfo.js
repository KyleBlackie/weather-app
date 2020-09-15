import React from "react";
import { convertToCelcius, convertToFahrenheit, pickFAIcon } from "./Helpers";
import { storageAvailable } from "./Helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styling/MainWeatherInfo.css";

export function MainWeatherInfo(props) {

  let useMetric = props.unit === 'm';

  return (
    <div>
      <h1>
        {props.mainData.city}, {props.country}
      </h1>
      <div>
        <h1 style={{ fontSize: "50px" }}>
          {Math.round((useMetric ? convertToCelcius(props.mainData.temp) : convertToFahrenheit(props.mainData.temp)) * 10) / 10}
        </h1>
        <div className="switch-field" onChange={(e) => {
          props.setUnit(e.target.value);
          if (storageAvailable("localStorage"))  localStorage.setItem("unit", e.target.value);
        }}>
          <input type="radio" id="toggle-c" name="toggle" value="m" defaultChecked={props.unit === "m"}></input>
          <label htmlFor="toggle-c">°C</label>
          <span> | </span>
          <input type="radio" id="toggle-f" name="toggle" value="i" defaultChecked={props.unit === "i"}></input>
          <label htmlFor="toggle-f">°F</label>
        </div>
      </div>
      <h4>
        Feels like {Math.round((useMetric ? convertToCelcius(props.mainData.feelsLike) : convertToFahrenheit(props.mainData.feelsLike))* 10) / 10}°
        <br />
        {Math.round(useMetric ? convertToCelcius(props.mainData.tempMin) : convertToFahrenheit(props.mainData.tempMin))} /{" "}
        {Math.round(useMetric ? convertToCelcius(props.mainData.tempMax) : convertToFahrenheit(props.mainData.tempMax))}
      </h4>
      <h1>{props.mainData.weather}</h1>
      <FontAwesomeIcon
        icon={pickFAIcon(props.mainData.id)}
        size="lg"
        style={{ fontSize: "15vh" }}
      />
    </div>
  );
}

export default MainWeatherInfo;
