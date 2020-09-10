import React, { Component } from "react";
import { getDate, getMonthFromInt } from "./Helpers.js";

export class RetrievalDate extends Component {
  constructor(props) {
    super(props);
    this.state = { date: getDate() };
  }

  render() {
    return (
      <div>
        {`${getMonthFromInt(this.state.date.month)} ${this.state.date.date}, ${
          this.state.date.year
        }`}
      </div>
    );
  }
}

export default RetrievalDate;
