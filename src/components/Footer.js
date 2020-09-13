import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styling/Footer.css";

export function Footer() {
  return (
    <div className="footer">
      <h1>Kyle Blackie ©2020</h1>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/KyleBlackie"
      >
        <FontAwesomeIcon
          icon={faGithub}
          size="xs"
          style={{
            fontSize: "4vh",
            color: "white",
          }}
        />
      </a>
    </div>
  );
}

export default Footer;
