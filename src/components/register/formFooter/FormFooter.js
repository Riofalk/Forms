import React from "react";
import { Link } from "react-router-dom";

function formFooter() {
  return (
    <p>
      <br />
      <span className="line">
        <Link to="/login">Log in</Link>
      </span>
    </p>
  );
}

export default formFooter;
