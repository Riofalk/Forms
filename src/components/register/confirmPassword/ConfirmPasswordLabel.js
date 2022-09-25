import React from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ConfirmPasswordLabel(props) {
  return (
    <label className="logingInLabel" htmlFor="confirm_pwd">
      Confirm Password:
      <FontAwesomeIcon
        icon={faCheck}
        className={props.validMatch && props.matchPwd ? "valid" : "hide"}
      />
      <FontAwesomeIcon
        icon={faTimes}
        className={props.validMatch || !props.matchPwd ? "hide" : "invalid"}
      />
    </label>
  );
}

export default ConfirmPasswordLabel;
