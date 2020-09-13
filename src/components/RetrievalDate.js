import React, { useState } from "react";
import { getDate, getMonthFromInt } from "./Helpers";

export function RetrievalDate() {
  // Use react hooks to set state
  const [date] = useState(getDate());

  return (
    <div>
      <h1>{`${getMonthFromInt(date.month)} ${date.date}, ${date.year}`} </h1>
    </div>
  );
}

export default RetrievalDate;
