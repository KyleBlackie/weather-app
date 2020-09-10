import React, { useState } from "react";
import { getDate, getMonthFromInt } from "./Helpers.js";

export function RetrievalDate() {
  // Use react hooks to set state   
  const [date] = useState(getDate());

    return (
      <div>
        {`${getMonthFromInt(date.month)} ${date.date}, ${
          date.year
        }`}
      </div>
    );
}

export default RetrievalDate;
