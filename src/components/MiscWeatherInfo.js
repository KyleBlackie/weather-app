import React from "react";

export function MainWeatherInfo(miscData, unit) {
  return (
    <div>
      <h1>
        Humidity: {miscData.humidity} Wind: {miscData.windSpeed}{" "}
        {miscData.windDeg}
      </h1>
      <h1>
        Visibility: {miscData.visibility} Pressure: {miscData.pressure}
      </h1>
    </div>
  );
}

export default MainWeatherInfo;
