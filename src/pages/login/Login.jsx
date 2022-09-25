import { useRef, useState } from "react";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <section className="loginContainer">
        <h1>Log in</h1>
        {error && <div className="errmsg">Invalid username or password</div>}
        <form>
          <label htmlFor="username">Username:</label>
          <input
            autoFocus
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button
            onClick={() => setLoginSucces(HandleSubmit)}
            type="button"
            className="buttonFailure"
          >
            Log In
          </button>
        </form>
        <p>
          <br />
          <span className="line">
            <Link to="/register">Register</Link>
          </span>
          <span className="lineHome">
            <Link to="/">Home</Link>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Login;
