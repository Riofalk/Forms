import React from "react";

function SignUpButton(props) {
  return (
    <button
      disabled={
        !props.validName || !props.validPwd || !props.validMatch ? true : false
      }
      className="logingInButton"
    >
      Sign Up
    </button>
  );
}

export default SignUpButton;
