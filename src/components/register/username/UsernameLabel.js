import React from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UsernameLabel(props) {
  return (
    <label htmlFor="username">
      Username:
      <FontAwesomeIcon
        icon={faCheck}
        className={props.validName ? "valid" : "hide"}
      />
      <FontAwesomeIcon
        icon={faTimes}
        className={props.validName || !props.user ? "hide" : "invalid"}
      />
    </label>
  );
}

export default UsernameLabel;
