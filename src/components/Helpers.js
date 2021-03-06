// Font-awesome Icon Imports
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faSmog } from "@fortawesome/free-solid-svg-icons";

// takes in id given by API and returns a font-awesome icon
export const pickFAIcon = (id) => {
  // return an icon depending on ID given
  switch (parseInt(id / 100)) {
    case 2:
      return faBolt;
    case 3:
    case 5:
      return faCloudShowersHeavy;
    case 6:
      return faSnowflake;
    case 7:
      return faSmog;
    case 8:
      return id === 800 ? faSun : faCloud;
    default:
      return faCloud;
  }
};

// returns the current date
export const getDate = () => {
  let [month, date, year] = new Date().toLocaleDateString().split("/");

  // return an object containing the month, date and year
  return {
    month,
    date,
    year,
  };
};

export const getMonthFromInt = (month) => {
  month = parseInt(month);

  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Error Month Not Available";
  }
};

// given a degree, outputs the direction in common terms i.e. N, NE, E, SE ...
export const getDirectionFromDegree = (degree) => {
  // divide up 360 degrees into 8 parts... 45 degrees for each direction
  if (degree >= 337.5 || degree < 22.5) {
    return "North";
  } else if (degree < 67.5) {
    return "North-East";
  } else if (degree < 112.5) {
    return "East";
  } else if (degree < 157.5) {
    return "South-East";
  } else if (degree < 202.5) {
    return "South";
  } else if (degree < 247.5) {
    return "South-West";
  } else if (degree < 292.5) {
    return "West";
  } else if (degree < 337.5) {
    return "North-West";
  } else {
    return "N/A";
  }
};

/* A Function that detects whether localStorage is both supported and available.
 * This function was provided by the Mozilla MDN web docs for the Web Storage API.
 * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 */
export function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

// checks if there is any personalized search data and returns an object containing search settings
export const checkStorage = () => {
  // if local storage is available for the browser then check if previous search data has been recorded
  let search;
  if (
    storageAvailable("localStorage") &&
    localStorage.getItem("city") &&
    localStorage.getItem("unit")
  ) {
    // use personalized search data
    search = {
      city: localStorage.getItem("city"),
      unit: localStorage.getItem("unit"),
    };
  } else {
    // use default search data
    search = {
      city: "Toronto",
      unit: "m",
    };

    // set local storage values
    localStorage.setItem("city", "Toronto");
    localStorage.setItem("unit", "m");
  }

  return search;
};

// CONVERSION HELPER FUNCTIONS --------------------

// converts from kelvin to celcius
export const convertToCelcius = (tempK) => tempK - 273.15;

// converts from kelvin to fahrenheit
export const convertToFahrenheit = (tempK) => tempK * (9 / 5) - 459.67;

// converts from meter/sec to kilometres per hour
export const convertToKPH = (metresPerSec) => metresPerSec * 3.6;

// converts from meter/sec to miles per hour
export const convertToMPH = (metresPerSec) => metresPerSec * 2.23694;
