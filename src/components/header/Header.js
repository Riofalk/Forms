import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="headerWrapper">
      <div className="left">
        <div className="title">Forms</div>
      </div>
      <div className="right">
        <span className="linkSpan">
          <Link to="/login" className="link">
            Log in
          </Link>
        </span>
        <span className="linkSpan">
          <Link to="/login" className="link">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Header;
