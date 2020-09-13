import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export function ErrorMessage({ errorMessage }) {
  return (
    <div>
      <h1>An Error Ocurred</h1>
      <h3>{errorMessage}</h3>
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        size="lg"
        style={{ fontSize: "10vw" }}
      />
    </div>
  );
}

export default ErrorMessage;
