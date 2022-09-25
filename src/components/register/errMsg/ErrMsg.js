import React from "react";

function ErrMsg(props) {
  return (
    <p
      ref={props.errRef}
      className={props.errMsg ? "errmsg" : "offscreen"}
      aria-live="assertive"
    >
      {props.errMsg}
    </p>
  );
}

export default ErrMsg;
