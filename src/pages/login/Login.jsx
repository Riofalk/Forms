import { useRef, useState } from "react";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Twitter } from "@mui/icons-material";
const Login = () => {
  const userRef = useRef();

  const [error, setError] = useState(false);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [loginSuccess, setLoginSucces] = useState(false);

  const HandleSubmit = async (e) => {
    try {
      await axios
        .post(
          "http://localhost:4000/api/login",
          {
            userName: user,
            password: pwd,
          },
          { withCredentials: true }
        )
        .then((res) => {
          return res.status === 201;
        });
    } catch (error) {
      setError(true);
      console.error(error);
    }
    return false;
  };

  return (
    <div className="wrapper">
      <div className="register-left">
        <div className="chirperRegister">
          <Twitter className="logoIcon" />
        </div>
        <div className="register-left-text">
          Find out <br /> what's happening first...
        </div>
      </div>
      <div className="register-right">
        <section className="loginContainer">
          <h1 className="loginHeader">Log in</h1>
          {error && <div className="errmsg">Invalid username or password</div>}
          <form className="loginForm">
            <label className="logingInLabel" htmlFor="username">
              Username:
            </label>
            <input
              className="logingInInput"
              autoFocus
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label className="logingInLabel" htmlFor="password">
              Password:
            </label>
            <input
              className="logingInInput"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button
              onClick={() => setLoginSucces(HandleSubmit)}
              type="button"
              className="logingInButton"
            >
              Log In
            </button>
          </form>
          <p>
            <br />
            <span className="line">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Login;
