import React from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function PasswordLabel(props) {
  return (
    <label htmlFor="password">
      Password:
      <FontAwesomeIcon
        icon={faCheck}
        className={props.validPwd ? "valid" : "hide"}
      />
      <FontAwesomeIcon
        icon={faTimes}
        className={props.validPwd || !props.pwd ? "hide" : "invalid"}
      />
    </label>
  );
}

export default PasswordLabel;
