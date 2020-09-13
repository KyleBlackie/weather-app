import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Loading() {
  return (
    <div>
      <h1>Data is Loading...</h1>
      <h3>Please Wait</h3>
      <FontAwesomeIcon
        icon={faSpinner}
        size="lg"
        style={{ "font-size": "10vw" }}
        spin
      />
    </div>
  );
}

export default Loading;
