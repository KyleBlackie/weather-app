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

// converts from kelvin to celcius
export const convertToCelcius = (tempK) =>  tempK - 273.15;


// converts from kelvin to fahrenheit
export const convertToFahrenheit = (tempK) => tempK * (9/5) - 459.67;

