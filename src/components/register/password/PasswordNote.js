import React from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PasswordNote(props) {
  return (
    <p
      id="pwdnote"
      className={
        props.pwdFocus && !props.validPwd ? "instructions" : "offscreen"
      }
    >
      <FontAwesomeIcon icon={faInfoCircle} />
      8 to 24 characters.
      <br />
      Must include uppercase and lowercase letters, a number and a special
      character.
      <br />
      Allowed special characters: <span aria-label="exclamation mark">
        !
      </span>{" "}
      <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>{" "}
      <span aria-label="dollar sign">$</span>{" "}
      <span aria-label="percent">%</span>
    </p>
  );
}

export default PasswordNote;
