import React from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ConfirmPasswordNote(props) {
  return (
    <p
      id="confirmnote"
      className={
        props.matchFocus && !props.validMatch ? "instructions" : "offscreen"
      }
    >
      <FontAwesomeIcon icon={faInfoCircle} />
      Must match password.
    </p>
  );
}

export default ConfirmPasswordNote;
