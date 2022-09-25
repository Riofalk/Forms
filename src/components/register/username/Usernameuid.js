import React from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Usernameuid(props) {
  return (
    <p
      id="uidnote"
      className={
        props.userFocus && props.user && !props.validName
          ? "instructions"
          : "offscreen"
      }
    >
      <FontAwesomeIcon icon={faInfoCircle} />
      4 to 24 characters.
      <br />
      Must begin with a letter.
      <br />
      Letters, numbers, "_", "-" allowed.
    </p>
  );
}

export default Usernameuid;
